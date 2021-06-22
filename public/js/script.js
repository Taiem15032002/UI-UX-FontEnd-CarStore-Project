const large = document.querySelector('.large-img');
const small = document.querySelectorAll('.small-img');
small.forEach((item) => {
    item.onclick = () => {
       small1();
       small2();
       small3();
       small4();
       small5();
       small6();
    }

})
function small1() {
    small[0].onclick = () => {
        large.setAttribute('src', small[0].getAttribute('src'));
        small[0].classList.add('smalladd');
        small[1].classList.remove('smalladd');
        small[2].classList.remove('smalladd');
        small[3].classList.remove('smalladd');
        small[4].classList.remove('smalladd');
        small[5].classList.remove('smalladd');
    }
}
function small2() {
    small[1].onclick = () => {
        large.setAttribute('src', small[1].getAttribute('src'));
        small[1].classList.add('smalladd');
        small[0].classList.remove('smalladd');
        small[2].classList.remove('smalladd');
        small[3].classList.remove('smalladd');
        small[4].classList.remove('smalladd');
        small[5].classList.remove('smalladd');
    }
}
function small3() {
    small[2].onclick = () => {
        large.setAttribute('src', small[2].getAttribute('src'));
        small[2].classList.add('smalladd');
        small[1].classList.remove('smalladd');
        small[0].classList.remove('smalladd');
        small[3].classList.remove('smalladd');
        small[4].classList.remove('smalladd');
        small[5].classList.remove('smalladd');
    }
}
function small5() {
    small[4].onclick = () => {
        large.setAttribute('src', small[4].getAttribute('src'));
        small[4].classList.add('smalladd');
        small[1].classList.remove('smalladd');
        small[2].classList.remove('smalladd');
        small[3].classList.remove('smalladd');
        small[0].classList.remove('smalladd');
        small[5].classList.remove('smalladd');
    }
}
function small6() {
    small[5].onclick = () => {
        large.setAttribute('src', small[5].getAttribute('src'));
        small[5].classList.add('smalladd');
        small[1].classList.remove('smalladd');
        small[2].classList.remove('smalladd');
        small[3].classList.remove('smalladd');
        small[4].classList.remove('smalladd');
        small[0].classList.remove('smalladd');
    }
}
function small4() {
    small[3].onclick = () => {
        large.setAttribute('src', small[3].getAttribute('src'));
        small[3].classList.add('smalladd');
        small[1].classList.remove('smalladd');
        small[2].classList.remove('smalladd');
        small[0].classList.remove('smalladd');
        small[4].classList.remove('smalladd');
        small[5].classList.remove('smalladd');
    }
}