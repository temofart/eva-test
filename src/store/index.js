import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentSlide: 1,
    currentKit: null,
    carModel: [],
    colors: [],
    personal: [],
    modalInfo: false,
    modalPyatnik: false,
    modalShildi: false,
    modalPrivat: false,
    kit: null,
    pyatnikPrice: 450,
    shildaPrice: 150,
    totalPrice: null,
    finalKit: '',
    kits: {
      econom: {
        title: 'Эконом',
        price: 1010,
        pyatnik: {
          is: false,
        },
        shildi: {
          is: false,
          count: 1
        }
      },
      standart: {
        title: 'Стандарт',
        price: 1390,
        pyatnik: {
          is: false,
        },
        shildi: {
          is: false,
          count: 1
        }
      },
      premiumBagazhnik: {
        title: 'Премиум (багажник)',
        price: 2590,
        pyatnik: {
          is: false,
        },
        shildi: {
          is: false,
          count: 1
        }
      },
      premium: {
        title: 'Премиум',
        price: 2140
      },
      platinum: {
        title: 'Платинум',
        price: 5140
      },
      vip: {
        title: 'VIP',
        price: 3750
      }
    }
  },
  mutations: {
    next(state) {
      state.currentSlide++
    },
    prev(state) {
      state.currentSlide--
    },
    setCar(state, [brand, model, year]) {
      state.carModel = [brand, model, year]
    },
    setColor(state, [main, secondary]) {
      state.colors = [main, secondary]
    },
    setKit(state, obj) {
      state.kit = obj
    },
    setFinalKit(state, name) {
      state.finalKit = name
    },
    setPrice(state, price) {
      state.totalPrice = price
    },
    setShildaCount(state, [count, id]) {
      state.kits[id].shildi.count = count
    },
    setPersonal(state, [name, phone]) {
      state.personal = [name, phone]
    },
    modalInfo(state, id) {
      state.modalInfo = !state.modalInfo
      document.body.classList.toggle('modal-overlay')
      state.currentKit = id
    },
    modalPyatnik(state) {
      state.modalPyatnik = !state.modalPyatnik
      document.body.classList.toggle('modal-overlay')
    },
    modalShildi(state) {
      state.modalShildi = !state.modalShildi
      document.body.classList.toggle('modal-overlay')
    },
    modalPrivat(state) {
      state.modalPrivat = !state.modalPrivat
      document.body.classList.toggle('modal-overlay')
    },
    setOption(state, [id, which]) {
      if (which === 'pyatnik') {
        state.kits[id].pyatnik.is = !state.kits[id].pyatnik.is
      }
      if (which === 'shilda') {
        state.kits[id].shildi.is = !state.kits[id].shildi.is
      }
    },
    importPrices(state, prices) {
      var i = 0
      for (let key of Object.values(state.kits)) {
        key.price = parseInt(prices[i])
        i++
      }
    }
  },
  getters: {
    getKits(state) {
      return state.kits
    },
    currentKit(state) {
      return state.kits[state.currentKit]
    },
    getPrice: state => id => {
      const kit = state.kits[id]

      if ("pyatnik" in kit) {
        if (kit.pyatnik.is && kit.shildi.is) {
          return kit.price + state.pyatnikPrice + state.shildaPrice * kit.shildi.count
        }
        else if (kit.pyatnik.is || kit.shildi.is) {
          if (kit.pyatnik.is) {
            return kit.price + state.pyatnikPrice
          }
          if (kit.shildi.is) {
            return kit.price + state.shildaPrice * kit.shildi.count
          }
        }
        else {
          return kit.price
        }
      }

      else {
        return kit.price
      }
    },
    isSelectDisabled: state => id => {
      return state.kits[id].shildi.is ? false : true
    }
  }
})
