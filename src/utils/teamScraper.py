import json
import requests
import os
from dotenv import load_dotenv
from collections import Counter

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
        "and": [
            {
                "property": "Status",
                "select": {
                    "equals": "Current Member",
                }
            },
            {
                "property": "Team",
                "multi_select": {
                    "does_not_contain": "Hiatus"
                }
            }
        ]
    },
}
eboard = set(["Executive Director", "E-Board Liason", "Technical Director",
             "UX Director", "Marketing Director", "Operations Director"])
head_ofs = set(["Head of Recruiting", "Head of UX",
               "Head of Project Acquisition"])
output_file = "src/content/team/team.json"



def get_members_from_notion():
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
    social_media_filtered = {k: v for k, v in social_media.items() if v is not None}

    return {
        "name": name,
        "team": {
            "name": team_name,
            "role": role,
        },
        "profileImage": "" if email is None else './profileImages/' + ''.join([name.capitalize() for name in email[0: email.index('@')].split('.')]) + ".jpg",
        "socialMedia": social_media_filtered
    }


def generate_team_mappings(roles, teams):
    teamToRole = {}
    for role in roles:
        if role in eboard:
            teamToRole["E-Board"] = role
        elif role in head_ofs:
            teamToRole["Head Ofs"] = role

    non_leadership_teams = list(filter(lambda team: team not in set(
        ["E-Board", "Head Ofs"]), teams))
    non_leadership_roles = list(filter(lambda role: role not in eboard.union(
        head_ofs).union(set(["New Member"])), roles))
    for team in non_leadership_teams:
        if len(non_leadership_roles) != 0:
            teamToRole[team] = non_leadership_roles[0]

    return teamToRole



if __name__ == '__main__':
    results = get_members_from_notion()
    members = []
    teams_count = {}

    for person in results:
        properties = person["properties"]
        name = properties["Name"]["title"][0]["plain_text"]
        teams = map(lambda team: team["name"], properties["Team"]["multi_select"])
        roles = map(lambda role: role["name"], properties["Role"]["multi_select"])
        linkedin, portfolio, email = properties["LinkedIn"]["url"], properties[
            "Portfolio"]["url"], properties["Email"]["email"]

        teamToRole = generate_team_mappings(list(roles), list(teams))
        for team, role in teamToRole.items():
            if team not in teams_count:
                teams_count[team] = 1
            else: 
                teams_count[team] += 1
            members.append(make_person(name, team, role,
                        linkedin, portfolio, email))
    members.sort(key=lambda member: member["team"]["name"])

    print(f"Scraped {len(results)} members")
    print(f"Scraped {len(teams_count)} teams")
    for team, count in teams_count.items():
        print(f"{team} has {count} members")

    with open(output_file, "w") as teamFile:
        json.dump({"members": members}, teamFile, indent=2)