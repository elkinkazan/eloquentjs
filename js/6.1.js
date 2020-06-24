class Vec = {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  plus(vecV) {
    return new Vec(vecV.x + this.x, vecV.y + this.y)
  }
  minus(vecV) {
    return new Vec(this.x - vecV.x, this.y - vecV.y)
  }
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}
