<template>
  <div>
    <HeaderAuth />
    <div class="card">
      <p>new subscribe</p>
      <div class="form">
        <input v-model="name" placeholder="Username" type="text">
        <input v-model="profile" placeholder="Profile" type="text">
        <input v-model="email" placeholder="Mail Address" type="email">
        <input v-model="password" placeholder="Password" type="password">
        <button @click="auth">new subscribe</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      profile: "",
      email: "",
      password: ""
    };
  },
  components: {
    HeaderAuth
  },
  methods: {
    auth() {
      axios
        .post("https://warm-ridge-51366.herokuapp.com/api/resgister", {
          name: this.name,
          profile: this.profile,
          email: this.email,
          password: this.password
        })
        .then(response => {
          console.log(response);
          this.$router.resplace("/");
        })
        .catch(error => {
          alert(error);
        });
    }
  }
};
</script>

<style scoped>
button {
  width: 100px;
  text-align: center;
  padding: 8px 0 10px;
  color: #fff;
  background-color: #5419da;
  border-radius: 25px;
  cursor: pointer;
}
.card {
  margin: 100px auto;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  padding: 20px;
}
.card p {
  color: black;
  font-weight: bold;
  text-align: center;
}
input {
  margin-top: 15px;
  width: 80%;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid black;
  color: black;
}
.form {
  text-align: center;
}
.form button {
  margin-top: 15px;
}
</style>