import CycleView from '../view/CycleView'

export default function SetupCycleView() {
    const cycleViewHTML = CycleView();
    document.body.insertAdjacentHTML('beforeend', cycleViewHTML)
}