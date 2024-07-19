import discord
import os
import requests
import json
import random

client = discord.Client()

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.content.startswith('$strava'):
        strava_user_id = 'your_strava_user_id'
        access_token = 'your_strava_access_token'
        headers = {'Authorization': 'Bearer ' + access_token}
        endpoint = f'https://www.strava.com/api/v3/athletes/{strava_user_id}/activities'
        response = requests.get(endpoint, headers=headers)
        activities = json.loads(response.text)
        random_activity = random.choice(activities)
        activity_name = random_activity['name']
        activity_distance = round(random_activity['distance'] / 1000, 2)
        activity_type = random_activity['type']
        activity_date = random_activity['start_date_local']
        activity_link = f'https://www.strava.com/activities/{random_activity["id"]}'
        await message.channel.send(f'Random activity from {strava_user_id}: {activity_name} ({activity_distance} km) - {activity_type} on {activity_date}\n{activity_link}')

client.run('your_discord_bot_token')
