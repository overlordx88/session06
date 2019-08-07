function removeDuplicates(array) {

    const result = [];
    const duplicatesIndices = [];

    // Loop through each item in the original array
    array.forEach((current, index) => {
    
        if (duplicatesIndices.includes(index)) return;
    
        result.push(current);
    
        // Loop through each other item on array after the current one
        for (let comparisonIndex = index + 1; comparisonIndex < array.length; comparisonIndex++) {
        
            const comparison = arr[comparisonIndex];
            const currentKeys = Object.keys(current);
            const comparisonKeys = Object.keys(comparison);
            
            // Check number of keys in objects
            if (currentKeys.length !== comparisonKeys.length) continue;
            
            // Check key names
            const currentKeysString = currentKeys.sort().join("").toLowerCase();
            const comparisonKeysString = comparisonKeys.sort().join("").toLowerCase();
            if (currentKeysString !== comparisonKeysString) continue;
            
            // Check values
            let valuesEqual = true;
            for (let i = 0; i < currentKeys.length; i++) {
                const key = currentKeys[i];
                if ( current[key] !== comparison[key] ) {
                    valuesEqual = false;
                    break;
                }
            }
            if (valuesEqual) duplicatesIndices.push(comparisonIndex);
            
        } // end for loop

    }); // end arr.forEach()
  
    return result;
console.log(array);

}

var array = ['Hamed','HTML', 'CSS', 'JS', 5, 12, 'CSS', 10, 12, 7, 'HTML', 'HTML'];
var output = document.getElementById('output');

const remover = array.filter((item, index, content) => {
    return content.indexOf(item) === index;
});

console.log(remover);

output.innerHTML += "pure :  var list = ['Hamed','HTML', 'CSS', 'JS', 5, 12, 'CSS', 10, 12, 7, 'HTML', 'HTML'] " + '<br>';
output.innerHTML +="edited   :  var list =  "  +  " [ " + remover  +  " ] "  + '<br>';
