
function symmetricDifference() {
    let sets = [], result = [];
    let args = Array.prototype.slice.call(arguments, 0);
    args.forEach(function(arr) {
        sets.push(new Set(arr));
    });

    args.forEach(function(array, arrayIndex) {
        array.forEach(function(item) {
            let found = false;
            for (let setIndex = 0; setIndex < sets.length; setIndex++) {
                if (setIndex !== arrayIndex) {
                    if (sets[setIndex].has(item)) {
                        found = true;
                        break;
                    }
                }
            }
            if (!found) {
                result.push(item);
            }
        });
    });
    return result;
}

let arr = symmetricDifference([1,2,3,4,5],[3,4,8,7]);
console.log(arr);
