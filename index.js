// Code your solution in this file 


function findMatching(list, name) {
    return list.filter(function (x){
        return x.toLowerCase() === name.toLowerCase();
    });
}
 
function fuzzyMatch(names, letters) {
    return names.filter(function (x) {
        return x.startsWith(letters)

    });
}


function matchName(names, str) {
    return names.filter(function(x) {
        return x.name === str 
    });
}


