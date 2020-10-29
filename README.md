# Workout-Tracker

![License: MIT](https://img.shields.io/badge/license-MIT%20License-blue.svg) </br>
![badge: Made With-JavaScript](https://img.shields.io/badge/Made%20With-JavaScript-Yellow) ![badge: Made With-CSS3](https://img.shields.io/badge/Made%20With-CSS3-Yellow) ![badge: Made With-HTML5](https://img.shields.io/badge/Made%20With-HTML5-Yellow) </br>
![badge: Uses-mongoDB](https://img.shields.io/badge/Uses-mongoDB-red) ![badge: Uses-mongoose](https://img.shields.io/badge/Uses-mongoose-red) ![badge: Uses-morgan](https://img.shields.io/badge/Uses-morgan-orange) ![badge: Uses-Canvas](https://img.shields.io/badge/Uses-Canvas-orange) ![badge: Uses-Node.JS](https://img.shields.io/badge/Uses-Node.JS-orange)</br>

This Heroku DB application wil create a workout tracker with MongoDB, Node.JS, Express, and Mongoose. (It is designed via the MVC design pattern)

## Table of Contents
[Deployed Application](https://github.com/Rogers-Development-Services/Workout-Tracker#deployed-application)

[Installation](https://github.com/Rogers-Development-Services/Workout-Tracker#installation)

[Usage](https://github.com/Rogers-Development-Services/Workout-Tracker#usage)

[Screenshots](https://github.com/Rogers-Development-Services/Workout-Tracker#screenshots)

[Testing](https://github.com/Rogers-Development-Services/Workout-Tracker#testing)

[Future Updates](https://github.com/Rogers-Development-Services/Workout-Tracker#future-updates)

[Questions](https://github.com/Rogers-Development-Services/Workout-Tracker#questions)

[Credits](https://github.com/Rogers-Development-Services/Workout-Tracker#credits)

[License](https://github.com/Rogers-Development-Services/Workout-Tracker#license)

## Deployed Application

Here is the [deployed application](https://secret-spire-56494.herokuapp.com/).

## Installation

Download this package, open your command line interface and run npm install. This should install the following dependencies aswell: Express, mongoose, path, and morgan. If for some reason, you need to install the dependencies individually run npm install "dependency_name".

Next run the following command to install the app: 

```bash
npm install 
```

```bash
npm install express
```

Note: This app is run on a Heroku server, it is not necessary to download.

## Usage 

If you have downloaded the repository and have cloned the package to your machine, and have installed all dependencies, begin by typing "npm run watch". 

```bash
npm run watch 
```

When you start the application, you will only be given the option to add a new workout. When you click on the green button you'll be promopted to add a workout type of resistance or cardio. Then you'll be able to fill in the details of your workout routine and have the otion to either add the exercise or complete it. If you choose to add the exercise, it will be added to your current workout and the total weight and duration of every exercise will be added together and displayed on your fitness tracker dashboard.

Similarly, if you choose to continue your current workout by pressing the blue button on the dashboard you will be given the same options to either complete the exercise you're currently working towards or add a new exercise for your current workout.

Lastly, you can see the combined information of your total workouts this week by clicking on the Dashboard link in the upper left hand corner.

Note: When adding and completing exercises on Heroku, you may experience some lag time before being alerted that your exercise has successfully been added.

### Screenshots

![Deployed Application1](https://user-images.githubusercontent.com/38272211/97619105-09ee2180-19dd-11eb-8ba9-b8fda290c0e7.JPG)

![Deployed Application](https://user-images.githubusercontent.com/38272211/97612929-4453c080-19d5-11eb-8474-c7a4891e46b7.JPG)

## Testing

Testing Instructions: Currently, there are no written tests for this application, but if you wish to write your, change the scripts property in package json file.

```bash
npm install jest
```

```bash
npm test
```

## Future Updates
This application is a work in progress, future updates will include: 
1. Set up Database with two collections for exercises and workouts refrencing them together using mongoose's .populate() method.

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: 
[Rogers-Development-Services](https://www.github.com/Rogers-Development-Services) | [Portfolio](https://rogers-development-services.github.io/Portfolio/index.html)


Email: 
[matthew.shane.rogers@gmail.com](matthew.shane.rogers@gmail.com)

## Credits

Code template provided by Trilogy Education 

Thanks to [Plover Brown](https://github.com/rebgrasshopper), [Mando Estrada](https://github.com/Mando619), and [Chris Stead](https://github.com/cmstead) for troubleshooting and debugging assistance.

## Licenses
Licensed under the MIT License lincense.