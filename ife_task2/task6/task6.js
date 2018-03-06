let inputText = document.querySelector('#input-text'),
    keywords = document.querySelector('#keywords'),
    list = document.querySelector('#list'),
    data = []
//verify that the format of the num which was input is correct.

let operate = (function () {
    function textPush(x) {
        let arr = []
        arr = (inputText.innerHTML.replace('/[^a-zA-Z0-9]+/g', ' ')).split(' ')
        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement('li')
            li.innerHTML = arr[i]
            list.insertBefore(li, x)
            data.push(arr[i])
        }
    }
    function textPop(y) {
        if (list.children.length <= 0)
            alert('queue is empty')
        else
            alert(y.innerText)
        y.remove()
    }
    return {
        leftPush: function () {
            textPush(list.firstChild)
        },
        rightPush: function () {
            textPush(null)
        },
        leftPop: function () {
            textPop(list.firstChild)
        },
        rightPop: function () {
            textPop(list.lastChild)
        }
    }
})()

function searchElement() {
    let reg = new RegExp(keywords.value, "g")
    for (let i = 0; i < list.getElementsByTagName(li).length; i++) {
        list.getElementsByTagName('li')[i].innerHTML = list.getElementsByTagName('li')[i].innerHTML.replace(reg, "<span class='select'>" + keywords.value + "</span>")
    }

}

function init() {
    let btnLeftPush = document.querySelector('#left-in')
    let btnRightPush = document.querySelector('#right-in')
    let btnLeftPop = document.querySelector('#left-out')
    let btnRightPop = document.querySelector('#right-out')
    let btnSearchElement = document.querySelector('#searchElement')
    btnLeftPush.onclick = operate.leftPush
    btnRightPush.onclick = operate.rightPush
    btnLeftPop.onclick = operate.leftPop
    btnRightPop.onclick = operate.rightPop
    btnSearchElement.onclick = searchElement
}

init();

list.addEventListener('click', function (e) {
    if (event.target.nodeName.toLowerCase() === 'li') {
        elert(event.target.innerText)
        list.removeChild(event.target)
    }
})