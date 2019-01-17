import CycleView, { cycleResults, cycleFirstResults } from '../view/CycleView'
import getCycles from '../model/Api'

export default function SetupCycleView() {

    const cycleViewHTML = CycleView();
    document.body.insertAdjacentHTML('beforeend', cycleViewHTML)

    const cycleSection = document.getElementById('cycleSection')

    getCycles()
    .then(reponse => {
        const result = cycleFirstResults(reponse)

        cycleSection.innerHTML = result;
    })

    document.getElementById('showAllButton').addEventListener('click', function() {
        getCycles()
        .then(reponse => {
            const results = cycleResults(reponse)

            cycleSection.innerHTML = results;
        })
    })
}