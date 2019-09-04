<template>
  <div id="app">

    <!--    导航栏-->
    <Navigation/>

    <!--    路由窗口-->
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>

  </div>
</template>

<script>
  import Navigation from './components/navigation'

  export default {
    name: 'App',
    components: {
      Navigation
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    overflow-x: hidden;
  }

  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }

  .v-enter-to,
  .v-leave-to {
    opacity: 1;
  }

  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
</style>
