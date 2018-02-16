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

Solmu.prototype.esi = function(callback) {
  if (this.key) {
    callback(this.key);
  }
  if (this.left) {
    this.left.esi(callback);
  }
  if (this.right) {
    this.right.esi(callback);
  }
};

Solmu.prototype.sisa = function(callback) {
  if (this.left) {
    this.left.esi(callback);
  }
  if (this.key) {
    callback(this.key);
  }
  if (this.right) {
    this.right.esi(callback);
  }
};

Solmu.prototype.jalki = function(callback) {
  if (this.left) {
    this.left.esi(callback);
  }
  if (this.right) {
    this.right.esi(callback);
  }
  if (this.key) {
    callback(this.key);
  }
};

function tulosta (key) {
  console.log(key);
}

let puu = new Solmu(6);
puu.insert(2);
puu.insert(4);
puu.insert(3);
puu.insert(5);
puu.insert(0);
puu.insert(1);
puu.insert(8);
puu.insert(7);
puu.insert(9);
puu.insert(10);





console.log('esijarjestyksessa tulostus:')
puu.esi(tulosta);
console.log('-----------------');

console.log('sisajarjestyksessa tulostus:')
puu.sisa(tulosta);
console.log('-----------------');

console.log('jalkijarjestyksessa tulostus:')
puu.jalki(tulosta);
console.log('-----------------');
