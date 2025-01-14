// 클릭한 숫자 값 읽어오기
const inputs = document.querySelectorAll(".number");

const result = document.querySelector("#result");

for(let num of inputs){

    // 숫자 클릭 시 이벤트
    num.addEventListener("click", (e) => {

        if(result.innerText.length >= 10){
            alert("10자까지만 입력할 수 있습니다.");
            return;
        }

        // e.target : 이벤트가 발생된 요소
        result.innerText += e.target.textContent; // 버튼 내용 누적 
    });

}

// 초기화 버튼
const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener("click", () => {

    result.innerHTML = ""; // 누적된 번호 삭제
});