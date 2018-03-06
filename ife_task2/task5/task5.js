let list = document.querySelector('#list'),
    inputNum = document.querySelector('#input-num')
//verify that the format of the num which was input is correct.

function verify(v) {
    let res = false
    switch (true) {
        case (v.value >= 10) && (v.value <= 100) && (list.children.length < 60):
            res = true
            break
        case list.children.length >= 60:
            alert('you have input  more than 60 numbers!')
            break
        default:/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let rows = []
    if (numRows === 0) { return rows }
    function h(preRow, lv) {
        let curRow = [1]
        for (let i = 1; i < lv; i++) {
            if (preRow[i] !== undefined) {
                curRow.concat(preRow[i - 1] + preRow[i])
            } else {
                curRow.concat(1)
            }
        }
        rows.push(curRow)
        if (lv < numRows) {
            h(curRow, lv++)
        }
    }
    h([], 1)
    return rows
};
            alert('please input a number from 10 to 100!')
    }
    return res
}

function leftIn() {
    if (verify(inputNum) === true) {
        let insert = document.createElement('li')
        insert.style.height = inputNum.value + 'px'
        list.insertBefore(insert, list.firstChild)
    }
}

function rightIn() {
    if (verify(inputNum) === true) {
        let insert = document.createElement('li')
        insert.style.height = inputNum.value + 'px'
        list.insertBefore(insert, null)
    }
}

function leftOut() {
    if (list.children.length <= 0)
        alert('queue is empty')
    else
        alert(parseInt(list.firstChild.style.height))
        list.firstChild.remove()
}

function rightOut() {
    if (list.children.length <= 0)
        alert('queue is empty')
    else
        alert(parseInt(list.lastChild.style.height))
        list.firstChild.remove()
}

function sortNums() {
    let arr = []
    for(let i = 0; i < list.children.length; i++){
        arr.push(list.children[i].style.height)
    }
    arr.sort(function(a, b){
        return parseInt(a) - parseInt(b)
    })
    for(let i = 0; i < list.children.length; i++){
        list.children[i].style.height = arr[i]
    }
}

function init() {
    let btnLeftIn = document.querySelector('#left-in')
    let btnRightIn = document.querySelector('#right-in')
    let btnLeftOut = document.querySelector('#left-out')
    let btnRightOut = document.querySelector('#right-out')
    let btnSortNums = document.querySelector('#sort-nums')
    btnLeftIn.onclick = leftIn
    btnRightIn.onclick = rightIn
    btnLeftOut.onclick = leftOut
    btnRightOut.onclick = rightOut
    btnSortNums.onclick = sortNums
}

init();

list.addEventListener('click', function () {
    if (event.target.nodeName.toLowerCase() === 'li') {
        elert(parseInt(event.target.style.height))
        list.removeChild(event.target)
    }
})