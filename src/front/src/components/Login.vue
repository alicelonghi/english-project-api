<template>
  <div class="centered-container">
    <md-content v-if="hasAccount" class="md-elevation-3">
      <div class="title">
        <div class="md-body-1">
          <Logo />
        </div>
        <div class="margin-title md-title">
          <span class="md-title">Chatterbox</span>
        </div>
        <div class="margin-title md-title">
          <span class="md-subheading">Login</span>
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
        <md-button class="md-raised md-primary" @click="hasAccount = false"
          >Registrar-se</md-button
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
    <md-content
      v-else
      class="md-elevation-3 md-layout md-alignment-center register"
    >
      <div class="title">
        <div class="md-body-1">
          <Logo />
        </div>
        <div class="margin-title md-title">
          <span class="md-title">Chatterbox</span>
        </div>
        <div class="margin-title md-title">
          <span class="md-subheading">Registre-se</span>
        </div>
      </div>

      <div class="form">
        <md-field>
          <label>Nome</label>
          <md-input v-model="registerData.name" vautofocus></md-input>
        </md-field>

        <md-field>
          <label>E-mail</label>
          <md-input v-model="registerData.email" vautofocus></md-input>
        </md-field>

        <div class="md-layout md-gutter flex-form">
          <div class="md-layout-item">
            <md-field>
              <label>Idade</label>
              <md-input
                v-model="registerData.age"
                type="number"
                vautofocus
              ></md-input>
            </md-field>
          </div>
          <div class="md-layout-item">
            <md-field>
              <label for="level">Nível de inglês</label>
              <md-select v-model="registerData.level" name="level" id="level">
                <md-option value="Iniciante">Iniciante</md-option>
                <md-option value="Básico">Básico</md-option>
                <md-option value="Intermediário">Intermediário</md-option>
                <md-option value="Avançado">Avançado</md-option>
                <md-option value="Fluente">Fluente</md-option>
                <md-option value="Nativo">Nativo</md-option>
              </md-select>
            </md-field>
          </div>
        </div>

        <md-field md-has-password>
          <label>Senha</label>
          <md-input v-model="login.password" type="password"></md-input>
        </md-field>

        <div class="actions md-layout md-alignment-center-space-between">
          <md-button class="md-raised md-primary" @click="hasAccount = true"
            >Login</md-button
          >
          <md-button class="login-button md-raised md-primary" @click="register"
            >Registrar-se</md-button
          >
        </div>
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
      hasAccount: true,
      login: new Object(),
      registerData: new Object(),
    };
  },
  components: {
    Logo,
  },
  mounted() {
    let userAuth = JSON.parse(localStorage.getItem("user"))._id;

    this.$http
      .get(`http://localhost:3000/api/user/${userAuth}`)
      .then((result) => {
        if (result.data.user != null) {
          console.log(result);
        }
      });
  },
  methods: {
    auth() {
      this.loading = true;

      const data = {
        email: this.login.email,
        password: this.login.password,
      };

      console.log(data);

      this.$http.post("http://localhost:3000/api/login", data).then((res) => {
        console.log(res);
        const user = res.data.user;
        if (user != null) {
          localStorage.setItem("user", JSON.stringify(user));
          this.$router.push("home");
        }
      });
    },
    register() {
      const dataRegister = {
        name: this.registerData.name,
        email: this.registerData.email,
        password: this.registerData.password,
        age: this.registerData.age,
        level: this.registerData.level,
      };

      this.$http
        .post("http://localhost:3000/api/users", dataRegister)
        .then(() => {
          this.$swal({
            title: "Registrado com sucesso!",
            icon: "success",
            buttons: {
              confirm: {
                text: "Entrar",
                value: true,
                visible: true,
                className: "login_button",
                closeModal: true,
              },
            },
          });
          this.$swal.close((this.hasAccount = true));
        });
    },
  },
};
</script>

<style scoped>
.flex-form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register {
  max-width: 600px !important;
}
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
  font-family: "Montserrat", sans-serif;
  background-color: #ffa300 !important;
}

.reset-button {
  font-family: "Montserrat", sans-serif;
  color: #ffa300 !important;
}

.md-field.md-theme-default.md-focused .md-input,
.md-field.md-theme-default.md-focused .md-textarea,
.md-field.md-theme-default.md-has-value .md-input,
.md-field.md-theme-default.md-has-value .md-textarea,
.md-focused {
  color: #ffa300 !important;
  font-family: "Montserrat", sans-serif;
}

.md-content {
  z-index: 1;
  padding: 40px;
  width: 100%;
  font-family: "Montserrat", sans-serif;
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
