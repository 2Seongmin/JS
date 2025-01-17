/* 로또판 생성기 */
const createBtn = document.querySelector("#createBtn");
const hidden = document.querySelector(".hidden");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");

const nums = document.querySelectorAll(".num");

/* 로또판 생성 버튼 눌렀을 때, 버튼 바뀌고 판 생성 */
createBtn.addEventListener("click", () => {
    btnContainer.classList.remove("hidden");
    createBtn.classList.add("hidden");
    
    for(let num of nums){
        num.classList.remove("hidden");
    }
});

/* 숫자 눌렀을 때 */
// 배경색이 변한 요소들의 개수 count
let changeColor = 0;

nums.forEach(num => {
    num.addEventListener("click", () => {
        if(num.style.backgroundColor == "violet"){
            num.style.backgroundColor = "";
            changeColor--;
        } else{
            if(changeColor < 6){
                num.style.backgroundColor = "violet";
                changeColor++;
            } else{
                alert("6개 까지만 선택할 수 있습니다.");
            }
        }
    });
});

/* 랜덤 선택 버튼 눌렀을 때 */
randomBtn.addEventListener("click", () => {

    let repeat = setInterval(() => {
        // 랜덤 숫자 6개 저장
        let ranNums = [];
        
        while(ranNums.length < 6){
            randomNum = Math.floor(Math.random() * 45 + 1);
            console.log(randomNum);

            // 랜덤 숫자 중복 없게
            if (!ranNums.includes(randomNum)) {
                ranNums.push(randomNum);
            }
        }

        /* 랜덤으로 읽어온 숫자에 맞는 거 backgroundColor를 pink로 바꿈 */

        // 배경색 초기화
        nums.forEach(num => {
            num.style.backgroundColor = "";
        });

        /* nums의 숫자와 랜덤 번호 비교 */
        // nums 배열을 num 요소로
        nums.forEach(num => {
            // ranNums 배열을 ranNum 요소로
            ranNums.forEach(ranNum => {
                if(Number(num.innerText) === ranNum){
                    num.style.backgroundColor = "violet";
                }

            })
        });
    }, 50);
    
    // 시간 정해서 반복
    const ran = Math.floor(Math.random() * 6 + 5);
    setTimeout(() => {
        clearInterval(repeat); // 반복 종료
      }, ran * 200); // 반복 시간 조정
});

/* 초기화 버튼 눌렀을 때 */
resetBtn.addEventListener("click", () => {
    nums.forEach(num => {
        num.style.backgroundColor = "";
    });
});