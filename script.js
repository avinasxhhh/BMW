// function loco() {
//     gsap.registerPlugin(ScrollTrigger);

//     // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector(".data-scroll-container"),
//         smooth: true
//     });
//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the ".data-scroll-container" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".data-scroll-container", {
//         scrollTop(value) {
//             return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//         }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//         getBoundingClientRect() {
//             return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//         },
//         // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//         pinType: document.querySelector(".data-scroll-container").style.transform ? "transform" : "fixed"
//     });



//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();

// }


function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y,
        });
    });

    document.querySelectorAll(".swiper-slide").forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(1)",
            });
        });
        elem.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: "translate(-50%,-50%) scale(0)",
            });
        });
    });
}
cursorAnimation();

Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", { videos: ["./videos/3cars/1.mp4", "./videos/3cars/2.mp4", "./videos/3cars/3.mp4"] });


document.getElementById('menu-button').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

function navbarlogo() {
    gsap.to(".bmw-logo-text", {
        // transform: "translateY(-100%)",
        y: -44,
        scrollTrigger: {
            trigger: "nav",
            start: "top -400%",
            end: "top -50%",
            scrub: 1,
        },
    });
}
navbarlogo();

function botton() {
    var navbtn1 = document.querySelector(".navbtn1")
    var navbtn2 = document.querySelector(".navbtn2")
    var navbtn3 = document.querySelector(".navbtn3")
    var navbtn4 = document.querySelector(".navbtn4")
    var button = document.querySelector(".buttonn")
    var pbutton = document.querySelector(".pbuttonn")
    navbtn1.addEventListener("mousemove", function (dets) {
        gsap.to(".btn-text1", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    navbtn1.addEventListener("mouseleave", function (dets) {
        gsap.to(".btn-text1", {
            y: 0,
            duration: .2,
        })
    })

    navbtn2.addEventListener("mousemove", function (dets) {
        gsap.to(".btn-text2", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    navbtn2.addEventListener("mouseleave", function (dets) {
        gsap.to(".btn-text2", {
            y: 0,
            duration: .2,
        })
    })
    navbtn3.addEventListener("mousemove", function (dets) {
        gsap.to(".btn-text3", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    navbtn3.addEventListener("mouseleave", function (dets) {
        gsap.to(".btn-text3", {
            y: 0,
            duration: .2,
        })
    })
    navbtn4.addEventListener("mousemove", function (dets) {
        gsap.to(".btn-text4", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    navbtn4.addEventListener("mouseleave", function (dets) {
        gsap.to(".btn-text4", {
            y: 0,
            duration: .2,
        })
    })
    button.addEventListener("mousemove", function (dets) {
        gsap.to(".butt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    button.addEventListener("mouseleave", function (dets) {
        gsap.to(".butt", {
            y: 0,
            duration: .2,
        })
    })
    pbutton.addEventListener("mousemove", function (dets) {
        gsap.to(".pbutt", {
            y: "-0.9vw",
            duration: .2,
        })
    })
    pbutton.addEventListener("mouseleave", function (dets) {
        gsap.to(".pbutt", {
            y: 0,
            duration: .2,
        })
    })


}
botton();


function HomePageAnime() {

    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".D-home",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            marker: true
        },
        xPercent: -500,
        ease: Power4
    });

    gsap.to(".helper", {
        display: "none"
    });

    gsap.from(".vdtext", {
        y: "10vw",
        duration: 2,
        delay: 0.5
    });

    gsap.from(".videocont1", {
        scrollTrigger: {
            trigger: ".home",
        },
        width: "0%",
        '--clip': "100%",
        duration: 3.5,
        ease: "expo.out",
        delay: 2
    })



}
HomePageAnime();

function page3rd() {

    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".third",
            start: "top 30%",
            end: "bottom top",
            // markers: true,
            scrub: 1,
        },
    })

    t1.to(".thpgimg", {
        xPercent: -90,
        duration: .001
    })

}
page3rd();


function carsection() {
    const cars = [
        {
            id: 1,
            model: 'suv',
            engine: 'Full-Electric',
            type: 'i',
            name: 'THE FIRST FULLY-ELECTRIC BMW iX1',
            details: 'Starting from ₹ 6,690,000',
            img: './images/cars/img/1.png',
            detailImg: './images/cars/carimg/1.png',
            enginelogo: './images/BMW_i.png'
        },
        {
            id: 2,
            model: 'suv',
            engine: 'Full-Electric',
            type: 'i',
            name: 'THE NEW ALL-ELECTRIC BMW iX xDRIVE50',
            details: 'Starting from ₹ 13,950,000',
            img: './images/cars/img/2.png',
            detailImg: './images/cars/carimg/2.png',
            enginelogo: './images/BMW_i.png'
        },
        {
            id: 3,
            model: 'sedan',
            engine: 'Full-Electric',
            type: 'i',
            name: 'THE FULLY ELECTRIC BMW i4',
            details: 'Starting from ₹ 7,250,000',
            img: './images/cars/img/3.png',
            detailImg: './images/cars/carimg/3.png',
            enginelogo: './images/BMW_i.png'
        },
        {
            id: 4,
            model: 'sedan',
            engine: 'Full-Electric',
            type: 'i',
            name: 'THE FULLY ELECTRIC BMW i7',
            details: 'Starting from ₹ 20,300,000',
            img: './images/cars/img/4.png',
            detailImg: './images/cars/carimg/4.png',
            enginelogo: './images/BMW_i.png'
        },
        {
            id: 5,
            model: 'sedan',
            engine: 'Full-Electric',
            type: 'i',
            name: 'THE FIRST-EVER BMW i7 M70 xDRIVE',
            details: 'Starting from ₹ 25,000,000',
            img: './images/cars/img/5.png',
            detailImg: './images/cars/carimg/5.png',
            enginelogo: './images/BMW_i.png'
        },
        {
            id: 6,
            model: 'sedan',
            engine: 'Full-Electric',
            type: 'i',
            name: 'THE FIRST-EVER BMW i5 M60 xDRIVE',
            details: 'Starting from ₹ 11,950,000',
            img: './images/cars/img/6.png',
            detailImg: './images/cars/carimg/6.png',
            enginelogo: './images/Mpower.png'
        },

        {
            id: 7,
            model: 'Sports Activity Vehicle Activity Vehicle',
            engine: 'Petrol • Diesel',
            type: 'x',
            name: 'THE BMW X1',
            details: 'Starting from ₹ 4,950,000',
            img: './images/cars/img/7.png',
            detailImg: './images/cars/carimg/7.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 8,
            model: 'Sports Activity Vehicle Activity Vehicle',
            engine: 'Diesel',
            type: 'x',
            name: 'THE BMW X3',
            details: 'Starting from ₹ 7,250,000',
            img: './images/cars/img/8.png',
            detailImg: './images/cars/carimg/8.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 9,
            model: 'Sports Activity Vehicle Activity Vehicle',
            engine: 'Petrol',
            type: 'x',
            name: 'THE FIRST-EVER BMW X3 xDRIVE M40i',
            details: 'Starting from ₹ 8,770,000',
            img: './images/cars/img/9.png',
            detailImg: './images/cars/carimg/9.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 10,
            model: 'Sports Activity Vehicle',
            engine: 'Petrol',
            type: 'x',
            name: 'THE FIRST-EVER BMW X4 xDRIVE M40i',
            details: 'Starting from ₹ 9,620,000',
            img: './images/cars/img/10.png',
            detailImg: './images/cars/carimg/10.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 11,
            model: 'Sports Activity Vehicle',
            engine: 'Petrol • Diesel',
            type: 'x',
            name: 'THE NEW BMW X5',
            details: 'Starting from ₹ 9,700,000',
            img: './images/cars/img/11.png',
            detailImg: './images/cars/carimg/11.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 12,
            model: 'Sports Activity Vehicle',
            engine: 'Petrol • Diesel',
            type: 'x',
            name: 'THE BMW X7',
            details: 'Starting from ₹ 13,000,000',
            img: './images/cars/img/12.png',
            detailImg: './images/cars/carimg/12.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 13,
            model: 'Coupé',
            engine: 'Petrol',
            type: 'm',
            name: 'THE ALL-NEW BMW M2 COUPÉ',
            details: 'Starting from ₹ 9,990,000',
            img: './images/cars/img/13.png',
            detailImg: './images/cars/carimg/13.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 14,
            model: 'sedan',
            engine: 'Petrol',
            type: 'm',
            name: 'THE BMW M340i',
            details: 'Starting from ₹ 7,290,000',
            img: './images/cars/img/14.png',
            detailImg: './images/cars/carimg/14.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 15,
            model: 'Sports Activity Vehicle',
            engine: 'Petrol',
            type: 'm',
            name: 'THE FIRST-EVER BMW X3 xDRIVE M40i',
            details: 'Starting from ₹ 8,770,000',
            img: './images/cars/img/9.png',
            detailImg: './images/cars/carimg/9.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 16,
            model: 'Sports Activity Vehicle',
            engine: 'Petrol',
            type: 'm',
            name: 'THE FIRST-EVER BMW X4 xDRIVE M40i',
            details: 'Starting from ₹ 9,620,000',
            img: './images/cars/img/10.png',
            detailImg: './images/cars/carimg/10.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 17,
            model: 'sedan',
            engine: 'petrol',
            type: 'm',
            name: 'THE NEW BMW Z4 M40i',
            details: 'Starting from ₹ 9,090,000',
            img: './images/cars/img/15.png',
            detailImg: './images/cars/carimg/15.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 18,
            model: 'Coupé',
            engine: 'Petrol',
            type: 'm',
            name: 'THE BMW M8 COMPETITION COUPÉ',
            details: 'Starting from ₹ 24,400,000',
            img: './images/cars/img/16.jpg',
            detailImg: './images/cars/carimg/16.jpg',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 19,
            model: 'sedan',
            engine: 'Full-Electric',
            type: 'm',
            name: 'THE FIRST-EVER BMW i7 M70 xDRIVE',
            details: 'Starting from ₹ 25,000,000',
            img: './images/cars/img/5.png',
            detailImg: './images/cars/carimg/5.png',
            enginelogo: './images/BMW_i.png'
        },
        {
            id: 20,
            model: 'Sports Activity Vehicle',
            engine: 'Plug-in Hybrid',
            type: 'm',
            name: 'THE BMW XM',
            details: 'Starting from ₹ 26,000,000',
            img: './images/cars/img/17.png',
            detailImg: './images/cars/carimg/17.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 21,
            model: 'sedan',
            engine: 'Full-Electric',
            type: 'm',
            name: 'THE FIRST-EVER BMW i5 M60 xDRIVE',
            details: 'Starting from ₹ 11,950,000',
            img: './images/cars/img/6.png',
            detailImg: './images/cars/carimg/6.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 22,
            model: 'Coupé',
            engine: 'Petrol',
            type: 'm',
            name: 'THE NEW BMW M4 COMPETITION COUPÉ WITH M xDRIVE',
            details: 'Starting from ₹ 15,300,000',
            img: './images/cars/img/18.png',
            detailImg: './images/cars/carimg/18.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 23,
            model: 'sedan',
            engine: 'Petrol • Diesel',
            type: '7',
            name: 'THE BMW 7 SERIES SEDAN',
            details: 'Starting from ₹ 18,150,000',
            img: './images/cars/img/19.png',
            detailImg: './images/cars/carimg/19.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 24,
            model: 'sedan',
            engine: 'Petrol • Diesel',
            type: '7',
            name: 'THE BMW 7 SERIES SEDAN',
            details: 'Starting from ₹ 18,150,000',
            img: './images/cars/img/19.png',
            detailImg: './images/cars/carimg/19.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 25,
            model: 'Gran Turismo',
            engine: 'Petrol • Diesel',
            type: '6',
            name: 'THE BMW 6 SERIES GRAN TURISMO',
            details: 'Starting from ₹ 7,350,000',
            img: './images/cars/img/20.png',
            detailImg: './images/cars/carimg/20.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 26,
            model: 'sedan',
            engine: 'Petrol',
            type: '3',
            name: 'THE BMW M340i',
            details: 'Starting from ₹ 7,290,000',
            img: './images/cars/img/14.png',
            detailImg: './images/cars/carimg/14.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 27,
            model: 'sedan',
            engine: 'Petrol • Diesel',
            type: '3',
            name: 'THE BMW 3 SERIES GRAN LIMOUSINE',
            details: 'Starting from ₹ 6,060,000',
            img: './images/cars/img/21.png',
            detailImg: './images/cars/carimg/21.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 28,
            model: 'Gran Coupé',
            engine: 'Petrol • Diesel',
            type: '2',
            name: 'THE BMW 2 SERIES GRAN COUPÉ',
            details: 'Starting from ₹ 4,390,000',
            img: './images/cars/img/22.png',
            detailImg: './images/cars/carimg/22.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 29,
            model: 'Roadster',
            engine: 'Petrol',
            type: 'Z4',
            name: 'THE NEW BMW Z4 M40i',
            details: 'Starting from ₹ 9,090,000',
            img: './images/cars/img/15.png',
            detailImg: './images/cars/carimg/15.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 30,
            model: 'Coupé',
            engine: 'Petrol',
            type: 'm',
            name: 'THE NEW BMW M4 COMPETITION COUPÉ WITH M xDRIVE',
            details: 'Starting from ₹ 15,300,000',
            img: './images/cars/img/23.png',
            detailImg: './images/cars/carimg/23.png',
            enginelogo: './images/Mpower.png'
        },
        {
            id: 31,
            model: 'sedan',
            engine: 'Petrol • Diesel',
            type: '7',
            name: 'THE BMW 7 SERIES SEDAN',
            details: 'Starting from ₹ 18,150,000',
            img: './images/cars/img/24.png',
            detailImg: './images/cars/carimg/24.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 32,
            model: 'Sports Activity Vehicle Activity Vehicle',
            engine: 'Petrol',
            type: 'x',
            name: 'THE FIRST-EVER BMW X4 xDRIVE M40i',
            details: 'Starting from ₹ 9,620,000',
            img: './images/cars/img/25.png',
            detailImg: './images/cars/carimg/25.png',
            enginelogo: './images/blank.png'
        },
        {
            id: 33,
            model: 'sedan',
            engine: 'Petrol',
            type: 'm',
            name: 'THE BMW M340i',
            details: 'Starting from ₹ 7,290,000',
            img: './images/cars/img/26.png',
            detailImg: './images/cars/carimg/26.png',
            enginelogo: './images/Mpower.png'
        },
    ];

    document.addEventListener('DOMContentLoaded', () => {
        const modelButtons = document.querySelectorAll('.model-btn');
        const bodyButtons = document.querySelectorAll('.body-btn');
        const carList = document.getElementById('carList');
        const carDetails = document.getElementById('carDetails');
        let selectedCarItem = null;

        let selectedModel = 'all';
        let selectedBody = 'all';

        function renderCarList(filteredCars) {
            carList.innerHTML = '';
            filteredCars.forEach(car => {
                const li = document.createElement('li');
                li.className = 'flex items-center p-4 bg-neutral-900 rounded-md cursor-pointer hover:bg-neutral-800 transition duration-300';
                li.innerHTML = `
                    <img src="${car.img}" alt="${car.name}" class="2xl:w-40 2xl:h-20 w-40 h-20 md:w-40 md:h-20 xl:w-28 xl:h-16 object-cover rounded-lg shadow-md ">
                    <div class="ml-4">
                        <p class="md:text-[.8vw] text-[1.5vh] font-[PlanerLight]">${car.name}</p>
                        <p class="text-sm text-neutral-500">${car.engine === 'electric' ? 'Electric' : car.engine}</p>
                    </div>
                `;
                li.addEventListener('click', () => {
                    if (selectedCarItem) {
                        selectedCarItem.classList.remove('bg-[#1c1c1c]', 'ring', 'ring-[#1c1c1c]');
                    }
                    li.classList.add('bg-[#1c1c1c]', 'ring', 'ring-[#1c1c1c]');
                    selectedCarItem = li;
                    displayCarDetails(car);
                });
                carList.appendChild(li);
            });
        }


        function displayCarDetails(car) {
            carDetails.innerHTML = `
                <div class="w-14 h-8"><img class="w-full h-full object-contain" src="${car.enginelogo}" alt="enginelogo"></div>
                <h3 class=" md:text-[2vw] text-[3vh] font-semibold font-[RoganSamiBold] mb-2">${car.name}</h3>
                <p class="mb-4 md:text-[1vw] text-[2vh] font-[PlanerLight] ">${car.details}</p>
                <p class="text-gray-400 mb-4">${car.engine}</p>
                <div class="flex space-x-4 text-[4vw] xl:text-[2vh] 2xl:text-[2vh]">
                    <button class="font-[PlanerMedium] bg-white text-black md:py-2 md:px-20 py-1 px-6 rounded-r-lg rounded-bl-lg">Configure & Price</button>
                    <button class="font-[PlanerLight] border-[1px] text-white md:py-2 md:px-20 py-1 px-6 rounded-r-lg rounded-bl-lg">Find out more</button>
                </div>
                <div class="md:w-[24vw] md:h-[60vh] w-[50vw] h-[25vh]  rounded-3xl border-[1px] border-[#262626] absolute md:right-28 right-9 bottom-20 md:bottom-0"></div>
                <div class="md:w-[50vw] md:h-[30vh] w-[80vw] h-[16vh] rounded-3xl bg-[#100f0f] absolute right-14 md:bottom-8 bottom-28"></div>
                <img src="${car.detailImg}" alt="${car.name}" id="rightcar" class="z-10 md:translate-x-[10vw] md:-translate-y-[10vw] xl:translate-y-[1vw] 2xl:-translate-y-[9vw] md:w-[80vw] md:h-[30vw] h-[30vh] object-cover mb-4 rounded-md">
            `;
        }

        function filterCars() {
            const filteredCars = cars.filter(car =>
                (selectedModel === 'all' || car.type === selectedModel) &&
                (selectedBody === 'all' || car.model === selectedBody)
            );
            renderCarList(filteredCars);
        }

        modelButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.model-btn.bg-neutral-800')?.classList.remove('bg-neutral-800');
                button.classList.add('bg-neutral-800');
                selectedModel = button.getAttribute('data-model');
                filterCars();
            });
        });

        bodyButtons.forEach(button => {
            button.addEventListener('click', () => {
                document.querySelector('.body-btn.bg-neutral-800')?.classList.remove('bg-neutral-800');
                button.classList.add('bg-neutral-800');
                selectedBody = button.getAttribute('data-body');
                filterCars();
            });
        });

        // Initial render
        filterCars();
    });

}
carsection();

function swiperjs() {
    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });

    var swiper = new Swiper(".Slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    var swiper = new Swiper(".slider-left", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });
    var swiper = new Swiper(".slider-right", {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },

    });

}
swiperjs();

function page5th() {
    var clutter = "";
    document.querySelector(".textpara")
        .textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara").innerHTML = clutter;

    gsap.set(".textpara span", {
        opacity: .1
    })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".fifth",
            start: "top 10%",
            end: "bottom 20%",
            scrub: 3,
            // markers: true
        },
        opacity: 1,
        stagger: .1,
        ease: Power4
    })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".fifth",
            start: "top 70%",
            end: "bottom top",
            scrub: 1,
            // markers: true
        },

    })
    tl.to(".podimg2", {
        y: "-30vw",
        stagger: .1,
        ease: Power4
    }, "p")

    tl.to(".podtext1", {
        x: "-10vw",
        stagger: .1,
        ease: Power4
    }, "p")

    tl.to(".changing", {
        x: "15vw",
        stagger: .1,
        ease: Power4
    }, "p")

}
page5th();

