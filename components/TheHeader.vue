<template>
  <div
    id="header"
    :class="[
      'fixed top-0 left-0 w-full z-30 nav-overwrapper transition-colors duration-500',
    ]"
    data-nav-wrapper
  >
    <div class="nav-wrapper flex justify-between items-center py-4 lg:py-5">
      <nuxt-link
        class="logo font-light uppercase tracking-widest text-2xl lg:text-3xl text-white relative z-30 w-36 nuxt-link-active"
        to="/"
      >
        <img :src="require('~/assets/img/bas.svg')" alt="Skira logo" />
      </nuxt-link>
      <div>
        <div
          :class="[
            'menu-button lg:hidden relative z-30 self-center ml-auto hamburger hamburger--3dy flex items-center justify-center',
            {
              'is-active': open,
            },
          ]"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </div>
      </div>
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
</template>

<script>
export default {
  data() {
    return {
      open: false,
    }
  },
}
</script>
