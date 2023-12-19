// Code your solution here

function findMatching(inArray, string){

    return inArray.filter(function (drivername) {
        return drivername.toUpperCase() === string.toUpperCase();
    });

}


function fuzzyMatch(inArray, prefix){

    return inArray.filter(function (drivername) {
        return drivername.slice(0,prefix.length) === prefix;
    });

}


function matchName(inArray, string){

    return inArray.filter(function( element){
        return element.name === string;
    })

}
