import Common from './Common.js';
import { u } from './lib.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.postID = params.id;
        this.setTitle('Viewing Studio');
    }
    pageElements() {
        fetch('/WebFinalProject/database/Artists.json')
            .then(response => response.json())
            .then(artstsData => {
                artstsData = artstsData.Artists
                console.log(artstsData);
                var artists = document.getElementById("studio-artist-ls");
                artstsData.forEach(e => {
                    console.log(e.studioId);
                    if (e.studioId === this.postID) {
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
                                    <span itemprop="name" class="studio-name">Experience: ${e.experience} Years</span>
                                    <a href="${u('/artists/' + e.id)}" data-link class="link-button">View Artist</a>
                                </div>
                            </div>
                        </div>
                     `;
                    }


                });
            })


        fetch('/WebFinalProject/database/Studios.json')
            .then(response => response.json())
            .then(studiosData => {
                studiosData = studiosData.Studios
                console.log(studiosData);
                var studios = document.getElementById("stud-info-details");
                studiosData.forEach(e => {
                    if (e.id === this.postID) {
                        studios.innerHTML += `
                    <div class="box">
                        <div class="details">
  
                            <div class="image">
                                <img src="${e.image}" alt="" />
                            </div>
                            <div class="artist-info">
                                <span itemprop="name" class="artist-name">${e.name}</span>
                                <span itemprop="name" class="artist-name">${e.city} ${e.country}</span>
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
	            <div class="info-det" id="stud-info-details"></div>
                 <div class="artist-list" id = "studio-artist-ls"></div>
            </div>



    `;
    }
}
