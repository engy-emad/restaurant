// all varibles

var images = [
        "../assets/img/food3.jpg",
        "../assets/img/food4.jpg",
        "../assets/img/food5.jpg",
        "../assets/img/xupdate3.jpg",
    ],
    i = 0,
    orderInput = document.querySelector(".app_order"),
    menuList = document.querySelector(".app_list"),
    clear = document.querySelector(".clear"),
    searchInput = document.querySelector(".search"),
    data = ["pazia", "Chicken"];

// function change image

function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", 1500);
}
window.onload = changeImg;

// function  show data

function showData(dataToRender) {
    if (!dataToRender.length) {
        menuList.innerHTML = `
  <li>
        <p class="text_red">You don't have any Meal to show up </p>
  </li>
  `;

        return;
    }

    localStorage.setItem("data", JSON.stringify(data));
    menuList.innerHTML = "";

    dataToRender.forEach((order, index) => {
        menuList.innerHTML += `
      <li >
          <span>${order}</span>
          <button onclick="del(${index})">Delete</button>
          
      </li>
  `;

        localStorage.getItem("data");
    });
}

function countOrder() {
    clear.innerHTML = "Clear:" + data.length;
}
countOrder();
showData(data);

//function add order

function addOrder(e) {
    e.preventDefault();
    if (!orderInput.value || !data) {
        return;
    }
    data.push(orderInput.value);
    countOrder();
    showData(data);
    orderInput.value = "";
}

// function delete order

function del(index) {
    localStorage.setItem("data", JSON.stringify(data));
    data.splice(index, 1);
    localStorage.getItem("data");
    countOrder();
    showData(data); // start length
}

//function clear order

function clearn(btn) {
    data.forEach((index) => {
        data.splice(index);
        countOrder();
    });

    showData(data, i);
}

// function  search order

function search() {
    menuList.innerHTML = "";
    var text = searchInput.value.toLowerCase();
    var matchDate = [];

    if (!text) {
        showData(data);
        return;
    }

    matchDate = data.filter((order) => {
        return order.toLowerCase().includes(text);
    });

    matchDate = matchDate.map((order) => {
        return order.toLowerCase().replace(text, `<mark>${text}</mark>`);
    });

    clear.innerHTML = "Clear:" + matchDate.length;
    showData(matchDate);
}