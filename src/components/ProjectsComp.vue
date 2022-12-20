<template>
  <div class="content-info__upper flow">
    <h1 class="type-display">Projects</h1>
    <div class="content-projects grid">
      <div
        class="project"
        v-for="(item, i) in items"
        :key="i"
        :style="`background-image: url(${item.img})`"
      >
        <a :href="item.link" target="_blank">
          <div class="project-inner">
            <p class="project-desc">{{ item.desc }}.</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
  const items = [
    {
      img: './img/pr-ellglow.png',
      desc: 'Beauty salon.',
      link: 'https://olgak169.github.io/ell-glow/',
    },
    {
      img: './img/pr-space.png',
      desc: 'Space exploration.',
      link: 'https://olgak169.github.io/FMSpace/',
    },
    {
      img: './img/pr-iptrack.png',
      desc: 'IP tracker.',
      link: 'https://olgak169.github.io/FMSpace/',
    },
    {
      img: './img/pr-countryapi.png',
      desc: 'Country statistics.',
      link: 'https://olgak169.github.io/FMSpace/',
    },
  ]
</script>
