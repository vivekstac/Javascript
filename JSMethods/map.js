Array.prototype.myMap = function (callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        // skip empty holes in sparse arrays — real map does this
        if (this.hasOwnProperty(i)) {
            result.push(callback(this[i], i, this));
        }
    }

    return result;
};


const m = [2, 3, 4, 2, 2].myMap((e) => e * e)

console.log(m)