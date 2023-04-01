# Apple-music-token-generator-nodejs


## Getting Started

These instructions supplement the information found in the Get Started section of the Apple Music API Reference documents.

First, you must follow the instructions at [Apple Music API Reference](https://developer.apple.com/library/content/documentation/NetworkingInternetWeb/Conceptual/AppleMusicWebServicesReference/SetUpWebServices.html#//apple_ref/doc/uid/TP40017625-CH2-SW1)

Next, follow the instructions below to help create your developer token in the JSON Web Token format.


## Prerequisites

A developer machine running macOS Sierra (10.12.5)
You will need to run Terminal and have root access, or can run sudo
After following the instructions at the URL above, you should now have 3 pieces of data:

- a MusicKit private key in a *.p8 file
- a 10-digit key identifier in your Apple Developer account
- your 10-digit Apple Developer Account Team ID


## Installing and Running in Node

### System requirements
Ensure you have a current version of Node and npm running on your system.

### Installation
Download the repo and run ```npm install``` in the project directory to install dependancies.

### Configuration
The project contains index.js file in which you can replace your keyId and TeamId.
And paste your .p8 key inside private.p8

### Running
There are two ways of using the Node create_token.js package:

In the project directory, run ```npm start```.


## Authors

* **Anonymous Apple Marketing Guy** - *Initial work* - [Anonymous]
* **Saurabh Gupta** - *First Commit* 

