/*const URI = 'http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/product?_embed',
      KEY = secret.Key;

export function searchMovie(movieTitle){
  try {
    const URL = URI
              + `?`
              + `s=${movieTitle}`
              + `&apikey=${KEY}`

     return fetch(URL)
      .then(response => response.json())
  } 
  catch (error) {
    console.error(error);
  }
}*/
export default function getCycles() {
    try {
           return fetch('http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/product?_embed')
           .then(reponse => reponse.json())
        }
        catch (error) {
            console.error(error);
        }
}