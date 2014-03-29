## Purpose

The idea is show how the AngularJS can consume a webservice through WCF (Windows Conmunication Foundation) which is a tool often used to implement and deploy a SOA. 

This software is for academic proposal

## Stack

* ServerSide: C# - Consuming webServices through WCF 
* ClientSide [AngularJS](http://www.angularjs.org/) on the client
* CSS based on [Foundation - Zurb](http://foundation.zurb.com/)

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/)
* Install Grunt-CLI as global npm modules:

    ```
    npm install -g grunt-cli
    ```

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/diegofss11/find-concerts.git
cd find-concerts
```

### App Server

Our backend application server is a NodeJS application that relies upon some 3rd Party npm packages.  You need to install these:

* Install local dependencies (from the project root folder):

    ```
    cd server
    npm install
    cd ..
    ```

  (This will install the dependencies declared in the server/package.json file)

### Client App

Our client application is a straight HTML/Javascript application but our development process uses a Node.js build tool
[Grunt.js](gruntjs.com). Grunt relies upon some 3rd party libraries that we need to install as local dependencies using npm.

* Install local dependencies (from the project root folder):

    ```
    cd client
    npm install
    cd ..
    ```

  (This will install the dependencies declared in the client/package.json file)
  
* To run the project in grunt server you must run inside the root folder:
    ```
    grunt
    ```

Doing this the project will be avaiable in localhost:9001

  
STILL ON GOING ...
