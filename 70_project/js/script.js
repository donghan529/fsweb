// 진행률바의 스크롤 모션
const docEle = document.documentElement,
    sec = document.querySelectorAll('section'),
    pgBar = document.querySelectorAll('.progressbar')

window.onscroll = () => {
    let st = docEle.scrollTop;
    console.log(st);

    if (st > 100) {
        skill();
    }
};

function skill() {

    let i0 = 0;
    let i1 = 0;
    let i2 = 0;
    const pgTimer0 = setInterval(() => counter0(), 100);
    const pgTimer1 = setInterval(() => counter1(), 100);
    const pgTimer2 = setInterval(() => counter2(), 100);

    // idx: 0, 1, 2
    // num: %
    function counter0() {
        if (i0 >= 90) {
            clearInterval(pgTimer0)
        } else {
            i0++;
            pgBar[0].style.width = i0 + '%';
            pgBar[0].innerHTML = i0 + '%';
        }
    }
    function counter1() {
        if (i1 >= 85) {
            clearInterval(pgTimer0)
        } else {
            i1++;
            pgBar[1].style.width = i1 + '%';
            pgBar[1].innerHTML = i1 + '%';
        }
    }
    function counter2() {
        if (i2 >= 75) {
            clearInterval(pgTimer0)
        } else {
            i2++;
            pgBar[2].style.width = i2 + '%';
            pgBar[2].innerHTML = i2 + '%';
        }
    }

}; //skill();