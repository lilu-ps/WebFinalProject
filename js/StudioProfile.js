import Common from './Common.js';
import { u } from './lib.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.setTitle('Artists');
    }
    pageElements() {
        
    }



    async getHtml() {
        return `

                 <div class="artist-list" id = "artists-ls"></div>


    `;
    }
}
