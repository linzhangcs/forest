let root;
let tree = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(223);

  strokeWeight(2);
  var b = createVector(width/2, height);
  var e = createVector(width/2, height - 300);
  root = new Branch(b, e, 0, 8);
  tree.push(root);
  root.render();
}

function draw() {
  stroke(0);
  //make more branhces for this tree
  // Start from end of the array to add branches
  for(var i = 0; i < tree.length; i++){
    tree[i].render();
  }
}

function mousePressed(){
  console.log("pressed");
  for(var i = tree.length - 1; i >= 0; i--){
    console.log("tree length: "+ tree.length);
    console.log(tree[i]);
    tree.push(tree[i].branch(PI/5));
    tree.push(tree[i].branch(-PI/5));
  }
}
/**This is the first iteration of the fractal tree
*/
// let branchAngle;
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(223);
//   branchAngle = PI/6;
// }
//
// function draw() {
//   // background(0);
//   stroke(0);
//   strokeWeight(12);
//   //Need to translate the origin of to (width/2, height)
//   translate(width/2, height);
//   branch(400, 1);
// }
//
// function branch(len, reclevel){
//     line(0, 0, 0, -len);
//     translate(0, -len);
//     //We can just check len here, because it's int and passed by value
//   if(len > 10){
//     console.log("len: "+ len);
//     // Push and pop to save and restore the drawing state
//     strokeWeight(8-reclevel);
//     push();
//     rotate(branchAngle);
//     branch(len*0.58, reclevel+1);
//     pop();
//     push();
//     rotate(-branchAngle);
//     branch(len*0.58, reclevel+1);
//     pop();
//     console.log("branchLevel: "+ reclevel);
//   }
// }
