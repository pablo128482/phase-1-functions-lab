function distanceFromHqInBlocks(distance){
// let distance = 42; 
// let distance - 42; 
// let 42 - distance;
return distance > 42 ? distance -42 : 42 - distance
}

function distanceFromHqInFeet(distance) {
// let distance = distanceFromHqInBlocks(264 feet)
// let distance2 = distanceFromHqInFeet(8 blocks)
return distanceFromHqInBlocks(distance) * 264
}
function distanceTravelledInFeet(starting, ending) {
// returns the number of feet travelled between 200 and 2000 feet, the price of 2 cent per foot
    const result = (ending - starting) * 264
    if(starting > ending) { 
        return result * -1
    } else {
        return result
}


}


function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400) {
        return 0
    } else if(distance >400 && distance < 2000) {
        return (distance - 400) * .02
    }    else if(distance > 2000 && distance < 2500) {
        return 25
    } else if(distance > 2500) {
        return 'cannot travel that far'
}
}