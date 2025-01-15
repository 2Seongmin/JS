/* 키패드를 누르면 입력한 번호가 #top에 나타남 */
const inputs = document.querySelectorAll(".number");
const result = document.querySelector(".top");

let phoneNumber = "";

for(let num of inputs){

    num.addEventListener("click", (e) => {

        // #top에 누른 num 값(.innerText) 입력하기
        result.innerText += e.target.innerText;    
        phoneNumber = result.innerText;    
    });

}


/* 추가 버튼 -> 전화번호 목록에 추가 */
const addBtn = document.querySelector("#addBtn");
// 전화번호 목록을 감싸는 요소
const list = document.querySelector("#listContainer");

addBtn.addEventListener("click", () => {
    // 추가 버튼 클릭 시 list 생성
    const li = document.createElement("li");
    
    const phone = document.createElement("span");
    phone.innerText = phoneNumber;

    const star = document.createElement("span");
    star.innerText = "☆"

    const span = document.createElement("span");
    span.innerHTML = "&times";

    // x (span) 클릭하면 삭제
    span.addEventListener("click", e => {
        e.target.parentElement.remove();
    });

    // star 클릭하면 phone. star 변경
    function starClick(){
        const currentColor = star.style.color;
        let newColor;
        if(currentColor === "black"){
            newColor = "orange";
            phone.style.color = "red";
        } else{
            newColor = "black";
            phone.style.color = "black";
        }
        star.style.color = newColor;
    }
    star.addEventListener("click", starClick);

    // <li> 순서 정렬
    li.append(phone, star, span);
    list.append(li);


    
});


/* 초기화 버튼 -> #top = "" */
const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", () => {
    result.innerText = "";
});
