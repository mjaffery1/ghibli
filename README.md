**Project Overview

**Project Description

This app is a Studio Ghibli fan site and shows all the movies by the studio as well as details about each movie.

**Project Links**

https://github.com/mjaffery1/ghibli

https://ghibli-sultan.netlify.app/

**Wireframes**

https://media.git.generalassemb.ly/user/42761/files/441aef99-25e0-44a3-9099-ea38aa15bd9e

**MVP EXAMPLE**

Find and use external api
Render data on page
Show all movies from API and also create cards that lead to page about specific movie.

**PostMVP EXAMPLE**
Use MUI for styling purposes

**Component	Description**

App	This will make the initial data pull and include React Router
Header	This will render the header include the nav
Navbar This will include routes to go to the home page and the fun facts page. Also a link that takes you to an external site to buy movie tickets.
MovieCard This will render each movie card showing the movie poster of each movie.
MovieDetails This includes movie information pulled from the API such as Director, Release Year, Movie Description etc.
FunFacts This includes fun facts about Studio Ghibli

**Additional Libraries**
Axios

**Code Snippet**
<Route path = "/movie/:title" element = {<MovieDetails data={movieData} />} />

function MovieDetails(props) {
  const { title } = useParams();
  const movie = props.data.find((mov) => mov.original_title === title);
  
//This code snippet allows me to use Japanese original title of movie as the path/route in my url.