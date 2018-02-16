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


// Solmu.prototype.find = function (node, key) {
//   if (node === null) {
//     return false;
//   } 
//   if (node.key === key) {
//     return node;
//   } else if (key < node.key) {
//     return this.find(node.left, key);
//   } else if (key > node.key) {
//     return this.find(node.right, key);
//   }
// };

Solmu.prototype.find = function (key) {
  if (this.key === key) {
    return this;
  } else if (key < this.key) {
    if (this.left)
      return this.left.find(key);
  } else if (key > this.key) {
    if (this.right)
      return this.right.find(key);
  }
  return false;
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


Solmu.prototype.korkeus = function () {
  let vasen = 0;
  let oikea = 0;
  if (!this.left) {
    vasen = -1;
  } else {
    vasen = this.left.korkeus();
  }

  if (!this.right) {
    oikea = -1;
  } else {
    oikea = this.right.korkeus();
  }

  if (vasen > oikea) 
    return vasen + 1;
  else 
    return oikea + 1;
}

function tulosta (key) {
  console.log(key);
}

// remove node ------------
var removeNode = function (node, key) {
  if (node === null) { //{2}
    return null;
  }
  if (key < node.key) { //{3}
    node.left = removeNode(node.left, key); //{4}
    return node; //{5}
  } else if (key > node.key) { //{6}
    node.right = removeNode(node.right, key); //{7}
    return node; //{8}
  } else { // key is equal to node.key
    //case 1 - a leaf node
    if (node.left === null && node.right === null) { //{9}
      node = null; //{10}
      return node; //{11}
    }
    //case 2 - a node with only 1 child
    if (node.left === null) { //{12}
      node = node.right; //{13}
      return node; //{14}
    } else if (node.right === null) { //{15}
      node = node.left; //{16}
      return node; //{17}
    }
    //case 3 - a node with 2 children
    var aux = findMinNode(node.right); //{18}
    node.key = aux.key; //{19}
    node.right = removeNode(node.right, aux.key); //{20}
    return node; //{21}
  }
};

var findMinNode = function (node) {
  while (node && node.left !== null) {
    node = node.left;
  }
  return node;
};
// -----------------

let puu = new Solmu(8);
puu.insert(4)
  .insert(12)
  .insert(2)
  .insert(6)
  .insert(10)
  .insert(14)
  .insert(1)
  .insert(3)
  .insert(5)
  .insert(7)
  .insert(9)
  .insert(11)
  .insert(13)
  .insert(15)
  .insert(16)
  .insert(17)
  .insert(18)


console.log('esijarjestyksessa tulostus:')
puu.preorder(tulosta);
console.log('-----------------');

console.log('sisajarjestyksessa tulostus:')
puu.inorder(tulosta);
console.log('-----------------');

console.log('jalkijarjestyksessa tulostus:')
puu.postorder(tulosta);
console.log('-----------------');

console.log('puun korkeus',puu.korkeus());
console.log('-----------------');
console.log('etsinta puusta:', puu.find(11));
console.log('-----------------');


console.log(puu);
// removeNode(puu, 8);
// console.log(puu);
// removeNode(puu, 9);
// console.log(puu);
// removeNode(puu, 10);
// console.log(puu);