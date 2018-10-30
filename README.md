# Mic.ro front-end UX

Working example can be seen
[here](https://micro-ux.herokuapp.com/).
*Note that Heroku takes a bit to warm up as it likes to sleep most of the time.*

## Overview

This is the interface and the main entry point for this URL shortening service.

## Design

Build using React, this interface communicates with the the micro-api backend.
It allows the user to enter any valid url then returns a shorted version (slug).
Valid user input is URL encoded then sent as a POST request to [micro-api](https://github.com/microslug/micro-api)
Redux is used to keep state of the application and present a user with links
and option to copy links to clipboard.

## Usage

```
git clone https://github.com/microslug/micro-ux.git
npm install
npm start
```

By default this app will try to connect to the local instance of [micro-api](https://github.com/microslug/micro-api)
If you like to test against the Heroku instance you can change it in the .env file.
```
REACT_APP_API_HOST=https://micro-api.herokuapp.com
#REACT_APP_API_HOST=http://microapi:8888
```
