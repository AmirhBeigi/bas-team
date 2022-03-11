<template>
  <div class="bg-black">
    <TheHeader />
    <div class="bg-black text-white">
      <div
        v-if="$device.isMobile"
        class="text-white relative mobile-slider pb-12 pt-20"
      >
        <VueSlickCarousel v-bind="slickOptions">
          <div v-for="slide in slides" :key="slide.id">
            <img :src="slide.image" class="h-74 mx-auto object-cover" />
            <h5
              data-v-e4caeaf8=""
              class="text-sm tracking-widest uppercase text-center mt-10 pr-6 sm:pr-8"
            >
              {{ slide.title }}
            </h5>
          </div>
        </VueSlickCarousel>
        <div
          class="flex items-center justify-between absolute w-full mt-9 px-6 top-96"
        >
          <button class="icon-arrow-left text-2xl" @click="showPrev"></button>
          <button class="icon-arrow-right text-2xl" @click="showNext"></button>
        </div>
      </div>

      <section class="relative grid-section lg:h-screen">
        <div
          class="container mx-auto max-lg:pr-0 lg:max-w-none flex flex-col lg:flex-row justify-center items-center h-full"
        >
          <div
            class="w-full lg:w-2/5 lg:flex items-center flex-1 lg:max-w-xl lg:pr-14"
          >
            <h1
              v-gsap.to="{
                opacity: '1',
                visibility: 'inherit',
                duration: 3,
              }"
              data-main-title
              class="main-title font-light text-4xl 1xl:text-6xl relative z-10 max-lg:mt-8 max-lg:max-w-sm"
            >
              We use the
              <span class="underline-after" data-v-50f1f4e2="">invisible</span>
              to benefit your well-being<br data-v-50f1f4e2="" />
              <span
                class="icon icon-arrow-down inline-block text-2xl max-lg:hidden"
                data-v-50f1f4e2=""
              ></span>
            </h1>
          </div>
          <div v-if="!$device.isMobile" class="lg:w-3/6 lg:max-w-214">
            <div>
              <span
                v-gsap.to="{
                  visibility: 'inherit',
                  opacity: 1,
                  duration: 2,
                }"
                data-reveal-after
              >
                <transition-group name="fade">
                  <img
                    v-for="(item, i) in slides"
                    v-show="isHovering[i]"
                    :key="item.id"
                    :src="item.image"
                    :alt="item.title"
                    class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  />
                </transition-group>
              </span>
              <div class="grid grid-flow-col grid-cols-3 grid-rows-2">
                <div
                  v-for="(item, i) in slides"
                  :key="i"
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-dotted-square
                  :class="[
                    'dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10',
                  ]"
                  :style="{
                    background: isHovering[i] && item.color,
                  }"
                  @mouseover="
                    isHovering = []
                    $set(isHovering, i, true)
                  "
                >
                  <p
                    data-dotted-text
                    :class="[
                      'uppercase text-item text-sm tracking-widest px-10 text-center',
                      { show: isHovering[i] },
                    ]"
                  >
                    {{ item.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      slickOptions: {
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ref: 'carousel',
      },
      slides: [
        {
          id: 1,
          title: 'Matrix',
          color: '#ff3e3e',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/07/matrix-det-4.jpg',
        },
        {
          id: 2,
          title: 'Evolution Tower',
          color: '#3052cf',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/09/evolution-tower-moscow.jpg',
        },
        {
          id: 3,
          title: 'Hotel Alhambra',
          color: '#59c1b7',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/08/alhambra.jpg',
        },
        {
          id: 4,
          title: 'Lighting Giants',
          color: '#ff3e3e',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/07/crveni-Mjesec-nad-Uljanikom-10x7_foto-Luka-Pretegiani-1.jpg',
        },
        {
          id: 5,
          title: 'Hendrix Bridge',
          color: '#59c1b7',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/09/hendrix-bridge-zagreb-hendrixov-most-1.jpg',
        },
        {
          id: 6,
          title: 'Eurasia Tunnel',
          color: '#3052cf',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/09/eurasia-tunel.jpg',
        },
      ],
      isHovering: [],
    }
  },
  methods: {
    showNext() {
      this.$refs.carousel.next()
    },
    showPrev() {
      this.$refs.carousel.prev()
    },
  },
}
</script>
