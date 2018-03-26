var brain;

function setup() {
  //brain = new NeuralNetwork(3, 3, 1);
  let a = new Matrix(2, 3);
  let b = new Matrix(3, 2);
  a.randomize();
  b.randomize();
  console.table(a.matrix);
  console.table(b.matrix);
  let c = a.multiply(b);
  console.table(c.matrix);
}

function draw() {
  ellipse(0, 0, 50, 50)
}