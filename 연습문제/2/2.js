// 클릭한 숫자 값 읽어오기
const inputs = document.querySelectorAll(".container > .number");

const result = document.querySelector("#result");

for(let i = 0; i < inputs.length; i++){

    // 숫자 클릭 시 이벤트
    inputs[i].addEventListener("click", () => {

        const number = Number(inputs[i].textContent);
        
        // 결과값 출력
        const span = document.createElement("span");
        span.innerText = number;

        result.append(span);
        
    });

}

// 초기화 버튼
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {

    result.innerHTML = "";
});