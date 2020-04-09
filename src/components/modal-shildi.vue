<template>
  <div class="modal-wrapper">
    <div class="modal modal-shildi" v-click-outside="modalShildi">
      <div class="close-modal" @click="modalShildi"/>
      <h2 class="title">Шильды</h2>
      <div class="modal-content">
        <div class="flex">
          <div class="column">
            <div class="description">Фирменные, металические шильды с логотипом марки автомобиля. Подчеркнут индивидуальность вашим коврам.</div>
            <ul>
              <li>Характеристика: металлический</li>
              <li>Легко крепится самостоятельно</li>
            </ul>
            <div class="price">150 грн / шт.</div>
            <div class="small-price">100 грн.</div>
            <span class="from-4">При покупке от 4х шт.</span>
          </div>
          <div class="column">
            <img src="../assets/shilda.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'modal-shildi',
  methods: {
    ...mapMutations(['modalShildi'])
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
  .modal.modal-shildi {
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

    .modal-content {
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
          width: 100%;
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

    .title {
      margin: 0;
      font-weight: normal;

      .red {
        color: #d20004;
        margin-left: 5px;
      }
    }

    .description {
      color: #999;
    }

    .price {
      display: block;
      font-size: 26px;
      margin: 30px 0;
      color: #d20004;
    }

    .small-price {
      margin: 0;
      font-size: 16px;
    }

    .from-4 {
      color: #999;
      font-size: 12px;
    }

    img {
      width: 100%;
      max-width: 100%;
      margin-top: 20px;
    }
  }
</style>