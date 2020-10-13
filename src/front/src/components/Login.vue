<template>
  <div class="centered-container">
    <md-content class="md-elevation-3">
      <div class="title">
        <div class="md-body-1">
          <Logo />
        </div>
        <div class="margin-title md-title">
          <span class="md-title">Chatterbox</span>
        </div>
      </div>

      <div class="form">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="login.email" vautofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Senha</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>
        <a @click="auth">Esqueci minha senha</a>
      </div>

      <div class="actions md-layout md-alignment-center-space-between">
        <md-button class="md-raised md-primary" @click="auth"
          >Cadastre-se</md-button
        >
        <md-button class="login-button md-raised md-primary" @click="auth"
          >Entrar</md-button
        >
      </div>

      <div class="loading-overlay" v-if="loading">
        <md-progress-spinner
          md-mode="indeterminate"
          :md-stroke="2"
        ></md-progress-spinner>
      </div>
    </md-content>
  </div>
</template>

<script>
  import Logo from "./base/Logo.vue";
  export default {
    name: "Login",
    data() {
      return {
        loading: false,
        login: {
          email: "",
          password: "",
        },
      };
    },
    components: {
      Logo,
    },
    methods: {
      auth() {
        // your code to login user
        // this is only for example of loading
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.$router.push("home");
        }, 2000);
      },
    },
  };
</script>

<style scoped>
  .centered-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100vh;
    background-color: #fdeb9e;
  }
  .title {
    text-align: center;
    margin-bottom: 30px;
  }

  .margin-title {
    margin-top: 10px;
  }
  img {
    margin-bottom: 16px;
    max-width: 80px;
  }

  .actions .md-button {
    margin: 0;
  }

  .form {
    margin-bottom: 60px;
  }

  .login-button {
    font-family: "Roboto Condensed", sans-serif;
    background-color: #ffa300 !important;
  }

  .reset-button {
    font-family: "Roboto Condensed", sans-serif;
    color: #ffa300 !important;
  }

  .md-field.md-theme-default.md-focused .md-input,
  .md-field.md-theme-default.md-focused .md-textarea,
  .md-field.md-theme-default.md-has-value .md-input,
  .md-field.md-theme-default.md-has-value .md-textarea,
  .md-focused {
    color: #ffa300 !important;
    font-family: "Roboto Condensed", sans-serif;
  }

  .md-content {
    z-index: 1;
    padding: 40px;
    width: 100%;
    font-family: "Roboto Condensed", sans-serif;
    max-width: 400px;
    position: relative;
  }
  .loading-overlay {
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
