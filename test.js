function Solmu (key) {
  this.key = key;
  this.left = null; // muuttuvat Solmu:ksi kun saavat arvoja
  this.right = null;
}

Solmu.prototype.insert = function (key) {
  if (key > this.key) {
    if (this.right) {
      this.right.insert(key);
    } else {
      this.right = new Solmu(key);
    }
  }
  if (key <= this.key) {
    if (this.left) {
      this.left.insert(key);
    } else {
      this.left = new Solmu(key);
    }
  }
  return this;
};

let puu = new Solmu(2);
puu.insert(3);
puu.insert(33);
puu.insert(1);
puu.insert(2);
