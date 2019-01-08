// Code your solution in this file
// 
function findMatching(names, name){
    return names.filter(function(n){
        return n.toLowerCase()===name.toLowerCase()
    });
};
    
function fuzzyMatch(names, letters){
    return names.filter(function(n) {
        return n.startsWith(letters)
    });
};

function matchName(names, str){
    return names.filter(function(n){
        return n.name === str
    });
};