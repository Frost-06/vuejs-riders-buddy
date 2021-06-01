<template>
<div class="main-1">
  <div class="login-page">
    <div class="left-side">
        <img src="../assets/reg-bg.png" alt="">
    </div>
    <div class="right-side">
      <div>
        <h2 class="header-1">
          Sign up to Riders Buddy.
        </h2>
        <p>Already have an account? <router-link to="/login" style="text-decoration: none; color: #1AA3E9; font-weight: bold;"> <span class="link">Log in</span></router-link></p>
      </div>
        <form action="" class="frm-1" name="form" @submit.prevent="handleRegister">
          <div v-if="!successful">
          <div class="frm-grp">
            <div class="first-group">
                <div class="group-1">
                    <div>
                    <label>First Name</label>
                    </div>
                    <div>
                        <input  v-model="user.firstname"
                                v-validate="'required|min:3|max:20'"
                                type="text"
                                name="firstname" placeholder="Ex: Andre" required/>
                    </div>
                    </div>
                <div class="group-2">
                    <div>
                    <label>Last Name</label>
                    </div>
                    <div>
                        <input  v-model="user.lastname"
                                v-validate="'required|min:3|max:20'"
                                type="text"
                                name="lastname" placeholder="Ex: Guinita" required/>
                    </div>
                </div>
                </div>
             <div class="second-group">
                <div class="group-3">
                    <div>
                    <label>Email Address</label>
                    </div>
                    <div>
                        <input  v-model="user.email"
                                v-validate="'required|email|max:50'"
                                type="email"
                                name="email" 
                                class="email-input" placeholder="Ex: ridersbuddy@email.com" required/>
                    </div>
                </div>
                <div class="group-4">
                    <div>
                      <label>Username</label>
                      <input  v-model="user.username"
                              v-validate="'required|min:3|max:20'"
                              type="text"
                              name="username" placeholder="RidersBuddy06" required/>
                    </div>

                    <div class="group-5">
                    <div>
                    <label>Password</label>
                    <input  v-model="user.password"
                            v-validate="'required|min:6|max:40'"
                            type="password"
                            name="password" placeholder="Ex: 6+ Characters, 1 Capital Letter" required/>
                    </div>
                </div>

                </div>
                
            </div>
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
                                                            margin-top: 3em;
                                                            margin-left: 36%;
          ">Sign up</button>
          </div>
        </form>

         <div
            v-if="submitted && errors.has('username')"
            class="alert-danger"
            >{{errors.first('username')}}
          </div>

        <div
        v-if="message"
        class="alert"
        :class="successful ? 'alert-success' : 'alert-danger'"
      >{{message}}</div>

    </div>
  </div>
</div>
          
</template>

<script>
import User from '../models/user';

export default {
  name: 'Registration',
  data() {
    return {
      user: new User('', '', '','', '', ''),
      submitted: false,
      successful: false,
      message: ''
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      this.$validator.validate().then(isValid => {
        if (isValid) {
          this.$store.dispatch('auth/register', this.user).then(
            data => {
              this.message = data.message;
              this.successful = true;
            },
            error => {
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
              this.successful = false;
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

.right-side p {
  margin-bottom: 3em;
}

.first-group {
    display: inline-flex;
}

.second-group {
    display: flex;
    flex-direction: column;
}

.link {
  font-weight: bold;
  color: #1AA3E9;
  margin-left: 6px;
  cursor: pointer;
  text-decoration: none;
}

#log-in:hover {
    box-shadow: none;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.3s;
    opacity: 80%;
}

.frm-grp label {
  margin-bottom: 2em;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #565656;
}


.frm-grp input {
  background: #FFFFFF;
  border: 4px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  border-radius: 20px;
  width: 400px;
  height: 74px;
  outline: none;
  padding-left: 25px;
}

.frm-grp .email-input {
  width: 700px;
}

.group-1 {
    margin-right: 5em;
}

.group-1 input {
  margin-top: 2em;
}

.group-2 {
  width: 500px;
}

.group-2 input {
  margin-top: 2em;
}

.group-3 {
    margin-top: 3em;
}

.group-3 input {
  margin-top: 2em;
}

.group-4 {
    margin-top: 3em;
    display: flex;
}

.group-4 input {
  margin-top: 2em;
}

.group-5 {
  margin-left: 2em;
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