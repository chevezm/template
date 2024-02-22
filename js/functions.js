// Optional enable tooltips
/*
document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
});
*/


// not suitable for large data sets
function bubbleSort(array){ //descending sort
    for (let i = 0; i < array.length - 1; i++){
        for (let j = 0; j < array.length - i - 1; j++){
            if(array[j] < array[j+ 1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}

// Durstenfeld Shuffle
function shuffle(array){
    for(let i = 0; i < array.length - 1; i++){
      let rand = randInt(i, array.length - 1);
      [array[i], array[rand]] = [array[rand], array[i]];
    }
}

// Random Intenger Between Min and Max (inclusive)
function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function round(value, precision = 0){
    var multiplier = Math.pow(10, precision);
    return Math.round(value * multiplier) / multiplier;
}

function count(find, array){
    let total = 0;
    for (let elem of array) if (elem === find) total += 1;
    return total;
}
