<template>
  <div class="bg-white">
    <!-- <TheHeader /> -->
    <div class="projects-page text-black py-28 xl:py-36">
      <section>
        <div
          class="container mx-auto xl:px-0 lg:max-w-none xl:w-88/100 2xl:w-72/100 flex flex-col justify-center items-center text-black"
        >
          <h1
            v-gsap.to="{
              opacity: '1',
              visibility: 'inherit',
              color: '#65C18C',
              duration: 3,
            }"
            class="text-mobile-wide blurred-text fullwidth-centered-text lg:text-5xl lg:tracking-insane font-light uppercase lg:mb-16 relative z-10"
            data-blurred-text
          >
            Projects
          </h1>
          <p class="mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
            accusantium illo eius voluptas ipsum ullam consequatur sequi optio
            quo quas enim consectetur accusamus, quasi nulla? Ad voluptates
            placeat vel minus.
          </p>
          <img
            class="mb-10"
            src="https://images.unsplash.com/photo-1590646226886-ea95695249ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          />
          <img
            class="mb-10"
            src="https://images.unsplash.com/photo-1590646226886-ea95695249ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {}
</script>
