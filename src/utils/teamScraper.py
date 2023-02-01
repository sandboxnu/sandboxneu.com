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
response = requests.post(url, headers=headers, json=query)
data = response.json()
results = data["results"]


def make_empty_person(name, team_name):
    return {
        "name": name,
        "team": {
            "name": team_name,
            "role": "",
        },
        "profileImage": "",
        "socialMedia": {
            "email": "",
            "linkedIn": "",
            "portfolio": ""
        }

    }


members = []
teams_count = {}

for person in results:
    properties = person["properties"]
    name = properties["Name"]["title"][0]["plain_text"]
    teams = map(lambda team: team["name"], properties["Team"]["multi_select"])
    for team in teams:
        if team not in teams_count:
            teams_count[team] = 1
        else:
            teams_count[team] += 1
        members.append(make_empty_person(name, team))

members.sort(key=lambda member: member["team"]["name"])
print(f"Succesfully scraped {len(results)} members from Notion.")
print(f"Added {len(teams_count)} teams.")
for team in teams_count:
    print(f"{team} has {teams_count[team]} members.")

output_file = "src/content/team/team.json"

with open(output_file, "w") as teamFile:
    json.dump({"members": members}, teamFile, indent=2)