function page6th() {

    const progress = document.getElementById("progress");
    const song = document.getElementById("song");
    const controlIcon = document.getElementById("controlIcon");
    const playPauseButton = document.querySelector(".play-pause-btn");
    const forwardButton = document.querySelector(".controls button.forward");
    const backwardButton = document.querySelector(".controls button.backward");
    const songName = document.querySelector(".music-player h1");
    const artistName = document.querySelector(".music-player p");

    const songs = [
        {
            title: "BMW and superheroes",
            name: "Freeing Gaia Podcast",
            source:
                "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/fat-Alexandra-Renner/fat-ar.mp3",
        },

        {
            title: "DEE MY GUEST",
            name: "An audio series about humans and machines",
            source:
                "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/dee-teaser-long.mp3",
        },

        {
            title: "CHANGING LINES",
            name: "Exclusive BMW insights",
            source:
                "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/innovation/hypnopolis2-podcast/211129_Hypnopoli2_Trailer_Master_long.mp3",
        },

        {
            title: "HYPNOPOLIS",
            name: "Sci-Fi Thriller for your ears",
            source:
                "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/innovation/hypnopolis-podcast/bmw-podcast-hypnopolis-01-podcast-00.mp3",
        },

        {
            title: "HYPNOPOLIS2",
            name: "HYPNOPOLIS 2: UTOPIA IN PROGRESS",
            source:
                "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/innovation/hypnopolis2-podcast/211129_Hypnopoli2_Trailer_Master_long.mp3",
        },


        {
            title: "CHASING THE GREENEST",
            name: "Audio documentary about sustainability BMW",
            source:
                "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/greenest-car-teaser-v3.mp3",
        },

        {
            title: "THIS IS FORWARDISM",
            name: "An audio series with the shapers of our future",
            source:
                "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/000_fwd.mp3",
        },
    ];

    let currentSongIndex = 3;

    function updateSongInfo() {
        songName.textContent = songs[currentSongIndex].title;
        artistName.textContent = songs[currentSongIndex].name;
        song.src = songs[currentSongIndex].source;

        song.addEventListener("loadeddata", function () { });
    }

    song.addEventListener("timeupdate", function () {
        if (!song.paused) {
            progress.value = song.currentTime;
        }
    });

    song.addEventListener("loadedmetadata", function () {
        progress.max = song.duration;
        progress.value = song.currentTime;
    });

    function pauseSong() {
        song.pause();
        controlIcon.classList.remove("fa-pause");
        controlIcon.classList.add("fa-play");
    }

    function playSong() {
        song.play();
        controlIcon.classList.add("fa-pause");
        controlIcon.classList.remove("fa-play");
    }

    function playPause() {
        if (song.paused) {
            playSong();
        } else {
            pauseSong();
        }
    }

    playPauseButton.addEventListener("click", playPause);

    progress.addEventListener("input", function () {
        song.currentTime = progress.value;
    });

    progress.addEventListener("change", function () {
        playSong();
    });

    forwardButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updateSongInfo();
        playPause();
    });

    backwardButton.addEventListener("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updateSongInfo();
        playPause();
    });

    updateSongInfo();

    var swiper = new Swiper(".swiper", {
        effect: "coverflow",
        centeredSlides: true,
        initialSlide: 3,
        slidesPerView: "auto",
        allowTouchMove: false,
        spaceBetween: 40,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        navigation: {
            nextEl: ".forward",
            prevEl: ".backward",
        },
    });

}
page6th();

