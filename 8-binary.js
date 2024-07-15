Array.prototype.br_search = function(target, start, end) {
    start = start || 0;
    end = end || this.length - 1;

    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (this[mid] === target) {
        return mid;
    }

    if (target < this[mid]) {
        return this.br_search(target, start, mid - 1);
    }
  
    else {
        return this.br_search(target, mid + 1, end);
    }
};

let array = [0, 1, 2, 3, 4, 5, 6];
console.log(array.br_search(5)); // Output: 5

