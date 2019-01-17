import CardComponent from "./CardComponent";

export default function CycleView() {
    const cycleCard = ''

    return `
       <!-- Favorite Movies -->
       <div class="container">
         <h2 class="display-4 text-center">CykelBibliotek</h2>
         <p class="text-center">Prøv en ny cykel som alternativ til din bil. Skal du ud med tvillingerne eller vil du pendle langt, så har vi den rigtige cykel til dig.</p>
       </div>
       
       <section class="col">  
         <div class="" id="sec">
           <div class="container">
             <div class="card-deck" id="cycleSection">
              ${cycleCard}
             </div>
           </div>      
         </div>
         <button type="button" class="btn btn-secondary">Vis alle</button>
       </section>
    `
}

export function cycleResults(result) {
    let cycleString = '';

    result.forEach(cycle => {
        cycleString += CardComponent(cycle)
    });
    return cycleString
}