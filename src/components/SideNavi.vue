<template>
  <div>
    <div class="left-padding">
      <img src="../assets/logo.png" class="logo" alt="">
      <div class="flex icon-field" @click="$router.push('/home')">
        <img src="../assets/home.png" class="icon" alt="">
        <p>Home</p>
      </div>
      <div class="flex icon-field" @click="$router.push('/profile')">
        <img src="../assets/profile.png" class="icon" alt="">
        <p>Profile</p>
      </div>
      <div class="flex icon-field" @click="$store.dispatch('/logout')">
        <img src="../assets/logout.png" class="icon" alt="">
        <p>Logout</p>
      </div>
    </div>
    <hr />
    <ShareMessage />
  </div>
</template>

<script>
import ShareMessage from "../components/ShareMessage";
export default {
  components: {
    ShareMessage
  }
}
</script>

<style scoped>
.left-padding {
  margin: 20px;
}
.flex {
  display: flex;
}
.logo {
  width: 100px;
}
.icon-field {
  margin-top: 15px;
  cursor: pointer;
}
.icon {
  width: 25px;
}
.icon-field p {
  font-size: 16px;
  padding-left: 15px;
}
</style>
