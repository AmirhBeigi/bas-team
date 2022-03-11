<template>
  <div class="bg-black">
    <TheHeader />
    <div class="projects-page bg-black text-white py-28 xl:py-36">
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
            <div class="filters">
              <ul
                class="text-white list-none flex flex-wrap justify-center -mx-3"
              >
                <li class="px-3">
                  <button
                    :class="[{ active: 'All' === selectedFilter }]"
                    data-border-anim=""
                    @click="selectedFilter = 'All'"
                  >
                    <span>All</span>
                  </button>
                </li>
                <li v-for="(item, index) in tags" :key="index" class="px-3">
                  <button
                    :class="[{ active: item === selectedFilter }]"
                    data-border-anim=""
                    @click="selectedFilter = item"
                  >
                    <span>{{ item }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="projects-section py-12 lg:py-16">
        <div
          class="container mx-auto lg:max-w-none xl:px-0 lg:w-93/100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <nuxt-link
            v-for="(item, index) in filteredProjects"
            :key="index"
            class="masonry-item relative w-full md:p-5 max-md:pb-10 exterior"
            :to="`/projects/${item.id}`"
          >
            <div
              class="masonry-item relative w-full md:p-5 max-md:pb-10 exterior"
              @mouseover="
                isHovering = []
                $set(isHovering, index, true)
              "
              @mouseout="isHovering = []"
            >
              <div class="overlay z-10"></div>
              <figure class="relative" style="padding-bottom: 66.75%">
                <img
                  :alt="item.title"
                  class="block absolute top-0 left-0 right-0 lazy-img-fadein rounded-[8rem]"
                  :src="item.image"
                />
              </figure>
              <div
                :class="[
                  'dotted-square flex flex-col items-center justify-center z-10 w-54 h-54 bg-transparent absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2',
                ]"
                :style="{
                  backgroundColor: isHovering[index] && item.color,
                }"
              >
                <span
                  class="font-light text-sm px-10 text-center project-info-title mt-5"
                  ><span class="uppercase tracking-widest block mb-2">
                    {{ item.title }}
                  </span>
                </span>
              </div>
            </div>
          </nuxt-link>
        </div>
      </section>
    </div>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data() {
    return {
      selectedFilter: 'All',
      tags: [
        'Exterior',
        'Interior',
        'Landscape Lighting',
        'Light Art',
        'Case studies',
      ],
      projects: [
        {
          id: 1,
          title: 'Church Tower Premantura',
          tags: ['Exterior'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 2,
          title: 'Church Tower Premantura',
          tags: ['Exterior'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 3,
          title: 'Church Tower Premantura',
          tags: ['Interior'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 4,
          title: 'Church Tower Premantura',
          tags: ['Interior'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 5,
          title: 'Church Tower Premantura',
          tags: ['Landscape Lighting'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 6,
          title: 'Church Tower Premantura',
          tags: ['Light Art'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 7,
          title: 'Church Tower Premantura',
          tags: ['Case studies'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
        {
          id: 8,
          title: 'Church Tower Premantura',
          tags: ['Exterior'],
          color: '#2446e9',
          image:
            'https://admin.skira.hr/wp-content/uploads/2021/12/premantura-800-1.jpg',
        },
      ],
      isHovering: [],
    }
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((item) => {
        if (this.selectedFilter === 'All') {
          return item
        }
        return item.tags.includes(this.selectedFilter)
      })
    },
  },
}
</script>
