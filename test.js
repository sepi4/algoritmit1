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

Solmu.prototype.preorder = function(callback) {
  if (this.key) {
    callback(this.key);
  }
  if (this.left) {
    this.left.preorder(callback);
  }
  if (this.right) {
    this.right.preorder(callback);
  }
};

Solmu.prototype.inorder = function(callback) {
  if (this.left) {
    this.left.inorder(callback);
  }
  if (this.key) {
    callback(this.key);
  }
  if (this.right) {
    this.right.inorder(callback);
  }
};

Solmu.prototype.postorder = function(callback) {
  if (this.left) {
    this.left.postorder(callback);
  }
  if (this.right) {
    this.right.postorder(callback);
  }
  if (this.key) {
    callback(this.key);
  }
};

function tulosta (key) {
  console.log(key);
}

let puu = new Solmu(8);
puu.insert(4);
puu.insert(12);
puu.insert(2);
puu.insert(6);
puu.insert(10);
puu.insert(14);
puu.insert(1);
puu.insert(3);
puu.insert(5);
puu.insert(7);
puu.insert(9);
puu.insert(11);
puu.insert(13);
puu.insert(15);





console.log('esijarjestyksessa tulostus:')
puu.preorder(tulosta);
console.log('-----------------');

console.log('sisajarjestyksessa tulostus:')
puu.inorder(tulosta);
console.log('-----------------');

console.log('jalkijarjestyksessa tulostus:')
puu.postorder(tulosta);
console.log('-----------------');
