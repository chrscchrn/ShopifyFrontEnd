# My Submission for the Shopify Front End Intern Challenge(Still Working on It)


[Website](https://chrscchrn.github.io/ShopifyFrontEnd/)


I will be using these libraries:
- Create React App
- OMDb API for Movie Search
- Client-Side Storage
- Material UI

(Remainder to make sure font doesnt slow everything down)
⚠️ Be careful when using this approach. Make sure your bundler doesn't eager load all the font variations (100/300/400/500/700/900, italic/regular, SVG/woff). Fontsource can be configured to load specific subsets, weights and styles. Inlining all the font files can significantly increase the size of your bundle. Material-UI default typography configuration only relies on 300, 400, 500, and 700 font weights.
 

### Layout:
```
______Chrome_____________
| switch   header       |  < put in a container with the children of switch and page title (the header and switch should be a constant)
|_______________________|
|        searchBar      |  < do not display if on noms page
|_______________________|
| Movies in threes      |  < Movie presentation component, the bread and butter of this website, to persist or not to persist
|_______________________|
```