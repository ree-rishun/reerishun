<template>
  <div>
    <div class="gallery_box fade_eff_b" v-for="portfolio in portfolios" :key="portfolio.id">
      <div class="gallery_img">
        <img :src="portfolio.img" :alt="portfolio.title + 'のロゴ'">
      </div><div class="gallery_txt">
      <h2>{{ portfolio.title }}</h2>
      <p>
        {{ portfolio.description }}
      </p>
      <a v-if="portfolio.link" :href="portfolio.link" target="_blank" class="jump_button" :title="portfolio.title + 'へ'">OPEN</a></div></div>

  </div>
</template>

<script>
    export default {
        name: "gallery",
        data(){
            return{
                portfolios: [],
            }
        }
    }
</script>

<style scoped>

</style>