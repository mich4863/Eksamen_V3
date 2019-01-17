import Cycle from "../model/Cycle";

export default function CardComponent(cycle) {
    let cyc = new Cycle(cycle); 
    
        return `
        <article class="col-md-4 col-12">
          <div class="card">
            <img class="card-img-top" src="${cyc.image}"> 
          </div>
        </article>
        `
}