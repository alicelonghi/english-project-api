<template>
  <div class="container">
    <Menu />
    <div class="row">
      <div class="md-layout  md-alignment-center-center">
        <vue-webrtc ref="webrtc" width="100%" :roomId="roomId" />
      </div>
    </div>
    <div class="phone-viewport md-layout md-gutter md-alignment-center ">
      <md-bottom-bar md-sync-route class="md-alignment-center md-layout">
        <md-bottom-bar-item
          to="/home"
          exact
          class="md-raised md-primary bg-orange600"
          md-label="Voltar"
          md-icon="west"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          @click="onJoin"
          md-label="Entrar"
          md-icon="call"
          class="md-raised md-primary"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          md-label="Sair"
          md-icon="call_end"
          class="md-raised md-accent"
          @click="onLeave"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/components/bottom-bar/posts"
          md-label="Tópicos"
          class="md-raised md-primary"
          md-icon="list_alt"
        ></md-bottom-bar-item>
        <md-bottom-bar-item
          to="/components/bottom-bar/favorites"
          class="md-raised md-primary  bg-orange600"
          md-label="Favoritar usuário"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
  import Vue from "vue";
  import { WebRTC } from "vue-webrtc";
  import Menu from "@/components/base/Menu.vue";
  Vue.component(WebRTC.name, WebRTC);

  import * as io from "socket.io-client";
  window.io = io;

  export default {
    name: "app",
    components: { Menu },
    data() {
      return {
        img: null,
        roomId: "public-room",
      };
    },
    computed: {},
    watch: {},
    methods: {
      onCapture() {
        this.img = this.$refs.webrtc.capture();
      },
      onJoin() {
        this.$refs.webrtc.join();
      },
      onLeave() {
        this.$refs.webrtc.leave();
      },
      onShareScreen() {
        this.img = this.$refs.webrtc.shareScreen();
      },
      onError(error, stream) {
        console.log("On Error Event", error, stream);
      },
      logEvent(event) {
        console.log("Event : ", event);
      },
    },
  };
</script>
<style>
  .md-bottom-bar {
    bottom: 0;
    position: fixed;
  }
  .md-bottom-bar > .md-ripple {
    display: flex !important;
    justify-content: center !important;
  }
</style>
