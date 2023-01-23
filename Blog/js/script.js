VANTA.BIRDS({
  el: "#intro",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 600.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  color2: 0x0,
  colorMode: "lerpGradient",
  birdSize: 2.60,
  cohesion: 47.00
})


const text = [
  'Welcome to   Blog!',
];

 let line = 0;
  let count = 0;
  let result = '';
  function typeLine() {
    let interval = setTimeout(
      () => {
        result += text[line][count]
        document.querySelector('pre').innerHTML =result +'|';


      count++;
      if (count >= text[line].length) {
        count = 0;
        line++;
        if (line == text.length) {
          clearTimeout(interval);
           document.querySelector('pre').innerHTML =result;
          return true;
        }
      }
      typeLine();
    }, getRandomInt(getRandomInt(250*2.5)))
  }
  typeLine();

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}