function clearDisplay() {

    const display = document.getElementById('display') // 111

    display.value = ""

    console.log(display);

}



//logic building

// function lastKoDelete() {

//     const display = document.getElementById('display') //inputype

//     let displayValue = display.value  //12345 0:1 1:2 2:3

//     // displayValue = displayValue.slice(0, displayValue.length - 1)   //start index 0  index 2 ma vako lidena

//     displayValue = displayValue.slice(0, -1)

//     //789 length 3   3-1 =2

//     // index 0 ->7 1=>8 2=>9  slice(0,2) =>0,1 => 78

//     // slice(0,-1)  78



//     // 0,4 0,1,2   1234

//     display.value = displayValue



// }



function lastKoDelete() {

    const display = document.getElementById('display')

    display.value = display.value.slice(0, -1)



}





function displayGaram(num) {

    const display = document.getElementById('display')

    // display.value = display.value + num //""+1 "1"+"2" 12 +"3" =>123

    display.value += num //display.value = display.value + num

}







function calculate() {

    const display = document.getElementById('display') //2+4

    try {

        display.value = eval(display.value) //6

    } catch (error) {

        display.value = "Error"

    }

}



// const h = "hello"

// console.log(typeof h)