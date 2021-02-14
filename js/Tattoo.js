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

    }



    async getHtml() {
        return `
        <div class="artist-profile">
            <div class="artist-tattoos" id="tatt"></div>
        </div>
    `;
    }
}

