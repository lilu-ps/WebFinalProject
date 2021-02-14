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
                                <span itemprop="name" class="studio-name">${e.studio}</span>
                                <button type="button" onclick=viewProfile('/WebFinalProject/artists/${e.id}')>View Profile</button>
                            </div>
                        </div>
                    </div>
                 `;

                });
            })
    }



    async getHtml() {
        console.log("ariiiiiiiiiiiiiiiii");
        //var artists = await this.getArtists()
        return `

                 <div class="artist-list" id = "artists-ls"></div>


    `;
    }
}
