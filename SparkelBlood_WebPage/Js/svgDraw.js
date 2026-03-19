// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(DrawSVGPlugin);
  // gsap code here!
  gsap.set("#sparkle, #blood", { visibility: "visible" });

  gsap.from("#sparkle .st1", 2, { drawSVG: 0 });
  gsap.from("#blood .st2", 2, { drawSVG: 0 });
});
