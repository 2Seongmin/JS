/* 식당명 : input 상자로 바꾸기 */
const input = document.querySelector("#input");

input.addEventListener("click", () => {
    input.innerText = "";

    const inputBox = document.createElement("input");
    inputBox.className = "inputBox";
    inputBox.type = "text";

    //
    input = inputBox.innerHTML;
});

/* 수정 버튼 클릭 -> 메뉴판 바꾸기 & 버튼 바꾸기 */

const editBtn = document.querySelector(".editBtn");
const menuContainer = document.querySelector(".menuContainer");
const btnContainer = document.querySelector("#btnContainer");

editBtn.addEventListener("click", () => {

    if(editBtn.innerText === "종료"){
        editBtn.innerText = "수정";
        return;
    }

    editBtn.innerText = "종료";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    deleteBtn.innerText = "삭제";

    const addBtn = document.createElement("button");
    addBtn.className = "add";
    addBtn.innerText = "추가";

    btnContainer.prepend(deleteBtn, addBtn);

});