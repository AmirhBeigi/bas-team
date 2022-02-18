<template>
  <div class="bg-black h-screen">
    <!-- <TheHeader /> -->
    <div class="contact-page bg-black text-white py-28 xl:py-36">
      <section>
        <div
          class="container mx-auto xl:px-0 lg:max-w-none xl:w-88/100 2xl:w-72/100 flex flex-col justify-center items-center text-white"
        >
          <h1
            v-gsap.to="{
              opacity: '1',
              visibility: 'inherit',
              color: 'white',
              'text-shadow': 'white 0 0 10',
              duration: 3,
            }"
            class="text-mobile-wide blurred-text fullwidth-centered-text lg:text-5xl lg:tracking-insane font-light uppercase lg:mb-16 relative z-10"
            data-blurred-text
          >
            Contact
          </h1>
        </div>
      </section>
      <section class="contact-section py-12 lg:py-16">
        <div class="container mx-auto lg:max-w-none xl:px-0 lg:w-93/100">
          <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-32">
            <button
              class="border-b border-[#65C18C] hover:bg-[#E1306C] hover:border-transparent transition p-2 font-light uppercase"
            >
              Instagram
            </button>
            <button
              class="border-b border-[#65C18C] hover:bg-[#70b5f9] hover:border-transparent transition p-2 font-light uppercase"
            >
              LinkedIn
            </button>
            <button
              class="border-b border-[#65C18C] hover:bg-[#1d9bf0] hover:border-transparent transition p-2 font-light uppercase"
            >
              Twitter
            </button>
            <button
              class="border-b border-[#65C18C] hover:bg-[#191919] hover:border-transparent transition p-2 font-light uppercase"
            >
              Behance
            </button>
            <button
              class="border-b border-[#65C18C] hover:bg-[#ea4c89] hover:border-transparent transition p-2 font-light uppercase"
            >
              Dribbble
            </button>
            <button
              class="border-b border-[#65C18C] hover:bg-[#e60023] hover:border-transparent transition p-2 font-light uppercase"
            >
              Pintrest
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasContact',
}
</script>
