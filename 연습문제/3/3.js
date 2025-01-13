const aValue = 2000;
const bValue = 3000;
const mValue = 5000;

const values = [aValue, bValue, mValue];

// 과일 체크박스
const aCheckbox = document.querySelector("#apple");
const bCheckbox = document.querySelector("#banana");
const mCheckbox = document.querySelector("#melon");

const checkboxes = [aCheckbox, bCheckbox, mCheckbox];

// 과일 개수 입력칸
const aCount = document.querySelector("#aCount");
const bCount = document.querySelector("#bCount");
const mCount = document.querySelector("#mCount");

const counts = [aCount, bCount, mCount];

// 결과 버튼과 결과 컨테이너
const calcBtn = document.querySelector("#btn");
const resultContainer = document.querySelector("#result");

// btn 클릭 이벤트
calcBtn.addEventListener("click", () => {
  let sum = 0; // 총합
  let resultText = ""; // 결과 텍스트

  // 체크된 과일 계산
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      const quantity = Number(counts[i].value); // 개수 가져오기
      const price = quantity * values[i]; // 가격 계산
      sum += price;

      // 과일명과 개수를 결과 텍스트에 추가
      resultText += `${checkboxes[i].nextElementSibling.textContent} ${quantity}개 `;
    }
  }

  // 결과 표시
  resultText += `의 합은 ${sum}원입니다.`;
  
  resultContainer.textContent = resultText; // 결과 영역 업데이트
});