// input 너비, 높이, 글자크기, 굵기
const inputs = document.querySelectorAll(".input");

const boxWidth = document.querySelector("#boxWidth");
const boxHeight = document.querySelector("#boxHeight");

const btn = document.querySelector("#applyBtn");

const result = document.querySelector("#result");

// 처음 HTML 로딩 시 체크된 요소가 없어서 null이 저장된 상태로 고정
// const fw = document.querySelector("[name=font-weight]:checked");

// 적용 버튼 클릭 시
btn.addEventListener("click", function(){

    result.style.width = boxWidth.value + "px";
    result.style.height = boxHeight.value + "px";

    // 글자 굵기
    const fw = document.querySelector("[name=font-weight]:checked");
    // name 속성이 fw인 요소 중 체크가 되어있는 요소 1개만 선택
    // :checked -> 체크된 요소만 선택(상태 선택자);

    result.style.fontWeight = fw.value;

});