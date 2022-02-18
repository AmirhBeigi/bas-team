<template>
  <div class="bg-black">
    <!-- <TheHeader /> -->
    <div class="projects-page bg-black text-white py-28 xl:py-36">
      <section>
        <div
          class="container mx-auto xl:px-0 lg:max-w-none xl:w-88/100 2xl:w-72/100 flex flex-col justify-center items-center text-white"
          data-v-a200718e=""
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
            Projects
          </h1>
          <div
            v-gsap.to="{
              opacity: '1',
              visibility: 'inherit',
              duration: 3,
            }"
            class="w-full mx-auto flex justify-center relative pb-12 lg:pb-16"
            data-fade-in-el
          >
            <div class="filters" data-v-a200718e="">
              <ul
                class="text-white list-none flex flex-wrap justify-center -mx-3"
                data-v-a200718e=""
              >
                <li class="px-3" data-v-a200718e="">
                  <button class="active" data-border-anim="" data-v-a200718e="">
                    <span data-v-a200718e="">All</span>
                  </button>
                </li>
                <li class="px-3" data-v-a200718e="">
                  <button data-border-anim="" data-v-a200718e="">
                    <span data-v-a200718e="">Exterior</span>
                  </button>
                </li>
                <li class="px-3" data-v-a200718e="">
                  <button data-border-anim="" data-v-a200718e="">
                    <span data-v-a200718e="">Interior</span>
                  </button>
                </li>
                <li class="px-3" data-v-a200718e="">
                  <button data-border-anim="" data-v-a200718e="">
                    <span data-v-a200718e="">Landscape Lighting</span>
                  </button>
                </li>
                <li class="px-3" data-v-a200718e="">
                  <button data-border-anim="" data-v-a200718e="">
                    <span data-v-a200718e="">Light Art</span>
                  </button>
                </li>
                <li class="px-3" data-v-a200718e="">
                  <button data-border-anim="" data-v-a200718e="">
                    <span data-v-a200718e="">Case studies</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="projects-section py-12 lg:py-16">
        <div
          class="container mx-auto lg:max-w-none xl:px-0 lg:w-93/100"
          data-v-a200718e=""
        >
          <client-only>
            <div v-masonry class="masonry-container">
              <nuxt-link
                v-for="(item, index) in 10"
                :key="index"
                class="masonry-item relative w-full md:w-1/2 lg:w-1/3 md:p-5 max-md:pb-10 exterior"
                to="/projects/1"
              >
                <div class="overlay z-10" data-v-a200718e=""></div>
                <figure
                  class="relative"
                  style="padding-bottom: 66.75%"
                  data-v-a200718e=""
                >
                  <img
                    alt="premantura 800 (1)"
                    class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                    src="https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg"
                  />
                </figure>
                <div
                  class="dotted-square flex flex-col items-center justify-center z-10 w-54 h-54 bg-transparent absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                  data-v-a200718e=""
                >
                  <span
                    class="font-light text-sm px-10 text-center project-info-title mt-5"
                    data-v-a200718e=""
                    ><span
                      class="uppercase tracking-widest block mb-2"
                      data-v-a200718e=""
                    >
                      Church Tower Premantura
                    </span>
                    <span
                      class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                      data-v-a200718e=""
                    >
                      <span class="icon-plus mr-2" data-v-a200718e=""> </span>
                      Click for more
                    </span>
                  </span>
                </div>
              </nuxt-link>
            </div>
          </client-only>
        </div>
      </section>
    </div>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
}
</script>
