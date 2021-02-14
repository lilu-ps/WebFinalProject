import Common from './Common.js';
import { u } from './lib.js';

export default class extends Common {
    constructor(params) {
        super(params);
        this.postID = params.id;
        this.setTitle('Article');
    }
    pageElements() {
        fetch('/WebFinalProject/database/Article.json')
            .then(response => response.json())
            .then(articleData => {
                articleData = articleData.Article
                console.log(articleData);
                var article = document.getElementById("my-art");
                articleData.forEach(e => {
                    if (e.id === this.postID) {
                        article.innerHTML += `
                    <div class="my-article">
	                    <div class="image">
                            <img src="${e.image}">
                        </div>
	                    <h1>${e.title}</h1>

                      <article>
                        <h2>${e.subtitle}</h2>
                        <p>${e.description}</p>
                      </article>
                    </div>
                 `;
                    }


                });
            })
    }


    async getHtml() {
        return `

                 <div class="article" id = "my-art"></div>


    `;
    }
}
