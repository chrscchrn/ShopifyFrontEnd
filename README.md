# This is my Front End Submission for the Shopify Front End Intern Challenge

I will be using these technologies:
- Material UI
- Roboto Font
- @material-ui/icons
- Create React App
- OMDb API for Movie Search
- Client-Side Storage
- 

Technical requirements:
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

## Layout
 *all pages should have the users name in there which is located front indexedDb or localstorage, if not they are redirected to the sign up page
Enter Username Page:
- User puts in there name
- directs to the search/noms page
Search and Noms Page:
- Search results in rows of three, including picture
-  show the nominated motion pictures to the right, taking about a third of the page

⚠️ Be careful when using this approach. Make sure your bundler doesn't eager load all the font variations (100/300/400/500/700/900, italic/regular, SVG/woff). Fontsource can be configured to load specific subsets, weights and styles. Inlining all the font files can significantly increase the size of your bundle. Material-UI default typography configuration only relies on 300, 400, 500, and 700 font weights.


## Components
- Row w/ { children }
- movie card w/ { button-children }
- hover: Button for adding to Nomz
- hover: Button for removing from Nomz 
- hover: Details button => card that has details neatly presented
    - Movie details card should be a onesizeFitzAll and have great typography
- Switch should bring me to search or nomz
- Headers!
- 

### The movies should look like below:
```
3 - 2 - 1 cards for movies: 
    Since I want to have rows of three I think that I should make the cards automatically center based on the number of movies remaining
    [] [] []
    [] [] []
     []  [] 
    OR
    [] [] []
       [] 
       I can genereate additional rows easily, but then I must put in the cards/columns as a prop and have it automatically adjust!!!!
       This way i can use this for the Nomz page
    OR (if theres a number % by three)
    [] [] []
    [] [] []
```
================================

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
