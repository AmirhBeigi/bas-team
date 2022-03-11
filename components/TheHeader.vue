<template>
  <div
    id="header"
    :class="[
      'fixed top-0 left-0 w-full z-30 nav-overwrapper transition-colors duration-500',
      { sticky: isSticky, invert: isLight },
    ]"
    data-nav-wrapper
  >
    <div class="nav-wrapper flex justify-between items-center py-4 lg:py-5">
      <nuxt-link
        class="logo font-light uppercase tracking-widest text-2xl lg:text-3xl text-white relative z-30 w-36 nuxt-link-active"
        to="/"
      >
        <img
          :class="['h-12']"
          :src="require('~/assets/img/bas.svg')"
          alt="Skira logo"
        />
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
                to="/"
                data-border-anim=""
                data-v-1adbb2d8=""
                >HOME</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/services"
                data-border-anim=""
                data-v-1adbb2d8=""
                >SERVICES</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/projects"
                data-border-anim=""
                data-v-1adbb2d8=""
                >PROJECTS</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/about"
                data-border-anim=""
                data-v-1adbb2d8=""
                >ABOUT</nuxt-link
              >
            </li>
            <li class="main-nav-item flex items-center" data-v-1adbb2d8="">
              <nuxt-link
                class="text-xl tracking-wide font-light"
                to="/contact"
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
  props: {
    isLight: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSticky: false,
      open: !this.$device.isMobile,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isSticky = window.scrollY > 0
    },
  },
}
</script>

<style lang="scss" scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #000;
}
</style>
