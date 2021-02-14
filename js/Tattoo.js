import Common from './Common.js';
import { u } from './lib.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.postID = params.id;
        this.setTitle('Viewing Artist');
    }

    pageElements() {
        fetch('/WebFinalProject/database/Tattoos.json')
            .then(response => response.json())
            .then(tattooData => {
                tattooData = tattooData.Tattoos
                console.log(tattooData);
                var tattoos = document.getElementById("tatt");
                tattooData.forEach(e => {

                    tattoos.innerHTML += `
                        <div class="tattoo">
	                        <img src="${e.image}" class="tattoo-img">
                            <div class="tattoo-desc">
                                <span itemprop="name" class="tattoo-name">${e.name}</span>
                                <span itemprop="name" class="tattoo-price">Price: ${e.price} USD</span>
                                <a href="${u('/artists/' + e.artistId)}" data-link class="link-button">View Artist</a>
                            </div>
                        </div>
                        `;

                });
            })

        fetch('/WebFinalProject/database/Artists.json')
            .then(response => response.json())
            .then(artstsData => {
                artstsData = artstsData.Artists
                console.log(artstsData);
                var artists = document.getElementById("info-details");
                artstsData.forEach(e => {
                    if (e.id === this.postID) {
                        artists.innerHTML += `
                    <div class="box">
                        <div class="details">
  
                            <div class="image">
                                <img src="${e.image}" alt="" />
                            </div>
                            <div class="artist-info">
                                <span itemprop="name" class="artist-name">${e.firstName} ${e.lastName}</span>
                                <span itemprop="name" class="studio-name">${e.studio}</span>
                            </div>
                        </div>
                    </div>
                 `;
                    }

                });
            })
    }



    async getHtml() {
        return `
        <div class="artist-profile">
            <div class="artist-tattoos" id="tatt"></div>
        </div>
    `;
    }
}

