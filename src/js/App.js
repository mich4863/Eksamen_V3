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
                <h5><del>bil</del></h5>
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
                  <div class="col-md-6" id="jumbotronImage">
                    <!--<img src="./img/jumbotron.gif" class="img-fluid"/>-->
                  </div>
                </div>
              </div>
            </div>
        `
        document.body.insertAdjacentHTML('beforeend', jumbotronHTML)

        /*
        * CYKELBIBLIOTEK
        */
       SetupCycleView();

       /*
        * FOOTER 
        */
       const footerHTML = `
       <!-- Footer -->
       <footer class="page-footer pt-4 border-top border-grey mt-5">
       
           <!-- Footer Links -->
           <div class="container-fluid text-center text-md-left">
       
             <!-- Grid row -->
             <div class="row justify-content-center">
       
               <!-- Grid column -->
               <div class="col-md-3">
                   <h5 class="text-uppercase">Projekter & tilbud</h5>
       
                   <ul class="list-unstyled">
                     <li>
                       <a href="#">Cykelbibliotek</a>
                     </li>
                     <li>
                       <a href="#">Værksted</a>
                     </li>
                     <li>
                       <a href="#">Arrangementer og foredrag</a>
                     </li>
                     <li>
                       <a href="#">The Good City: Udstilling</a>
                     </li>
                     <li>
                       <a href="#">Undervisning</a>
                     </li>
                     <li>
                       <a href="#">Rådgivning</a>
                     </li>
                   </ul>
                 </div>

                 <div class="col-md-3">
                   <h5 class="text-uppercase">Om os</h5>

                   <ul class="list-unstyled">
                     <li>
                       <a href="#">Bestyrelsen</a>
                     </li>
                     <li>
                       <a href="#">Vedtægter</a>
                     </li>
                     <li>
                       <a href="#"">Vilkår</a>
                     </li>
                   </ul>
                 </div>

                 <!-- Grid column -->
                 <div class="col-md-3">
                 <h5 class="text-uppercase">Om os</h5>

                 <ul class="list-unstyled">
                   <li>
                     <span>Bicycle Innovation Lab</span>
                   </li>
                   <li>
                     <span>Prags boulevard ved sportshallen Prismen</span>
                   </li>
                   <li>
                     <span>Holmbladsgade 71</span>
                   </li>
                   <li>
                     <span>2300 København S</span>
                   </li>
                 </ul>
               </div>

             </div>
           </div>
           <div class="footer-copyright text-center py-3">© 2017-2018:
             <a href="#">Ligebanan</a>
           </div>
         </footer>     
       `
       document.body.insertAdjacentHTML('beforeend', footerHTML)
       
    }

    

}

/*-- Start app, when content is loaded --*/
document.addEventListener('DOMContentLoaded', () => new App());