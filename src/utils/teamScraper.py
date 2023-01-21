import json
import requests
import os
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
            "linkedIn": ""
        }

    }


members = []

for person in results:
    properties = person["properties"]
    print(properties["Name"]["title"])
    name = properties["Name"]["title"][0]["plain_text"]
    print(properties["Team"]["multi_select"])
    teams = map(lambda team: team["name"], properties["Team"]["multi_select"])
    for team in teams:
        members.append(make_empty_person(name, team))


script_dir = os.path.dirname(__file__)  # <-- absolute dir the script is in
output_file_name = "jsonStuff.json"
abs_file_path = os.path.join(script_dir, output_file_name)

with open(abs_file_path, "w") as teamFile:
    json.dump({"members": members}, teamFile, indent=2)