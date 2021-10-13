// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select linksä
// ELEMENTS TO CLICK
const nav1 = document.querySelector(".btn")
const nav = document.querySelector(".btn-2");
const packetHero = document.querySelector(".btn-3");
const mailHero = document.querySelector(".btn-4");
const phoneHero = document.querySelector(".btn-5");
const footerEmail = document.querySelector("#footer-contact-email");
const footerPhone = document.querySelector("#footer-contact-phone");
const buttons = document.querySelectorAll(".button");
const footerFirst = document.querySelector("#first");
const footerMiddle = document.querySelector("#middle");
const footerLast = document.querySelector("#last");
const more = document.querySelector("#more");

//SCROLL INTO SECTION
const scrollPacket = document.querySelector(".packets");
const scrollContent = document.querySelector(".content-header");
const scrollContact = document.querySelector(".contact-header");

//Footer

//NAV 
nav.addEventListener("click", function () {
    let posistion = scrollPacket.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
         top:posistion,
         behavior: 'smooth',
    })
});
nav1.addEventListener("click", function () {
    let posistion = scrollContact.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
//HERO
packetHero.addEventListener("click", function () {
    let posistion = scrollPacket.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
mailHero.addEventListener("click", function () {
    let posistion = scrollContact.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
phoneHero.addEventListener("click", function () {
    let posistion = scrollContact.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
footerEmail.addEventListener("click", function () {
    let posistion = scrollContact.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
footerPhone.addEventListener("click", function () {
    let posistion = scrollContact.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
//button
for (const button of buttons) {
    button.addEventListener("click", function () {
        let posistion = scrollContact.offsetTop;
        console.log(posistion);
        window.scrollTo({
            left:0,
            top:posistion,
            behavior: 'smooth'
        })
    });
  }
//Footer
footerFirst.addEventListener("click", function () {
    let posistion = scrollPacket.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});

footerMiddle.addEventListener("click", function () {
    let posistion =scrollPacket.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});

footerLast.addEventListener("click", function () {
    let posistion = scrollPacket.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
more.addEventListener("click", function () {
    let posistion = scrollContent.offsetTop;
    console.log(posistion);
    window.scrollTo({
        left:0,
        top:posistion,
        behavior: 'smooth'
    })
});
var btn = document.querySelector(".btn-click");
var element = document.body;

btn.addEventListener("click", function () {
   element.classList.toggle("dark");
})

