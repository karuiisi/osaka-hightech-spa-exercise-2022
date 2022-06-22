// TODO: 公式リファレンスに沿って JavaScript を記述
const HelloVueApp = {
  data() {
    return {
      message: 'Hello Vue!!'
      counter:10
    }
  }
}

Vue.createApp(HelloVueApp).mount('#hello-vue')