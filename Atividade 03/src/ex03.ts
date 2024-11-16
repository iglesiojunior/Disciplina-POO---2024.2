function numbers_of_array(arr:number[]):string{
    let numbers:string = ""

    arr.forEach((number, index ) => {
        numbers += number
        if(index != 0 || index != arr.length ){
            numbers += "-"
        } 
    });

    return numbers
}

function main(){

    let arr: number[] = [1,2,3,4,5,6,7,8,9,10]

    console.log(numbers_of_array(arr))

}
main()