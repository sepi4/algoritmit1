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

// hakutietue h, osoitin p ja sen edeltaja q
// kandidaattisolmu c ja sen edeltaja cp


const poista = function (node, key) {
  if (node === null) 
    return node;
  if (key < node.key) {
    node.left = poista(node.left, key);
    return node; // paivittaa isanta solun
  } else if (key > node.key) {
    node.right = poista(node.right, key);
    return node; // paivittaa isanta solun
  } else { // ===
    // viimeisen solmun poisto 
    if (node.right === null && node.left === null) {
      node = null;
      return node; // paivittaa isanta solun
    }

    // yhden lapsen solmun poisto
    if (node.right === null) {
      node = node.left;
      return node;
    } 
    if (node.left === null) {
      node = node.right;
      return node;
    }

    // kahden lapsen solmun poisto
    function maxNode(node) {
      while (node && node.right) {
        node = node.right;
      }
      return node;
    }
    node.key = maxNode(node.left).key;
    node.left = poista(node.left, node.key);
    return node;
  }

};

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
poista(puu, 4)
console.log(puu);
// poista(puu, 1)
// console.log(puu);
// poista(puu, 2)
// console.log(puu);

// console.log(puu);
// removeNode(puu, 9);
// console.log(puu);
// removeNode(puu, 10);
// console.log(puu);