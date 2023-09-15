/* fullpage.js - layout */
// try ~ catch -> 에러 처리
const docEle = document.documentElement;
const sec = document.querySelectorAll('.sec');

for (let i = 0; i < sec.length; i++) {
    sec[i].onwheel = (e) => {
        // 기본 이벤트를 방지
        e.preventDefault();
        if (e.deltaY > 0) {
            // 마우스휠 내림
            let next = e.currentTarget.nextElementSibling.offsetTop;
            docEle.scrollTop = next;
        } else {
            // 마우스휠 올림
            let prev = e.currentTarget.previousElementSibling.offsetTop;
            docEle.scrollTop = prev;
        }
    };
}