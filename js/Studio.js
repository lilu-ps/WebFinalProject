import Common from './Common.js';
import { u } from './lib.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.setTitle('Studios');
    }
    pageElements() {
        fetch('/WebFinalProject/database/Studios.json')
            .then(response => response.json())
            .then(studiosData => {
                studiosData = studiosData.Studios
                console.log(studiosData);
                var studios = document.getElementById("studio-ls");
                studiosData.forEach(e => {

                    studios.innerHTML += `
                    <div class="box">
                        <div class="details">
                            <div class="cover">
                                <img src="${e.cover}" alt="" />
                            </div>
                            <div class="image">
                                <img src="${e.image}" alt="" />
                            </div>
                            <div class="artist-info">
                                <span itemprop="name" class="artist-name">${e.name}</span>
                                <span itemprop="name" class="artist-name">${e.city} ${e.country}</span>
                                <span itemprop="name" class="studio-name">Review: ${e.review} Stars</span>
                                <a href="${u('/studios/' + e.id)}" data-link class="link-button">View Studio</a>
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
        return `

                 <div class="studio-list" id = "studio-ls"></div>


    `;
    }
}
