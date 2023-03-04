# Geeky Business
Front-end development and UX design

## Introduction
This is a UI design + development project, to present a [single-elimination bracket](https://en.wikipedia.org/wiki/Single-elimination_tournament) tournament from a given data set, using tools and technologies of my choice.

## Project links
* [**Code repository**](https://github.com/hbabuka/geeky-business) on Github.
* UI design and design system in [**Figma**](https://www.figma.com/file/o7MZ1Jl0SH47wAOfhjVJzS/Geeky-Business?node-id=3%3A3&t=KWHsCrYocX4mR5ul-1).
* [**Live demo**](https://geeky-business.netlify.app/) deployed on Netlify.

<details>
    <summary><em>Note: if you don't have a Figma account, don't forget to use the menu in the top left corner to navigate to different pages of the file</em></summary>
<img width="220" alt="Screenshot 2023-03-03 at 18 19 42" src="https://user-images.githubusercontent.com/53868474/222785862-a828b1f3-cb61-4657-ada1-b7c0b89658f7.png">
</details>

## Implementation details
### Technologies
The following technologies are used for the implementation of the project:
* [React 18.2.0](https://reactjs.org/)
* [Typescript 4.9.5](https://www.typescriptlang.org/)
* [Tailwind CSS 3.2.4](https://tailwindcss.com/)
* [Redux 4.2.0](https://redux.js.org/)

### Setup
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Prerequisites
[Node and npm](https://nodejs.org/en/download/) are installed. Here are the versions I used while implementing this project:
```
$ node --version
v16.18.0

$ npm --version
8.19.2
```
Git is installed. Here's the version I used while implementing this project:
```
$ git --version
git version 2.37.1
```

#### Local development environment
1. Clone remote repository:
```
https://github.com/hbabuka/geekt-business.git
```
and change directory to your local project folder by using
```
$ cd ../<your-folder>
```
2. Install all required dependencies locally by executing:
```
$ npm install
```
3. Run the app in development mode, by running
```
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Folders and files structure
All components are placed in a separate folder `components` and then they are also hierarchically structured inside this folder. Every component has its own `.tsx` file which contains the `HTML` and the `JS` code and a separate `.scss` file where all styles related to this component are written. These are implemented as `Sass Partials` and contain little snippets of SCSS that I include in the main `styles.scss` file. This way I modularize my CSS and help keep things easier to maintain. Moreover, I keep a separate `SCSS` file where I keep all my styling variables, mixins and media queries organized and I import it whenever I need them. In the `utils.ts` file I keep some utility functions that I thought may be reused later in the project or I thought they should be extracted separately. The project structure looks as follows:
```
.
└── root
    ├── public
    ├── src
    │   ├── @types
    │   │   └── assets
    │   │       └── index.d.ts
    │   ├── App.tsx
    │   ├── api.ts
    │   ├── assets
    │   ├── components
    │   │   ├── Breadcrumb.tsx
    │   │   ├── Footer.tsx
    │   │   ├── GalleryImageModal.tsx
    │   │   ├── Game.tsx
    │   │   ├── GameDetails.tsx
    │   │   ├── GameDetailsIntro.tsx
    │   │   ├── GameScreenshots.tsx
    │   │   ├── GamesSection.tsx
    │   │   ├── HeroSection.tsx
    │   │   ├── ImagePlaceholder.tsx
    │   │   ├── Nav.tsx
    │   │   ├── PreviewModal.tsx
    │   │   └── Spinner.tsx
    │   ├── constants.tsx
    │   ├── index.css
    │   ├── index.tsx
    │   ├── pages
    │   │   ├── GameDetailsPage.tsx
    │   │   └── HomePage.tsx
    │   ├── redux
    │   │   ├── actions
    │   │   │   ├── detailsAction.ts
    │   │   │   ├── gamesAction.ts
    │   │   │   └── searchInputAction.ts
    │   │   └── reducers
    │   │       ├── detailsReducer.ts
    │   │       ├── gamesReducer.ts
    │   │       └── searchInputReducer.ts
    │   └── utils.ts
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json   
```

## Design description
### UX concept
The design decisions for this project are, of course, centered around the single-elimination bracket and the way the teams, matches and scores are presented. There was no other way than to go with simplistic approach, where I chose a horizontal bracket model for web screens and vertical model for smaller screens i.e. mobile devices. This was only logical given their proportional similarities.

Even though this is a very simple task, I took the Atomic [Design approach](https://bradfrost.com/blog/post/atomic-web-design/) to create a small design system for the project. Working this way, always helps me organize my design and development environment in the best possible way, but it also opens a lot of space for the project to grow organically into a scallable project. Therefore, I started with the smallest - the atoms - represented by the team information, such as id, name, picture etc. With those I built the `Team` component as a molecule that turned out to be the base building block in my application. Combining two teams, I created the `Match` component as an organism that will finally be a part of the `Round` component. The latest serves as a template for me to build the whole user interface.

I would point out the following design decisions I made for this task:
* Style wise, I went with a full linear and flat design, which I thought was more suitable for the domain.
* I primarily chose to implement the design in a dark theme because that way it looks more like it is part of a game or an entertainment app.
* I chose a simple representation of the teams and matches, where there the winner of each match is subtly highlighted. This will enhance the user experience in reading the information more easily.
* I added a highlight for the champion of the tournament as well, where the user can immediately recognize who the overall winner is and what was his path to the throne like.

### Figma
The designs are completely made using Figma. I created a mini design system with style guide and component set. You can find the following pages inside the Figma file:
#### Style guide
Mainly focused on typography and color palette for both dark and light theme.
![Style Guide bracket](https://user-images.githubusercontent.com/53868474/190924039-3c7ed5c0-5173-45d8-972b-a7d09826054a.png)
#### Components
Designed the same way as they are later implemented. All components contain both light and dark variant, but I decided to implement the dark theme so far. In design and implementation, I used the following components:
* Team
* Match
* Bracket lines
* Round
#### Design and layout analyses
Includes an analysis of the layout and how it can be implemented, taking into consideration a model with more teams and rounds. Also, I added the initial sketches I did during the concept phase of the project.
![bracket sketch](https://user-images.githubusercontent.com/53868474/190924141-e6969eab-c818-4d60-8ab4-18ce0b3a5e55.jpg)
#### Screen designs
Contains the screen designs for both web and mobile. There are designs for dark and light theme. For the mobile designs there is also an additional consideration of how the UX can be improved by using tabs as horizontal navigation through the rounds.



## Testing
#### Configurable data
The bracket is implemented in a dynamic way, meaning changing the data will also cause changes to the content of the bracket. Therefore, at the moment it is possible to change the data model in the `bracket-data.ts` file and the rendering will change accordingly. For example, you can ***change the scores in the individual matches and the winner of the match will be highlighted accordingly***. Moreover, the new champion will be styled differently. Also, whole new rounds can be added (of course following the rules of the single-elimination tournament). In these cases only some styling adaptation will be needed to center the bracket lines (I didn't take the time to do this, still).
#### Cross platform experience
The app can be tested in the browser using a full window view and resizing the browser (for now only scroll is implemented as a response to responsive design for devices other than laptops and mobile phones). Additionally, using the [Toggle Device Toolbar](https://developer.chrome.com/docs/devtools/device-mode/#viewport), a mobile viewport can be simulated to see how the layout looks on mobile devices.

## App screenshots
#### Web
<img width="1680" alt="Screenshot 2022-09-18 at 22 28 11" src="https://user-images.githubusercontent.com/53868474/190927024-b2aeb49b-6492-47f4-aa2a-7470ce42c1f0.png">

#### Mobile
<img width="390" alt="Screenshot 2022-09-18 at 22 28 38" src="https://user-images.githubusercontent.com/53868474/190927029-b6857afd-c74d-4068-839e-032cec1398b6.png">
