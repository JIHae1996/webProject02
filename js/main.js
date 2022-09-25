// main.js

// top 버튼
const btnTop = document.querySelector('div.top');

window;addEventListener('scroll' , ()=>{
    let scroll = document.querySelector('html').scrollTop;
    console.log(scroll);
    if(scroll <= 0){
        btnTop.classList.remove("on","ab");
    }else if(scroll > 2400){
        btnTop.classList.add("ab");
    }else{
        btnTop.classList.remove("ab");
        btnTop.classList.add("on");
    }
})

btnTop.addEventListener('click' , e =>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});
/* content1 - 퀵메뉴 이미지 */
// for()문 이용해서 <img> 를 quick01_0000.png~quick01_0019.png 생성
// <span>안에 넣기
/*
let quick1 = "";
for(let i=0; i<20; i++){
    if(i<10){
        quick1 += `<img src="images/quick01/quick01_0000${i}.png" />`;
    }else{
        quick1 += `<img src="images/quick01/quick01_000${i}.png" />`;
    }
}
document.querySelector("span.quick1").innerHTML = quick1;
*/
const quickSpan = document.querySelectorAll('.content1>ul>li>a>span');

for(let j=0; j<quickSpan.length; j++){ //span 4개 0,1,2,3
    let images=''
    for(let i=0; i<20; i++){ //각 span안에 img 20개 생성
        if(i<10){
            images += `<img src="images/quick0${j+1}/quick0${j+1}_0000${i}.png" />`;
        }else{
            images += `<img src="images/quick0${j+1}/quick0${j+1}_000${i}.png" />`;
        }
    }
    quickSpan[j].innerHTML = images;
}

/*로그인 이미지*/

let appear= "";
for(let k=0; k<57; k++){
    if(k<10){
        appear += `<img src="images/appear/appear_0000${k}.png" />`;
    }else{
        appear += `<img src="images/appear/appear_000${k}.png" />`;
    }
}
document.querySelector("a.appear").innerHTML = appear;

let loop= "";
for(let h=0; h<82; h++){
    if(h<10){
        loop += `<img src="images/loop/loop_0000${h}.png" />`;
    }else{
        loop += `<img src="images/loop/loop_000${h}.png" />`;
    }
}
document.querySelector("a.loop").innerHTML = loop;

