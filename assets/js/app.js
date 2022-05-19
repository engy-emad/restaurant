var bookInput = document.querySelector(".app_book");
var bookList = document.querySelector(".app_list");
var btn = document.querySelector(".btn_add");

var clear = document.querySelector(".clear");

// function changeColor(color) {
//     li.style.background = "red";
// }
var data = ["lemon juice", "Chicken"]; // 0 1

function showData(dataText) {
    localStorage.setItem("data", JSON.stringify(data));
    bookList.innerHTML = "";
    for (var i = 0; i < dataText.length; i++) {
        bookList.innerHTML += `
            <li class="li" >
                <a href="#">${dataText[i]}</a>
                <button onclick="del(${i})">Delete</button>
                
            </li>
        `;

        localStorage.getItem("data");
    }
    // var li = document.querySelector(".li");
    // console.log(li);
    btn.addEventListener("click", function() {
        bookList.style.background = "#" + Math.random().toString(16).slice(2, 8);
    });
}

showData(data);

function addBook(e) {
    e.preventDefault();
    data.push(bookInput.value);
    showData(data);
    bookInput.value = "";
}

function del(i) {
    localStorage.setItem("data", JSON.stringify(data));
    data.splice(i, 1);
    localStorage.getItem("data");
    showData(data); // start length
}

function clearn(btn) {
    for (var i = 0; i < data.length; i++) {
        data.splice(i, 1);
    }
    clear.innerHTML = "Clear:" + i;
    showData(data);
    //bookList.innerHTML = ``;
    console.log("engy");
}

function myFunction(e) {
    bookList.innerHTML = "";

    var newDate = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].toLowerCase().includes(newDate)) {
            newDate.push(data[i]);
        }

        // newData = newData.map(function(data) {
        //     return dataText.replace(data, `<mark>${data}</mark>`);
        // });
        showData(newDate);
    }
}