<template>
  <div class="modal-wrapper">
    <div class="modal modal-privat" v-click-outside="modalPrivat">
      <div class="close-modal" @click="modalPrivat"/>
      <h2 class="title">Мгновенная рассрочка от<br/><span class="green">ПриватБанка</span></h2>
      <div class="modal-content">
        <div class="flex">
          <div class="fl-2">
            <div class="flex">
              <ul>
                <div class="pre-title">КАК ОФОРМИТЬ</div>
                <li>При разговоре с менеджером компании, в ходе оформления заказа, уточнить желание оплатить частями.</li>
                <li>Получить ссылку на страницу для оформления рассрочки, внести первый платеж.</li>
                <li>Получить на почту договор рассрочки от ПриватБанка.</li>
              </ul>
              <ul>
                <div class="pre-title">УСЛОВИЯ</div>
                <li>Сумма заказа разбивается <span class="green">на 3 платежа</span> равными частями</li>
                <li>Первый взнос равен <span class="green">1/3 части</span> от общей суммы заказа</li>
                <li>Комиссия банка равна <span class="green">2.9%</span> от общей суммы</li>
              </ul>
            </div>
          </div>
          <div class="fl-1">
            <ul>
              <div class="pre-title">ПРИМЕР</div>
              <li>
                <div>Сумма заказа</div>
                <div class="price">3000 грн</div>
              </li>
              <li>
                <div class="between"><span>1/3 часть</span><span>Комиссия банка</span></div>
                <div class="between"><span class="price">1000 грн</span><span class="price">+</span><span class="price">87 грн</span></div>
              </li>
              <li>
                <div>Ежемесячная оплата</div>
                <div class="price green">1087 грн</div>
              </li>
            </ul>
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
  name: 'modal-privat',
  directives: {
    ClickOutside
  },
  methods: {
    ...mapMutations(['modalPrivat'])
  }
}
</script>

<style lang="scss">
  .modal.modal-privat {
    position: absolute;
    z-index: 1000;
    top: 0;
    margin: 50px 0;
    background-color: #fefefe;
    padding: 30px 40px;
    width: 80%;
    max-width: 1100px;
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

    .price {
      display: block;
      margin-top: 10px;
      color: #000;
      font-size: 26px;
    }

    .green {
      color: rgb(128, 177, 68);
    }

    .between {
      display: flex;
      justify-content: space-between;
    }

    .modal-content {
      display: flex;
      flex-direction: column;

      .flex {
        display: flex;
        align-items: flex-start;

        .fl-1 {
          flex: 1;
          padding-left: 50px;
          border-left: 1px solid #888;
        }

        .fl-2 {
          flex: 2;
          padding-right: 50px;

          ul:first-child {
            padding-right: 30px;
          }
        }
      }

      ul {
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          width: 100%;
          font-size: 15px;
          margin-top: 30px;
          color: #999;
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
      margin-bottom: 50px;
      font-weight: normal;
    }
  }
</style>