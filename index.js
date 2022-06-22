// TODO: 公式リファレンスに沿って JavaScript を記述
const Counter = {
  data(){
    return{
      counter:0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
const AttributeBinding = {
  data() {
    return {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  }
}
const EventHandling = {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling')
Vue.createApp(AttributeBinding).mount('#bind-attribute')
Vue.createApp(HelloVueApp).mount('#hello-vue')