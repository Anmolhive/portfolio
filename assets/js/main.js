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

const flyesContainer = document.getElementById("flyesContainer");
const svgContainer = document.getElementById("svgContainer");
const connectContainer = document.getElementById("connectContainer");

const heading = document.getElementById("heading");
const subHeading = document.getElementById("subHeading");
let backgroundAlpha;
let scroll = 0;
let headingTop = 90;
let subHeadingTop = 120;
let connectContainerTop = 140;
window.addEventListener("wheel", function (event) {
  var scrolledPixels = event.deltaY;
  let temp = scroll;
  scroll = scrolledPixels + scroll;
  if (scroll >= 0 && scroll < 500) {
    coralRed.setAttribute(`transform`, `translate(${scroll / 3},${scroll})`);
    turquoise.setAttribute(`transform`, `translate(-${scroll},${scroll})`);
    royalBlue.setAttribute(`transform`, `translate(-${scroll},${scroll})`);
    fuchsia.setAttribute(`transform`, `translate(-${scroll / 0.5},${scroll})`);
    vividLimeGreen.setAttribute(
      `transform`,
      `translate(-${scroll / 0.5},${scroll / 3})`
    );
    forestGreen.setAttribute(`transform`, `translate(${scroll},${scroll / 2})`);
    deepMegenta.setAttribute(
      `transform`,
      `translate(-${scroll / 2},${scroll})`
    );
    rust.setAttribute(`transform`, `translate(${scroll},${scroll})`);
    darkBlue.setAttribute(`transform`, `translate(-${scroll},${scroll})`);
    red.setAttribute(`transform`, `translate(${scroll},${scroll})`);
    blackLeaves.setAttribute(`transform`, `translate(${scroll},${scroll / 2})`);
    let blur = 0;
    if (scroll > 200) blur = scroll / 50;
    svgContainer.style.backdropFilter = `blur(${blur}px)`;
    if (scroll / 450 > 0.1 && scroll / 450 < 0.9) {
      backgroundAlpha = 1 - scroll / 450;
    }
    flyesContainer.setAttribute(
      "style",
      `background:rgba(0,0,0,${backgroundAlpha});`
    );
    if (100 - scroll / 5 > 20 && 100 - scroll / 5 < 90)
      headingTop = 100 - scroll / 5;
    heading.setAttribute(`style`, `top: ${headingTop}%;`);
    let headingOpacity = backgroundAlpha + 0.5;
    heading.style.opacity = headingOpacity;
    subHeadingTop = headingTop + headingTop / 1.2;
    subHeading.setAttribute(`style`, `top: ${subHeadingTop}%;`);
    connectContainerTop = headingTop + headingTop / 1.2 + 20;
    connectContainer.setAttribute("style", `top: ${connectContainerTop}%;`);
  } else {
    scroll = temp;
  }
});

const randemNumber = () => {
  return Math.random() * (100 - 0) + 0;
};

const setFlyeLocation = (e) => {
  // clearInterval(intervelId);
  e.setAttribute("style", `top: ${randemNumber()}%; left: ${randemNumber()}%`);
};

const intervelId1 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye1")
);
const intervelId2 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye2")
);
const intervelId3 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye3")
);
const intervelId4 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye4")
);
const intervelId5 = setInterval(
  setFlyeLocation,
  1000,
  document.getElementById("flye5")
);
const intervelId6 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye6")
);
const intervelId7 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye7")
);
const intervelId8 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye8")
);
const intervelId9 = setInterval(
  setFlyeLocation,
  3000,
  document.getElementById("flye9")
);
const intervelId10 = setInterval(
  setFlyeLocation,
  1000,
  document.getElementById("flye10")
);

