<script setup>
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative, FreeMode, Navigation, Autoplay } from "swiper/modules";
import 'lilasia-icons/dist/style.css'
import Icon from 'lilasia-icons'
import { ref , onMounted,  onUnmounted} from 'vue';


import Logo from "/images/logo.png";
import Slide1 from "/images/slide-1.png";
import Slide2 from "/images/slide-2.jpg";
import Slide3 from "/images/slide.jpg";
import Flowers from "/images/icon/dress.svg";
import Cake from "/images/icon/cakes.svg";
import Decoration from "/images/icon/decoration.svg";
import Catering from "/images/icon/makeup.svg";
import Photo from "/images/icon/camera.svg";
import Entertainment from "/images/icon/entertainment.svg";
import Car from "/images/icon/cars.svg";
import Invitation from "/images/icon/invitations.svg";
import Package1 from "/images/package1.png";
import Package2 from "/images/package6.jpg";

import Profile from "/images/profile.jpg";
import Copyright from "/images/logo-copyright.png"
import SlideMobile1 from "/images/slider-mobile-1.png"
import SlideMobile2 from "/images/slider-mobile-2.jpg"
import SlideMobile3 from "/images/slider-mobile-3.jpg"
import Quote from "/images/icon/quote.svg"




const isMenuOpen = ref(false);
const isPopupVisible = ref(false);
const imageSrc = ref('');
const currentIndex = ref(0);
const scrolled = ref(false);
const showBackToTop = ref(false);


const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
  showBackToTop.value = window.scrollY > 300; 
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})


const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;

}

const openPopup = (index) => {
      currentIndex.value = index;
      imageSrc.value = slides[index].src;
      isPopupVisible.value = true;
    };

    const closePopup = () => {
      isPopupVisible.value = false;
      imageSrc.value = '';
    };

    const prevImage = () => {
      if (currentIndex.value > 0) {
        currentIndex.value = currentIndex.value - 1;
        imageSrc.value = slides[currentIndex.value].src;
      }
    };

    const nextImage = () => {
      if (currentIndex.value < slides.length - 1) {
        currentIndex.value = currentIndex.value + 1;
        imageSrc.value = slides[currentIndex.value].src;
      }
    };

const slides = [
      { src: '/images/house-of-lea-images-01.jpg', alt: 'Gallery Image 1' },
      { src: '/images/house-of-lea-images-02.jpg', alt: 'Gallery Image 2' },
      { src: '/images/house-of-lea-images-03.jpg', alt: 'Gallery Image 3' },
      { src: '/images/house-of-lea-images-04.jpg', alt: 'Gallery Image 4' },
      { src: '/images/house-of-lea-images-05.jpg', alt: 'Gallery Image 5' },
    ];


 

