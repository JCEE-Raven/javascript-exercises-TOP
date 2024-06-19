const removeFromArray = function(inputArray, ...toRemove) {
    let outputArray = [];

    inputArray.forEach((item) => {
        if(!toRemove.includes(item)) {
            outputArray.push(item);
        }
    })

    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
