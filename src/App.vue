<template>
  <div id="app">
    <h1>GitHub Pages에 Vue 프로젝트 배포 성공!</h1>
    <p>버튼을 클릭하면 숫자가 증가테12321321321321스트 코드입니다 합니다:</p>
    <button @click="incrementCounter">클릭: {{ counter }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incrementCounter() {
      this.counter++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
button {
  font-size: 16px;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
