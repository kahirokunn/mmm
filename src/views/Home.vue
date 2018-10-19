<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="test()">実行</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { User } from '../models/user';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  async test() {
    const user: User = new User();
    user.name = 'hoge';
    await user.save();
    console.log(user);
  }
}
</script>
