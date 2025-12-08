Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};


[1, 2, 3, 4].myFilter(x => x % 2 === 0);
// [2, 4]
