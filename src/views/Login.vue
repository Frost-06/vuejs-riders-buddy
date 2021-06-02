<template>
<div class="main-1">
  <div class="login-page">
    <div class="left-side">
        <img src="../assets/login-bg.png" alt="">
    </div>
    <div class="right-side">
      <div>
        <h2 class="header-1">
          Login
        </h2>
        <p>Don't have an account? <router-link to="/registration" style="text-decoration: none;"> <span class="link">Sign up</span></router-link></p>
      </div>
        <form action="" class="frm-1" @submit.prevent="handleLogin">
          <div class="frm-grp">
            <label>Username</label>
            <input  v-model="user.username"
                    v-validate="'required'"
                    type="text"
                    name="username" placeholder="RidersBuddy06" required/>
          </div>

          <div class="frm-grp">
            <label>Password</label>
            <input  v-model="user.password"
                    v-validate="'required'"
                    type="password"
                    class="form-control"
                    name="password" placeholder="6+ Characters, 1 Capital Letter"/>
          </div>
           <button type="submit" id="login" style="background-color:#1AA3E9;
                                                  border-radius: 54px;
                                                  font-weight: 600;
                                                  font-size: 16px;
                                                  width: 220px;
                                                  height: 60px;
                                                  border: none;
                                                  cursor: pointer;
                                                  color: #fff;
                                                  outline-style: none;
                                                  margin-right: 1.6em;
                                                  margin-top: 3em;" 
          :disabled="loading">
          Login</button>
          <span v-show="loading" class="lds-ring">
          <div></div><div></div><div></div><div></div></span>
        <div v-if="message" class="alert alert-danger" role="alert">{{message}}</div>
        </form>
         
    </div>
  </div>
</div>
          
</template>

<script>
import User from '../models/user';

export default {
  name: 'Login',
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/dashboard');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    }
  }
};
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;500&display=swap');

:root {
    --body-font: 'Poppins', sans-serif;
    --primary-color: #1AA3E9;
    --secondary-color: #19456B;
    --bg-color: #fff;
    --inpt-clr: #F6F9FE;
    --inpt-placeholder-clr: #999CB8;
}

*,::before,::after{
    box-sizing: border-box;
    margin: 0;
    font-family: var(--body-font);
}

#main-1 {
  margin: 0;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    overflow-y: hidden !important;
}

.lds-ring {
  display: flex;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: -3em;
  margin-left: 50%;
}

.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 2px;
  border: 4px solid #fff;
  border-radius: 80%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.login-page {
  display: inline-flex;
  flex-grow: 1;
  width: 100%;
  align-items: center;
}

.login-page img {
  width: 100%;
}

.right-side {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
 
}

.right-side h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #1AA3E9;

}

.link {
  font-weight: bold;
  color: #1AA3E9;
  margin-left: 6px;
  cursor: pointer;
  text-decoration: none;
}

.frm-grp {
  display: flex;
  flex-direction: column;
  width: 800px;
  
}

.frm-grp label {
  margin-bottom: 1em;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #565656;
}

.frm-grp label:first-child {
   margin-top: 3em;
}

.frm-grp input {
  background: #FFFFFF;
  border: 4px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 20px;
  width: 646px;
  height: 74px;
  outline: none;
  padding-left: 25px;
}

.frm-1 button {
  margin-left: 30%;
}

.frm-1 a {
  margin-top: 25%;
}

#log-in:hover {
    box-shadow: none;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
    opacity: 80%;
}

input {
  transition: 0.2s ease-in-out;
}
input:focus {
  border: solid var(--primary-color);
}

button {
  transition: 0.2s ease-in-out;
}

button:hover {
  transform: scale(0.8);
}
</style>