import Common from './Common.js';


export default class extends Common {
    constructor(params) {
        super(params);
        this.setTitle('Home');
    }

    pageElements() {
        console.log("in heeeereee");
       
        const first = document.getElementById('first');
        const sec = document.getElementById('sec');
        const third = document.getElementById('third');
  

        const prev = document.getElementById('prev-id');
        const next = document.getElementById('next-id');


        const prevEvent = function () {
            console.log("prev");
            if (third.style.display === "block") {
                sec.style.display = "block";
                third.style.display = "none";
            }else if (sec.style.display === "block") {
                first.style.display = "block";
                sec.style.display = "none";
            }


        };

        const nextEvent = function () {
            console.log("next");
            console.log(first.style.display);
            if (first.style.display === "block") {
                console.log("now");
                sec.style.display = "block";
                first.style.display = "none";
            } else if (sec.style.display === "block") {
                third.style.display = "block";
                sec.style.display = "none";
            }
        };

        prev.onclick = prevEvent;
        next.onclick = nextEvent;
    }



    async getHtml() {
        return `
            <section class="slider-section">
        <div class="container">

            <div class="slideshow-container">

                <div class="mySlides fade" id ="first" style="display:block">
                    <div class="numbertext">1 / 3</div>
                    <img src="https://i.ytimg.com/vi/SUio6K_zeJQ/maxresdefault.jpg" class="slide-image">
                    <div class="text">Caption Text</div>
                </div>

                <div class="mySlides fade" id ="sec"  style="display:none">
                    <div class="numbertext">2 / 3</div>
                    <img src="https://cosmosmagazine.com/wp-content/uploads/2020/02/190827-tattoo_full-1440x813.jpg" class="slide-image">
                    <div class="text">Caption Two</div>
                </div>

                <div class="mySlides fade" id ="third" style="display:none">
                    <div class="numbertext">3 / 3</div>
                    <img src="https://i.ytimg.com/vi/cie7vSv6clc/maxresdefault.jpg" class="slide-image">
                    <div class="text">Caption Three</div>
                </div>

                <a class="prev" id="prev-id" ">&#10094;</a>
                <a class="next" id="next-id" ">&#10095;</a>

            </div>

            <br>

            <div class="slide-show-dots" style="text-align:center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>

    </section>
    <!-- <footer class="footer-section"></footer>-->

    <section class="intro-section">
        <div class="container">
            <div class="intro-items">
                <div class="intro-item">
                    <img src="https://i.pinimg.com/originals/9c/f4/49/9cf449dbeca3840fc82be840853f9b5d.jpg" class="tattoo-info"></img>
                    <h3>About to Get Your First Tattoo?</h3>
                    <h5>This Is Everything You Need to Know</h5>
                    <p>Getting your first tattoo is a big deal. It’s not an undertaking to view lightly – as with anything that’s meant to last forever. There’s more to getting a tattoo than meets the eye.</p>
                    <button type="button">READ MORE>></button>
                </div>
                <div class="intro-item">
                    <img src="../images/coverup.jpg" class="tattoo-info"></img>
                    <h3>How to Erase the Past</h3>
                    <h5>A Guide to Cover Up Tattoos</h5>
                    <p>There are three different types of cover up tattoos: complete coverage, creative reinvention, and blast overs. You may have to do laser removal, for scars and for old tattoos.</p>
                    <button type="button">READ MORE>></button>
                </div>
                <div class="intro-item">
                    <img src="images/head.jpg" class="tattoo-info"></img>
                    <h3>Scared of tattoo pain?</h3>
                    <h5>These are the most painful places to get a tattoo</h5>
                    <p>There's a difference in how painful a tattoo is likely to be depending on where on the body you get it. If you've got a low pain threshold, you should think twice before getting a tattoo in any of these parts.</p>
                    <button type="button">READ MORE>></button>
                </div>
            </div>

        </div>
    </section>

    `;
    }
}
