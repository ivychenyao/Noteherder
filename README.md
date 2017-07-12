# Noteherder

/             => if signed in
                 => /notes
              => if signed out
                 => /sign-in

/sign-in      => SignIn
/notes        => Main
/notes/423547 => Main with a specific note loaded

## Getting started

Copy `src/base.example.js` to `src/base.js` and fill in your Firebase config details.

Run `yarn install` (or `npm install`) and `yarn start` (or `npm start`)