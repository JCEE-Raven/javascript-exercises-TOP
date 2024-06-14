const repeatString = function(stringToRepeat, repeatTimes) {
    
    let stringToReturn = stringToRepeat;

    if(repeatTimes == 0) {
        return "";
        
    }else if(repeatTimes < 0) {
        return "ERROR";

    }else{
        for(let i = 1; i < repeatTimes; i++) {
            stringToReturn = stringToReturn + stringToRepeat;
        }
    
        return stringToReturn;
    }
    
    
};

// Do not edit below this line
module.exports = repeatString;
