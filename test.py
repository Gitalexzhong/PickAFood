

import json
import requests
# r =requests.get('https://xkcd.com/1906/')
# print(r.status_code)
# print(r.content)

# print("h")

f = open("api.key", "r")
d = f.read()
print(type(d))
res = json.loads(d)

print(str(res))
print(res['Google-maps-API-key'])

# r = requests.get(f"""https://maps.googleapis.com/maps/api/place/findplacefromtext/json
#     ?fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry
#     &input=mongolian
#     &inputtype=textquery
#     &locationbias=circle%3A2000%4047.6918452%2C-122.2226413
#     &key={res['Google-maps-API-key']}""")

# print(r.content)

import requests

# url = f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&locationbias=circle%3A2000%4047.6918452%2C-122.2226413&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key={str(res['Google-maps-API-key'])}"

# payload={}
# headers = {}

# response = requests.request("GET", url, headers=headers, data=payload)

# print(response.text)

# import requests

url = f"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key={str(res['Google-maps-API-key'])}"

payload={}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
