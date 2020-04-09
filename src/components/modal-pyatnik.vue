<template>
  <div class="modal-wrapper">
    <div class="modal modal-pyatnik" v-click-outside="modalPyatnik">
      <div class="close-modal" @click="modalPyatnik"/>
      <h2 class="title">Подпятник алюминиевый</h2>
      <p class="description">Один из двух фирменных подпятников - предназначены для защиты водителького коврика,
      от продавливания и повреждения, каблуком туфлей или шпилькой женской обуви.
      Располагаются вблизи у педали газа и места отдыха ноги.</p>
      <div class="modal-content">
        <div class="flex">
          <div class="column">
            <span class="variant">Вариант 1</span>
            <h4 class="small-title">Подпятник для АКПП</h4>
            <img src="../assets/pyatnik/akpp.jpg" alt="">
            <ul>
              <li>размер 25х16 см</li>
              <li>толщина 3 мм</li>
              <li>противоскользящие резиновые вставки</li>
              <li>комплект креплений - 6шт</li>
              <li>срок гарантийной поддержки с подпятником 12 месяцев</li>
            </ul>
            <div class="price">450 грн</div>
          </div>
          <div class="column">
            <span class="variant">Вариант 2</span>
            <h4 class="small-title">Подпятник для механики</h4>
            <img src="../assets/pyatnik/mechanic.jpg" alt="">
            <ul>
              <li>размер 29х16 см</li>
              <li>толщина 3 мм</li>
              <li>противоскользящие резиновые вставки</li>
              <li>комплект креплений - 6шт</li>
              <li>срок гарантийной поддержки с подпятником 12 месяцев</li>
            </ul>
            <div class="price">450 грн</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import { mapMutations } from 'vuex'
export default {
  name: 'modal-pyatnik',
  directives: {
    ClickOutside
  },
  methods: {
    ...mapMutations(['modalPyatnik'])
  }
}
</script>

<style lang="scss">
  .modal.modal-pyatnik {
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

        .column {
          width: 50%;

          &:first-child {
            margin-right: 35px;
          }

          img {
            max-width: 100%;

          }
        }
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

    .variant {
      margin: 0;
      color: #999;
      font-size: 12px;
    }

    .small-title {
      margin: 0;
      margin-bottom: 10px 0;
    }

    .price {
      display: block;
      margin-top: 25px;
      font-size: 26px;
      color: #d20006;
    }

    img {
      width: 100%;
      max-width: 100%;
      margin-top: 20px;
    }
  }
</style>