let FG = "#111111";
let BG = "#f1f1f1";
let img;

function setup() {
  createCanvas(500, 700);
  background(BG);
  //image(img, 0, 0);
  img = loadImage("./img/woman.jpeg");
  //filter(INVERT);
  img.resize(1000, 1000);
}

function draw() {
  background(220);
  fill(FG);
  noStroke();

  let ratio = float(height) / float(width);
  let tilesX = map(500, 0, width, 10, 100);
  let tilesY = ratio * tilesX;
  let tileSize = width / tilesX;

  for (let y = 0; y < img.height; y += tileSize) {
    for (let x = 0; x < img.width; x += tileSize) {
      let c = img.get(x, y);
      let b = map(brightness(c), 0, 255, 1, 0);

      push();
      translate(x, y);
      rect(0, 0, b * tileSize, b * tileSize);
      pop();
    }
  }
}
