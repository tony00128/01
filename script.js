let btn = document.getElementById('test');
let num = document.getElementById('change');

btn.addEventListener('click', () => {　 // 監聽此元素是否被點擊，若被點擊則執行內容
    alert("點到我了");                     // 跳出「點到我了」視窗                  // 設為禁止點擊
    btn.style.color = "red";
    let randnum = Math.random();
    num.textContent = randnum;
});
