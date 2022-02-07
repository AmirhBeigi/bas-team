<template>
  <div class="bg-black">
    <TheHeader />
    <div class="bg-black text-white pt-20 lg:pt-28 xl:pt-56">
      <section class="pb-12 lg:pb-16 xl:-mb-20">
        <div
          class="container max-w-none max-lg:mx-auto lg:ml-auto px-0 xl:pl-6/100 2xl:pl-14/100"
        >
          <div
            v-gsap.to="{
              opacity: '1',
              visibility: 'inherit',
            }"
            data-fade-in-el
            class="flex flex-col lg:flex-row-reverse lg:items-center xl:items-start"
          >
            <div class="lg:w-1/2 xl:w-3/5">
              <img
                src="https://admin.skira.hr/wp-content/uploads/2021/08/LUM6.jpg"
                alt="LUM6"
              />
            </div>
            <div
              class="px-6 sm:px-8 xl:pl-0 pt-16 mx-auto lg:pt-0 lg:w-1/2 xl:w-2/5 xs:max-w-screen-xs sm:max-w-screen-sm md:max-w-screen-md lg:max-w-none"
            >
              <h2 class="uppercase text-sm lg:text-lg tracking-widest">
                Contact
              </h2>
              <h1 class="font-light text-4xl xl:text-6xl mt-4 mb-10">
                Let's connect
              </h1>
              <div class="flex flex-wrap -mx-4">
                <div class="w-1/2 mb-10 px-4">
                  <span
                    class="text-xs uppercase opacity-50 tracking-widest block"
                    >Company</span
                  >
                  <span
                    class="block font-light text-lg xl:text-xl tracking-wider"
                    >Skira d.o.o.</span
                  >
                </div>
                <div class="w-1/2 mb-10 px-4">
                  <span
                    class="text-xs uppercase opacity-50 tracking-widest block"
                    >Phone</span
                  >
                  <a
                    href="tel:+385 52 535 940"
                    data-border-anim=""
                    class="block font-light text-lg xl:text-xl tracking-wider"
                    >+385 52 535 940</a
                  >
                </div>
                <div class="w-1/2 mb-10 px-4">
                  <span
                    class="text-xs uppercase opacity-50 tracking-widest block"
                    >Address</span
                  >
                  <span
                    class="block font-light text-lg xl:text-xl tracking-wider"
                    >Veruda 60b, 52100 Pula, Croatia</span
                  >
                  <a
                    href="https://goo.gl/maps/d4B9JXMTUZXV3vzcA"
                    target="_blank"
                    data-border-anim="0"
                    class="block font-light text-lg xl:text-xl tracking-wider leading-tight"
                    >View on map</a
                  >
                </div>
                <div class="w-1/2 mb-10 px-4">
                  <span
                    class="text-xs uppercase opacity-50 tracking-widest block"
                    >Email</span
                  >
                  <a
                    href="mailto:info@skira.hr            "
                    data-border-anim=""
                    class="block font-light text-lg xl:text-xl tracking-wider"
                    >info@skira.hr
                  </a>
                </div>
                <div class="w-1/2 px-4">
                  <span
                    class="text-xs uppercase opacity-50 tracking-widest block"
                    >Local time</span
                  >
                  <span
                    class="block font-light text-lg xl:text-xl tracking-wider whitespace-nowrap"
                    >15:05 CEST UTC/GMT +2 hours</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasContact',
}
</script>
