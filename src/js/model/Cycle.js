export default class Cycle {
    constructor(cycle) {
        this.image = cycle['_embedded']['wp:featuredmedia'][0]['media_details'].sizes['medium_large']['source_url']
        
    }
}