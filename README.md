# Recipes App made with React

## Description
This is a React Application which allows users to browse a list of recepies, inluding number decription, instructions, list of ingredients and an image of the dish.

This project was made in the scope of a school assigment @Helsinki Business College under the tutoring of Ms. [Margit Tennosaar](https://github.com/margittennosaar).

## Technologies
- React
- JSON server
- JavaScript
- HTML
- CSS

## Setup Instructions

For React app, in terminal:

- ``` git clone https://github.com/hiphip12/react_recipes_app.git ```

- ``` cd recipes ```

- ``` npm install ```

- ``` npm start ``` (to start local server)

To read and write input data, the project includes a react script to watch changes in a local JSON server (full fake REST API) - seen in package.json file, line 23: ``` "server": "json-server -p4002 --watch recipesDB.json" ```. 

Thus, to be able use that capability (using http://localhost:4002/), add in terminal:
- ``` npm install json-server --save-dev ```
- ``` npm run server ```

## Usage directions

1. To browse already posted recepies click on the top navigation menu "Recepies" or the "All recepies" link at the first information card from left to right, at the landing page(home).
2. To know more details of a recipe listed in the page, click the "See more" button at button of the recipe card.
3. After that, you'll see a recepie profile with more details of the recepie and how to go about its preparation.
4. To create a recipe yourself, click the "Add recipe" link at the top menu, or the "Add recipes" link at the middle information card at the home page.
5. Add the necessary deatils in the form and click the "post recipe" button.
6. See your recipe posted in the list of receipies at the Recipes page.


## Screenshot

### Homepage

![Homepage](src/assets/screenshots/Screenshot-Homepage.webp)

### Recipe list page

![RecipesList](src/assets/screenshots/Screenshot-RecipeList.webp)

### Recipe Profile Page

![RecipeProfile](src/assets/screenshots/Screenshot-RecipeProfile.webp)

## Live Page

See it [here](https://clever-licorice-ef4ec5.netlify.app/) (local JSON server setup required for read/write input data, otherwise it displays the app without that capabiliy)

## Credits

The assignment and guidance were provided by [Margit Tennosaar](https://github.com/margittennosaar) during May 2023 [@Helsinki Business College](https://www.bc.fi/).

Country flags provided through API by [CountryFlags](https://flagsapi.com/).

Images and video provided by [pexels.com](https://www.pexels.com/).

Favicon is from [unicode.org](https://unicode.org/emoji/charts/emoji-list.html#1f957)
