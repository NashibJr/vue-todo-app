<script setup>
  import { reactive, watch } from 'vue';

  const state = reactive({
    todo: '',
    todos: []
  });
  
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <form>
        <input type="text"
          v-model="state.todo"
          placeholder="Entet task..."
          class="input-content"
        />
      </form>
    </main>
  </div>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 10px;
  }
  .input-content {
    margin: 5px;
    padding: 7px;
    width: 92%;
    font-family: century gothic;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, .3);
    outline: none;
  }
</style>
