class App {
    constructor() {

        /*
         * HEADER 
         */
        const headerHTML = `
            <!-- Header -->
            <div class="container">
              <header>
                <h1>Bicycle</h1>
              </header>
            </div>  
        `
        document.body.insertAdjacentHTML('beforeend', headerHTML)

        /*
         * JUMBOTRON 
         */
        const jumbotronHTML = `
            <!-- Jumbotron -->
            <div class="jumbotron">
              <h1 class="display-4">Hello, world!</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4">
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
        `
        document.body.insertAdjacentHTML('beforeend', jumbotronHTML)
    }
}

/*-- Start app, when content is loaded --*/
document.addEventListener('DOMContentLoaded', () => new App());