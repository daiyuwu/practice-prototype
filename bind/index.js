Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') throw new TypeError();
    var aArgs = Array.prototype.clice.call(arguments, 1),
        fToBind = this,
        fNOP = function() {},
        fBound = function() {
            return fToBind.apply(this instanceof fNOP 
                ? this 
                : oThis, 
                aArgs.concat(Array.prototype.slice.call(arguments)));
        };

        if (this.prototype) {
            fNOP.prototype = this.prototype;
        }
        fBound.prototype = new fNOP();

        return fBound;
}