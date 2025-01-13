/* input 박스 생성 부분 */
// 입력한 개수 값
const num = document.querySelector("#num-box");
const createBtn = document.querySelector("#btn");


// 결과 상자 값
const container = document.querySelector(".container");

createBtn.addEventListener("click", () => {

    let count = num.value;

    // count 값 = input 개수
    // createElement 생성
    for(let i = 1; i <= count; i++){
    
        const input = document.createElement("input");
        input.className = "input-number";
        input.type = "number";

        container.append(input);
    }
});

const sumBtn = document.querySelector("#sumBtn");
// 결과값
const result = document.querySelector("#result");

sumBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".input-number");

    let sum = 0;

    for(let input of inputs){
        sum += Number(input.value);
    }
    // 결과 출력
    result.innerText = sum;
    
});