function vdslider() {
    var t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".seventh",
            start: "top 30%",
            end: "bottom top",
            // markers: true,
            scrub: 1,
        },

    })
    t1.from("#v3", {
        scale: 1.5,
        y: "-20vw",
        duration: .5,
    }, 'a')

    t1.from("#v4", {
        y: "-15vw",
        duration: .5,
    }, 'a')
    t1.from("#v5", {
        x: "-10vw",
        duration: .5,
    }, 'a')
    t1.from("#v6", {
        y: "-10vw",
        scale: 1.5,
        duration: .5,
    }, 'a')
    t1.from("#v7", {
        y: "-10vw",
        // x:"-10vw",
        duration: .5,
    }, 'a')
    t1.from("#v8", {
        y: "-20vw",
        x: "-5vw",
        duration: .5,
    }, 'a')
    t1.from("#v9", {
        y: "-20vw",
        // x:"-5vw",
        duration: .5,
    }, 'a')
    t1.from("#v10", {
        x: "-10vw",
        duration: .5,
    }, 'a')
    t1.from("#v11", {
        y: "-7vw",
        x: "-10vw",
        duration: .5,
    }, 'a')
    t1.from("#v13", {
        y: "-7vw",
        duration: .5,
    }, 'a')
    t1.from("#v14", {
        scale: .5,
        duration: .5,
    }, 'a')


    t1.to(".ls", {
        xPercent: 90,
        duration: 1
    }, 'b')
    t1.to(".rs", {
        xPercent: -90,
        duration: 1
    }, 'b')


}
vdslider();




// loco(); 