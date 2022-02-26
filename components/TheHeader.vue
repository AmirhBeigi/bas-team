<template>
  <div
    id="header"
    :class="[
      'fixed top-0 left-0 w-full z-30 nav-overwrapper transition-colors duration-500',
      {
        'bg-black': $device.isMobile,
      },
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
          @click="open = !open"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </div>
      </div>
      <transition name="fade">
        <nav
          v-if="open"
          class="main-nav w-full lg:w-auto h-screen lg:h-auto flex lg:block absolute lg:relative left-0 top-0 justify-center items-center bg-black lg:bg-inherit"
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
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: !this.$device.isMobile,
    }
  },
}
</script>
