# My Personal Portfolio ☁️

[![Site preview](/src/Assets/website-preview-light.png)](https://the1don1.github.io/my-portfolio/)

## Tools 📋
☁︎ [<b>GitHub Pages</b>](https://create-react-app.dev/docs/deployment/#github-pages) - To host my portfolio \
☁︎ [<b>Framer Motion</b>](https://www.framer.com/motion/) - For animation control\
☁︎ [<b>NPM</b>](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) - npm as the package manager\
☁︎ [<b>React</b>](https://react.dev) - react.js as the framework


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project was built and inspired by [soumyajit4419](https://github.com/soumyajit4419/Portfolio)

# Install and deploy
## Pre-requisites

    npm@10.4.0
    node@21.4.0
    git@2.43.0.windows.1

From the command clone this repository using:
```bash
#cloning my-portfolio
$ git clone https://github.com/Mathenda/my-portfolio.git

#move into root
$cd my-portfolio

#Remove current origin repository
$git remote remove origin
#used to remove the link to the original repository.
#When a repository is cloned, Git automatically creates a remote connection called "origin" that points to the original repository.
#This command removes that connection. #This is done to add your own remote repository and push your changes there, instead of pushing them to the original repository.
```
Using NPM: Simply run the below commands.

```bash
# 2024 Update - Fix Dependencies
$ npm audit fix

# Install dependencies
$ npm install

# Start the development server
$ npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
