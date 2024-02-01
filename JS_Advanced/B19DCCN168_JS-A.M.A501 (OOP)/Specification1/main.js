class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(otherVec) {
    return new Vec(this.x + otherVec.x, this.y + otherVec.y);
  }

  subtract(otherVec) {
    return new Vec(this.x - otherVec.x, this.y - otherVec.y);
  }

  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).add(new Vec(2, 3)));
console.log(new Vec(1, 2).subtract(new Vec(2, 3)));
console.log(new Vec(3, 4).length);
