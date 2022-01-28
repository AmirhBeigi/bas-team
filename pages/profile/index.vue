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
        <a
          class="logo font-light uppercase tracking-widest text-2xl lg:text-3xl text-white relative z-30 w-36 nuxt-link-active"
          href="/"
        >
          <img :src="require('~/assets/img/bas.svg')" alt="Skira logo" />
        </a>
        <nav
          class="main-nav max-lg:w-full max-lg:h-screen max-lg:flex max-lg:absolute left-0 top-0 justify-center items-center max-lg:bg-black"
          data-v-1adbb2d8=""
        >
          <ul
            class="list-none flex items-center text-white lg:flex-row flex-col"
            data-v-1adbb2d8=""
          >
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <a
                class="text-xl tracking-wide font-light"
                href="/profile"
                data-link="Profile"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Profile</a
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <a
                class="text-xl tracking-wide font-light nuxt-link-exact-active nuxt-link-active"
                href="/projects"
                data-link="Projects"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Projects</a
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <a
                class="text-xl tracking-wide font-light"
                href="/product-design"
                data-link="Product Design"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Product Design</a
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <a
                class="text-xl tracking-wide font-light"
                href="/diary"
                data-link="Diary"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Diary</a
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <a
                class="text-xl tracking-wide font-light"
                href="/press"
                data-link="Press"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Press</a
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <a
                class="text-xl tracking-wide font-light"
                href="/contact"
                data-link="Contact"
                data-border-anim=""
                data-v-1adbb2d8=""
                >Contact</a
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
              class="text-mobile-wide blurred-text fullwidth-centered-text lg:text-5xl lg:tracking-insane font-light uppercase lg:mb-16 relative z-10 custom-text"
              data-blurred-text=""
              data-v-a200718e=""
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
                <a
                  v-for="(item, index) in 10"
                  :key="index"
                  class="masonry-item relative w-full md:w-1/2 lg:w-1/3 md:p-5 max-md:pb-10 exterior"
                  href="#"
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
                </a>
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
      <footer
        data-v-81cbe394=""
        data-v-a200718e=""
        class="bg-black text-white pb-8 pt-14 lg:pt-20"
      >
        <div
          data-v-81cbe394=""
          class="container mx-auto lg:max-w-none xl:pl-6/100 2xl:pl-14/100 flex flex-wrap max-lg:flex-col"
        >
          <div
            data-v-81cbe394=""
            class="flex flex-col lg:flex-row lg:items-center lg:w-49/100 2xl:w-44/100 lg:pb-20"
          >
            <h2
              data-v-81cbe394=""
              class="font-light text-4xl lg:text-6xl max-w-40 lg:max-w-xs"
            >
              Connect with us
            </h2>
          </div>
          <div
            data-v-81cbe394=""
            class="flex items-center max-lg:justify-center lg:pb-20"
          >
            <a
              id="footerCircle"
              data-v-81cbe394=""
              href="/contact"
              class="relative my-14 lg:my-0 lg:transform lg:-translate-x-1/2 w-64 h-64"
              ><div
                data-v-43ed9b8e=""
                data-v-81cbe394=""
                class="transform transition-transform duration-500 hover:scale-105"
                style="width: 100%; height: 100%; overflow: hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250"
                  width="250"
                  height="250"
                  preserveAspectRatio="xMidYMid meet"
                  style="
                    width: 100%;
                    height: 100%;
                    transform: translate3d(0, 0, 0);
                  "
                >
                  <defs>
                    <clipPath id="__lottie_element_12">
                      <rect width="250" height="250" x="0" y="0"></rect>
                    </clipPath>
                    <filter id="glow">
                      <feGaussianBlur
                        class="blur"
                        result="coloredBlur"
                        stdDeviation="3"
                      ></feGaussianBlur>
                      <feMerge>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="coloredBlur"></feMergeNode>
                        <feMergeNode in="SourceGraphic"></feMergeNode>
                      </feMerge>
                    </filter>
                  </defs>
                  <g clip-path="url(#__lottie_element_12)">
                    <g
                      transform="matrix(0,1.7196099758148193,-1.7196099758148193,0,242.67291259765625,7.32708740234375)"
                      opacity="1"
                      style="display: block"
                    >
                      <g
                        opacity="1"
                        transform="matrix(1,0,0,1,68.5250015258789,68.35199737548828)"
                      >
                        <path
                          stroke-linecap="butt"
                          stroke-linejoin="miter"
                          fill-opacity="0"
                          stroke-miterlimit="10"
                          stroke="rgb(255,255,255)"
                          stroke-opacity="1"
                          stroke-width="1"
                          d=" M65.93000030517578,0 C65.93000030517578,36.4119987487793 36.4119987487793,65.93000030517578 0,65.93000030517578 C-36.4119987487793,65.93000030517578 -65.93000030517578,36.4119987487793 -65.93000030517578,0 C-65.93000030517578,-36.4119987487793 -36.4119987487793,-65.93000030517578 0,-65.93000030517578 C36.4119987487793,-65.93000030517578 65.93000030517578,-36.4119987487793 65.93000030517578,0z"
                          style="filter: url('#glow')"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div
                data-v-81cbe394=""
                class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 uppercase font-light tracking-widest flex items-center justify-center whitespace-nowrap pointer-events-none"
              >
                <span data-v-81cbe394=""
                  >Let's <br data-v-81cbe394="" />connect
                </span>
                <span
                  data-v-81cbe394=""
                  class="icon-arrow-right ml-4 text-xs"
                ></span></div
            ></a>
          </div>
          <div data-v-81cbe394="" class="2xl:pt-4 w-full">
            <div
              data-v-81cbe394=""
              class="xl:flex xl:justify-between text-md max-xl:max-w-screen-md max-xl:mx-auto"
            >
              <div
                data-v-81cbe394=""
                class="flex justify-between flex-wrap items-baseline mb-12 lg:mb-0"
              >
                <a
                  data-v-81cbe394=""
                  href="https://www.instagram.com/skiralighting/"
                  target="_blank"
                  data-border-anim=""
                  class="uppercase"
                  >Instagram</a
                >
                <a
                  data-v-81cbe394=""
                  href="https://www.facebook.com/SkiraLighting/"
                  target="_blank"
                  data-border-anim=""
                  class="uppercase mx-10"
                  >Facebook</a
                >
                <a
                  data-v-81cbe394=""
                  href="https://hr.linkedin.com/company/skira-lighting"
                  data-border-anim=""
                  target="_blank"
                  class="uppercase mr-10"
                  >Linkedin</a
                >
                <a
                  data-v-81cbe394=""
                  href="https://skira.us6.list-manage.com/subscribe?u=0a8ae91cffd71d63ce6df7e17&amp;id=d033109405"
                  target="_blank"
                  class="uppercase tracking-widest font-light border border-white px-4 leading-none h-7 flex items-center hover:bg-white hover:text-black transition-colors"
                  >Newsletter</a
                >
              </div>
              <div data-v-81cbe394="" class="flex flex-wrap leading-loose">
                <a
                  data-v-81cbe394=""
                  href="https://admin.skira.hr/wp-content/uploads/2021/09/Skira_Company-Profile.pdf"
                  target="_blank"
                  data-border-anim=""
                  class="mr-10"
                  >Download Company Profile</a
                >
                <a
                  data-v-81cbe394=""
                  href="/cookies-policy"
                  class="mr-10"
                  data-border-anim=""
                  >Cookies policy</a
                >
                <span data-v-81cbe394="" data-border-anim="" class="mr-10"
                  >Design by:
                  <a
                    data-v-81cbe394=""
                    href="https://www.north2.net/"
                    target="_blank"
                    >North2</a
                  ></span
                >
                <span data-v-81cbe394="">© Skira 2022</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.hamburger {
  padding: 0px;
  display: inline-block;
  cursor: pointer;
  margin: 0px;
  display: inline-block;
  cursor: pointer;
  overflow: visible;
  border-width: 0px;
  border-style: none;
  background-color: transparent;
  text-transform: none;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
}

