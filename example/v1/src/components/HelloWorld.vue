<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <span>总时间：{{ current.total }}</span>
      <span>剩余天数：{{ current.days }}</span>
      <span>剩余小时：{{ current.hours }}</span>
      <span>剩余分钟：{{ current.minutes }}</span>
      <span>剩余秒数：{{ current.seconds }}</span>
      <span>剩余毫秒：{{ current.milliseconds }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useCountDown } from 'vue-use-toolkit'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup() {
    const countDown = useCountDown({
      // 倒计时 24 小时
      time: 24 * 60 * 60 * 1000,
    })

    // 开始倒计时
    countDown.start()

    return {
      current: countDown.current,
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
