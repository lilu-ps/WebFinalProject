import Common from './Common.js';


export default class extends Common {
    constructor(params) {
        super(params);
        this.postID = params.id;
        this.setTitle('Viewing Artist');
    }

    async getHtml() {
        return `
        <h1>Post</h1>
        <p>You are viewing post #${this.postID}. No content can be shown here yet.</p>
    `;
    }
}

