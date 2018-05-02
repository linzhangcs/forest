class Branch{
  constructor(begin, end){
    this.begin = begin;
    this.end = end;
  }
  render(){
    stroke(0);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  branch(angle){
    // get the direction vector from sub end point to the beging point
    // and rotate the vector
    // finally calcalute the new end point by adding the direction vector to the previous end
      var dir = p5.Vector.sub(this.end, this.begin);
      dir.rotate(angle);
      dir.mult(0.68);
      var fragEnd = p5.Vector.add(this.end, dir);
      var nextBranch = new Branch(this.end, fragEnd);
      return nextBranch;
  }
}
