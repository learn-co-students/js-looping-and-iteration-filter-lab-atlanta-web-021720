// Code your solution in this file

function findMatching(list, name){
   let array = [];
   for (const user of list){ 
       if (user.toLowerCase() == name.toLowerCase()){
           array.push(user)
       }}
return array
    
}

function fuzzyMatch(list, name){

    return list.filter(function(char){return name[0] === char [0]});
}

function matchName(data, name) {
    return data.filter(function(driver){
        return driver.name === name
    })
}