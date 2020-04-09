<template>
  <div class="slide slide-3">
    <div class="mob-wrap">
      <h2 class="title">Виртуальный<br>конструктор ковриков</h2>
      <div class="step">ШАГ 3 из 4</div>
      <strong class="description">Следующий шаг - выбор комплекта и подбор дополнительных аксессуаров</strong>
    </div>
    <div class="mobile swipe">
      <div class="icon-arrow"/>
      <div class="icon-swipe" />
      <div class="icon-arrow"/>
    </div>
    <div class="choose">
      <div
        v-for="(item, id) in getKits"
        :key="id"
        class="item"
      >
        <h3 class="title">{{item.title}} <i class="icon-info" @click.stop="modalInfo(id)"/></h3>
        <div class="acc-title">Аксессуары</div>
        <div class="acc-desc">скидка не распространяется</div>
        <img class="pic" :src="getImage(id)" alt="" />
        <div class="options" v-if="item.pyatnik || item.shildi">
          <div class="option">
            <input
              type="checkbox"
              :id="`pyatnik-${id}`"
              @change="calc(id, item, 'pyatnik')"
              class="input"
            >
            <label
              :for="`pyatnik-${id}`"
              class="label"
              data-text="Подпятник"
            />
            <i class="icon-info pyatnik" @click.stop="modalPyatnik"/>
          </div>
          <div class="option">
            <input
              type="checkbox"
              :id="`shilda-${id}`"
              @change="calc(id, item, 'shilda')"
              class="input"
            >
            <label
              :for="`shilda-${id}`"
              class="label"
              data-text="Шильды"
            />
            <i class="icon-info shilda" @click.stop="modalShildi"/>
            <div
              v-if="isMobile"
              class="my-select-wrapper"
            >
              <select
                class="my-select"
                :disabled="isSelectDisabled(id)"
                v-model="mobCount"
                @change="setShildaCount([mobCount, id])"
              >
                <option v-for="index in 5" :value="index" :key="index">{{index}}</option>
              </select>
            </div>
            <v-select
              v-else
              :options="['1', '2', '3', '4', '5']"
              @input="setShildaCount([$event, id])"
              :disabled="isSelectDisabled(id)"
              placeholder="1"
            >
            </v-select>
          </div>
        </div>
        <div class="gifts" v-if="id === 'premium'" />
        <div class="gifts" v-if="id === 'platinum' || id === 'vip'">
          <div class="gift">Специальный подарок</div>
          <div class="gift" v-if="id === 'platinum'">2 накидки на передние сиденья из Алькантары</div>
          <div class="gift" v-if="id === 'vip'">Бесплатная доставка</div>
        </div>
        <div class="price-wrapper">
          <div class="price">{{getPrice(id)}} грн</div>
          <div v-if="id !== 'econom'" @click.stop="modalPrivat" class="privat">Оплата частями</div>
        </div>
        <button
          @click.prevent="sendData(item, id)"
          class="button"
          :id="id"
        >Выбрать комплект</button>
      </div>
    </div>
    <div class="mob-wrap">
      <button
        class="button-prev bottom-space"
        @click.prevent="prev">Вернуться назад
      </button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
  name: 'slide-3',
  data() {
    return {
      mobCount: 1
    }
  },
  methods: {
    ...mapMutations(['setOption', 'next', 'prev', 'setKit', 'setFinalKit', 'setShildaCount', 'setPrice', 'modalInfo', 'modalPyatnik', 'modalShildi', 'modalPrivat']),
    calc(id, item, which, value) {
      if (which === 'pyatnik') {
        this.setOption([id, 'pyatnik'])
      }
      if (which === 'shilda') {
        this.setOption([id, 'shilda'])
      }
    },
    sendData(obj, id) {
      document.getElementById("constructor").scrollIntoView({block: "start", behavior: "smooth"})
      const price = this.getPrice(id)
      this.setKit(obj)
      this.setPrice(price)
      this.setFinalKit(id)
      this.next()
    },
    getImage: (id) => {
      return require(`../assets/${id}.jpg`)
    }
  },
  computed: {
    ...mapGetters(['getKits', 'getPrice', 'isSelectDisabled']),
    isMobile: {
      get() {
        return window.innerWidth < 1024 ? true : false
      }
    }
  },
  mounted() {
    document.querySelector('.choose').scrollLeft = 330;
  }
}
</script>

