import AbstractView from './AbstractView.js';
import { u } from './lib.js';

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle('Artists');
    }

    pageElements() {

        var request = new XMLHttpRequest();
        var url = `https://localhost:44382` + `/api/Artist/getTattooArtists`;
        console.log(url);
        request.open('GET', url, true);
        var artists = document.getElementById('artist-list');
        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                console.log(request.response);
                //var result = JSON.parse(this.response);
                //result.response.forEach(e => {
                //    console.log(e);
                //    console.log(e.name);

                //    artists.innerHTML += `
                //        <div class="box">
                //            <div class="details">
                //                <div class="cover">
                //                    <img src="images\image1.jpg" alt="" />
                //                </div>
                //                <div class="image">
                //                    <img src="${e.image}" alt="" />
                //                </div>
                //                <div class="artist-info">
                //                    <span itemprop="name" class="artist-name">${e.firstName} ${e.lastName}</span>
                //                    <span itemprop="name" class="studio-name">SOMETHING STUD</span>
                //                    <button type="button">View Profile</button>
                //                </div>
                //            </div>
                //        </div>
                //     `;

                //});
                //var resp = this.response;
            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
        };

        request.send();
    }



    async getHtml() {
        console.log("ariiiiiiiiiiiiiiiii");
        return `

    <section class="intro-section">
        <div class="container">
            <div class="artists">
                <div class="artist-list">


                    

                </div>

            </div>
        </div>
    </section>

    `;
    }
}
