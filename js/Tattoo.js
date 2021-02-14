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


        fetch('/WebFinalProject/database/TattooStyles.json')
            .then(response => response.json())
            .then(tattooData => {
                tattooData = tattooData.TattooStyles
                console.log(tattooData);
                var tattoos = document.getElementById("styles");
                tattooData.forEach(e => {

                    tattoos.innerHTML += `
                        <a href="${u('/tattoos/' + e.id)}" data-link class="link-button">${e.name}</a>
                        `;

                });
            })

    }



    async getHtml() {
        return `
        <div class="artist-profile">
            <div class="filters" id="filter">
                     <div class="dropdown" id="styles-dropdown">
                        <button class="dropbtn">Choose Tab</button>
                        <div class="dropdown-content" id="styles">
                        </div>
                    </div>
            </div>
            <div class="artist-tattoos" id="tatt"></div>
        </div>
    `;
    }
}

