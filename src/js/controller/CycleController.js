import CycleView, { cycleResults } from '../view/CycleView'
import getCycles from '../model/Api'

export default function SetupCycleView() {

    const cycleViewHTML = CycleView();
    document.body.insertAdjacentHTML('beforeend', cycleViewHTML)

    const cycleSection = document.getElementById('cycleSection')
    
    getCycles()
    .then(reponse => {
        const result = cycleResults(reponse)

        cycleSection.innerHTML = result;
    })
}