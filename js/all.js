var list = document.querySelector('.list');
var send = document.querySelector('.send');
var textW = document.querySelector('.text-w')
var textH = document.querySelector('.text-h')
var dataBase = JSON.parse(localStorage.getItem('listItem')) || [];
var body = document.querySelector('body');

textH.addEventListener('change',function(){
    if(this.value <1){
        this.value=1;
    }
})
textW.addEventListener('change',function(){
    if(this.value <1){
        this.value=1;
    }
})
// add data event 
send.addEventListener('click', addData, false);
// 
list.addEventListener('click', delData, false);
// 
// body.addEventListener('keydown', delData2, false)
// 
textH.addEventListener('keydown', addData2 , false);
// 
textW.addEventListener('keydown', addData2 , false); 

textH.focus();

// add data function click
function addData(e) {
    e.preventDefault();
    var txtW = document.querySelector('.text-w').value;
    var txtH = document.querySelector('.text-h').value;
    console.log(txtW);
    console.log(txtH);
    var todo = { height: txtH, weight: txtW };
    if (txtW == '' || txtH == '') {
        alert('請輸入欄位');
        document.querySelector('.text-w').value = '';
        document.querySelector('.text-h').value = '';
    } else if (isNaN(txtW) || isNaN(txtH)) {
        alert('請輸入數字');
        document.querySelector('.text-w').value = '';
        document.querySelector('.text-h').value = '';
    } else
        dataBase.push(todo);
    localStorage.setItem('listItem', JSON.stringify(dataBase));
    updateList(dataBase);
    tableBorder();
    textH.focus();
}

// add data function keycode
function addData2(e) {
    if (e.keyCode == '13') {
        e.preventDefault();
        addData(e);
    }
}


// delete data function click
function delData(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'I' && e.target.nodeName !== 'A') { return };
    var num = e.target.dataset.num;
    console.log(e.target.dataset);
    dataBase.splice(num, 1);
    localStorage.setItem('listItem', JSON.stringify(dataBase));
    updateList(dataBase);
    tableBorder();
    console.log(dataBase.length);
    function submitColor() {
        if (dataBase.length == 0) {
            document.querySelector('.header-wrap .input-submit').style.border = '5px solid transparent';
            document.querySelector('.header-wrap .input-submit').style.backgroundColor = ' #ffd366';
            document.querySelector('.header-wrap .input-submit').style.color = '#424242';
            document.querySelector('.header-wrap .input-submit').classList.add('default-icon');
            // 
            document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
            document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#FFd366';
            document.querySelector('.header-wrap .input-submit .bmi-word').innerHTML = '看結果';
            document.querySelector('.category-word').innerHTML = '';
        }
    }
    submitColor()
}

// delete data function keycode 
// function delData2(e) {
//     if (e.keyCode == '8') {
//         e.preventDefault();
//         dataBase.splice(-1, 1);
//         localStorage.setItem('listItem', JSON.stringify(dataBase));
//         updateList(dataBase);
//         tableBorder();
//         console.log(dataBase.length);
//         function submitColor() {
//             if (dataBase.length == 0) {
//                 document.querySelector('.header-wrap .input-submit').style.border = '5px solid transparent';
//                 document.querySelector('.header-wrap .input-submit').style.backgroundColor = ' #ffd366';
//                 document.querySelector('.header-wrap .input-submit').style.color = '#424242';
//                 document.querySelector('.header-wrap .input-submit').classList.add('default-icon');
//                 // 
//                 document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
//                 document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
//                 document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
//                 document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
//                 document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
//                 document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
//                 document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#FFd366';
//                 document.querySelector('.header-wrap .input-submit .bmi-word').innerHTML = '看結果';
//                 document.querySelector('.category-word').innerHTML = '';
//             } else
//                 return
//         }
//         submitColor()
//     }
// }


