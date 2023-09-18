const randemNumber = () => {
  return Math.random() * (100 - 0) + 0;
};

const setFlyeLocation = (e) => {
  // clearInterval(intervelId);
  e.setAttribute("style", `top: ${randemNumber()}%; left: ${randemNumber()}%`);
};
const flyes = [];
(()=>{
  for(let i = 0; i < 40; i++) {
    flyes.push(`flye${i}`);
  }
  flyes.forEach(v => {
    setInterval(
      setFlyeLocation,
      3000,
      document.getElementById(v)
    );
  })
})()

const coralRed = document.getElementById("coral-red");
const turquoise = document.getElementById("turquoise");
const royalBlue = document.getElementById("royal-blue");
const fuchsia = document.getElementById("fuchsia");
const vividLimeGreen = document.getElementById("vivid-lime-green");
const forestGreen = document.getElementById("forest-green");
const deepMegenta = document.getElementById("deep-megenta");
const rust = document.getElementById("rust");
const darkBlue = document.getElementById("dark-blue");
const red = document.getElementById("red");
const blackLeaves = document.getElementById("black-leaves");

let scroll = 0;
window.addEventListener("wheel", function (event) {
  let scrolledPixels = event.deltaY;
  let temp = scroll;
  if (scrolledPixels + scroll > 0) scroll = scrolledPixels + scroll;
  if (scroll >= 0 && scroll < 1000) {
    let translateValue = scroll / 4;
    coralRed.setAttribute(`transform`, `translate(${translateValue / 3},${translateValue})`);
    turquoise.setAttribute(`transform`, `translate(-${translateValue},${translateValue})`);
    royalBlue.setAttribute(`transform`, `translate(-${translateValue},${translateValue})`);
    fuchsia.setAttribute(`transform`, `translate(-${translateValue / 0.5},${translateValue})`);
    vividLimeGreen.setAttribute(
      `transform`,
      `translate(-${translateValue / 0.5},${translateValue / 3})`
    );
    forestGreen.setAttribute(`transform`, `translate(${translateValue},${translateValue / 2})`);
    deepMegenta.setAttribute(
      `transform`,
      `translate(-${translateValue / 2},${translateValue})`
    );
    rust.setAttribute(`transform`, `translate(${translateValue},${translateValue})`);
    darkBlue.setAttribute(`transform`, `translate(-${translateValue},${translateValue})`);
    red.setAttribute(`transform`, `translate(${translateValue},${translateValue})`);
    blackLeaves.setAttribute(`transform`, `translate(${translateValue},${translateValue / 2})`);
  }
});