</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=DM Serif Display' rel='stylesheet'>

 
    <!-- navbar start -->

    <nav :class="['navbar', { scrolled }]" class="navbar xs:px-8  sm:pr-36 sm:px-8  sm:pl-8 md:px-4 xl:px-32 lg:px-3 lg:text-sm xl:text-lg  text-gray flex justify-between items-center top-0 left-0 right-0 font-light text-xl py-1 sticky bg-yellow-light z-50">
    <img :src="Logo" class="navbar-logo lg:ps-0  " alt="" />

    <div class="navbar-nav hidden sm:hidden md:hidden lg:flex xl:flex gap-14 lg:gap-5 xl:gap-14 font-montserrat font-normal">
      <a href="#whatwedo" class="transition ease-in-out  hover:bg-brown  py-2 px-3 hover:text-white hover:-translate-y-1 duration-300">What We Do</a>
      <a href="#packageoffer" class="transition ease-in-out hover:bg-brown  py-2 px-3 hover:text-white hover:-translate-y-1 duration-300">Packages</a>
      <a href="#testimonial" class="transition ease-in-out hover:bg-brown  py-2 px-3 hover:text-white hover:-translate-y-1  duration-300">Testimonials</a>
      <a href="#photogallery" class="transition ease-in-out hover:bg-brown  py-2 px-3 hover:text-white hover:-translate-y-1  duration-300">Photo Gallery</a>
      <a href="#getintouch" class="transition ease-in-out hover:bg-brown  py-2 px-3 hover:text-white hover:-translate-y-1  duration-300">Get in Touch</a>
    </div>

    <div class="navbar-extra flex ">
      <a href="//wa.me/081217537878" class="xs:hidden sm:hidden md:hidden lg:block xl:block transition font-montserrat uppercase ease-in-out border border-brown bg-white text-brown p-2 px-3 hover:border-white hover:bg-brown hover:text-white hover:-translate-y-1  duration-300">Contact Us</a>
      <button @click="toggleMenu" class="ml-2 md:ml-0 sm:block md:block lg:hidden xl:hidden  border border-brown flex justify-center py-3  md:py-2  font-bold text-brown  text-center items-center xs:px-4 sm:px-4 md:px-3 sm:mr-3 md:mr-0 bg-white hover:border-white hover:text-white hover:bg-brown ">
        <Icon name="menu" />        
      </button>
    </div>

    <!-- Off-canvas menu -->
    <transition name="slide-fade-right">
      <div v-if="isMenuOpen" class="fixed inset-0 z-50 flex justify-end sm:flex md:flex lg:hidden">
        <div class="bg-gray  opacity-75 w-full h-full absolute inset-0" @click="toggleMenu"></div>
        <div class="bg-yellow-light p-5 rounded-l-lg  w-3/4 h-full relative flex flex-col gap-4 z-50 font-montserrat font-normal">

          <div class="flex flex-col gap-4   basis-4/5" >

        
          <div class=" flex  items-center " >
            <button @click="toggleMenu" class="self-start  hover:bg-gray hover:bg-opacity-45 hover:text-gray-light hover:rounded-full py-2 px-2 flex justify-center text-center items-center">
            <Icon name="close" />
          </button>
          <div class="text-brown text-4xl font-serif uppercase text-center font-semibold  w-full " >Menu</div>
          </div>
        
          <a href="#whatwedo" @click="toggleMenu" class="text-gray text-xl font-montserrat  bg-brown-light py-4 px-4 border border-brown flex  items-center gap-2 hover:bg-brown hover:text-white hover:border-white  rounded-lg"> <Icon name="chevron_right" size="20"/>
           <div>
            What We Do
           </div></a>
           <a href="#packageoffer" @click="toggleMenu" class="text-gray text-xl font-montserrat  bg-brown-light py-4 px-4 border border-brown flex  items-center gap-2  hover:bg-brown hover:text-white hover:border-white  rounded-lg "> <Icon name="chevron_right" size="20" />
           <div>
            Packages
           </div></a>
           <a href="#testimonial" @click="toggleMenu" class="text-gray text-xl font-montserrat  bg-brown-light py-4 px-4 border border-brown flex  items-center gap-2 hover:bg-brown hover:text-white hover:border-white  rounded-lg "> <Icon name="chevron_right" size="20" />
           <div>
            Testimonials
           </div></a>
           <a href="#photogallery" @click="toggleMenu" class="text-gray text-xl font-montserrat bg-brown-light py-4 px-4 border border-brown flex  items-center gap-2 hover:bg-brown hover:text-white hover:border-white  rounded-lg "> <Icon name="chevron_right" size="20" />
           <div>
            Photo Gallery
           </div></a>
           <a href="#getintouch" @click="toggleMenu" class="text-gray text-xl bg-brown-light py-4 px-4 border border-brown flex  items-center gap-2 hover:bg-brown hover:text-white hover:border-white  rounded-lg "> <Icon name="chevron_right" size="20" />
           <div>
            Get in Touch
           </div></a>
          </div>
          
          <div class="flex justify-center items-center"> 
           <img :src="Copyright" alt="" width="250" height="200" class="" >
          </div>
        </div>
      </div>
    </transition>
  </nav>

    <!-- navbar end -->
    <div class="main bg-yellow-light min-h-screen font-montserrat">
    <!-- hero start -->
    <section class="hero">
      <div class="">
        <swiper
          id="heroSlider"
          navigation
          grab-cursor
          :loop="false"
          :centered-slides="true"
          :space-between="20"
          :modules="[EffectCreative, Navigation, FreeMode, Autoplay]"
          :autoplay="{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
          }"
          direction="horizontal"
          class="mySwiper"
        >
          <swiper-slide>
            <img :src="Slide1" alt="" class="slide object-cover w-full h-720 sm:hidden xs:hidden md:block lg:block" />
            <img :src="SlideMobile1" alt="" class="slide object-cover w-full h-640 sm:block xs:block md:hidden lg:hidden" />

          </swiper-slide>

          <swiper-slide>
            <img :src="Slide2" alt="" class="slide object-cover w-full  h-720 sm:hidden xs:hidden md:block lg:block " />
            <img :src="SlideMobile2" alt="" class="slide object-cover w-full h-640 sm:block xs:block md:hidden lg:hidden" />

          </swiper-slide>

          <swiper-slide>
            <img :src="Slide3" alt="" class="slide object-cover w-full  h-720 sm:hidden xs:hidden md:block lg:block" />
            <img :src="SlideMobile3" alt="" class="slide object-cover w-full h-640 sm:block xs:block md:hidden lg:hidden" />

          </swiper-slide>

          <swiper-slide>
            <img :src="Slide1" alt="" class="slide object-cover w-full h-720 sm:hidden xs:hidden md:block lg:block" />
            <img :src="SlideMobile1" alt="" class="slide object-cover w-full h-640 sm:block xs:block md:hidden lg:hidden" />

          </swiper-slide>

          <swiper-slide>
            <img :src="Slide2" alt="" class="slide object-cover w-full  h-720 sm:hidden xs:hidden md:block lg:block " />
            <img :src="SlideMobile2" alt="" class="slide object-cover w-full h-640 sm:block xs:block md:hidden lg:hidden" />

          </swiper-slide>

          <swiper-slide>
            <img :src="Slide3" alt="" class="slide object-cover w-full  h-720 sm:hidden xs:hidden md:block lg:block" />
            <img :src="SlideMobile3" alt="" class="slide object-cover w-full h-640 sm:block xs:block md:hidden lg:hidden" />

          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- hero end -->

    <!-- what we do start -->
    <section
      class="whatwedo    flex flex-col justify-center items-center text-center mt-10  mx-auto sm:px-8 xs:px-8 md:px-8 lg:px-10 xl:px-80"
      id="whatwedo"
    >
      <div
        class="title text-brown uppercase  text-5xl mb-6  font-dmserif "
      >
        What We Do?
      </div>

      <div class=" font-montserrat  text-light-dark mb-6 text-lg font-normal ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Voluptatum sunt perferendis molestias illum illo dolores, ipsa modi
        quibusdam harum.
      </div>

      <div class="service grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  md:w-full ">
        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8  flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Flowers" alt="flower-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif text-xl md:text-xl lg:text-xl xs:text-3xl sm:text-3xl  text-gray text-center "
          >
            Wedding Gown
          </div>
          <div class=" lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark">
            We provide beautiful floral arrangements that will add elegance and charm to your special day. Our expert florists craft stunning bouquets and decorations to match your wedding theme perfectly.
          </div>
        </div>

        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Cake" alt="cake-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif text-xl text-gray text-center md:text-xl lg:text-xl xs:text-3xl sm:text-3xl "
          >
            Cakes
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark">
            Indulge in our exquisite wedding cakes, customized to your taste and style. From classic designs to modern masterpieces, our cakes are not only visually stunning but also deliciously unforgettable.
          </div>
        </div>
        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Catering" alt="flower-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif text-xl text-gray text-center  md:text-xl lg:text-xl xs:text-3xl sm:text-3xl "
          >
            Makeup
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark">
            Experience culinary excellence with our top-notch catering services. We offer a variety of gourmet menus, tailored to your preferences, ensuring your guests enjoy a delightful dining experience.
          </div>
        </div>

        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Decoration" alt="flower-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif  text-xl text-gray text-center  md:text-xl lg:text-xl xs:text-3xl sm:text-3xl "
          >
            Decorations
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg font-montserrat text-light-dark">
            Transform your venue into a dream setting with our exceptional decoration services. We bring your vision to life with meticulous attention to detail, creating a magical atmosphere for your celebration.
          </div>
        </div>

        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Photo" alt="flower-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif text-xl text-gray text-center  md:text-xl lg:text-xl xs:text-3xl sm:text-3xl"
          >
            Photos & Videos
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark">
            Capture every precious moment with our professional photo and video services. Our talented team ensures that your memories are beautifully preserved, providing you with timeless keepsakes.
          </div>
        </div>

        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img
            :src="Entertainment"
            alt="flower-icon"
            width="70"
            class="mx-auto"
          />
          <div
            class="card-title uppercase font-dmserif text-xl text-gray text-center  md:text-xl lg:text-xl xs:text-3xl sm:text-3xl "
          >
            Entertainments
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark">
            Keep your guests entertained with our diverse entertainment options. From live bands and DJs to unique performers, we offer the perfect entertainment to suit your wedding's vibe.
          </div>
        </div>

        <div
          class="card md:max-w-[273] lg:max-w-[273] border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Car" alt="flower-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif text-2xl text-gray text-center  md:text-xl lg:text-xl xs:text-3xl sm:text-3xl "
          >
            Cars
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark">
            Arrive in style with our luxurious wedding car services. Choose from a fleet of elegant vehicles to make a grand entrance and a memorable exit on your special day.
          </div>
        </div>

        <div
          class="card md:max-w-[273] lg:max-w-[273]  border border-brown p-4 xs:p-8 sm:p-8 flex flex-col gap-3 bg-brown-light"
        >
          <img :src="Invitation" alt="flower-icon" width="70" class="mx-auto" />
          <div
            class="card-title uppercase font-dmserif text-xl text-gray text-center  md:text-xl lg:text-xl xs:text-3xl sm:text-3xl "
          >
            Invitations
          </div>
          <div class="lg:text-sm  md:text-sm xs:text-lg sm:text-lg  font-montserrat text-light-dark" >
            Set the tone for your wedding with our custom-designed invitations. Our creative designs reflect your personal style and provide your guests with a beautiful preview of your big day.
          </div>
        </div>
      </div>
    </section>
    <!-- what we do end -->

    <!-- Package offer start -->
    <section class="packageoffer xs:px-4 sm:px-4 md:px-8" id="packageoffer">
      <div
        class="title  text-brown uppercase text-5xl mb-12  mx-auto text-center mt-16   font-dmserif"
      >
        Packages offered
      </div>

      <div class=" xs:hidden sm:hidden md:flex lg:flex ">
        <swiper
          id="packageSlider"
          navigation
          grab-cursor
          :loop="false"
          :centered-slides="true"
          :space-between="50"
          :modules="[EffectCreative, Navigation, FreeMode]"
          direction="horizontal"
          class="mySwiper"
        > 
        
          <swiper-slide>
            <div class="px-24 flex  justify-center gap-2  xl:gap-5 lg:gap-1 md:gap-0 md:px-0 lg:px-2 xl:px-24    md:max-h-920 xl:max-h-800 lg:max-h-840   ">
              <div class="flex flex-col  text-center gap-3 px-16 md:w-600 md:px-5 lg:px-10  xl:px-16 h-auto ">
                <div
                  class="text-brown uppercase text-2xl  font-dmserif mb-3 xl:mb-8 lg:mb-3 mb- pt-0"
                >
                  Diamond Package
                </div>
                <div class="uppercase font-dmserif text-xl text-gray">
                  Packages Includes:
                </div>

                <div class=" flex flex-col gap-2 text-light-dark text-lg">
                  <p>2 Outer For Morning & Night Look</p>
                  <p>Veil and accessories</p>
                  <p>2 Mom Growns</p>
                  <p>2 Prewedding Growns</p>
                  <p>Engagement Growns</p>
                  <p>Bridal Robe</p>
                </div>
                <div class="flex flex-col gap-2 text-light-dark text-lg">
                  <p>Make Up Bride By Lea</p>
                  <p>2 Makeup and Haido Mom by Team</p>
                  <p>2 Makeup and Hairdo Bridesmaid/Sister by Team</p>
                  <p>Makeup and Hairdo Groom by Team</p>
                  <p>1x Test Makeup Bride Retouch Included</p>
                  <p>Retouch Included</p>
                </div>
                <div class=" mt-2 text-light-dark">Alpared Rent For Wedding day</div>

                <div
                  class="uppercase text-2xl font-dmserif  mt-2 xl:mt-8 xl:mb-5 mb-2 text-gray"
                >
                  Price Start From
                </div>
                <div
                  class="py-5 px-28 border border-brown bg-brown-light font-light rounded-bl-xl rounded-tr-xl "
                >
                  <div class="uppercase font-dmserif text-2xl  text-gray">
                    45 MIO
                  </div>
                  <p class="text-light-dark">Custom New Wedding Grown</p>
                </div>
              </div>
              <img
                :src="Package1"
                alt=""
                class="package-image object-cover lg:w-500 xl:w-650 md:w-300 h-auto"
              />
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="px-24 flex  justify-center gap-2  xl:gap-5 lg:gap-1 md:gap-0 md:px-0 lg:px-2 xl:px-24    md:max-h-920 xl:max-h-800 lg:max-h-840   ">
              <div class="flex flex-col  text-center gap-3 px-16 md:w-600 md:px-5 lg:px-10  xl:px-16 h-auto ">
                <div
                  class="text-brown uppercase text-2xl  font-dmserif mb-3 xl:mb-8 lg:mb-3 mb- pt-0"
                >
                  Diamond Package
                </div>
                <div class="uppercase font-dmserif text-xl text-gray">
                  Packages Includes:
                </div>

                <div class=" flex flex-col gap-2 text-light-dark text-lg">
                  <p>2 Outer For Morning & Night Look</p>
                  <p>Veil and accessories</p>
                  <p>2 Mom Growns</p>
                  <p>2 Prewedding Growns</p>
                  <p>Engagement Growns</p>
                  <p>Bridal Robe</p>
                </div>
                <div class=" flex flex-col gap-2 text-light-dark text-lg">
                  <p>Make Up Bride By Lea</p>
                  <p>2 Makeup and Haido Mom by Team</p>
                  <p>2 Makeup and Hairdo Bridesmaid/Sister by Team</p>
                  <p>Makeup and Hairdo Groom by Team</p>
                  <p>1x Test Makeup Bride Retouch Included</p>
                  <p>Retouch Included</p>
                </div>
                <div class=" mt-2 text-light-dark">Alpared Rent For Wedding day</div>

                <div
                  class="uppercase text-2xl font-dmserif  mt-2 xl:mt-8 xl:mb-5 mb-2 text-gray"
                >
                  Price Start From
                </div>
                <div
                  class="py-5 px-28 border border-brown bg-brown-light font-light rounded-bl-xl rounded-tr-xl "
                >
                  <div class="uppercase font-dmserif text-2xl  text-gray">
                    45 MIO
                  </div>
                  <p class="text-light-dark">Custom New Wedding Grown</p>
                </div>
              </div>
              <img
                :src="Package1"
                alt=""
                class="package-image object-cover lg:w-500 xl:w-650 md:w-300 h-auto"
              />
            </div>
          </swiper-slide>

        </swiper>
      </div>

      <div class="xs:block  sm:block md:hidden lg:hidden " >
        <swiper
          id="packageSliderMobile"
          navigation
          grab-cursor
          :loop="false"
          :centered-slides="true"
          :space-between="20"
          :modules="[EffectCreative, Navigation, FreeMode]"
          direction="horizontal"
          class="mySwiper"
        > 
        
         

          <swiper-slide>
            <div class="px-4  flex flex-col justify-center gap-5">
              <img
                :src="Package1"
                alt=""
                class=" object-cover package-sm "
              />
              <div class="flex flex-col text-center gap-3 px-4 ">
                <div
                  class="text-brown uppercase text-4xl  font-dmserif  mb-3"
                >
                  Diamond Package
                </div>
                <div class="uppercase font-dmserif  text-xl text-gray">
                  Packages Includes:
                </div>

                <div class=" flex flex-col gap-2 mt-3 text-lg font-montserrat text-light-dark">
                  <p>2 Outer For Morning & Night Look</p>
                  <p>Veil and accessories</p>
                  <p>2 Mom Growns</p>
                  <p>2 Prewedding Growns</p>
                  <p>Engagement Growns</p>
                  <p>Bridal Robe</p>
                </div>
                <div class=" flex flex-col gap-2 mt-3 text-lg font-montserrat text-light-dark">
                  <p>Make Up Bride By Lea</p>
                  <p>2 Makeup and Haido Mom by Team</p>
                  <p>2 Makeup and Hairdo Bridesmaid/Sister by Team</p>
                  <p>Makeup and Hairdo Groom by Team</p>
                  <p>1x Test Makeup Bride Retouch Included</p>
                  <p>Retouch Included</p>
                </div>
                <div class="text-light-dark mt-2 text-lg font-montserrat ">Alpared Rent For Wedding day</div>

                <div
                  class="uppercase text-2xl font-dmserif text-gray  mt-4 mb-4"
                >
                  Price Start From
                </div>
                <div
                  class="py-5 px-28 border border-brown bg-brown-light font-light rounded-bl-lg rounded-tr-lg"
                >
                  <div class="uppercase font-dmserif text-2xl  text-gray">
                    45 MIO
                  </div>
                  <div class="text-lg text-light-dark">Custom New Wedding Grown</div>
                </div>
              </div>
             
            </div>
          </swiper-slide>

          <swiper-slide>
            <div class="px-4 flex flex-col justify-center gap-5">
              <img
                :src="Package2"
                alt=""
                class=" border border-brown object-cover package-sm"
              />
              <div class="flex flex-col text-center gap-3 px-4 ">
                <div
                  class="text-brown uppercase text-4xl font-dmserif  mb-3"
                >
                  Diamond Package
                </div>
                <div class="uppercase font-dmserif  text-xl text-gray">
                  Packages Includes:
                </div>

                <div class=" flex flex-col gap-2 mt-3 text-lg font-montserrat text-light-dark">
                  <p>2 Outer For Morning & Night Look</p>
                  <p>Veil and accessories</p>
                  <p>2 Mom Growns</p>
                  <p>2 Prewedding Growns</p>
                  <p>Engagement Growns</p>
                  <p>Bridal Robe</p>
                </div>
                <div class="flex flex-col gap-2 mt-3 text-lg font-montserrat text-light-dark">
                  <p>Make Up Bride By Lea</p>
                  <p>2 Makeup and Haido Mom by Team</p>
                  <p>2 Makeup and Hairdo Bridesmaid/Sister by Team</p>
                  <p>Makeup and Hairdo Groom by Team</p>
                  <p>1x Test Makeup Bride Retouch Included</p>
                  <p>Retouch Included</p>
                </div>
                <div class=" mt-2 font-montserrat text-light-dark">Alpared Rent For Wedding day</div>

                <div
                  class="uppercase text-2xl font-dmserif  mt-4 mb-4 text-gray"
                >
                  Price Start From
                </div>
                <div
                  class="py-5 px-28 border font-montserrat border-brown bg-brown-light font-light rounded-bl-lg rounded-tr-lg "
                >
                  <div class="uppercase  text-2xl  font-dmserif text-gray">
                    45 MIO
                  </div>
                  <p class="text-light-dark" >Custom New Wedding Grown</p>
                </div>
              </div>
             
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- Package offer end -->

    <!-- interested start -->
     <section class="interested bg-orange-dark mt-16 xs:block sm:block md:hidden lg:hidden  flex justify-center text-center items-center " id="interested">
      <div class="  h-80 flex flex-col justify-center text-center items-center ">
          <div class="uppercase text-5xl text-gray font-dmserif" >Interested?</div>
          <a href="//wa.me/081217537878" class=" mt-8 text-2xl transition uppercase ease-in-out border border-brown bg-white text-brown  py-4 px-8 active:text-white hover:border-white hover:bg-brown hover:text-white hover:-translate-y-1  duration-300">Contact Us</a>


      </div>

     </section>
     <!-- interested end -->

    <!-- testimonials start -->
    <section
      class="testimonials   mt-16  flex flex-col justify-center items-center text-center mx-auto pb-5 sm:px-8 xs:px-8 md:px-8 lg:px-10 xl:px-80  "
      id="testimonial"
    >
      <div
        class="title text-brown uppercase  text-5xl mb-6  font-dmserif"
      >
        Testimonials
      </div>
      <div class=" font-montserrat text-light-dark mb-6 text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
        Voluptatum sunt perferendis molestias illum illo dolores, ipsa modi
        quibusdam harum.
      </div>
      <div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
        <div class="flex flex-col gap-4 xs:pb-0 sm:pb-0  md:pb-6 lg:pb-6 xl:pb-6 text-lg">
          <div
            class="testimonial-card md:max-w-[330] lg:max-w-[330]  p-8 bg-white flex flex-col justify-center font-light border border-brown"
          >
          <div class="text-start"> <img :src="Quote" alt="quote" width="20"></div>

            <div class="text-start font-montserrat text-gray">
              Lorem ipsum dolor sit amet consectetur. Elementum sem purus cursus nunc ipsum id nulla magna. Et mattis sapien varius sed ultricies bibendum turpis sollicitudin.
            </div>
            <div class="flex gap-3 text-start mt-4">
              <img
                :src="Profile"
                class="rounded-full w-11 h-11"
                alt="testimonial-photo"
              />
              <div class="flex justify-center items-center text-center  font-montserrat text-gray" >
                Rico Kaboom
              </div>
            </div>
          </div>

          <div
            class="testimonial-card md:max-w-[330] lg:max-w-[330]  p-8 bg-white flex flex-col justify-center font-light border border-brown"
          >
          <div class="text-start"> <img :src="Quote" alt="quote" width="20"></div>
            <div class="text-start font-montserrat text-gray">
              Lorem ipsum dolor sit amet consectetur. Elementum sem purus cursus nunc ipsum id nulla magna. Et mattis sapien varius sed ultricies bibendum turpis sollicitudin.
            </div>
            <div class="flex gap-3 text-start mt-4">
              <img
                :src="Profile"
                class="rounded-full w-11 h-11"
                alt="testimonial-photo"
              />
              <div class="flex justify-center items-center text-center font-montserrat text-gray">
                Rico Kaboom
              </div>
            </div>
          </div>

          
        </div>

        <div class="flex flex-col gap-4  pb-10 text-lg">
          <div
            class="testimonial-card md:max-w-[330] lg:max-w-[330]   p-8 bg-white flex flex-col justify-center font-light border border-brown"
          >
            <div class="text-start"> <img :src="Quote" alt="quote" width="20">
            </div>
            <div class="text-start text-lg font-montserrat text-gray">
              Lorem ipsum dolor sit amet consectetur. Nibh odio volutpat amet metus volutpat at convallis. Posuere lorem facilisi congue interdum ultricies dis aliquam. Urna eu nam eget amet. Amet varius donec amet sed quis orci. Arcu massa pellentesque augue gravida duis eget quis. Est odio in.
            </div>
            <div class="flex gap-3 text-start mt-4">
              <img
                :src="Profile"
                class="rounded-full w-11 h-11"
                alt="testimonial-photo"
              />
              <div class="flex justify-center items-center text-center text-lg font-montserrat text-gray">
                Rico Kaboom
              </div>
            </div>
          </div>

          <div
            class="testimonial-card md:max-w-[330] lg:max-w-[330]   p-8 bg-white flex flex-col justify-center font-light border border-brown xs:hidden sm:hidden md:flex lg:flex"
          >
          <div class="text-start"> <img :src="Quote" alt="quote" width="20"></div>

            <div class="text-start font-montserrat text-gray">
              Lorem ipsum dolor sit amet consectetur. Nibh lobortis egestas tristique tristique risus montes. Amet viverra amet cum lectus et condimentum bibendum vitae ornare. Sem ac dui elit sed. Pellentesque habitant aenean aenean at nunc.
             
            </div>
            <div class="flex gap-3 text-start mt-4">
              <img
                :src="Profile"
                class="rounded-full w-11 h-11"
                alt="testimonial-photo"
              />
              <div class="flex justify-center items-center text-center font-montserrat text-gray">
                Rico Kaboom
              </div>
            </div>
          </div>

         
        </div>

        <div class="flex xs:hidden sm:hidden md:flex lg:flex flex-col gap-4 text-lg">
          <div
            class="testimonial-card md:max-w-[330] lg:max-w-[330]   p-8 bg-white flex flex-col justify-center font-light border border-brown"
          >
          <div class="text-start"> <img :src="Quote" alt="quote" width="20"></div>

          <div class="text-start font-montserrat text-gray">
            Lorem ipsum dolor sit amet consectetur. Adipiscing gravida arcu tempor ac turpis elementum maecenas ac. Ornare habitasse sed lectus ornare velit tempor  
            </div>
            <div class="flex gap-3 text-start mt-4">
              <img
                :src="Profile"
                class="rounded-full w-11 h-11"
                alt="testimonial-photo"
              />
              <div class="flex justify-center items-center text-center font-montserrat text-gray">
                Rico Kaboom
              </div>
            </div>
          </div>

          <div
            class="testimonial-card md:max-w-[330] lg:max-w-[330]   p-8 bg-white flex flex-col justify-center font-light border border-brown"
          >
          <div class="text-start"> <img :src="Quote" alt="quote" width="20"></div>

          <div class="text-start font-montserrat text-gray">
            Lorem ipsum dolor sit amet consectetur. Adipiscing gravida arcu tempor ac turpis elementum maecenas ac. Ornare habitasse sed lectus ornare velit tempor quisque sed fermentum. Lacus libero lorem sit feugiat at risus cum iaculis. Erat sed ullamcorper.
            </div>
            <div class="flex gap-3 text-start mt-4">
              <img
                :src="Profile"
                class="rounded-full w-11 h-11"
                alt="testimonial-photo"
              />
              <div class="flex justify-center items-center text-center font-montserrat text-gray">
                Rico Kaboom
              </div>
            </div>
          </div>

         
        </div>
      </div>
    </section>
    <!-- testimonials end -->

    <!-- Photo Gallery start  -->
    <section class="photogallery  " id="photogallery">
      <div
        class="container title text-brown uppercase  text-5xl mb-10 mt-16 mx-auto flex  justify-center text-center font-dmserif"
      >
        Photo Gallery
      </div>

      <div class="relative mx-auto flex justify-center xs:hidden sm:hidden md:flex lg:flex ">
    <swiper
      id="gallerySlider"
      navigation
      grab-cursor
      :slides-per-view="3"
      :loop="false"
      :centered-slides="true"
      :initial-slide="1"
      :modules="[EffectCreative, Navigation, FreeMode, Autoplay]"
      direction="horizontal"
      class="mySwiperGallery"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="images-slider object-cover border border-brown"
          @click="openPopup(index)"
        />
      </swiper-slide>
    </swiper>

  </div>

  <div class="relative mx-auto flex justify-center md:hidden lg:hidden sm:flex xs:flex">
    <swiper
      id="gallerySliderMobile"
      navigation
      grab-cursor
      :slides-per-view="1.1"
      :loop="false"
      :centered-slides="true"
      :initial-slide="1"
     :space-between="3"
      :modules="[EffectCreative, Navigation, FreeMode, Autoplay]"
      direction="horizontal"
      class="mySwiperGallery"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="images-slider image-gallery-mobile object-cover  px-2"
          @click="openPopup(index)"
        />
      </swiper-slide>
    </swiper>

  </div>

  <div v-if="isPopupVisible" class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="fixed inset-0 bg-black bg-opacity-80" @click="closePopup"></div>
    <div class="relative  p-4 rounded-lg  z-60 max-w-4xl mx-auto flex items-center justify-center">
      <!-- <span class="absolute top-2 right-2 text-4xl cursor-pointer" @click="closePopup">&times;</span> -->
      <button @click="prevImage" :disabled="currentIndex === 0" class="absolute  left-10 text-4xl hover:bg-brown hover:text-white  text-brown bg-white border border-brown   flex justify-center items-center"><Icon name="chevron_left" size="40"
        :class="{ 'cursor-not-allowed opacity-50': currentIndex === 0 }"

        /></button>
      <img :src="imageSrc" alt="Full Screen Image" class="  max-w-full   aspect-3/4  max-h-[90vh] mx-4 items-center" />
      <button @click="nextImage"  :disabled="currentIndex === slides.length - 1" 
      :class="{ 'cursor-not-allowed opacity-50': currentIndex === slides.length - 1 }"
      class="absolute right-10 text-4xl text-brown  bg-white border border-brown hover:bg-brown hover:text-white   flex justify-center items-center"><Icon name="chevron_right" size="40"/></button>
    </div>
  </div>
    
    </section>
    <!-- Photo Gallery end  -->

    <!-- contact start -->
    <section class="contact   mt-16 flex flex-col justify-center items-center text-center mx-auto pb-10" id="getintouch">

      <div
        class="title text-brown uppercase  text-5xl mb-6 font-dmserif"
      >
        Get In Touch
      </div>
      <div class="flex flex-col justify-center text-center items-center text-gray gap-3 ">
        <div class="uppercase text-2xl  font-dmserif  ">
          <div class=" ">Tel:</div>
          <a href="tel:0315636199" class="text-3xl hover:text-brown font-semibold text-gray">031 563 6199</a>
        </div>
        <div class="uppercase text-2xl  font-dmserif  text-gray">
          <div >WhatsApp:</div>
          <div class="flex gap-1">
            <a href="//wa.me/081217537878" target="_blank" class="text-3xl xs:text-3xl sm:text-3xl hover:text-brown font-semibold" >0812 1753 7878 </a>
            <div class="text-3xl">/</div>
            <a href="//wa.me/08123170066"  target="_blank" class="text-3xl xs:text-3xl sm:text-3xl hover:text-brown font-semibold" > 081 2317 0066</a>

          </div>
        </div>
        <div class="text-lg text-gray font-montserrat">Darmo Hill Block N 15-17 Surabaya</div>
        <div class="text-lg text-gray font-montserrat" >Instagram:@house_of_lea</div>
        <div class="text-lg text-gray font-montserrat" >Tiktok:@houseoflea.sby</div>
      </div>
    </section>
 <!-- contact end -->


 <!-- footer start -->
    <section class=" footer bg-orange-dark ">
      <div class="container flex sm:flex-col xs:flex-col md:flex-row lg:flex-row justify-between mx-auto text-center items-center sm:pt-8 xs:pt-8 md:pt-0 md:px-8 sm:px-4 xs:px-4 lg:pt-0">
        <div class=" text-start">
          <div class="uppercase text-7xl text-brown font-dmserif mt-4" >
            Celebrating Love, <br> One Wedding at a time.

          </div>
          <div class="text-gray sm:hidden xs:hidden md:block lg:block text-lg font-montserrat" >   © 2024 House of Lea. All Rights Reserved.
          </div>
        </div>
        <img :src="Copyright" alt="" width="250" height="200">
      </div>

      <div class="  text-gray sm:block xs:block md:hidden lg:hidden text-center  text-lg  flex mx-auto pb-10 px-4  font-montserrat" >© 2024 House of Lea. All Rights Reserved.   </div>

    </section>
     <!-- footer start -->

     <!-- backtotop start -->
    <div v-if="showBackToTop" @click="scrollToTop" class=" vertical-lr rotated back-to-top uppercase   z-40 fixed bottom-7 right-7  py-1 px-1 text-brown  border border-brown bg-white flex justify-center items-center
    cursor-pointer transition-all ease-linear duration-75  active:text-yellow-light hover:text-white hover:bg-brown hover:border-white text-center">
    <div class="pt-2 font-montserrat">
      Back to Top 
    </div>
    <Icon name="chevron_right" size="30"/>
  </div>

  <!-- backtotop end -->

   

  </div>
</template>

<style scoped>



/*  */
</style>
