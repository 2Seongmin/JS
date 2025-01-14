const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {

    // /* 체크 된 것만 이용하는 코드 */
    // const fruits = document.querySelectorAll(".fruit");

    // for(let fruit of fruits){

    // }

    /* count 클릭 시점에 체크된 .fruit만 얻어오기 */
    const fruits = document.querySelectorAll(".fruit:checked");

    let str = "";

    for(let fruit of fruits){

        // 체크된 체크박스의 부모 요소를 찾은 후
        // 부모 요소의 모든 자식 요소 중 2번(span), 3번(input) 인덱스 요소
        const parent = fruit.parentElement;
        const fruitName = parent.children[1].innerText;
        const price = parent.children[2].innerText;    // 작성된 가격
        const cnt = parent.children[3].value;    // 입력된 개수 얻어오기
        
        str += `${fruitName} ${cnt}개 `;

        sum += Number(price) * Number(cnt);    // 선택된 과일의 가격  개수 변경
    }
    // 결과 출력
    document.querySelector("#result").innerText = `${str} 총합 ${sum}원`
});