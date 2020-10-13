<template>
  <div>
    <Menu />
    <div class="page-container">
      <md-app md-waterfall md-mode="fixed">
        <md-app-drawer md-permanent="full">
          <div class="md-toolbar md-theme-default md-elevation-0">
            <h2>USUÁRIO: Alice Longhi</h2>
          </div>
          <md-toolbar
            class=" md-list md-double-line md-theme-default md-transparent"
            md-elevation="0"
          >
            <div class="card-image md-avatar md-large">
              <img
                v-bind:src="avatar"
                class="card-avatar card-avatar--circle"
              />
            </div>
          </md-toolbar>
          <p>alicellonghi@gmail.com</p>

          <md-list>
            <div class="flex-sidebar">
              <md-list-item>
                <div class="md-alignment-center md-layout">
                  <span class="orange600 material-icons">
                    stairs
                  </span>
                  <span class="md-body-2 bold level">Nível: </span>
                  <p class="md-body m-2">Avançado</p>
                </div>
              </md-list-item>
              <md-list-item>
                <div class="md-alignment-center md-layout">
                  <span class="orange600 material-icons">
                    date_range
                  </span>
                  <span class="md-body-2 bold level">Idade: </span>
                  <p class="md-body m-2">22 anos</p>
                </div>
              </md-list-item>
            </div>
          </md-list>
        </md-app-drawer>

        <md-app-content class="md-layout">
          <div class="viewport md-layout-item">
            <md-toolbar :md-elevation="1">
              <span class="md-title">Favorites</span>
            </md-toolbar>

            <md-list class="md-double-line">
              <md-list-item>
                Você não possui nenhuma usuário como favorito
              </md-list-item>
            </md-list>
          </div>

          <div class="viewport md-layout-item">
            <md-toolbar :md-elevation="1">
              <span class="md-title">Usuários online</span>
            </md-toolbar>

            <md-list>
              <md-list-item>
                <div class="md-layout-item">
                  <md-field>
                    <label for="movie">Selecione o nível de inglês</label>
                    <md-select v-model="movie" name="movie" id="movie">
                      <md-option value="basico">Básico</md-option>
                      <md-option value="godfather">Intermediário</md-option>
                      <md-option value="godfather-ii">Avançado</md-option>
                      <md-option value="godfather-iii">Fluente</md-option>
                      <md-option value="godfellas">Nativo</md-option>
                    </md-select>
                  </md-field>
                </div>
              </md-list-item>
              <md-list-item>
                <md-avatar>
                  <img src="https://placeimg.com/40/40/people/5" alt="People" />
                </md-avatar>

                <span class="md-list-item-text">Fernanda Brunh</span>

                <md-button class="md-icon-button md-list-action">
                  <md-icon class="yellow">chat_bubble</md-icon>
                </md-button>
              </md-list-item>

              <md-list-item>
                <md-avatar>
                  <img src="https://placeimg.com/40/40/people/1" alt="People" />
                </md-avatar>

                <span class="md-list-item-text">Maria João Antunes</span>

                <md-button class="md-icon-button md-list-action">
                  <md-icon class="yellow">chat_bubble</md-icon>
                </md-button>
              </md-list-item>

              <md-list-item>
                <md-avatar>
                  <img src="https://placeimg.com/40/40/people/6" alt="People" />
                </md-avatar>

                <span class="md-list-item-text">Carol Silva</span>

                <md-button class="md-icon-button md-list-action">
                  <md-icon class="yellow">chat_bubble</md-icon>
                </md-button>
              </md-list-item>
            </md-list>
          </div>
        </md-app-content>
      </md-app>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Menu from "@/components/base/Menu.vue";

  export default {
    name: "Auth",
    components: {
      Menu,
    },
    data() {
      return {
        avatar: "http://www.placecage.com/c/128/128",
      };
    },
  };
</script>
<style scoped>
  .card-image {
    margin: auto;
    max-width: ((128px/16px) * 1em);
  }

  .level {
    margin-right: 5px;
    font-size: 18px;
    text-transform: uppercase;
  }

  .flex-sidebar {
    display: flex;
    flex-direction: column;
    margin: 0em 3em;
    justify-content: center;
  }
</style>
<style>
  h2 {
    text-align: center !important;
  }

  .md-body {
    font-size: 16px !important;
  }
  .orange600 {
    color: #ffa300 !important;
  }

  .yellow {
    color: #ffce00 !important;
  }
  .bg-orange600 {
    background-color: #ffa300 !important;
  }
  .md-avatar.md-large {
    min-width: 100px !important;
    min-height: 100px !important;
    border-radius: 100px !important;
    font-size: 32px;
  }

  .bold {
    font-weight: 600 !important;
  }

  p,
  h1,
  h2,
  span {
    font-family: "Roboto Condensed", sans-serif;
  }

  .md-app-content {
    padding: 0px !important;
  }

  .p-2 {
    padding: 2em !important;
  }
</style>
