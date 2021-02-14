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
                var artists = document.getElementById("artists-ls");
                artstsData.forEach(e => {
                    console.log(e);
                    console.log(e.name);

                    artists.innerHTML += `
                    <div class="box">
                        <div class="details">
                            <div class="cover">
                                <img src="${e.cover}" alt="" />
                            </div>
                            <div class="image">
                                <img src="${e.image}" alt="" />
                            </div>
                            <div class="artist-info">
                                <span itemprop="name" class="artist-name">${e.firstName} ${e.lastName}</span>
                                <span itemprop="name" class="studio-name">SOMETHING STUD</span>
                                <button type="button">View Profile</button>
                            </div>
                        </div>
                    </div>
                 `;

                });
            })
    }



    async getHtml() {
        console.log("ariiiiiiiiiiiiiiiii");
        var data = [];
        //var artists = await this.getArtists()
        return `

            <section class="app-section">
                <div class="container">

                    <div class="artist-profile" id="artists-profile">

    


                    </div>
                </div>
            </section>

    `;
    }
}