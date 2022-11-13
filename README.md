#  Test FrontEnd * Álvaro Vallejos  (BCNC Group)

<br>

## Author notes

IMPORTANT: 

***************************

In order to use the service Cors Anywhere actually we need to visit [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo) and click on the "Request temporary access to the demo server" button to temporarily init or restore the full functionality of CORS Anywhere for your client only.

***************************


This project is a Single Page Application programmed in React and presents three screens: In the main screen you can watch a list of the 100 most popular Apple podcasts, also you can filter them using the textbox and see in a badge the count of results. The second screen is a detail page of the selected podcast and a list of its tracks. The third is a detail page of the selected track and here you can listen the audio of the podcast and read about its content.

Almost each component has been styled with a different technique (sass, styled components, mui, bootstrap, etc). The design of the screens are responsive.

The deploy offers two possible modes: optimized and minified or not minified-optimized. 

I have made tests and documentation with JSDoc for some components. You can read it opening the file documents/index.html downloading the whole documents folder. 

<br>

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

<br>

## Structure of app folder

* **pages**: React components composed by several components, this is the upper level. They use custom hooks, the store and have their own states. 
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

<br>

##  Scripts:

### Installation

* `npm i`

### Run in development mode (not minified and optimized by webpack)

* `npm run dev`

### Run in production mode (minified and optimized by webpack)

* `npm run prod`

### Build

* `npm run build`

### Run tests

* `npm run test`

### Documents

To read them please click on documents/index.html

To generate them: 

* `npm run jsdoc` 

<br>


## Screenshots

<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/1.png"\>


<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/2.png"\>

<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/3.png"\>

<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/4.png"\>

<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/5.png"\>

<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/6.png"\>

<br>
<p align="center">
<img width="95%" src="https://raw.githubusercontent.com/AlVaFer/test-av/main/screenshots/7.png"\>
