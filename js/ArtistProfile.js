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
                var tattoos = document.getElementById("artist-tatt");
                tattooData.forEach(e => {
                   
                    if (e.artistId === this.postID) {
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
                            <div class="cover">
                                <img src="${e.cover}" alt="" />
                            </div>
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
	        <div class="info-det" id="info-details"></div>
            <div class="artist-tattoos" id="artist-tatt"></div>
        </div>
    `;
    }
}

