import CardComponent from "./CardComponent";

export default function CycleView() {
    const er = new CardComponent().render()
    return `
       <!-- Favorite Movies -->
       <div class="container">
         <h2 class="display-4">CykelBibliotek</h2>
       </div>
       
       <section class="col">  
         <div class="" id="sec">
           <div class="container">
             <div class="row" id="favoriteSection">
              ${er}
             </div>
           </div>
         </div>
       </section>
    `
}