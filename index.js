function findMatching(array, name){
	arr = []
    array.filter(function(element){
        var x = element.toLowerCase();
        var y = name.toLowerCase();
       if(x === y)
		arr.push(element)

    })
return arr
}

function fuzzyMatch(array, letters){
    arr = []
    array.filter(function(element){
        var x = element.slice(0,2)
        if(x.includes(letters))
        arr.push(element)
    })
    return arr
}

function matchName(array, name){
    arr = []
    array.filter(function(element){
        if(element["name"] === name)
        arr.push(element)

    })
    return arr}