<template>
  <div class="slide slide-2 column-2" :class="{'validate': validate}">
    <div class="column">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 2 из 4</div>
      <strong class="description">Следующий шаг - персонализация, подбор цветовой гаммы Ваших будущих ковриков</strong>
      <image-svg
        :mainColor="getMainColor"
        :borderColor="getSecondaryColor"
        class="mobile"
      />
      <div
        v-if="isMobile"
        class="my-select-wrapper"
        :class="{'active': selectedMainColor, 'error': !selectedMainColor}"
      >
        <select
          class="my-select"
          v-model="selectedMainColor"
        >
          <option value="" disabled selected>Цвет полимера</option>
          <option v-for="mainColor in mainColors" :value="mainColor" :key="mainColor">{{mainColor}}</option>
        </select>
      </div>
      <v-select
        v-else
        :options="mainColors"
        :class="{'active': selectedMainColor, 'error': !selectedMainColor}"
        v-model="selectedMainColor"
        placeholder="Цвет полимера"
      />

      <div
        v-if="isMobile"
        class="my-select-wrapper"
        :class="{'active': selectedSecondaryColor, 'error': !selectedSecondaryColor}"
      >
        <select
          class="my-select"
          v-model="selectedSecondaryColor"
        >
          <option value="" disabled selected>Цвет канта</option>
          <option v-for="secondaryColor in secondaryColors" :value="secondaryColor" :key="secondaryColor">{{secondaryColor}}</option>
        </select>
      </div>
      <v-select
        v-else
        :options="secondaryColors"
        :class="{'active': selectedSecondaryColor, 'error': !selectedSecondaryColor}"
        v-model="selectedSecondaryColor"
        placeholder="Цвет канта"
      />
      <div class="flex">
        <button
          class="button-prev"
          @click.prevent="prev">Вернуться назад
        </button>
        <button
          class="button"
          :class="{disabled: disabled}"
          @click.prevent="sendData"
        >Дальше
        </button>
      </div>
    </div>
    <div class="column">
      <image-svg
        :mainColor="getMainColor"
        :borderColor="getSecondaryColor"
      />
    </div>
  </div>
</template>

<script>
import colors from '../api/color'
import {mapMutations} from 'vuex'
export default {
  name: 'slide-2',
  data() {
    return {
      mainColors: [],
      secondaryColors: [],
      selectedMainColor: '',
      selectedSecondaryColor: '',
      validate: false
    }
  },
  mounted() {
    this.mainColors = Object.keys(colors.main)
    this.secondaryColors = Object.keys(colors.secondary)

    // set prices for next slide
    if (document.querySelectorAll('a[href="kitsPrice"]').length) {
      const elements = document.querySelectorAll('a[href="kitsPrice"]')
      const prices = []
      elements.forEach(el => {
        prices.push(el.innerText)
      })
      this.importPrices(prices)
    }
  },
  methods: {
    ...mapMutations(['next', 'prev', 'setColor', 'importPrices']),
    sendData() {
      if (this.selectedMainColor && this.selectedSecondaryColor) {
        this.validate = false
        this.setColor([this.selectedMainColor, this.selectedSecondaryColor])
        this.next()
        document.getElementById("constructor").scrollIntoView({block: "start", behavior: "smooth"})
      }
      else {
        this.validate = true
      }
    }
  },
  computed: {
    disabled: {
      get() {
        return this.selectedMainColor && this.selectedSecondaryColor ? false : true
      }
    },
    getMainColor: {
      get() {
        return colors.main[this.selectedMainColor]
      }
    },
    getSecondaryColor: {
      get() {
        return colors.secondary[this.selectedSecondaryColor]
      }
    },
    isMobile: {
      get() {
        return window.innerWidth < 1024 ? true : false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .column:first-child {
    padding-right: 10%;
  }

  button {
    margin-top: 0;

    &:first-child {
      margin-right: 20px;
    }
  }

  .flex {
    display: flex;
  }
</style>
