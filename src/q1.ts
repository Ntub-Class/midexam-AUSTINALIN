// 請完成calcWord function裡面的內容
// 題目說明: 請計算 keyword 出現在 content 中"幾次"
// 參數說明: content: 文章, keyword: 想要計算出現在文章內的字
// 輸出說明: 請回傳出現次數

//console.log(calcWord('Abcdaaeafga', 'a')) // 4

let text1: string = "Abcdaaeafga";
let text: string = "a";
let ans = 0;

let aaa = (a: string, b: string) => {
    for (a of text1) {
        
        if (a === b) {
            ans += 1;
        }
    }
    return ans
}

let result = aaa(text1, text)
console.log(`a重複了 ${result} 次`) 

//console.log(calcWord('Today is a good day!', 'o')) // 3

let kk1: string = 'Today is a good day!';
let kk: string = "o";
let kkans = 0;

let kkk = (k: string, j: string) => {
    for (k of kk1) {
        
        if (k === j) {
            kkans += 1;
        }
    }
    return kkans
}

let kresult = kkk(kk1, kk)
console.log(`o重複了 ${kresult} 次`) 

//console.log(calcWord('typescript and javascript', 's')) // 2

let ca1: string = 'typescript and javascript';
let ca: string = "s";
let caans = 0;

let ccc = (c: string, d: string) => {
    for (c of ca1) {
        if (c === d) {
            caans += 1;
        }
    }
    return caans
}

let caresult = ccc(ca1, ca)
console.log(`s重複了 ${caresult} 次`) 