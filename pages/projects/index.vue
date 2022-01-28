<template>
  <div class="bg-black">
    <div
      class="fixed top-0 left-0 w-full z-30 nav-overwrapper transition-colors duration-500 bg-black"
      data-nav-wrapper=""
      data-v-1adbb2d8=""
    >
      <div
        class="nav-wrapper flex justify-between items-center py-4 lg:py-5"
        data-v-1adbb2d8=""
      >
        <nuxt-link
          class="logo font-light uppercase tracking-widest text-2xl lg:text-3xl text-white relative z-30 w-36 nuxt-link-active"
          to="/"
        >
          <img :src="require('~/assets/img/bas.svg')" alt="Skira logo" />
        </nuxt-link>
        <nav
          class="main-nav max-lg:w-full max-lg:h-screen max-lg:flex max-lg:absolute left-0 top-0 justify-center items-center max-lg:bg-black"
          data-v-1adbb2d8=""
        >
          <ul
            class="list-none flex items-center text-white lg:flex-row flex-col"
            data-v-1adbb2d8=""
          >
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/profile"
                data-link="Profile"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Profile</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light nuxt-link-exact-active nuxt-link-active"
                to="/projects"
                data-link="Projects"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Projects</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/product-design"
                data-link="Product Design"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Product Design</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/diary"
                data-link="Diary"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Diary</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/press"
                data-link="Press"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Press</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/contact"
                data-link="Contact"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Contact</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div data-v-a200718e="">
      <div
        class="projects-page bg-black text-white py-28 xl:py-36"
        data-v-a200718e=""
      >
        <section data-v-a200718e="">
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
              class="w-full mx-auto flex justify-center relative pb-12 lg:pb-16"
              style="opacity: 1; visibility: inherit"
              data-fade-in-el=""
              data-v-a200718e=""
            >
              <div class="filters" data-v-a200718e="">
                <ul
                  class="text-white list-none flex flex-wrap justify-center -mx-3"
                  data-v-a200718e=""
                >
                  <li class="px-3" data-v-a200718e="">
                    <button
                      class="active"
                      data-border-anim=""
                      data-v-a200718e=""
                    >
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
        <section class="projects-section py-12 lg:py-16" data-v-a200718e="">
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
                  to="#"
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
            <!-- <div
              class="masonry-container"
              style="position: relative; height: 4780.42px"
              data-v-a200718e=""
            >
              <figure
                class="relative"
                style="padding-bottom: 149.75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/12/zerostrasse-skira.jpg"
                  alt="zerostrasse skira"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/12/zerostrasse-skira.jpg"
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
                    >Zerostrasse</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.6667%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/10/eden-800-2.jpg"
                  alt="eden 800 2"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/eden-800-2.jpg"
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
                    >Hotel Eden </span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.625%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/10/wellness-vitality-hotel-punta.jpg"
                  alt="wellness vitality hotel punta"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/wellness-vitality-hotel-punta.jpg"
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
                    >Vitality hotel Punta Wellness</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 150.0626%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/10/Deltalight_Milano_pontaccio_Luca-Cioci_800.jpg"
                  alt="Deltalight_Milano_pontaccio_Luca Cioci_800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/Deltalight_Milano_pontaccio_Luca-Cioci_800.jpg"
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
                    >Crivelli Pop up Garden</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 56.25%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/10/Turnina-Tree-Rovinj.jpg"
                  alt="Turnina Tree Rovinj"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/Turnina-Tree-Rovinj.jpg"
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
                    >Turnina Tree</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 133.375%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/09/iG_Lighthinking_cover-crop-LR.jpg"
                  alt="Evolution Tower_Lighthinking_cover crop LR"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/iG_Lighthinking_cover-crop-LR.jpg"
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
                    >Evolution Tower</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.6667%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="SKIRA Boutique Hotel Alhambra foto Hrvoje Serdar (17)"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/SKIRA-Boutique-Hotel-Alhambra-foto-Hrvoje-Serdar-17.jpg"
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
                    >Hotel Alhambra</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="https://admin.skira.hr/wp-content/uploads/2021/09/hotel-lempinski-skira.jpg"
                  alt="hotel lempinski skira"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/hotel-lempinski-skira.jpg"
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
                    >Hotel Kempinski Adriatic</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.625%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="toll plaza eurasia 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/toll-plaza-eurasia-800.jpg"
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
                    >Eurasia Tunnel</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.625%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="pleternica 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/pleternica-800.jpg"
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
                    >Multimedia Hall Pleternica</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 74.9648%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="novamed 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/novamed-800.jpg"
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
                    >Novamed </span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.6667%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="tudjman_zagreb skira"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/tudjman_zagreb-skira.jpg"
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
                    >Monument to the President Tuđman</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 56.25%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="four seasons hotel"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/four-seasons-1-Copy.jpg"
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
                    >Four Seasons Hotel </span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 114.2651%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="Skira_photo Foto Festival Labin 3 (2)"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/Skira_photo-Foto-Festival-Labin-3-2.jpg"
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
                    >Mining Shaft Labin</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 133.9576%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="SKIRA_IGUZZINI_LOMBARDI-VALLAURI_3"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/SKIRA_IGUZZINI_LOMBARDI-VALLAURI_3-1.jpg"
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
                    >Hooked Up</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.5832%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="mestrovic pavilion dzamija"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/mestrovic-pavilion-800.jpg"
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
                    >Mestrovic Pavilion</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 72%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="giants-thumb"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/giants-thumb.jpg"
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
                    >Lighting Giants</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="swimming pool (4)"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/swimming-pool-4.jpg"
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
                    >Swimming Pool Pula</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 58.5%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="lone 800 1"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/lone-800-1.jpg"
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
                    >Design Hotel Lone</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 74.9064%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="residential"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/residential.jpg"
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
                    >Residential Projects</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 68.2896%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="biennale italian pavilion 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/10/biennale-italian-pavilion-800.jpg"
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
                    >Biennale d'Arte Italian Pavillion</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.6667%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="Parco della Luna"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/VICO_22.jpg"
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
                    >Parco della Luna</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="biennale pergola 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/biennale-pergola-800.jpg"
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
                    >Venice Biennale of Architecture </span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="postojnska jama 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/postojnska-jama-800.jpg"
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
                    >Postojna Cave</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 67.8333%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="matrix"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/matrix.jpg"
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
                    >Matrix</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.6667%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="technical museum facade"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/technical-museum-facade.jpg"
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
                    >Technical Museum Nikola Tesla</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 123.25%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="adelma 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/adelma-800.jpg"
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
                    >Captain's Villa Rouge</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 101.8333%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="eggo-thumb"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/eggo-thumb.jpg"
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
                    >EggOtrick</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="vila sheherezade"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/vila-sheherezade-Copy.jpg"
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
                    >Villa Sheherezade</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 56.25%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="hendrix bridge zagreb hendrixov most 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/hendrix-bridge-zagreb-hendrixov-most-800.jpg"
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
                    >Hendrix Bridge</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 72%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="cikat-thumb"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/cikat-thumb.jpg"
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
                    >Čikat Bay</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 111.75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="tsum 800"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/tsum-800.jpg"
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
                    >TSUM</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 66.625%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="bellevue - Copy"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/bellevue-Copy.jpg"
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
                    >Hotel Bellevue</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 68.75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="OLYMPUS DIGITAL CAMERA"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/house-of-light-pula-skira-11.jpg"
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
                    >House of Light</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 131.75%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="vap"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/vap.jpg"
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
                    >Verudela Art Park </span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 103%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="twisted-thumb"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/twisted-thumb.jpg"
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
                    >Twisted</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 103%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="roundabout-thumb"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/07/roundabout-thumb.jpg"
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
                    >Roundabout</span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
              <figure
                class="relative"
                style="padding-bottom: 124.2197%"
                data-v-a200718e=""
              >
                <img
                  class="block w-full absolute top-0 left-0 right-0 lazy-img-fadein"
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  alt="rident"
                  data-v-a200718e=""
                  data-src="https://admin.skira.hr/wp-content/uploads/2021/09/Skira-Ridnet-detail.jpg"
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
                    >Rident </span
                  ><span
                    class="italic inline-block opacity-0 invisible -ml-5 max-lg:hidden"
                    data-v-a200718e=""
                    >Click for more
                  </span></span
                >
              </div>
            </div> -->
          </div>
        </section>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
