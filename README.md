# Ng-Notes-API

Server API for [Ng-Notes](https://github.com/Zdamian/ng-notes) client single page application

# Setup environment

## Global *npm* dependencies

If you are working on Windows you need to install `nodemon` package globally
```bash
>> npm install nodemon -g
```

## MongoDB

API uses MongoDB as a database. Before running server be sure you have installed and running MongoDB. For more info go here [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)

## Cloning repo and run server API

To clone this repo and run API simply run the following commands
```bash
>> git clone git@github.com:Zdamian/ng-notes-api.git
>> cd ng-notes-api
>> npm install
>> npm run loaddata
>> nodemon
```
After `npm run loaddata` you should press `Ctrl+C` to exit and then run `nodemon`

