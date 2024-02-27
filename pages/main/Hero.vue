<template>
  <div class="section-hero">
    <h1 class="title">
      Hello, I'm
      <TextAccent text="Valery Meshkov" />.
    </h1>

    <p class="description">
      Creative web developer specializing in
      <TextAccent text="UI/UX" />.
    </p>

    <NuxtLink
      class="button"
      to="#about"
    >
      <ButtonText text="Tell Me More" />
    </NuxtLink>
  </div>
</template>


<script setup lang="ts">
</script>  

<style lang="scss" scoped>
.section-hero {
  padding: 100px 20px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    width: fit-content;
    margin-top: 15px;
    text-align: center;
    font-size: clamp(24px, 3rem, 48px)
  }

  .description {
    text-align: center;
    margin-top: 10px;
    font-size: clamp(16px, 2rem, 24px)
  }

  .button {
    display: block;
    margin-top: 10px;
    width: fit-content;
  }
}
</style>