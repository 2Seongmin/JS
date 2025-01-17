/* 회원 등록 시스템 */
const inputId = document.querySelector("#inputId");
const inputName = document.querySelector("#inputName");
const inputPhone = document.querySelector("#inputPhone");

const submitBtn = document.querySelector("#submitBtn");

let users = [];

/* 등록 버튼 클릭 */
submitBtn.addEventListener("click", () => {
    
    // 입력된 정보의 유효성 검사
    if(inputId.value.length == 0 || inputName.value.length == 0 || inputPhone.value.length == 0){
        alert("모든 필드를 입력해주세요.");
    }
    const userId = inputId.value;
    const userName = inputName.value;
    const userPhone = inputPhone.value;

    console.log(users);

    // 아이디 중복 검사 -> alert
    for(let i=0; i<users.length; i++){
        if(users[i].id == userId){
            alert("중복되는 아이디 존재");
            return;
        }
    }
    // 전화번호 중복 검사 -> alert
    for(let i=0; i<users.length; i++){
        if(users[i].phone == userPhone){
            alert("중복되는 전화번호 존재");
            return;
        }
    }

    // 조건에 모두 만족하면 users에 정보 입력
    users.push({
        id: userId,
        name: userName,
        phone: userPhone
    });
    

    /* 회원 목록 표시 */
    // tr 생성
    //
});
