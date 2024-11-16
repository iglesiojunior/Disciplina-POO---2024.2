function numbers_of_array(arr) {
    var numbers = "";
    arr.forEach(function (number, index) {
        numbers += number;
        if (index != 0 || index != arr.length - 1) {
            numbers += "-";
        }
    });
    return numbers;
}
function main() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers_of_array(arr));
}
main();
