<template>
  <div class="modal-wrapper">
    <div class="modal modal-info" v-click-outside="modalInfo">
      <div class="close-modal" @click="modalInfo"/>
      <h2 class="title">Комплект {{currentKit.title}} <span class="red">{{currentKit.price}} грн</span></h2>
      <div class="modal-content">
        <img :src="getImage" alt="">
        <ul v-if="currentKit.title !== 'Платинум'">
          <li>Передние или задние с перемычкой</li>
          <li
            v-if="currentKit.title !== 'Эконом' && currentKit.title !== 'Стандарт'"
          >Коврик в багажник</li>
          <li v-if="currentKit.title === 'Эконом'">Гарантия от 6 до 12 мес</li>
          <li
            v-if="currentKit.title !== 'Эконом'"
          >Гарантия 12 мес</li>
          <li>Срок пошива 5-7 дней</li>
          <li>Оригинальные крепления + система липучек</li>
          <li
            v-if="currentKit.title !== 'Эконом' && currentKit.title !== 'Стандарт'"
          >Бесплатная доставка</li>
          <li v-if="currentKit.title !== 'Премиум'">Пакет документов</li>
          <li
            v-if="currentKit.title !== 'Эконом'"
          >рассрочка {{ Math.floor(currentKit.price / 4)}} грн х 4 платежа</li>
        </ul>
        <div v-if="currentKit.title === 'Платинум'" class="flex">
          <ul class="column">
            <li>5 ковриков: 4 в салон + перемычка и багажник</li>
            <li>Оригинальные крепления + система липучек</li>
            <li>Брендированный подпятник</li>
            <li>Шильды с логотипом марки авто: 5 шт</li>
            <li>Пакет документов</li>
            <li>Фирменный подарок от компании, который формируется индивидуально под каждого клиента</li>
          </ul>
          <ul class="column">
            <li>Бесплатная доставка по Украине</li>
            <li>Комплект накидок на переднии сидения выполенные из бархотного меха (1690 грн)</li>
            <li>Доставка до 2-х дней</li>
            <li>Пошив: 5-7 дней</li>
            <li>Отправка заказа в тот же день пошива</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'modal-info',
  methods: {
    ...mapMutations(['modalInfo'])
  },
  computed: {
    ...mapGetters(['currentKit']),
    getImage: {
      get() {
        return require(`../assets/complekts/${this.$store.state.currentKit}.jpg`)
      }
    }
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
.modal {
  position: absolute;
  z-index: 1000;
  top: 0;
  margin: 50px 0;
  background-color: #fefefe;
  padding: 30px 40px;
  width: 80%;
  max-width: 800px;
  min-height: 300px;

  .close-modal {
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    background: url('../assets/close-button.svg') no-repeat center center / cover;
    opacity: 0.1;
    transition: opacity .2s ease;

    &:hover {
      opacity: 0.3;
    }
  }

  &-content {
    display: flex;
    flex-direction: column;

    .flex {
      display: flex;
      align-items: flex-start;
    }

    ul {
      padding: 0;
      margin: 0;

      li {
        display: inline-block;
        width: 50%;
        font-size: 14px;
        margin-top: 20px;
        padding-left: 30px;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          left: 3px;
          top: 3px;
          width: 12px;
          height: 12px;
          display: block;
          z-index: 1;
          background: url('../assets/check-green.svg') no-repeat center center / contain;
        }
      }

      &.column {
        width: 50%;
        display: inline-block;

        li {
          width: 100%;
        }
      }
    }
  }

  &.modal-info {
    .title {
      margin: 0;
      font-weight: normal;

      .red {
        color: #d20004;
        margin-left: 5px;
      }
    }

    img {
      width: 100%;
      max-width: 100%;
      margin-top: 20px;
    }
  }
}
</style>