.hamburger.is-active:hover,
.hamburger:hover {
  opacity: 1;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner:after,
.hamburger.is-active .hamburger-inner:before {
  background-color: #ffffff;
}

.hamburger-box {
  width: 40px;
  height: 100%;
  position: relative;
  display: inline-block;
}

.hamburger-inner {
  top: 50%;
  display: block;
  margin-top: -1px;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  width: 40px;
  height: 2px;
  background-color: #ffffff;
  border-radius: 4px;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
  position: absolute;
}

.hamburger-inner:after,
.hamburger-inner:before {
  display: block;
}

.hamburger-inner:after,
.hamburger-inner:before {
  content: '';
}

.hamburger-inner:before {
  top: -8px;
}

.hamburger-inner:after {
  bottom: -8px;
}

.hamburger--3dy .hamburger-box {
  perspective: 80px;
}

.hamburger--3dy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
}

.hamburger--3dy .hamburger-inner:after,
.hamburger--3dy .hamburger-inner:before {
  transition: transform 0s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
}

.hamburger--3dy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(-180deg);
}

.hamburger--3dy.is-active .hamburger-inner:before {
  transform: translate3d(0, 8px, 0) rotate(45deg);
}

.hamburger--3dy.is-active .hamburger-inner:after {
  transform: translate3d(0, -8px, 0) rotate(-45deg);
}

