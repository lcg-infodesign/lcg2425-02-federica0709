function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  //frameRate(5);
  margin=30; //tutti i margini hanno dimensione 30
}

function windowResized() {
  // per ridimensionare la tela quando cambiano le dimenioni della finestra
  resizeCanvas(windowWidth, windowHeight);
  redraw(); 
}
function draw() {

  background("darkblue");
  fill("white");
   //let color = random(["yellow","pink", "grey"]);
   //fill(color);
  noStroke();
  drawStars();
}

function drawStars() {

  let gridSize = 50; // dimensione cella della griglia
  let oGutter = 30; // gutter orizzontale
  let vGutter = 30; // gutter verticale
  
  // ciclo for per popolare la griglia di stelle
  for (let xOff = margin + gridSize; xOff < windowWidth - margin; xOff += gridSize + oGutter) {
    for (let yOff = margin + gridSize; yOff < windowHeight - margin; yOff += gridSize + vGutter) {
     drawStar(xOff,yOff);
    }
  }
}

function drawStar(xOff,yOff) {
  push(); // Save the current drawing style and transformation matrix
  // numero dei vertici casuale scelto tra questi 5
  let vertici = random([8, 10, 18, 24, 34]); 
  let scaleFactor = random(0.2,1);
  let rotazione=random(TWO_PI);

  // trasformazione di scaling e rotation che modifica le dimensioni e l'inclinazione delle stelle
  translate(xOff,yOff); // necessaria per far ruotare la stella intorno al proprio centro
  rotate(rotazione);
  scale(scaleFactor);

  //disegna la forma
   beginShape();
    for (let i = 0; i < vertici; i++) {
      let angolo = i * TWO_PI / vertici;
      //a condizione i%2 === 0 è vera se i è pari (resto di i/2 uguale a 0(); 
      //se la condizione è vera raggio diventa 30, altrimenti diventa 10.
      let raggio = (i % 2 === 0) ? 30 : 10; // Use 30 for even vertices, 10 for odd
      //x e y settano le coordinate del verice della stella, 
      //cioè il suo centro 
      let x = cos(angolo) * raggio;
      let y = sin(angolo) * raggio;
      vertex(x, y); // la posizione del centro della stella
     }
   endShape(CLOSE);

  pop(); // Restore the previous drawing state
}



