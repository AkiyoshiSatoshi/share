<template>
  <div>
    <div v-for="(value, key, index) in shares" :key="index">
      <div class="message">
        <div class="flex">
          <p class="name">{{ value.name }}</p>
          <img src="../assets/heart.png" class="icon" alt="">
          <p class="number">{{ value.like.length }}</p>
          <img src="../assets/cross.png" class="icon" alt="">
          <img src="../assets/detail.png" class="icon detail" alt="">
        </div>
        <p class="text">{{ value.share }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shares: [{ name: "taro", like: [], share: "First Time"}]
    };
  }
};
</script>

<style scoped>
.flex {
  display: flex;
}
.icon {
  width: 25px;
  height: 25px;
}
.detail {
  margin-left: 50px;
}
.message {
  padding: 20px;
  border-bottom: solid 1px white;
  border-left: solid 1px white;
}
.name {
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
.text {
  margin-top: 10px;
}
.number {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
