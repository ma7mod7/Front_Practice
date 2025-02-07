const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
ScrollReveal().reveal(".container .letter-s",{
    duration:1000,
    delay:1000
})
ScrollReveal().reveal(".container img",{
    duration:1000,
    delay:1500
})
ScrollReveal().reveal(".container .text-left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});
ScrollReveal().reveal(".container .text-right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".container .EXPLORE", {
    duration: 1000,
    delay: 2500,
});
ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
});
ScrollReveal().reveal(".container .Catalog", {
    duration: 1000,
    delay: 5000,
});
ScrollReveal().reveal(".container .Print", {
    duration: 1000,
    delay: 5000,
});