@font-face {
  font-family: 'icomoon';

  src: url(/_nuxt/fonts/icomoon.9d57216.eot);

  src: url(/_nuxt/fonts/icomoon.9d57216.eot#iefix) format('embedded-opentype'),
    url(/_nuxt/fonts/icomoon.3519be8.ttf) format('truetype'),
    url(/_nuxt/fonts/icomoon.57a9ecb.woff) format('woff'),
    url(/_nuxt/img/icomoon.1dbdd46.svg#icomoon) format('svg');

  font-weight: 400;

  font-style: normal;

  font-display: block;
}

[class*=' icon-'],
[class^='icon-'] {
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-download:before {
  content: '';
}

.icon-arrow-down:before {
  content: '';
}

.icon-gallery:before {
  content: '';
}

.icon-play:before {
  content: '';
}

.icon-minus:before {
  content: '';
}

.icon-long-arrow:before {
  content: '';
}

.icon-plus:before {
  content: '';
}

.icon-squares:before {
  content: '';
}

.icon-arrow-left:before {
  content: '';
}

.icon-arrow-right:before {
  content: '';
}

.icon-close:before {
  content: '';
}

.fade-enter,
.fade-leave-to,
.page-enter,
.page-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave,
.page-enter-to,
.page-leave {
  opacity: 1;
}

.fade-enter-active,
.fade-leave-active,
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 500ms;
}

.cookieControl__BarButtons button,
.cookieControl__ModalButtons button,
[data-border-anim='0'],
[data-border-anim] {
  display: inline-block;
  overflow: hidden;
}

.cookieControl__BarButtons button:after,
.cookieControl__ModalButtons button:after,
[data-border-anim='0']:after,
[data-border-anim]:after {
  content: '';
  transform: translate3d(-102%, 0, 0);
}

.cookieControl__BarButtons button:after,
.cookieControl__ModalButtons button:after,
[data-border-anim='0']:after,
[data-border-anim]:after {
  display: block;
  height: 0.125rem;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.active[data-border-anim='0']:after,
.cookieControl__BarButtons button.active:after,
.cookieControl__BarButtons button.nuxt-link-exact-active:after,
.cookieControl__BarButtons button:hover:after,
.cookieControl__ModalButtons button.active:after,
.cookieControl__ModalButtons button.nuxt-link-exact-active:after,
.cookieControl__ModalButtons button:hover:after,
.nuxt-link-exact-active[data-border-anim='0']:after,
[data-border-anim='0']:after,
[data-border-anim='0']:hover:after,
[data-border-anim].active:after,
[data-border-anim].nuxt-link-exact-active:after,
[data-border-anim]:hover:after {
  transform: translateZ(0);
}

[data-blurred-text],
[data-dotted-square],
[data-dotted-text],
[data-fade-in-el],
[data-main-title],
[data-reveal-after] {
  visibility: hidden;
}

[data-blurred-text] {
  text-shadow: 0 0 100px #fff;
  color: transparent;
}

.lazy-img-fadein[lazy='loaded'] {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.cookieControl__BarButtons button,
.cookieControl__ModalButtons button {
  overflow: hidden;
}

.cookieControl__BarButtons button,
.cookieControl__ModalButtons button {
  padding-left: 0 !important;
}

.cookieControl__ModalButtons button:after {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}

::-moz-selection {
  color: #000000;
  background: #ffffff;
}

::selection {
  color: #000000;
  background: #ffffff;
}

.dotted-square {
  background-image: radial-gradient(circle at center, #fff 2px, transparent 0),
    radial-gradient(circle at center, #fff 2px, transparent 0),
    radial-gradient(circle at center, #fff 2px, transparent 0),
    radial-gradient(circle at center, #fff 2px, transparent 0);
  background-position: 0 0, 100% 0, 0 100%, 100% 100%;
  background-size: 4px 4px;
  background-repeat: no-repeat;
  will-change: transform;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 200ms;
}

.dotted-square:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}

@media (min-width: 1024px) {
  .fullwidth-centered-text {
    margin-left: 6.7vw;
  }
}

.underline-after {
  position: relative;
  display: inline-block;
}

.underline-after:after {
  content: '';
  height: 1px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}

.text-white .underline-after:after,
.underline-after.text-white:after {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.overlay {
  pointer-events: none;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  opacity: 0.5;
}

.richtext {
  margin-bottom: -1rem;
}

.richtext h2 {
  margin-bottom: 1.5rem;
  font-size: 2.75rem;
  line-height: 1.23;
}

.richtext h3 {
  margin-bottom: 1.5rem;
}

.richtext h4 {
  margin-bottom: 1rem;
  font-size: 0.938rem;
  line-height: 2;
}

.richtext strong {
  font-weight: 700;
  --tw-text-opacity: 1;
  color: rgba(0, 0, 0, var(--tw-text-opacity));
}

.richtext ol,
.richtext p,
.richtext ul {
  margin-bottom: 1rem;
}

.richtext ol + h2,
.richtext ol + h3,
.richtext ol + h4,
.richtext p + h2,
.richtext p + h3,
.richtext p + h4,
.richtext ul + h2,
.richtext ul + h3,
.richtext ul + h4 {
  margin-top: 1.5rem;
}

@media (min-width: 1024px) {
  .richtext ol + h2,
  .richtext ol + h3,
  .richtext ol + h4,
  .richtext p + h2,
  .richtext p + h3,
  .richtext p + h4,
  .richtext ul + h2,
  .richtext ul + h3,
  .richtext ul + h4 {
    margin-top: 3rem;
  }
}

.richtext ol li,
.richtext ul li {
  position: relative;
  margin-bottom: 0.75rem;
  padding-left: 2.5rem;
}

.richtext ol li:before,
.richtext ul li:before {
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;
}

.richtext ul {
  margin: 0px;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px;
}

.richtext ul li:before {
  content: '•';
  width: 1.75rem;
  margin-right: 0.75rem;
  height: 100%;
  font-size: 1.5625rem;
  line-height: 1.4;
  line-height: 1;
}

.richtext ol {
  counter-reset: my-awesome-counter;
  margin: 0px;
  display: flex;
  list-style-type: none;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0px;
}

.richtext ol li {
  counter-increment: my-awesome-counter;
}

.richtext ol li:before {
  content: counter(my-awesome-counter, decimal-leading-zero);
  width: 1.75rem;
  margin-right: 0.75rem;
  height: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
}

.diary-detail-page .richtext p,
.privacy-page .richtext p {
  font-size: 0.938rem;
  line-height: 2;
  font-weight: 300;
  line-height: 2;
}

@media (min-width: 1024px) {
  .diary-detail-page .richtext p,
  .privacy-page .richtext p {
    font-size: 1.25rem;
    line-height: 2;
  }
}

.diary-detail-page .richtext h2,
.privacy-page .richtext h2 {
  margin-bottom: 2.5rem;
  font-size: 2.75rem;
  line-height: 1.23;
  font-weight: 300;
}

@media (min-width: 1024px) {
  .diary-detail-page .richtext h2,
  .privacy-page .richtext h2 {
    font-size: 5rem;
    line-height: 1.225;
  }
}

.diary-detail-page .richtext h3,
.privacy-page .richtext h3 {
  margin-bottom: 2.5rem;
  font-size: 1.5625rem;
  line-height: 1.4;
  font-weight: 300;
}

@media (min-width: 1024px) {
  .diary-detail-page .richtext h3,
  .privacy-page .richtext h3 {
    font-size: 2.5rem;
    line-height: 1.375;
  }
}

.diary-detail-page .richtext h4,
.diary-detail-page .richtext h5,
.diary-detail-page .richtext h6,
.privacy-page .richtext h4,
.privacy-page .richtext h5,
.privacy-page .richtext h6 {
  margin-bottom: 2.5rem;
  font-size: 0.8125rem;
  line-height: 1.38;
  letter-spacing: 0.3em;
}

@media (min-width: 1024px) {
  .diary-detail-page .richtext h4,
  .diary-detail-page .richtext h5,
  .diary-detail-page .richtext h6,
  .privacy-page .richtext h4,
  .privacy-page .richtext h5,
  .privacy-page .richtext h6 {
    font-size: 0.938rem;
    line-height: 2;
  }
}

.masonry-item .overlay,
.masonry-item .project-info-title span {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
}

.masonry-item .overlay.overlay-lighter,
.masonry-item .project-info-title span.overlay-lighter {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-duration: 300ms;
}

.masonry-item:hover .overlay {
  opacity: 0;
}

.masonry-item:hover .overlay.overlay-lighter {
  --tw-bg-opacity: 1;
  background-color: rgba(20, 20, 20, var(--tw-bg-opacity));
  opacity: 0.5;
}

.masonry-item:hover .project-info-title span:nth-child(2) {
  visibility: visible;
  opacity: 1;
}

.masonry-item:hover .dotted-square {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

[data-nav-wrapper].transparent {
  background-color: transparent !important;
}

@media (min-width: 1024px) {
  .product-item .dotted-square {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 700ms;
  }
}

@media (max-width: 1023px) {
  .product-item .dotted-square {
    background-image: none;
  }
}

@media (min-width: 1024px) {
  .product-item {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 700ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1;
  }

  .product-item:hover {
    flex: 7;
  }

  .product-item:hover .dotted-square {
    opacity: 1;
  }
}

.cookieControl__Bar {
  font-family: auto-pro-new !important;
}

.mobile-slider-with-bg .slick-list,
.mobile-slider-with-bg .slick-slide > div,
.mobile-slider-with-bg .slick-slider,
.mobile-slider-with-bg .slick-track {
  height: 100%;
}

.slick-track {
  display: flex !important;
}

.slick-slide {
  height: inherit !important;
}

.lg-backdrop.in {
  opacity: 0.75;
}

.lg-outer .lg-video-cont {
  max-width: 1140px !important;
}

.app-gallery,
.app-gallery .lg-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-gallery .lg-item {
  max-height: 80%;
}

.app-gallery .lg-label {
  font-size: 2.5rem;
  line-height: 1.375;
  font-weight: 300;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.app-gallery .lg-label .underline-after:after,
.underline-after.text-white:after {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.text-white .underline-after:after,
.underline-after.text-white:after {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.app-gallery .lg-toolbar .lg-close {
  font-family: 'icomoon' !important;
  speak: never;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 4rem;
  width: 5rem;
  font-size: 1.5625rem;
  line-height: 1.4;
}

.app-gallery .lg-toolbar .lg-close:after {
  content: '';
}

.app-gallery .lg-actions .lg-next {
  right: 0px;
}

.app-gallery .lg-actions .lg-prev {
  left: 0px;
}

.app-gallery .lg-actions .lg-next,
.app-gallery .lg-actions .lg-prev {
  padding: 2.25rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}

.app-gallery .lg-actions .lg-next .underline-after:after,
.app-gallery .lg-actions .lg-prev .underline-after:after,
.underline-after.text-white:after,
.underline-after.text-white:after {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.text-white .underline-after:after,
.text-white .underline-after:after,
.underline-after.text-white:after,
.underline-after.text-white:after {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}

.app-gallery .lg-actions .lg-next:after,
.app-gallery .lg-actions .lg-next:before,
.app-gallery .lg-actions .lg-prev:after,
.app-gallery .lg-actions .lg-prev:before {
  content: '';
}

.vm--container .app-modal {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.05;
}

.vm--container .app-modal.awards-modal {
  --tw-bg-opacity: 1;
}

.vm--container.scrollable .app-modal {
  overflow-y: auto;
}

.vm--container .vm--overlay {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
  --tw-bg-opacity: 0.7;
}
.cookieControl__Modal-enter-active,
.cookieControl__Modal-leave-active {
  transition: opacity 0.25s;
}

.cookieControl__Modal-enter,
.cookieControl__Modal-leave-to {
  opacity: 0;
}

.cookieControl__Bar--center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cookieControl__Bar--bottom-full-enter-active,
.cookieControl__Bar--bottom-full-leave-active,
.cookieControl__Bar--bottom-left-enter-active,
.cookieControl__Bar--bottom-left-leave-active,
.cookieControl__Bar--bottom-right-enter-active,
.cookieControl__Bar--bottom-right-leave-active,
.cookieControl__Bar--center-enter-active,
.cookieControl__Bar--center-leave-active,
.cookieControl__Bar--top-full-enter-active,
.cookieControl__Bar--top-full-leave-active,
.cookieControl__Bar--top-left-enter-active,
.cookieControl__Bar--top-left-leave-active,
.cookieControl__Bar--top-right-enter-active,
.cookieControl__Bar--top-right-leave-active {
  transition: transform 0.25s;
}

.cookieControl__Bar--top-full-enter,
.cookieControl__Bar--top-full-leave-to,
.cookieControl__Bar--top-left-enter,
.cookieControl__Bar--top-left-leave-to,
.cookieControl__Bar--top-right-enter,
.cookieControl__Bar--top-right-leave-to {
  transform: translateY(-100%);
}

.cookieControl__Bar--bottom-full-enter,
.cookieControl__Bar--bottom-full-leave-to,
.cookieControl__Bar--bottom-left-enter,
.cookieControl__Bar--bottom-left-leave-to,
.cookieControl__Bar--bottom-right-enter,
.cookieControl__Bar--bottom-right-leave-to {
  transform: translateY(100%);
}

.cookieControl__Bar--center-enter,
.cookieControl__Bar--center-leave-to {
  transform: translate(-50%, -50%) scale(0.95);
}

.cookieControl {
  position: relative;
  z-index: 100000;
}

.cookieControl button {
  border: 0;
  outline: 0;
  font-size: 16px;
  cursor: pointer;
  padding: 12px 20px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: background-color 0.2s, color 0.2s;
}

.cookieControl__Bar {
  position: fixed;
  background-color: var(--cookie-control-barBackground);
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}

.cookieControl__Bar h3,
.cookieControl__Bar p {
  color: var(--cookie-control-barTextColor);
  max-width: 900px;
}

.cookieControl__Bar h3 {
  margin: 0;
  font-size: 20px;
}

.cookieControl__Bar p {
  font-size: 16px;
  margin: 5px 0 0;
}

.cookieControl__Bar button {
  color: var(--cookie-control-barButtonColor);
  background-color: var(--cookie-control-barButtonBackground);
}

.cookieControl__Bar button:hover {
  color: var(--cookie-control-barButtonHoverColor);
  background-color: var(--cookie-control-barButtonHoverBackground);
}

.cookieControl__Bar button + button {
  margin-left: 10px;
}

.cookieControl__BarContainer {
  display: flex;
  padding: 20px;
  align-items: flex-end;
  justify-content: space-between;
}

.cookieControl__Bar--bottom-full,
.cookieControl__Bar--top-full {
  left: 0;
  right: 0;
}

.cookieControl__Bar--top-full {
  top: 0;
}

.cookieControl__Bar--bottom-full {
  bottom: 0;
}

.cookieControl__Bar--bottom-left p,
.cookieControl__Bar--bottom-right p,
.cookieControl__Bar--center p,
.cookieControl__Bar--top-left p,
.cookieControl__Bar--top-right p {
  max-width: 400px;
}

.cookieControl__Bar--bottom-left .cookieControl__BarContainer,
.cookieControl__Bar--bottom-right .cookieControl__BarContainer,
.cookieControl__Bar--center .cookieControl__BarContainer,
.cookieControl__Bar--top-left .cookieControl__BarContainer,
.cookieControl__Bar--top-right .cookieControl__BarContainer {
  flex-direction: column;
}

.cookieControl__Bar--bottom-left .cookieControl__BarButtons,
.cookieControl__Bar--bottom-right .cookieControl__BarButtons,
.cookieControl__Bar--center .cookieControl__BarButtons,
.cookieControl__Bar--top-left .cookieControl__BarButtons,
.cookieControl__Bar--top-right .cookieControl__BarButtons {
  margin-top: 20px;
}

.cookieControl__Bar--top-left,
.cookieControl__Bar--top-right {
  top: 20px;
}

.cookieControl__Bar--bottom-left,
.cookieControl__Bar--bottom-right {
  bottom: 20px;
}

.cookieControl__Bar--bottom-left,
.cookieControl__Bar--top-left {
  left: 20px;
}

.cookieControl__Bar--bottom-right,
.cookieControl__Bar--top-right {
  right: 20px;
}

.cookieControl__BarButtons {
  display: flex;
}

.cookieControl__Modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  font-size: 0;
  text-align: center;
}

.cookieControl__Modal:before {
  content: '';
  min-height: 100vh;
  display: inline-block;
  vertical-align: middle;
}

.cookieControl__Modal:after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: var(--cookie-control-modalOverlayOpacity);
  background-color: var(--cookie-control-modalOverlay);
}

.cookieControl__Modal > div {
  font-size: medium;
  padding-top: 80px;
}

.cookieControl__Modal button {
  color: var(--cookie-control-modalButtonColor);
  background-color: var(--cookie-control-modalButtonBackground);
}

.cookieControl__Modal button:hover {
  color: var(--cookie-control-modalButtonHoverColor);
  background-color: var(--cookie-control-modalButtonHoverBackground);
}

.cookieControl__ModalContent {
  position: relative;
  width: 100%;
  padding: 40px;
  max-width: 550px;
  max-height: 80vh;
  text-align: left;
  overflow-y: scroll;
  display: inline-block;
  vertical-align: middle;
  background-color: var(--cookie-control-modalBackground);
}

.cookieControl__ModalContent,
.cookieControl__ModalContent :not(button) {
  color: var(--cookie-control-modalTextColor);
}

.cookieControl__ModalContent h3 {
  font-size: 24px;
  margin: 50px 0 25px;
}

.cookieControl__ModalContent h3:first-of-type {
  margin-top: 0;
}

.cookieControl__ModalContent ul {
  padding: 0;
  font-size: 16px;
  list-style-type: none;
}

.cookieControl__ModalContent ul ul {
  padding: 5px 56px 0;
}

.cookieControl__ModalContent ul ul li + li {
  margin-top: 5px;
}

.cookieControl__ModalContent li {
  align-items: center;
}

.cookieControl__ModalContent li + li {
  margin-top: 20px;
}

.cookieControl__ModalContent input {
  display: none;
}

.cookieControl__ModalContent input:checked + label {
  background-color: var(--cookie-control-checkboxActiveBackground);
}

.cookieControl__ModalContent input:checked + label:before {
  background-color: var(--cookie-control-checkboxActiveCircleBackground);
  transform: translate3d(100%, -50%, 0);
}

.cookieControl__ModalContent input:checked:disabled + label {
  background-color: var(--cookie-control-checkboxDisabledBackground);
}

.cookieControl__ModalContent input:checked:disabled + label:before {
  background-color: var(--cookie-control-checkboxDisabledCircleBackground);
}

.cookieControl__ModalContent label {
  position: relative;
  min-width: 36px;
  min-height: 20px;
  font-size: 0;
  display: block;
  margin-right: 20px;
  border-radius: 20px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: background-color 0.2s;
  background-color: var(--cookie-control-checkboxInactiveBackground);
}

.cookieControl__ModalContent label:before {
  position: absolute;
  content: '';
  top: 50%;
  left: 3px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  transition: transform 0.2s;
  transform: translate3d(0, -50%, 0);
  background-color: var(--cookie-control-checkboxInactiveCircleBackground);
}

.cookieControl__ModalInputWrapper {
  display: flex;
  align-items: flex-start;
}

.cookieControl__ModalCookieName {
  font-weight: 700;
  text-transform: uppercase;
}

.cookieControl__ModalCookieName span {
  font-weight: 400;
  text-transform: none;
}

.cookieControl__ModalClose {
  position: absolute;
  top: 20px;
  right: 20px;
}

.cookieControl__ModalButtons {
  display: flex;
  margin-top: 80px;
  align-items: flex-start;
}

.cookieControl__ModalButtons button + button {
  margin-left: 20px;
}

.cookieControl__ModalUnsaved {
  position: absolute;
  left: 50%;
  bottom: 40px;
  margin: 0;
  color: var(--cookie-control-modalUnsavedColor);
  font-size: 14px;
  transform: translateX(-50%);
}

.cookieControl__BlockedIframe {
  padding: 20px;
  border: 2px solid #ddd;
}

.cookieControl__BlockedIframe a,
.cookieControl__BlockedIframe p {
  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
}

@media screen and (max-width: 768px) {
  .cookieControl__Bar {
    flex-direction: column;
    left: 0;
    right: 0;
  }

  .cookieControl__Bar h3,
  .cookieControl__Bar p {
    max-width: 100%;
  }

  .cookieControl__Bar--top-full,
  .cookieControl__Bar--top-left,
  .cookieControl__Bar--top-right {
    top: 0;
  }

  .cookieControl__Bar--bottom-full,
  .cookieControl__Bar--bottom-left,
  .cookieControl__Bar--bottom-right {
    bottom: 0;
  }

  .cookieControl__ModalContent {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: none;
    max-height: 100%;
    padding: 80px 20px 20px;
  }

  .cookieControl__BarButtons {
    width: 100%;
    margin-top: 20px;
    justify-content: flex-end;
  }

  .cookieControl__BarContainer {
    flex-direction: column;
  }
}

.cookieControl__ControlButton {
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: 0;
  outline: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: background-color 0.2s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  background: var(--cookie-control-controlButtonBackground);
}

.cookieControl__ControlButton svg {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;
  transition: color 0.2s;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate(-50%, -50%);
  color: var(--cookie-control-controlButtonIconColor);
}

.cookieControl__ControlButton:hover {
  background-color: var(--cookie-control-controlButtonHoverBackground);
}

.cookieControl__ControlButton:hover svg {
  color: var(--cookie-control-controlButtonIconHoverColor);
}
.nuxt-progress {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  width: 0;
  opacity: 1;
  transition: width 0.1s, opacity 0.4s;
  background-color: #000;
  z-index: 999999;
}
.nuxt-progress.nuxt-progress-notransition {
  transition: none;
}
.nuxt-progress-failed {
  background-color: red;
}
.nav-wrapper {
  width: 100%;
}
@media (max-width: 1023px) {
  .nav-wrapper {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}
@media (max-width: 639px) {
  .nav-wrapper {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}
@media (min-width: 1024px) {
  .nav-wrapper {
    width: 100%;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  @media (min-width: 480px) {
    .nav-wrapper {
      max-width: 480px;
    }
  }
  @media (min-width: 640px) {
    .nav-wrapper {
      max-width: 640px;
      padding-right: 2rem;
      padding-left: 2rem;
    }
  }
  @media (min-width: 768px) {
    .nav-wrapper {
      max-width: 768px;
    }
  }
  @media (min-width: 1024px) {
    .nav-wrapper {
      max-width: 1024px;
    }
  }
  @media (min-width: 1280px) {
    .nav-wrapper {
      max-width: 1280px;
    }
  }
  @media (min-width: 1366px) {
    .nav-wrapper {
      max-width: 1366px;
    }
  }
  @media (min-width: 1536px) {
    .nav-wrapper {
      max-width: 1536px;
    }
  }
  @media (min-width: 1900px) {
    .nav-wrapper {
      max-width: 1900px;
    }
  }
  .nav-wrapper {
    margin-left: auto;
    margin-right: auto;
    width: 93%;
    max-width: none;
    padding-left: 0px;
    padding-right: 0px;
  }
}
@media (min-width: 1280px) {
  .nav-wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
}
.main-nav {
  display: flex;
  align-items: center;
}
.main-nav-item {
  margin-left: 1rem;
  margin-right: 1rem;
}
.main-nav-item a {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
@media (max-width: 1023px) {
  .dotted-square {
    background-image: none;
  }
}
footer .icon-arrow-right:before {
  font-weight: 700;
}
</style>
