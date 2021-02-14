document.addEventListener("DOMContentLoaded", function (event) {
    getTattooStyles();

    var el = document.getElementById('menu-dropdown');
    el.addEventListener("change", menuOnChange, false);
});

function menuOnChange() {
    console.log("hiiiiiiiiiiiiiiiizoz")
}


function getTattooStyles() {

    var request = new XMLHttpRequest();
    request.open('GET', '/TattooStyle/getTattooStyles', true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            // Success!
            
            var result = JSON.parse(this.response);
            result.response.forEach(e => {
                console.log(e);
                console.log(e.name);

            });
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

