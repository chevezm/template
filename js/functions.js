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
