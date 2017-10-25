# FileHub 
File database to allow users to Upload, View, Download, and Comment on files. Written in React with Semantic-UI.

# Common Developer Requirements
1. Install Git in order to clone this repository and eventually commit any changes you may make

  _OSX_
    1. Install Brew at https://brew.sh
    2. Run `brew install git` in your favorite terminal
    
  _Linux_
    1. Open your favorite terminal and make sure git is installed
    2. If it is not, use your distro's package manager to install it
    
  _Windows_
    1. After enabling the Linux subsystem (Google it), check that git is installed
    2. If it is not, `apt-get install git` should be sufficient to get it installed
2. Install some UNIX compatible editor (e.g.) Sublime Text, Vscode, Atom, vim, etc.


# Front-End Testing and Development

## Choosing your Front-End developer environment
FileHub is built primarily upon JavaScript and related toolings. 
In theory these are multi-platform, however, you will find a much easier workflow while using them in UNIX-like environments.
If using Windows, I __highly__ recommend using the Ubuntu Subsystem that provides you with a Linux Bash terminal.

### Installation    
1. Install Node and npm in order to install dependencies, compile/transpile react, and run our server
  
  _OSX_
    1. After installing Brew, Open your favorite terminal and run `brew install node`
    2. Check that it is installed with `node -v`. This should return a version number in your terminal
  
  _Linux_
    1. Open your favorite terminal and install using this [reference](https://nodejs.org/en/download/package-manager/)
    2. Check that it is installed with `node -v`. This should return a version number in your terminal
    
  _Windows_
    1. In Bash, run `curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -` then `sudo apt-get install -y nodejs`
    2. Check that it is installed with `node -v`
    
2. Clone this repository
  1. In your favorite terminal, navigate to whatever directory you want to store this repo in
  2. Run `git clone https://github.com/cephalization/filehub`
  
3. Install package dependencies
  1. In your favorite terminal, navigate into the newly cloned filehub directory
  2. Run `npm install`. This should download a bunch of packages in the node_modules folder. __Make sure this exists__
  
From this point on, there should not be any platform disparities as far as development goes.

### Application Debugging
All of these steps should be completed in the root of the `filehub` directory

1. cd to the filehub root directory and run `npm install`.
2. Run `npm start`. This will open a browser with the front-end loaded. It will refresh whenever changes are saved to any react related file.
3. Connect to http://localhost:3000/ in your favorite browser if it is not open already

If changes are made to any react files, the site will automatically refresh.

### Application Testing
To test a production-optimized version of the application, run the following commands.
1. cd to the filehub root directory and run 'npm install'.
2. build the latest front-end with `npm run build`
3. Wait until server software is developed to serve prod files

Use the __Application Debugging__ steps above while developing for an easier experience.
Do not do any performance testing on debug builds.

# API Server Testing and Development

## Choosing your back-end developer environment
Filehub's REST API is built on Python 3.x with Flask.
I (cephalization) have no experience developing python on Windows so these instructions will be unsupported.
Proceed at your own risk with non-UNIX environments.

### Installation
1. Install the python package manager 'pip'

   _OSX_
    1. Run `sudo easy_install pip` in your terminal
    2. Check that it is installed with `python --version`. This should return a version number in your terminal
  
  _Linux_
    1. Follow your distribution specific instructions, package managers have different instructions

2. Install virtualenv to create a project-specific python environment

  _OSX_
    1. Run `sudo pip install virtualenv` in your terminal

  _Linux_
    1. Follow your distribution specific instructions, package managers have different instructions

3. Setup virtualenv and install required python packages

_UNIX_
    1. cd to the `api_server` directory
    2. Run `./setup_virtualenv.sh` and allow downloads to finish

You now have a configured virtual environment to debug the API with.
When you want to stop debugging for the api either exit your terminal or run `deactivate`.

To start debugging again run `source .env/bin/activate` in the `api_server` directory. 
### This is necessary to run an instance of the api
