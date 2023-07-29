let mode = null;

let fun1 = function () {
    mode = 'simple';
    document.getElementById('pp').innerHTML = "Simple-BackGround-Color";
    document.body.style.backgroundColor = '#dadada'; // Reset the background color
    document.getElementById('color').innerHTML = '#FFFFFF'; // Reset the color text
    let aa = ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Pink', 'Cyan'];
    document.getElementById('btn1').addEventListener('click', () => {
        let rn = Number.parseInt(Math.floor(Math.random() * aa.length));
        document.body.style.backgroundColor = aa[rn];
        document.getElementById('color').innerHTML = aa[rn];
    })
}

document.getElementById('simple').addEventListener('click', fun1);

let fun2 = function () {
    mode = 'complex';
    document.getElementById('pp').innerHTML = 'Complex-BackGround-Color';
    document.body.style.backgroundColor = '#dadada'; // Reset the background color
    document.getElementById('color').innerHTML = '#FFFFFF'; // Reset the color text
    let bb = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    document.getElementById('btn1').addEventListener('click', () => {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            let rnn = Math.floor(Math.random() * bb.length);
            color += bb[rnn];
        }
        document.body.style.backgroundColor = color;
        document.getElementById('color').innerHTML = color;
    })
}
document.getElementById('complex').addEventListener('click', fun2);

document.querySelector("#btn1").addEventListener("click", () => {
    if (mode === null) {
        document.body.style.backgroundColor = '#ffa7bc';
        document.getElementById('pp').innerHTML = 'Please select Simple or Complex mode';
        document.getElementById('color').innerHTML = '';
    }
})


document.getElementById('color').addEventListener('click', function() {
    navigator.clipboard.writeText(this.textContent)
    .then(() => alert('Copied to clipboard'))
    .catch(err => console.log('Something went wrong', err));
});

