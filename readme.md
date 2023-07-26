

This project appears to be a movie and TV show information application. The homepage displays popular content in film and TV show categories. The application utilizes React, Redux, and Redux-Thunk to fetch and manage data.

The components in the project are as follows:

1. `Header`: Contains the application title and menu at the top of the page.
2. `Hero`: Displays a random popular movie on the homepage.
3. `ListMovies`: Displays movies belonging to a specific film category.
4. `MovieDetail`: Shows detailed information about a selected movie, including actor details.
5. `ActionTypes`: A module containing Redux action types.
6. `constants`: A module containing constants such as API endpoints and image paths.
7. `actions`: A module containing Redux action creators.
8. `reducers`: A module containing Redux reducers.
9. `store`: Creates the Redux store and manages shared state.

The project uses Axios to fetch data from APIs and stores the information in the Redux store. It then dynamically generates content on pages and components using this data. React Router is used to enable navigation between different pages.

The project utilizes a third-party component called Splide, which is a carousel component that helps in displaying images and slideshows. This allows the display of movie posters and actor images in a horizontally scrollable manner.

In summary, users can view popular movies and TV show categories, explore detailed information about selected movies, and browse through actor images and names in a horizontal scrolling fashion.
<br/>
Preview:


https://github.com/nursedaturkcan/MovieSiteWithRedux-ReduxThunk/assets/129687664/c3064003-58e6-4c1a-8d75-634eab65fcf1

























# Kütüphaneler
-react-router-dom
-@splidejs/react-splide
-axios
-redux
-react-redux
-redux-thunk

# Kaynaklar
API: https://developer.themoviedb.org/reference/intro/getting-started

-resim base url: https://image.tmdb.org/t/p/original

# Yapılacaklar
-redux kurulumu yapma
-popüler film verisini çek ve store'a aktar.
-Rast gele popüler film seçip hero.jsx'de ekrana basma
-filmlerin kategori verisinin thunk ile çekilip store'a aktarılması
-her bir kategori için o kategoriye ait filmleri listeleyecek bir bileşen `ListMovies` 'i bas.
-bu bileşende listenecek kategorinin ismini ve o kategoriye ait filmleri listele.# MovieSiteWithRedux-ReduxThunk
