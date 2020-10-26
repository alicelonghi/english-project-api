<template>
  <div class="menu">
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>Perfil</md-button>
    </md-menu>
    <md-menu md-direction="bottom-start">
      <Logo />
    </md-menu>

    <md-menu md-direction="bottom-end">
      <md-button md-menu-trigger>Sair</md-button>
    </md-menu>
  </div>
</template>

<script>
import Logo from "@/components/base/Logo.vue";
export default {
  name: "Menu",
  components: {
    Logo,
  },
};
</script>

<style scoped>
.menu {
  background-color: #313131;
  padding: 7px;
  color: #fff;
  display: flex;
  font-family: "Montserrat", sans-serif;
  justify-content: space-between;
  align-items: center;
}

.md-menu button {
  color: #fff !important;
}
</style>
