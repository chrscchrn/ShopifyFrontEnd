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
 *all pages should have the users name in there which is located front indexedDb or localstorage, if not they are redirected to the enter name page
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
