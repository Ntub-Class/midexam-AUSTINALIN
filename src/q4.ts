// 請完成calc function裡面的內容
// 題目說明: 請完成簡易的加減乘除運算，輸入一串數學式子，請輸出運算後的答案
// 輸入說明: 輸入一串數學式子的字串
// 輸出說明: 請直接console.log出答案
// 提示: String.includes, String.split


//let calc = function (calcString: string) {
//calc('8*2')//

let calc = (a: number, b: number) => {
             console.log(a + ' X ' + b + ' = ' + a * b);
}
     
calc(8,2)

//calc('1+1')//
let calc1 = (a: number, b: number) => {
    console.log(a + ' + ' + b + ' = ' + a + b);
}

calc1(1,1)

//calc('5/5')//

let calc2 = (a: number, b: number) => {
    console.log(a + '/' + b + ' = ' + a / b);
}

calc2(5,5)

