#  Test FrontEnd * Álvaro Vallejos  (BCNC Group)


## Author notes

IMPORTANT: 

***************************

In order to use the service Cors Anywhere actually we need to visit [https://cors-anywhere.herokuapp.com/](https://cors-anywhere-herokuapp.com) and click on the "Request temporary access to the demo server" button to temporarily init or restore the full functionality of CORS Anywhere for your client only.

***************************


This project is a Single Page Application programmed in React and is divided in three screens: In the main screen you can watch a list of the 100 most popular Apple podcasts. The second one is a detail page of each podcast and a list of the tracks. The third is a detail page of each track and here you can listen the audio of the podcast and read about its content.

Almost each component has been styled with a different technique (sass, styled components, mui, bootstrap, etc). The design of the screens are responsive.

The deploy offers two possible modes: optimized and minified or not minified-optimized. 

I've made documentation with JSDoc for some components. You can read it opening the file documents/index.html or in [https://github.com/AlVaFer/test-av/blob/master/documents/index.html/](DOCUMENTS).



## Technologies 

* React
* Redux Toolkit
* React Query (TanStack, v4)
* React Router
* Linkify
* JSDoc 
* Jest
* React-testing-library
* i18next
* Sass
* Styled components
* Material UI (v5)
* Webpack-dev-server
* ESLint
* Prettier
* Babel

## Structure of app folder

* **pages**: React components composed by several components, this is the upper level. Use custom hooks, the store and have their own states. 
* **containers**: React components used in several components.
* **components**: React components. 
* **components/children**: Children components.
* **components/hooks.jsx**: React custom hooks used by the components or by its pages. If several components need the hook it would be saved in a main hook folder but is wasn't necessary in this project.
* **components/shared**: React components that are used in several places.
* **components/styles.js|scss**: Styles of the components.
* **components/name.test.js**: Unitary and integration tests.
* **store**: Redux store and reducers.
* **i18n**: Literals.
* **routers**: React routing components.
* **shared**: Common constants and helpers.


##  Scripts:

### Installation

* `npm i`

### Run in development mode (not minified by webpack)

* `npm run dev`

### Run in production mode (minified by webpack)

* `npm run prod`

### Build

* `npm run build`

### Run tests

* `npm run test`

### Documents

To read them please click on documents/index.html

To generate them: 

* `npm run jsdoc` 


## Screenshots

<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/1.png"\>


<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/2.png"\>

<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/3.png"\>

<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/4.png"\>

<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/5.png"\>

<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/6.png"\>

<br>
<p align="center">
<img width="95%" src="https://github.com/AlVaFer/test-av/blob/master/screenshots/7.png"\>
