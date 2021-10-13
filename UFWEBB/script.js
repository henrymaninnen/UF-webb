var contact = document.querySelector(".contact-header");
var packets = document.querySelector(".packet-header");
var readmore = document.querySelector(".content-header");
var elem = document.querySelector(".contact-header");

function scrollContact() {
    contact.scrollIntoView({ behavior: 'smooth'});   
}
function scrollPackets() {
    packets.scrollIntoView({ behavior: 'smooth'});   
}
function scrollReadMore() {
    readmore.scrollIntoView({ behavior: 'smooth'});   
}
