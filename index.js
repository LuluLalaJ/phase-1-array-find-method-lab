// code your solution here
function superbowlWin(array) {
    if (array.find(testingObject) !== undefined) {
        return array.find(testingObject).year
    } else {
        return array.find(testingObject)
    }
    
}

//helper function 
function testingObject(element, index, array) {
    return element.result === "W" 
}

