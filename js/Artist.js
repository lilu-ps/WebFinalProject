import Common from './Common.js';
import { u } from './lib.js';

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
                                <a href="${u('/artists/2')}" data-link class="link-button">#2 - How to build a GH Pages site</a>
                            </div>
                        </div>
                    </div>
                 `;

                });
            })
    }


                                //<button type="button" onclick=viewProfile('/WebFinalProject/artists/${e.id}') > View Profile</button >

    async getHtml() {
        console.log("ariiiiiiiiiiiiiiiii");
        //var artists = await this.getArtists()
        return `

                 <div class="artist-list" id = "artists-ls"></div>


    `;
    }
}