// 
updateList();
function updateList(e) {
    str = '';
    var Today = new Date();
    var Time = Today.getFullYear() + "/" + (Today.getMonth() + 1) + "/" + Today.getDate();
    var txtW = document.querySelector('.text-w').value;
    var txtH = document.querySelector('.text-h').value;
    var bmiFloat = txtW / Math.pow(txtH / 100, 2);
    var bmi = bmiFloat.toFixed(2);
    var len = dataBase.length;
    function measure() {
        if ((dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 18.5) {
            document.querySelector('.header-wrap .input-submit').style.border = '5px solid #31baf9';
            document.querySelector('.header-wrap .input-submit').style.backgroundColor = '#424242';
            document.querySelector('.header-wrap .input-submit').style.color = '#31baf9';
            document.querySelector('.header-wrap .input-submit').classList.add('light-weight-icon');
            // 
            document.querySelector('.header-wrap .input-submit').classList.remove('default-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
            document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#31baf9';
            document.querySelector('.header-wrap .category-word').style.color = '#31baf9';
            return "過輕";
        } else if (18.5 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 24) {
            document.querySelector('.header-wrap .input-submit').style.border = '5px solid #86d73f';
            document.querySelector('.header-wrap .input-submit').style.backgroundColor = '#424242';
            document.querySelector('.header-wrap .input-submit').style.color = '#86D73F';
            document.querySelector('.header-wrap .input-submit').classList.add('normal-icon');
            // 
            document.querySelector('.header-wrap .input-submit').classList.remove('default-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
            document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#86D73F';
            document.querySelector('.header-wrap .category-word').style.color = '#86d73f';
            return "理想";
        } else if (24 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 27) {
            document.querySelector('.header-wrap .input-submit').style.border = '5px solid #FF982D';
            document.querySelector('.header-wrap .input-submit').style.backgroundColor = '#424242';
            document.querySelector('.header-wrap .input-submit').style.color = '#FF982D';
            document.querySelector('.header-wrap .input-submit').classList.add('over-weight-icon');
            // 
            document.querySelector('.header-wrap .input-submit').classList.remove('default-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
            document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#FF982D';
            document.querySelector('.header-wrap .category-word').style.color = '#ff982d';
            return "過重";
        } else if (27 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 30) {
            document.querySelector('.header-wrap .input-submit').style.border = '5px solid #FF6C03';
            document.querySelector('.header-wrap .input-submit').style.backgroundColor = '#424242';
            document.querySelector('.header-wrap .input-submit').style.color = '#FF6C03';
            document.querySelector('.header-wrap .input-submit').classList.add('light-fat-icon');
            // 
            document.querySelector('.header-wrap .input-submit').classList.remove('default-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
            document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#FF6C03';
            document.querySelector('.header-wrap .category-word').style.color = '#ff6c03';
            return "輕度肥胖";
        } else if (30 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 35) {
            document.querySelector('.header-wrap .input-submit').style.border = '5px solid #FF6C03';
            document.querySelector('.header-wrap .input-submit').style.backgroundColor = '#424242';
            document.querySelector('.header-wrap .input-submit').style.color = '#FF6C03';
            document.querySelector('.header-wrap .input-submit').classList.add('medium-fat-icon');
            // 
            document.querySelector('.header-wrap .input-submit').classList.remove('default-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
            document.querySelector('.header-wrap .input-submit').classList.remove('heavy-fat-icon');
            document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#FF6C03';
            document.querySelector('.header-wrap .category-word').style.color = '#ff6c03';
            return "中度肥胖";
        } else ((dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) >= 35)
        document.querySelector('.header-wrap .input-submit').style.border = '5px solid #FF1200';
        document.querySelector('.header-wrap .input-submit').style.backgroundColor = '#424242';
        document.querySelector('.header-wrap .input-submit').style.color = '#FF1200';
        document.querySelector('.header-wrap .input-submit').classList.add('heavy-fat-icon');
        // 
        document.querySelector('.header-wrap .input-submit').classList.remove('default-icon');
        document.querySelector('.header-wrap .input-submit').classList.remove('light-weight-icon');
        document.querySelector('.header-wrap .input-submit').classList.remove('normal-icon');
        document.querySelector('.header-wrap .input-submit').classList.remove('over-weight-icon');
        document.querySelector('.header-wrap .input-submit').classList.remove('light-fat-icon');
        document.querySelector('.header-wrap .input-submit').classList.remove('medium-fat-icon');
        document.querySelector('.header-wrap .input-submit i').style.backgroundColor = '#FF1200';
        document.querySelector('.header-wrap .category-word').style.color = '#ff1200';
        return "重度肥胖";
    }
    for (var i = 0; i < len; i++) {
        str += '<tr><td class="color-border">' + measure() + '</td>' + '<td>' + '<span>BMI</span>' + (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) + '</td>' + '<td>' + '<span>height</span>' + dataBase[i].height + 'cm' + '</td>' + '<td>' + '<span>weight</span>' + dataBase[i].weight + 'kg' + '</td>' + '<td>' + '<span>' + Time + '</span>' + '<a href="" data-num=' + i + '><i class="fas fa-trash-alt" data-num=' + i + ' ></i></a>' + '</td></tr>';
        document.querySelector('.header-wrap .input-submit .bmi-word').innerHTML = (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) + '<span>BMI</span>';
        document.querySelector('.category-word').innerHTML = measure();
    }
    document.querySelector('.list').innerHTML = str;
    document.querySelector('.text-w').value = '';
    document.querySelector('.text-h').value = '';
}


// 
tableBorder()
function tableBorder() {
    var len = dataBase.length;
    for (var i = 0; i < len; i++) {
        if ((dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 18.5) {
            document.querySelectorAll('.main-wrap table .color-border')[i].style.borderLeft = '5px solid #31baf9';
        } else if (18.5 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 24) {
            document.querySelectorAll('.main-wrap table .color-border')[i].style.borderLeft = '5px solid #86D73F';
        } else if (24 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 27) {
            document.querySelectorAll('.main-wrap table .color-border')[i].style.borderLeft = '5px solid #FF982D';
        } else if (27 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 30) {
            document.querySelectorAll('.main-wrap table .color-border')[i].style.borderLeft = '5px solid #FF6C03';
        } else if (30 <= (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) && (dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) < 35) {
            document.querySelectorAll('.main-wrap table .color-border')[i].style.borderLeft = '5px solid #FF6C03';
        } else if ((dataBase[i].weight / Math.pow(dataBase[i].height / 100, 2)).toFixed(2) >= 35)
            document.querySelectorAll('.main-wrap table .color-border')[i].style.borderLeft = '5px solid #FF1200';
    }
}
