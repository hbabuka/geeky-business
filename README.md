# Geeky Business
Geeky Business is a personal web project that covers front-end development and UX design of an online gaming platform.

## Introduction
Welcome to *Geeky Business*, a personal project that aims to explore new technologies while creating a comprehensive gaming database. As a developer and designer, I wanted to create a platform that combined my passion for both fields. With Geeky Business, I set out to create a simple and modern looking website while also experimenting with some technologies that were unfamiliar to me.

One of the technologies that I used in building Geeky Business is Tailwind, a utility-first CSS framework, to create a responsive and visually appealing user interface. As a CSS specialist, I specifically wanted to try out Tailwind and see how it compares to other CSS frameworks and CSS-in-JS libraries in terms of styling setup, reusability and sustainability. Additionally, I used Redux, a predictable state container for JavaScript apps. By incorporating Redux into the platform, I was able to create a more efficient and scalable data management system for the data I fetch from an existing video games database API.

## Project links
* [**Code repository**](https://github.com/hbabuka/geeky-business) on Github.
* UI design and design system in [**Figma**](https://www.figma.com/file/o7MZ1Jl0SH47wAOfhjVJzS/Geeky-Business?node-id=3%3A3&t=KWHsCrYocX4mR5ul-1).
* [**Live demo**](https://geeky-business.netlify.app/) deployed on Netlify.

<details>
    <summary><em>Note: if you don't have a Figma account, don't forget to use the menu in the top left corner to navigate to different pages of the file</em></summary>
<img width="220" alt="Screenshot 2023-03-03 at 18 19 42" src="https://user-images.githubusercontent.com/53868474/222785862-a828b1f3-cb61-4657-ada1-b7c0b89658f7.png">
</details>

## Implementation details
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
https://github.com/hbabuka/geeky-business.git
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

### Technologies
The following technologies are used for the implementation of the project:
* [React 18.2.0](https://reactjs.org/) as a JavaScript library to build the user interface.
* [Typescript 4.9.5](https://www.typescriptlang.org/) to add syntax for types and type-checking.
* [Tailwind CSS 3.2.4](https://tailwindcss.com/) as a CSS framework to style the components.
* [Redux 4.2.0](https://redux.js.org/) as a global state management library for React.
* [Axios 1.2.2](https://axios-http.com/) as a HTTP client to fect data from the API endpoint.
* [Jest 29.4.3](https://jestjs.io/) as a JavaScript testing framework for unit testing of util functions.

### API
To obtain the gaming database for Geeky Business, I used the API provided by [RAWG](https://rawg.io/apidocs). This API grants access to a comprehensive database of video games, allowing me to incorporate game reviews, ratings, and other important information into the platform. Here is a link to the [documentation](https://api.rawg.io/docs/).

### Project structure
```
.
└── root
    ├── public
    ├── src
    │   ├── @types
    │   │   └── assets
    │   │       └── index.d.ts
    │   ├── assets
    │   │   ├── apple.svg
    │   │   ├── gamepad.svg
    │   │   ├── geeky-business-logo.svg
    │   │   ├── hero-logo-icon-color.svg
    │   │   ├── linux.svg
    │   │   ├── logo-spinner-secondary.svg
    │   │   ├── nintendo.svg
    │   │   ├── playstation.svg
    │   │   ├── steam.svg
    │   │   └── xbox.svg
    │   ├── components
    │   │   ├── Breadcrumb.tsx
    │   │   ├── GalleryImageModal.tsx
    │   │   ├── Game.tsx
    │   │   ├── GameDetails.tsx
    │   │   ├── GameDetailsIntro.tsx
    │   │   ├── GameScreenshots.tsx
    │   │   ├── GamesSection.tsx
    │   │   ├── HeroSection.tsx
    │   │   ├── Nav.tsx
    │   │   ├── PreviewModal.tsx
    │   │   └── shared
    │   │       ├── Footer.tsx
    │   │       ├── ImagePlaceholder.tsx
    │   │       └── Spinner.tsx
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
    │   ├── utils
    │   │   ├── api.ts
    │   │   ├── constants.tsx
    │   │   ├── utils.spec.ts
    │   │   └── utils.ts
    │   ├── App.tsx
    │   ├── index.css
    │   └── index.tsx
    ├── babel.config.js
    ├── jest.config.js
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json
```

## Design setup
### UX concept
The design is centered around a responsive grid of cards that form each section of the body. A top global navigation menu is present throughout the whole application. This navbar is also fully responsive and it works for smaller devices.

### Features
There are two main pages in this application: the `Home Page` and the `Game Details Page`.
The homepage consists of main sections and top sections which are highlighted in the UI:
* Popular games - showing the best rated video games in the past 365 days.
* Upcoming games - showing the video games that are going to be added in the following year.
* Latest games - showing the newest video games according to their release date.
* Top Indie games - a preview of the top rated indie games of all times.
* Top Multiplayer games - showing the best multiplayer games of all time.
* Searched games - allows searching through the database and filter results by game name.
The game details page covers the following information for a video game:
* Title
* Release date
* Rating and number of ratings
* Genres
* Description
* Availability on gaming platforms
* Trailer preview
* Website link
* Publishers
* Screenshots

### Figma
The designs are completely made using Figma. I created a mini design system with style guide and component set. You can find the following pages inside the Figma file: https://www.figma.com/file/o7MZ1Jl0SH47wAOfhjVJzS/Geeky-Business?node-id=3%3A3&t=KWHsCrYocX4mR5ul-1.

### Style guide
The style guide is completely based on the Tailwind CSS theme. 
#### Colors
The project colors are inherited from the default color palette which is used out-of-the-box and then adapted to my local theme.
![Palette](https://user-images.githubusercontent.com/53868474/222995694-83775562-aa6a-4759-9d62-536c36cedd2a.png)
#### Typograpgy
The typography system is based on the Tailwind text utility classes.
![Typography](https://user-images.githubusercontent.com/53868474/222995689-ce074caa-84dc-4d66-835c-23351468042d.png)
#### Spacing
The spacing scale for margins, padding, and fixed element heights is completely applied throughout the designs: https://tailwindcss.com/docs/customizing-spacing.
#### Shadows
To gain elevation, I use the following Tailwind CSS shadows:
![Shadows](https://user-images.githubusercontent.com/53868474/222995671-ba3e0ca8-d240-46ea-91ba-6e8b30b31035.png)

### Components
All components are designed the same way as they are later implemented. In the design files, there are the following component sets:
**Forms**
![Forms](https://user-images.githubusercontent.com/53868474/222996914-1c2c36ff-72a7-427f-a9b1-5b4e8b77a22c.png)
**Navigation**
![Navigation](https://user-images.githubusercontent.com/53868474/222996923-a52e40b9-8018-4554-8a59-80e9c24f3bd9.png)
**Cards**
![Cards](https://user-images.githubusercontent.com/53868474/222996928-38926668-95f0-481f-96b5-2291b1f7d2df.png)
**Presentation**
![Presentation](https://user-images.githubusercontent.com/53868474/222996946-d0faf6c5-cde8-40fe-a8e2-f8b1c135199e.png)

## Tailwind CSS setup
Besides heavily using the recommended default utility classes for this CSS framework, I decided to rely on two other things in order to make the styling code more reusable and more sustainable. First, I did a theme configuration and I customized the Tailwind CSS default theme to my project needs. This was according to the previous design decision, and done inside `theme` section of my `tailwind.config.js` file:
```
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
    },
    colors: {
      ...colors,
      primary: colors.indigo,
      secondary: colors.slate,
      success: colors.emerald,
      warning: colors.yellow,
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
```

## Testing
#### Cross platform experience
The app can be tested in the browser using a full window view and resizing the browser (for now only scroll is implemented as a response to responsive design for devices other than laptops and mobile phones). Additionally, using the [Toggle Device Toolbar](https://developer.chrome.com/docs/devtools/device-mode/#viewport), a mobile viewport can be simulated to see how the layout looks on mobile devices.

## App screenshots
#### Desktop
<img width="1680" alt="Screenshot 2022-09-18 at 22 28 11" src="https://user-images.githubusercontent.com/53868474/190927024-b2aeb49b-6492-47f4-aa2a-7470ce42c1f0.png">

#### Tablet
<img width="390" alt="Screenshot 2022-09-18 at 22 28 38" src="https://user-images.githubusercontent.com/53868474/190927029-b6857afd-c74d-4068-839e-032cec1398b6.png">

#### Mobile
<img width="390" alt="Screenshot 2022-09-18 at 22 28 38" src="https://user-images.githubusercontent.com/53868474/190927029-b6857afd-c74d-4068-839e-032cec1398b6.png">
