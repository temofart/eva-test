<template>
  <div class="image">
    <img class="img" src="../assets/cover.png" alt="">
    <!-- eslint-disable -->
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Слой_1" x="0px" y="0px" viewBox="0 0 383.5 463.6" style="enable-background:new 0 0 383.5 463.6;" xml:space="preserve">
      <path class="st0" d="M350,0H162c0,0-42.3-1-42,49l0.3,53.2c0,0,2,28.5-31,37.3S32.8,156,32.8,156S0,171,0,192.8v228.8  c0,0,0.8,41.5,43.5,41.5l297,1c0,0,39.3-0.7,42.8-40.7L384,32.8C384,32.8,378.8,2.3,350,0z M367.6,154l-0.3,128.7  c0,0,0.1,11.5,0.1,28c0.2,34.5,0.3,90.9-0.1,111c-0.7,29.7-33,28.1-33,28.1l-165-0.7c0,0-105,1.7-129.7,0  C15,447.3,16,418.7,16,418.7l0.7-223c0-15,16.7-24,16.7-24s56.7-18,78.7-27s25-30.7,25-30.7l-1.3-76.7c3-21.7,27.7-23,27.7-23h19.3  H348c19.3,2,19.6,23.3,19.6,23.3V154z"/>
      <path :style="{fill: borderColor}" class="border" d="M0,192.8v228.8c0,0,0.8,41.5,43.5,41.5l297,1c0,0,39.3-0.7,42.8-40.7L384,32.8c0,0-5.2-30.5-34-32.8H162  c0,0-42.3-1-42,49l0.3,53.3c0,0,2,28.5-31,37.2S32.8,156,32.8,156S0,171,0,192.8z"/>
      <path :style="{fill: mainColor}" class="main" d="M16.7,195.7l-0.7,223c0,0-1,28.7,23.7,30.3c24.7,1.7,129.7,0,129.7,0l165,0.7c0,0,32.3,1.6,33-28.1  c0.5-20.1,0.3-76.5,0.1-111c-0.1-16.5-0.1-28-0.1-28l0.3-128.7V37.7c0,0-0.3-21.3-19.6-23.3H182.7h-19.3c0,0-24.7,1.3-27.7,23  L137,114c0,0-3,21.7-25,30.7s-78.7,27-78.7,27S16.7,180.7,16.7,195.7z"/>
    </svg>
    <!-- eslint-enable -->
  </div>
</template>

<script>
export default {
  name: 'image-svg',
  props: {
    mainColor: {
      type: String,
      default: '#000'
    },
    borderColor: {
      type: String,
      default: '#000'
    }
  }
}
</script>

<style lang="scss" scoped>
	.border {
    fill: #000;
  }

  @keyframes rotating {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

  .image {
    position: relative;
    width: 300px;
    height: 363px;
    display: inline-block;
    margin-left: 100px;
    margin-top: 50px;

    &.loading::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 30px;
      height: 30px;
      display: block;
      background: url('../assets/loading.svg') no-repeat center center / cover;
      animation: rotating 1s ease-in-out infinite;
    }

    &.found::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 40px;
      height: 30px;
      display: block;
      background: url('../assets/check-green.svg') no-repeat center center / contain;
      transition: all .2s ease;
    }
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .svg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.8;
  }
</style>