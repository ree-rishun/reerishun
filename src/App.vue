<template>
  <div id="app">
    <nav>
      <router-link to="/profile">profile</router-link>
      <router-link to="/skill">skill</router-link>
      <router-link to="/gallery">gallery</router-link>
      <router-link to="/contact">contact</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
