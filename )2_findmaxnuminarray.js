// function maxArray(arrs) {
//     if (arrs.length === 0) {
//         return "Array is Empty";
//     }

//     let max = arrs[0];

//     for (let i = 0; i < arrs.length; i++) {
//         if (arrs[i] > max) {
//             max = arrs[i];
//         }
//     }
//     return max;
// }

// {
//     let arr = [76, 86, 9, 45, 67, 98];
//     let maxNumber = maxArray(arr);

//     console.log(`The largest Number in the arrays ${maxNumber}`);
// }

// Writ e a program for find the biggest number in the arrays
function maxArray(arr) {

    if (arr.length === 0) {
        return "Array is Empty";
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

}
{
    let number = [4, 8, 9, 7, 67, 77, 54]
    let maxNumber = maxArray(number)

    console.log(`The largest number in the Array is ${maxNumber}`);
}