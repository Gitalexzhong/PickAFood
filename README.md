# PickAFood
A full stack voting system to choose where to eat 


## Setup 
To set up the code for your own usage you will need to replace the default API key used in the "api.key" file. Replace the file with the following code. 

```
google-api-key: <api key value>
```

A link to registering for the google maps api can be found here:
https://developers.google.com/maps


# Frontend
The front end will be built on top of the react framework, it will be created as a interactive screen which will have different layouts for each step.

## Join / Create screen 
- [ ] Join a vote using a 4 digit code 
- [ ] Create a vote using a 4 digit code 
- [ ] Start the simultaneous voting system  

## Voting screen 
- [ ] Choose a selection of options 
  - [ ] Restaurants 
  - [ ] Cuisine Preference
  - [ ] Distance  
  - [ ] Rating 
  - [ ] Etc.

## Results screen 
- [ ] Show a selection of restaurants  
- [ ] Contains link to google maps 

# Backend 
The backend will be based on python and the google place's API. It will be able to generate a result through a web server and will be setup to run through http process. 

## Join / Create backend 
- [ ] Create new vote instance 
- [ ] Generate a new instance code 
- [ ] Allow a user to join using code 
- [ ] Accept request to start the voting round 

## Voting screen 
- [ ] Provide from a database of options  
  - [ ] Restaurants 
  - [ ] Cuisine Preference
  - [ ] Distance  
  - [ ] Rating 
  - [ ] Etc
- [ ] Generate a query based on best result to send to google place API 
- [ ] Store result in a database
## Results screen 
- [ ] Show a single restaurant
- [ ] Accept option to get next result
- [ ] Send data to show result on front end 