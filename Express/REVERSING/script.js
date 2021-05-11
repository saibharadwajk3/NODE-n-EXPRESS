// gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

// gsap.from(".link", {
//     duration: 1,
//     opacity: 0,
//     delay: 1,
//     stagger: 0.3,
// });

// gsap.from(".right", {
//     duration: 1,
//     x: "-100vw",
//     delay: 1,
//     ease: "power2.in",
// });

// gsap.from(".left", {
//     duration: 1,
//     x: "-100%",
//     delay: 1.5,
// });

// gsap.to(".footer", {
//     duration: 1,
//     y: 0,
//     ease: "elastic",
//     delay: 2.5,
// });

// gsap.fromTo(
//     ".button", {
//         opacity: 0,
//         scale: 0,
//         rotation: 360,
//     }, {
//         duration: 1,
//         delay: 3.5,
//         opacity: 1,
//         scale: 1,
//         rotation: 0,
//     }
// );

//timeline

//no need to add delay because events happens one ofter other based on the previous events duration ..if you want to change that time use absolute or relative delay as we did in case of right(absolute delay) and left(relative delay).

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
    .from(".header", { y: "-100%", ease: "bounce" })
    .from(".link", {
        opacity: 0,

        stagger: 0.3,
    })
    .from(
        ".right", {
            x: "-100vw",

            ease: "power2.in",
        },
        1
    ) //delay only 1s after footer dont wait for links to fade(obsolute delay-time from when timeling starts)

.from(
        ".left", {
            x: "-100%",
        },
        "<.5"
    ) //wait only .5 sec after right loads in not 1 s(relative delay)
    .to(".footer", {
        y: 0,
        ease: "elastic",
    })
    .fromTo(
        ".button", {
            opacity: 0,
            scale: 0,
            rotation: 360,
        }, {
            opacity: 1,
            scale: 1,
            rotation: 0,
        }
    );

const button = document.querySelector("button");

button.addEventListener("click", () => {
    timeline.timeScale(3); //3 time faster than wht it took to load
    timeline.reverse();
});