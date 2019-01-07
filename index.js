function findMatching(array, name){
	arr = []
    array.filter(function(el){
        var x = el.toLowerCase();
        var y = name.toLowerCase();
       if(x === y)
		arr.push(el)

    })
return arr
}

function fuzzyMatch(array, letters){
    arr = []
    array.filter(function(el){
        var x = el.slice(0,2)
        if(x.includes(letters))
        arr.push(el)
    })
    return arr
}

function matchName(array, name){
    arr = []
    array.filter(function(el){
        if(el["name"] === name)
        arr.push(el)

    })
    return arr
}