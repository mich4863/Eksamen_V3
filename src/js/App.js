import SetupCycleView from "./controller/CycleController";
import getCycles from './model/Api'

class App {
    constructor() {

        /*
         * HEADER 
         */
        const headerHTML = `
            <!-- Header -->
            <div class="container">
              <header>
                <h5>bil</h5>
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
              <div class="container">
                <div class="row">
                  <div class="col-md-6" id="jumbotronText">
                    <h1 class="display-4">Bicycle Innovation Lab</h1>
                    <p class="lead">Forening med cykelbibliotek, værksted og forskellige innovative cykelprojekter til fremme for cykelkulturen, og cyklen som det milijørigtige og sunde alternativ til bilen.</p>
                    <a class="btn btn-primary btn-lg" role="button">Bliv medlem</a>
                  </div>
                  <div class="col-md-6">
                    <img src="./img/jumbotron.gif" class="img-fluid" style="min-width: 100%;"/>
                  </div>
                </div>
              </div>
            </div>
        `
        document.body.insertAdjacentHTML('beforeend', jumbotronHTML)

        /*
        * CykelBibilotek
        */
       SetupCycleView();

       console.log(getCycles())
    }

    

}

/*-- Start app, when content is loaded --*/
document.addEventListener('DOMContentLoaded', () => new App());