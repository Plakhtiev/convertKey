const convertBtn = document.querySelector('.btn_convertkey');
const conv = document.querySelector('.result');
const out = document.querySelector('.out')

function convertKey() {
    let inputKey = document.querySelector('.inp_convertkey');
    let result = '';
    for (let i = 0; i < inputKey.value.length; i = i + 2) {
        let char = inputKey.value.slice(i, i + 2);
        result = `${result} ${char}`;
    }
    const key = result;
    let begin = key.slice(1, result.length / 2);
    let end = key.slice(result.length / 2, result.length);
    out.innerText = `${begin} ${end}`;
    inputKey.value = '';
    out.select();
    document.execCommand("copy");
}
convertBtn.addEventListener('click', convertKey);


const convertBtn2 = document.querySelector('.merch_convert-btn');
const merchOut = document.querySelector('.merch_convert-out');
//[{"merchant": "S1110ZWY", "merchant": "S11103W2"}]


function transform() {
    let input = document.querySelector('.merch_input').value
        .toUpperCase()
        .split('\n');
    let out = [];
    for (let i = 0; i < input.length; i++) {
        out.push(`{"merchant": "${input[i]}"}`);
    }
    merchOut.textContent = out;
    console.log(merchOut);
}

document.querySelector('.merch_convert-btn').onclick = transform;

function copy() {
    let textArea = document.querySelector('.merch_convert-out');
    textArea.select();
    document.execCommand("copy");
}
document.querySelector('.merch_convert-copy').onclick = copy;

function clear() {
    document.querySelector('.merch_input').value = '';
    merchOut.textContent = '';
}
document.querySelector('.merch_convert-clear').onclick = clear;