/*로그인 애니메이션 */
// appear 0~56개 이미지
// animation: ani 2.75s linear 0s 1;
// animation: ani 2.75s linear 0.5s 1;
// animation: ani 2.75s linear 1s 1;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
const loopImgs = document.querySelectorAll(".loop>img");
for(let i=0; i<appearImgs.length; i++){
    appearImgs[i].style.animation =`ani 2.85s linear ${i*delay}s 1`;
}
for(let j=0; j<loopImgs.length; j++){
    loopImgs[j].style.animation =`ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}



// loop 0~81개 이미지
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;

/* 고객센터 */
// toggle()
// title="고객센터 열기" -> title="고객센터 닫기"

const topMenuDD = document.querySelectorAll("dl.topMenu > dd");
topMenuDD[4].addEventListener('click' , e =>{
    e.currentTarget.classList.toggle("on");
    if (e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title", "고객센터 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title", "고객센터 열기");
    }
});

/* 주메뉴 */
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll(".gnb>ul>li");
const subMenu = document.querySelectorAll(".gnb>ul>li>ul");

for (let i = 0; i < gnbMenu.length; i++) {
    gnbMenu[i].addEventListener('mouseover' , () =>{
        // 탑메뉴에 on붙어 있으면 on을 지운다
        // 검색박스에 on붙어 있으면 on을 지운다 contains
        if (topMenuDD[4].classList.contains("on")){
            topMenuDD[4].classList.remove("on");
        }
        // 검색박스에 on붙어 있으면 검색박스의 on을 지운다
        if(srchOn.classList.contains("on")){
            srchOn.classList.remove("on");
            srchForm.classList.remove("on");
        }

        headerWrap.classList.add("on");
        subMenu.forEach(item =>{
            item.classList.add("on");
        })
    }); //mouseover
    gnbMenu[i].addEventListener('mouseout' , () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item =>{
            item.classList.remove("on");
        })
    }); //mouseout
    gnbMenu[i].children[0].addEventListener('focus' , () =>{
        headerWrap.classList.add("on");
        subMenu.forEach(item =>{
            item.classList.add("on");
        })
    }); //focus>a
    gnbMenu[i].children[0].addEventListener('blur' , () =>{
        headerWrap.classList.remove("on");
        subMenu.forEach(item =>{
            item.classList.remove("on");
        })
    }); //blur>a
}

/* 검색열기닫기 */
const srchForm = document.querySelector("form.srch");
const srchOn = document.querySelector(".srch_open");


srchOn.addEventListener('click', (e) =>{
    e.preventDefault();
    srchOn.classList.toggle("on") 
    srchOn.children[0].classList.toggle("on")
    srchForm.classList.toggle("on")

    if (e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title", "검색 입력서식 닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title", "검색 입력서식 열기");
    }
});

// 배너
const btnNext = document.querySelector('.btn_next');
const btnPrev = document.querySelector('.btn_prev');
const bnnFrame = document.querySelector('.banner_frame'); 
const bnnSection = document.querySelectorAll('.banner_frame>section'); //0~11번 섹션

const arrowA= document.querySelectorAll('.banner_arrow>a');
const rollingA = document.querySelectorAll('.banner_rolling a');
const bnn_rollA = document.querySelectorAll('.banner_rolling li a');

let bnnW= document.querySelector('body>section').offsetWidth;
window.addEventListener('resize', () =>{
    bnnW = document.querySelector('body>section').offsetWidth;
});

let bnnNum = 0; //현재 배너번호가 될 아이
let lastNum = bnnSection.length -1;

let secWhite = (bannerNumber) => {
    if(bnnSection[bannerNumber].classList.contains('white')){
        arrowA.forEach(item => {
            item.classList.add('white');
        });
        rollingA.forEach(item => {
            item.classList.add('white');
        });       
    }else{
        arrowA.forEach(item => {
            item.classList.remove('white');
        });
        rollingA.forEach(item => {
            item.classList.remove('white');
        });  
    }

    bnn_rollA.forEach(item => {
        item.classList.remove('on');
    });
    bnn_rollA[bannerNumber].classList.add('on');
}
secWhite(0);

// next버튼을 눌렀을때
// 배너번호 1증가
// 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
// 배너프레임의 left값 변경해서 배너 움직이게
btnNext.addEventListener('click',e =>{
    e.preventDefault();
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnFrame.style.left = `${-bnnNum * 100}%`;
    // bnnFrame.style.left = `${-bnnNum * bnnW}px`;

    secWhite(bnnNum);
});
// prev 버튼 눌렀을때
btnPrev.addEventListener('click',e =>{
    e.preventDefault();
    bnnNum--;
    if(bnnNum<0) bnnNum = lastNum;
    bnnFrame.style.left = `${-bnnNum * 100}%`;
    // bnnFrame.style.left = `${-bnnNum * bnnW}px`;

    secWhite(bnnNum);
});


// 오토배너 작동 - setTimeout 사용, 재귀함수 사용



let autoBanner= () =>{
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    bnnFrame.style.left = `${-bnnNum * 100}%`;
    secWhite(bnnNum);

    autoBnn= setTimeout(autoBanner,5000);
};
let autoBnn = setTimeout(autoBanner,5000);

// 배너 재생 멈춤 버튼
let flag = true;
const btnPlay = document.querySelector('.btn_play');
btnPlay.addEventListener('click', (e) => {
    e.preventDefault();
    if(flag){
        btnPlay.classList.add('pause');
        clearTimeout(autoBnn);
        flag = false;
    }else{
        btnPlay.classList.remove('pause');
        autoBnn=setTimeout(autoBanner,5000);
        flag = true;
    }
});


// 롤링버튼클릭
const bnnRollLists = document.querySelectorAll(".banner_rolling li")

for(let i=0; i<bnn_rollA.length; i++){
    bnnRollLists[i].addEventListener('click', e =>{
        clearTimeout(autoBnn);
        bnnFrame.style.left = `${-i * bnnW}px`;
       
        bnn_rollA.forEach(item => {
            item.classList.remove('on');
        });
        bnn_rollA[i].classList.add('on');
        secWhite(i);
    });
};

/* content1 - 퀵메뉴 애니메이션 */
const quicklis = document.querySelectorAll(".content1 ul li");//4개의 li

for(let k=0; k<quicklis.length; k++){
    quicklis[k].addEventListener('mouseover', (e) =>{
        for(let j=0; j<20; j++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[j].style.animation =`ani 1s linear ${delay*k}s 1`;
        };
    });
};

/*quicklis.forEach(item => {
    item.addEventListener('mouseover', (e) =>{
        for(let j=0; j<20; j++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[j].style.animation =`ani 1s linear ${delay*k}s 1`;
        };
    });
});*/


for(let k=0; k<quicklis.length; k++){
    quicklis[k].addEventListener('mouseout', (e) =>{
        for(let j=0; j<20; j++){
            let imgLi = e.currentTarget.children[0].children[0].children;
            imgLi[j].style.animation ="none";
        };
    });
};

/*스크롤 이벤트*/
window.addEventListener('scroll', () =>{
    let scroll = document.querySelector('html').scrollTop;
    //도넛
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_S = document.querySelector(".doughnut_Left_s");
    const doughnut_Left = document.querySelector(".doughnut_Left");
    const doughnut_Center_M = document.querySelector(".doughnut_Center_M");
    const doughnut_Right = document.querySelector(".doughnut_right");
    const doughnut_Right_M = document.querySelector(".doughnut_right_M");

    doughnut_Left.style.top = `${scroll*0.7}px`;
    doughnut_Left_S.style.top = `${scroll*0.5}px`;
    doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;

    doughnut_Center_M.style.top = `${1150-scroll*0.3}px`;

    doughnut_Right.style.top = `${scroll*0.6}px`;
    doughnut_Right_M.style.top = `${scroll*0.7}px`;
});

// content3
// li하나하나에 마우스 오버 하면 모든 li에 .on을 지우고, 마우스 오버한 li만 .on이 붙어라
/*for(let h=0; h<content3Li.length; h++){
    content3Li[h].addEventListener('mouseover', e =>{
        e.preventDefault();
        content3Li.forEach(item =>{
            item.classList.remove("on");
        });
        content3Li[h].classList.add('on');
    });
    content3Li[h].addEventListener('mouseout', e =>{
        e.preventDefault();
        content3Li[h].classList.remove('on');
    });
}*/
const content3Li = document.querySelectorAll(".content3_inner>div>ul>li");

var all=document.querySelectorAll(".content3_inner>div>ul>li");
all.forEach(item => {
    item.addEventListener('mouseover', e =>{
        e.currentTarget.classList.add('on');
    });
    item.addEventListener('mouseout', e =>{
        e.currentTarget.classList.remove('on');
    });
});

//li 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장(let)
// 변수값이랑 정확하게 일치하는 케이스 찾아서
//  _스위치 케이스_ 에서 해당 클래스이름에 해당되는 li만 보이게 설정한다. 
// -각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고

const group = document.querySelectorAll(".content3_inner>ul>li>a");
console.log(group)

const allLis = document.querySelectorAll(".content3_inner>div>ul>li");
const ent = document.querySelectorAll(".content3_inner>div>ul>li.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>li.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>li.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>li.box");

console.log(allLis)

// const content3Uls = document.querySelectorAll(".content3_inner>ul>li");
for(let q=0; q<group.length;q++){
    group[q].addEventListener('click',e =>{
        e.preventDefault();

        group.forEach(item =>{
        item.classList.remove('on')
        });
        e.currentTarget.classList.add('on');

        let className = e.currentTarget.parentElement.getAttribute("class")

        allLis.forEach(item =>{
            item.style.display = "none";
        });

        switch(className){
            case "allLis" :
                allLis.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "ent" :
                ent.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "shop" :
                shop.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "box" :
                box.forEach(item =>{
                    item.style.display = "block";
                });
                break;
            case "diner" :
                diner.forEach(item =>{
                item.style.display = "block";
                });
            break;
            default :
                break;
        }
    });
}

// 패밀리 사이트
const familySite = document.querySelector("dd.family_site");
familySite.addEventListener('click', e =>{
    e.preventDefault();
    e.currentTarget.classList.toggle("on");

    if(e.currentTarget.classList.contains("on")){
        e.currentTarget.children[0].setAttribute("title","닫기");
    }else{
        e.currentTarget.children[0].setAttribute("title","열기");
    }
});

// 햄버거버튼 클릭했을때
const body = document.querySelector("body")
const bg = document.querySelector("div.bg")

const mobBtn = document.querySelector(".mobBtn")
const mobBtn_Close = document.querySelector(".mobBtn_close")
const mob = document.querySelector(".mob")


mobBtn.addEventListener('click', e =>{
    e.preventDefault();
    mob.classList.add("on");
    body.classList.add("on");
    bg.classList.add("on");
    mobBtn_Close.classList.add("on");
});

mobBtn_Close.addEventListener('click', e =>{
    e.preventDefault();
    mob.classList.remove("on");
    body.classList.remove("on");
    bg.classList.remove("on");
    mobBtn_Close.classList.remove("on");
});
// 모바일 전체 메뉴
const mobDds = document.querySelectorAll("div.mob dd");

for(let f=0; f<mobDds.length; f++){
    mobDds[f].addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle("on");
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.children[0].setAttribute("title", "메뉴 닫기");
        }else{
            e.currentTarget.children[0].setAttribute("title", "메뉴 열기");
        }
    });
};


// 모바일 gnb 메뉴
const mobLis = document.querySelectorAll("nav.mob_gnb>ul>li");

for(let p=0; p<mobLis.length; p++){
    mobLis[p].addEventListener('click', (e) =>{
        e.currentTarget.classList.toggle("on");
        if (e.currentTarget.classList.contains("on")){
            e.currentTarget.children[0].setAttribute("title", "메뉴 닫기");
        }else{
            e.currentTarget.children[0].setAttribute("title", "메뉴 열기");
        }
    });
};