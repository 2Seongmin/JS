/* 식당명 : input 상자로 바꾸기 */
const input = document.querySelector("#input");

input.addEventListener("click", () => {
    input.innerText = "";

    const inputBox = document.createElement("input");
    inputBox.className = "inputBox";
    inputBox.type = "text";

    input.replaceWith(inputBox);
});

/* 수정 버튼 클릭 -> 메뉴판 바꾸기 & 버튼 바꾸기 */
const editBtn = document.querySelector(".editBtn");
const menuContainer = document.querySelector(".menuContainer");

const addBtn = document.querySelector(".addBtn");
const deleteBtn = document.querySelector(".deleteBtn");

let MenuData = []; // 메뉴 데이터 저장 배열

const menus = document.querySelectorAll(".menu");
const menuNames = document.querySelectorAll(".menuName");
const menuPrices = document.querySelectorAll(".menuPrice");

// 초기 메뉴 데이터를 menuData 배열에 저장
menus.forEach((menu, i) => {
    MenuData.push({
        name: menuNames[i].innerText,
        price: menuPrices[i].innerText
    })
});

editBtn.addEventListener("click", () => {

    // "종료" 버튼 상태일 때
    if(editBtn.innerText === "종료"){
        editBtn.innerText = "수정";

        addBtn.classList.add("hidden");
        deleteBtn.classList.add("hidden");

        return;
    }

    // 버튼 바꾸기
    editBtn.innerText = "종료";

    addBtn.classList.remove("hidden");
    deleteBtn.classList.remove("hidden");

    // 메뉴판을 input으로 바꾸기
    menuContainer.innerHTML = "";
    const ul = document.createElement("ul");

    function menuList(){
        menus.forEach((menu, i) => {
            const li = document.createElement("li");
    
            const cb = document.createElement("input");
            cb.type = "checkbox";
            cb.className = "checkboxes";
    
            const input1 = document.createElement("input");
            input1.type = "text";
            input1.value.innerText = menu.name;
    
            const input2 = document.createElement("input");
            input2.type = "text";
            input2.value.innerText = menu.price;
    
            ul.append(li);
            li.append(cb, input1, input2);
    
            menuContainer.append(li);
        });
    };

   menuList();

});

// 추가 버튼
addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const cb = document.createElement("input");
    cb.type = "checkbox";

    const input1 = document.createElement("input");
    input1.type = "text";

    const input2 = document.createElement("input");
    input2.type = "text";

    ul.append(li);
    li.append(cb, input1, input2);
    menuContainer.append(li);
});

// 삭제 버튼
deleteBtn.addEventListener("click", () => {
    const checkboxes = document.querySelectorAll(".checkboxes");

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            menusData.splice(index, 1); // 메뉴 데이터 삭제
            checkbox.closest("li").remove(); // 화면에서 해당 메뉴 삭제
        }
    });
});