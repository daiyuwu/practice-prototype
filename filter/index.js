var arr = ['a23456', 'b23', 'c2345678', 1, 2, 3];

var rs = arr.filter(v => !isNaN(v));

// console.log(rs);

Array.prototype.fakeFilter = function(inputFun, thisArg) {
    'use strict';
    if (!(((typeof inputFun === 'Function' || typeof inputFun === 'function')) && this)) throw new TypeError();

    var len = this.length,
        rs = new Array(len),
        t = this, c = 0, i = -1,
        hasThisArg = thisArg === undefined;

        while (++i < len) {
            if (i in t) {
                if (hasThisArg) {
                    if (inputFun.call(thisArg, t[i], i, t)) rs[c++] = t[i];
                } else {
                    if (inputFun(t[i], i, t)) rs[c++] = t[i];
                }
            }
        }

    rs.length = c;
    return rs;
}

var rsFake = arr.fakeFilter(v => !isNaN(v));

console.log(rsFake);