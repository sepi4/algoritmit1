function Jono() {
  this.storage = {}; // tietorakenteena objekti
  this.length = 0;
  this.first = 0;
  this.last = 0;
}

Jono.prototype.isEmpty = function() {
  if (this.length <= 0) {
    return true;
  }
  return false;
};

Jono.prototype.size = function() {
  return this.length;
};

Jono.prototype.enqueue = function(value) {
  this.storage[this.last++] = value;
  this.length++;
};

Jono.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return 'Jono on jo tyhjä!';
  }
  const el = this.storage[this.first];
  delete this.storage[this.first++];
  this.length--;
  return el;
};

Jono.prototype.front = function() {
  return this.storage[this.first];
};


let kissat = new Jono();
console.log('kissat.isEmpty():',kissat.isEmpty());

kissat.enqueue('Mikki');
kissat.enqueue('Mirri');
kissat.enqueue('Kana');
kissat.enqueue('Hirvi');

console.log('kissat.storage:',kissat.storage);
console.log('kissat.size():',kissat.size());
console.log('kissat.isEmpty():',kissat.isEmpty());
console.log('kissat.front():',kissat.front())

kissat.dequeue();
kissat.dequeue();

console.log('kissat.storage:',kissat.storage);
console.log('kissat.size():',kissat.size());

kissat.dequeue();
kissat.dequeue();
kissat.dequeue();
console.log('kissat.storage:',kissat.storage);