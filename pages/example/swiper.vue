<template>
  <div class="exampleSwiper">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="banner in banners"
          :key="banner.id"
        >
          <a
            target="_blank"
            :href="banner.url"
          >
            <img
              class="swiper-lazy"
              :data-src="banner.pcCover"
              :data-srcset="banner.appCover + ' 1023w, ' + banner.pcCover"
            />
          </a>
          <div class="swiper-lazy-preloader"></div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next swiper-button-white"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exampleSwiper',
  layout: 'example',
  data() {
    return {
      banners: [
        {
          id: 1,
          url: 'http://www.baidu.com',
          pcCover: 'http://market.cosmoplat.com/view/index/tubiao/cosmostore-banner3.jpg',
          appCover: 'http://cosmoplat.com/img/617663b.png',
        },
        {
          id: 2,
          url: 'http://www.baidu.com',
          pcCover: 'http://market.cosmoplat.com/view/index/tubiao/cosmostore-banner4.jpg',
          appCover: 'http://cosmoplat.com/img/3cf9051.png',
        },
      ],
      swiperOption: {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        lazy: {
          loadPrevNext: true,
          autoplay: true,
        },
      },
    }
  },
}
</script>

<style scoped lang="scss">
@import 'swiper/dist/css/swiper.css';
.exampleSwiper {
  .swiper-slide {
    min-height: 100px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>