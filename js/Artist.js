import Common from './Common.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.setTitle('Artists');
    }

    pageElements() {
        fetch('/WebFinalProject/database/Artists.json')
            .then(response => response.json())
            .then(artstsData => {
                artstsData = artstsData.Artists
                console.log(artstsData);
            })
    }



    async getHtml() {
        console.log("ariiiiiiiiiiiiiiiii");
        //var artists = await this.getArtists()
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
