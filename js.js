const convertBtn = document.querySelector('.btn_convertkey');
const conv = document.querySelector('.result');
const out = document.querySelector('.out')

const convertKey = key => {
    const firstPartKey = key.slice(1, Math.ceil(key.length / 2));
    const secondPartKey = key.slice(Math.ceil(key.length / 2), key.length);
    const convert = (part) => {
        const arr = [];
        for (let i = 0; i < part.length; i += 2) {
            arr.push(part.slice(i, i + 2))
        }
        return arr.join(' ');
    }

    const arr = [convert(firstPartKey), convert(secondPartKey)]
    return arr.join('  ')
}

function convertInput() {
    const inputKey = document.querySelector('.inp_convertkey');

    out.innerText = convertKey(inputKey.value);
    inputKey.value = '';
    out.select();
    document.execCommand("copy");
}
convertBtn.addEventListener('click', convertInput);


const convertBtn2 = document.querySelector('.merch_convert-btn');
const merchOut = document.querySelector('.merch_convert-out');
//[{"merchant": "S1110ZWY", "merchant": "S11103W2"}]
// [{"merchant": "S1110ZWY", "date": "24.03.2020 16:00:00"},
// {"merchant": "S11103W2", "date": "24.03.2020 16:00:00"}]

const dateInit = document.querySelector('.date');

function transform() {
    let input = document.querySelector('.merch_input').value
        .toUpperCase()
        .split('\n');

    let out = [];

    for (let i = 0; i < input.length; i++) {
        if (dateInit.value) {

            out.push(`{"merchant": "${input[i]}", "date": "${dateInit.value}"}`);
        } else {
            out.push(`{"merchant": "${input[i]}"}`);
        }
    }
    merchOut.textContent = `[${out}]`;

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
    dateInit.value = '';
}
document.querySelector('.merch_convert-clear').onclick = clear;