<style lang="scss">
  .icon-info {
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-left: 3px;
    background: url('../assets/icon-info.svg') no-repeat center center / contain;
    cursor: pointer;

    &.pyatnik {
      margin-left: 80px;
    }

    &.shilda {
      margin-left: 65px;
    }
  }

  .description {
    margin-bottom: 20px;
  }

  .choose {
    display: flex;
    flex-wrap: wrap;

    .item {
      position: relative;
      max-width: calc(33.3% - 20px);
      width: 100%;
      margin-bottom: 20px;
      min-height: 520px;
      box-shadow: 0px 2px 20px 0px #e0e0e0;
      border: 1px solid transparent;
      padding: 26px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      cursor: pointer;
      transition: all .5s ease;

      &:hover {
        border: 1px solid rgb(128, 177, 68);
      }

      &:not(:last-child) {
        margin-right: 20px;
      }

      .title {
        font-size: 26px;
        margin: 0;
        padding: 0;
      }

      .acc {
        &-title {
          margin-top: 10px;
        }

        &-desc {
          font-size: 12px;
          margin-top: 3px;
          color: rgb(172, 172, 172);
        }
      }

      .pic {
        max-width: 80%;
        width: 100%;
        height: 220px;
        margin: 20px auto;
        margin-bottom: 30px;
      }

      .options {
        width: 100%;
        display: flex;
        flex-direction: column;

        .option {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .v-select {
          width: 60px;
          margin: 0;
          margin-left: 20px;
          min-height: 26px;
          max-height: 26px;

          &.vs--disabled {
            .vs__search {
              color: #fff;
            }
          }

          .vs__dropdown-toggle {
            min-height: 26px;
            max-height: 26px;
          }

          .vs__selected-options {
            min-height: 26px;
            max-height: 26px;
            padding: 0 2px;
          }

          .vs__search {
            min-height: 24px;
            max-height: 24px;
            color: #000;
            font-size: 14px;
            padding-left: 20px;
          }

          .vs__selected {
            max-height: 25px;
            min-height: 25px;
            padding: 0 20px;
          }

          .vs__actions {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -4px;
          }
        }

        .my-select-wrapper {
          width: 60px;
          height: 30px;
          margin: 0;
          margin-left: 20px;
        }
      }

      .input {
        width: 0.1px;
        height: 0.1px;
        visibility: hidden;
        opacity: 0;

        + .label {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1px solid #ccc;
          margin-right: 10px;
          cursor: pointer;
          position: relative;
          font-size: 14px;

          &::after {
            content: attr(data-text);
            position: relative;
            left: 30px;
            z-index: 1;
            white-space: nowrap;
            word-break: keep-all;
          }
        }

        &:checked {
          + .label {
            background: url('../assets/check.svg') no-repeat center center / 10px;
          }
        }
      }
    }

    .price-wrapper {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      .price {
        font-size: 24px;
        margin: 40px 0;
        margin-right: 55px;
        position: relative;

        &::after {
          content: 'Итого';
          position: absolute;
          left: 0;
          top: -17px;
          font-size: 13px;
          color: #999;
        }
      }

      .privat {
        font-size: 14px;
        line-height: 1;
        color: #999;
        border-bottom: 1px solid #999;
        position: relative;
        transition: all .3s ease;

        &::before {
          content: '';
          position: absolute;
          left: -28px;
          bottom: -2px;
          display: block;
          background: url('../assets/icon-3.png') no-repeat center center / 18px;
          width: 18px;
          height: 18px;
        }

        &:hover {
          border-bottom: 1px solid transparent;
        }
      }
    }

    .gifts {
      min-height: 65px;

      .gift {
        font-size: 12px;
        padding-left: 25px;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          display: block;
          width: 20px;
          height: 20px;
          left: -3px;
          top: 50%;
          transform: translateY(-50%);
          background: url('../assets/gift.svg') no-repeat center center / 15px;
        }

        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }

    .button {
      position: absolute;
      left: 26px;
      bottom: 20px;
    }
  }
  .button-prev.bottom-space {
    margin-top: 0;
    margin-bottom: 30px;
  }
</style>
