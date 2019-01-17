export default function getCycles() {
    try {
           return fetch('http://bicycleinnovationlab.kljo.aspitcloud.dk/wp-json/wp/v2/product?_embed')
           .then(reponse => reponse.json())
        }
        catch (error) {
            console.error(error);
        }
}