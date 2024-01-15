import time
import json
import requests
import shutil
import os
from collections import defaultdict
from dotenv import load_dotenv

load_dotenv()

database_id = os.environ.get('NOTION_DB_ID')
url = f"https://api.notion.com/v1/databases/{database_id}/query"
headers = {
    "accept": "application/json",
    "Notion-Version": "2022-06-28",
    "Authorization": os.environ.get('NOTION_TOKEN')
}
query = {
    "filter": {
        "property": "Status",
        "select": {
            "equals": "Current Member"
        }
    }
}

eboard_roles = set(["Executive Director", "Technical Director", "Design Director",
                    "Operations Director", "Marketing & Events Director", "E-Board Liaison"])
eboard_roles_order = {"Executive Director": 0, "Technical Director": 1, "Design Director": 2,
                      "Operations Director": 3, "Marketing & Events Director": 4, "E-Board Liaison": 5}
head_of_roles = set(["Head of Recruiting", "Head of Developer Experience", "Head of Designer Experience",
                      "Head of Brand", "Head of Project Acquisition", "Head of Community"])
head_of_roles_order = {"Head of Recruiting": 0, "Head of Developer Experience": 1, "Head of Designer Experience": 2,
                       "Head of Brand": 3, "Head of Project Acquisition": 4, "Head of Community": 5}
brand_roles_order = {"Head of Brand": 0, "Brand Designer": 1}
project_teams = set(["Faculty Activity Tracker", "GraduateNU",
                    "HappyEastie", "MFA", "SearchNEU", "SGA Tooling", "Brain Game Center", "Platform", "Pasta Zaddy Charles"])
project_team_member_order = {"Project Lead": 0, "Design Lead": 1, "Technical Lead": 2,
                             "Designer": 3, "Developer": 4}
team_order = ["E-Board", "Head Ofs", "Brand",
              "Faculty Activity Tracker", "GraduateNU", "HappyEastie", "MFA", "ScoutTrek", "SearchNEU", "SGA Tooling", "Platform", "Pasta Zaddy Charles", "Brain Game Center"]
output_file = "../content/team/team.json"


def get_current_members_from_notion():
    print("Retrieving current members from Notion Club Directory")
    response = requests.post(url, headers=headers, json=query)
    data = response.json()
    results = data["results"]
    return results


def make_person(name, team_name, role, linkedin, portfolio, email):
    social_media = {
        "email": email or None,
        "linkedIn": linkedin or None,
        "portfolio": portfolio or None
    }
    social_media_filtered = {k: v for k,
                             v in social_media.items() if v is not None}

    return {
        "name": name,
        "team": {
            "name": team_name,
            "role": role,
        },
        "profileImage": f"./profileImages/SP23/{name}.png",
        "socialMedia": social_media_filtered
    }


def generate_team_mappings(roles, teams):
    team_to_role = {}
    for role in roles:
        if role in eboard_roles:
            team_to_role["E-Board"] = role
        elif role in head_of_roles:
            team_to_role["Head Ofs"] = role
        if role == "Head of Brand":
            team_to_role["Brand"] = role
        
    non_leadership_teams = list(filter(lambda team: team not in set(
        ["E-Board", "Head Ofs"]), teams))
    non_leadership_roles = list(filter(lambda role: role not in eboard_roles.union(
        head_of_roles).union(set(["New Member"])), roles))
    for team in non_leadership_teams:
        if len(non_leadership_roles) != 0:
            team_to_role[team] = non_leadership_roles[0]

    return team_to_role


def get_linkedin(properties):
    return properties.get("LinkedIn", {}).get("url", "")


def get_portfolio(properties):
    return properties.get("Portfolio or Personal Website", {}).get("url", "")


def get_email(properties):
    return properties.get("Email", {}).get("email", "")


def download_member_headshot(person, name):
    files = person.get("properties", {}).get(
        "Profile Pic", {}).get("files", [])
    if not files:
        print(f"No member headshot found for {name}")
        return

    print(f"Downloading member headshot for {name}")
    image_name = "../content/team/profileImages/SP23/" + name + ".png"
    signed_s3_url = files[0]["file"]["url"]
    response = requests.get(signed_s3_url, stream=True)
    with open(image_name, 'wb') as out_file:
        shutil.copyfileobj(response.raw, out_file)


def get_final_members_list(teams_to_members):
    members = []
    for team in team_order:
        team_member_list = teams_to_members[team]
        if team in project_teams:
            team_member_list.sort(
                key=lambda member: project_team_member_order[member["team"]["role"]]
            )
        elif team == "E-Board":
            team_member_list.sort(
                key=lambda member: eboard_roles_order[member["team"]["role"]]
            ) 
        elif team == "Head Ofs":
            team_member_list.sort(
                key=lambda member: head_of_roles_order[member["team"]["role"]]
            )
        elif team == "Brand":
            team_member_list.sort(
                key=lambda member: brand_roles_order[member["team"]["role"]]
            )
        members.extend(team_member_list)
    return members


if __name__ == '__main__':
    start_time = time.time()

    results = get_current_members_from_notion()
    members = []
    teams_to_members = defaultdict(list)
    teams_count = {}

    for person in results:
        properties = person["properties"]
        name = properties["Name"]["title"][0]["plain_text"]
        print(f"Processing {name}")
        teams = map(lambda team: team["name"],
                    properties["Team"]["multi_select"])
        roles = map(lambda role: role["name"],
                    properties["Role"]["multi_select"])

        linkedin = get_linkedin(properties)
        portfolio = get_portfolio(properties)
        if portfolio and portfolio[0:8] != "https://":
            portfolio = "https://" + portfolio
        email = get_email(properties)

        team_to_role = generate_team_mappings(list(roles), list(teams))
        for team, role in team_to_role.items():
            if team not in teams_count:
                teams_count[team] = 1
            else:
                teams_count[team] += 1

            teams_to_members[team].append(make_person(
                name, team, role, linkedin, portfolio, email))

        download_member_headshot(person, name)

    members = get_final_members_list(teams_to_members)

    print(f"Scraped {len(results)} members")
    print(f"Scraped {len(teams_count)} teams")
    for team, count in teams_count.items():
        print(f"{team} has {count} members")

    with open(output_file, "w") as teamFile:
        json.dump({"members": members}, teamFile, indent=2)

    end_time = time.time()
    print(f"Script took {end_time - start_time} seconds to run")
