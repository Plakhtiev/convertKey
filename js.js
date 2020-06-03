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

// const merchInput = document.querySelector('.merch_input');
// const convertBtn = document.querySelector('.merch_convert-btn');
// const merchOut = document.querySelector('.merch_convert-out');