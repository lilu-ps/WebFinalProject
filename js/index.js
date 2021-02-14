﻿import Home from './Home.js';
import Artists from './Artist.js';
import { u } from './lib.js';

const cleanPath = path =>
    new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(
        keys.map((key, i) => {
            return [
                key,
                values[i]
            ];
        })
    );
};

const pushTo = url => {
    history.pushState(null, null, url);
    router();
};


const viewProfile = id =>{
    console.log("miiiineeee")
    console.log(id)
}

window.goTo = (uri, routeName) => {
    alert("heeeeeereeeeeee");
};


const router = async () => {
    const routes = [
        { path: u('/'), view: Home },
        { path: u('/artists'), view: Artists },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(cleanPath(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [
                location.pathname
            ]
        };
    }

    const view = new match.route.view(getParams(match));
    document.querySelector('#app').innerHTML = await view.getHtml();
    view.pageElements();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            pushTo(e.target.href);
        }
    });
    router();
});