<template>
  <div class="bg-black">
    <TheHeader />
    <div class="bg-black text-white">
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
          <div data-v-50f1f4e2="" class="lg:w-3/5 lg:max-w-214">
            <div data-v-50f1f4e2="">
              <span
                v-gsap.to="{
                  opacity: '1',
                  visibility: 'inherit',
                  duration: 3,
                }"
                data-v-50f1f4e2=""
                data-reveal-after=""
              >
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/07/matrix-det-4.jpg"
                  alt="matrix-det-4"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/09/evolution-tower-moscow.jpg"
                  alt="evolution tower moscow"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/08/alhambra.jpg"
                  alt="alhambra"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/07/crveni-Mjesec-nad-Uljanikom-10x7_foto-Luka-Pretegiani-1.jpg"
                  alt="crveni Mjesec nad Uljanikom 10x7_foto Luka Pretegiani"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/09/hendrix-bridge-zagreb-hendrixov-most-1.jpg"
                  alt="hendrix bridge zagreb hendrixov most"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/09/eurasia-tunel.jpg"
                  alt="eurasia tunel"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/09/four-seasons-1.jpg"
                  alt="four seasons 1"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                  style="display: none"
                />
                <img
                  data-v-50f1f4e2=""
                  src="https://admin.skira.hr/wp-content/uploads/2021/12/dsc_9700_51716257152_o.jpg"
                  alt="dsc_9700_51716257152_o"
                  class="absolute w-full h-full object-cover z-0 top-0 left-0 lg:h-screen"
                />
              </span>
              <div
                data-v-50f1f4e2=""
                class="grid grid-flow-col grid-cols-4 grid-rows-2"
              >
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Matrix
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Evolution Tower
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Hotel Alhambra
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Lighting Giants
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Hendrix Bridge
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Eurasia Tunnel
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center"
                  >
                    Four Seasons Hotel
                  </p>
                </div>
                <div
                  v-gsap.to="{
                    transform: 'translate(0, -0.5rem)',
                    opacity: 1,
                    visibility: 'inherit',
                    duration: 2,
                  }"
                  data-v-50f1f4e2=""
                  data-dotted-square=""
                  class="dotted-square grid-item lg:-ml-1 lg:-mt-1 flex items-center justify-center z-10 bg-black"
                >
                  <p
                    data-v-50f1f4e2=""
                    data-dotted-text=""
                    class="uppercase text-item text-sm tracking-widest px-10 text-center show"
                  >
                    Zerostrasse
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
}
</script>
