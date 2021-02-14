import Common from './Common.js';


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
                var tattoos = document.getElementById("artist-tattoos");
                tatData.forEach(e => {
                    console.log(e);
                    console.log(e.name);
                    if (e.id === this.postID) {
                        tattoos.innerHTML += `
                            <div class="tattoo">
	                            <img src="${e.image}" class="tattoo-img">
                                <div class="tattoo-desc">
                                    <span itemprop="name" class="tattoo-name">${e.name}</span>
                                <span itemprop="name" class="tattoo-price">Price: ${e.price} USD</span>
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
	        <div class="info-det"></div>
            <div class="artist-tattoos"></div>
        </div>
    `;
    }
}

