//scss
import '../scss/style.scss'
//gsapの読み込み
import {gsap} from "gsap";
// gsap.registerPlugin(MotionPathPlugin, TextPlugin,ScrollTrigger);

// // 第1引数に対象、第2引数に変化させたいプロパティーと設定値を指定
// gsap.to(".rect", {scale: 1, duration: 2, ease: "power2.out", y: 300 });

// const rect = document.querySelector('.name-wrap');
// rect.addEventListener('click',function(){
//     // 繰り返し時に遅延を含める
//     gsap.to(".name-wrap", {
//         backgroundColor: "#cccccc",
//         duration: 1,
//         repeat:-1,
//     });
// })

const name = document.querySelector('.name-wrap');
console.log(name)

const tl = gsap.timeline({ xPercent :-100,repeat: -1 });
tl.to(name, {
    xPercent :100,
    duration: 3,
    ease: "none",
  });