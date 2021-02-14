import Common from './Common.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.setTitle('Artists');
    }

    pageElements() {
        
    }



    async getHtml() {
        console.log("ariiiiiiiiiiiiiiiii");
        return `

    <section class="intro-section">
        <div class="container">
            <div class="artists">
                <div class="artist-list">


                    

                </div>

            </div>
        </div>
    </section>

    `;
    }
}
