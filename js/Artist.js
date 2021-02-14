import Common from './Common.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.setTitle('Artists');
    }

    pageElements() {
        return new Artists(function (resolve, reject) {
            fetch('/WebFinalProject/database/Artists.json')
                .then(response => response.json())
                .then(artstsData => {
                    artstsData = artstsData.Artists
                    resolve(artstsData);
                })
        })
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
