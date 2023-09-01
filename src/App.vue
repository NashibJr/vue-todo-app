<script setup>
  import { reactive, ref } from 'vue';

  const state = reactive({
    todo: '',
  });

  const todos = ref([]);

  const handleAddTodo = () => {
    try {
      const exists = todos.value.find(
        (todo) => todo?.body === state.todo
      );
      if (exists) {
        alert(`\'${exists.body}\' is already a task!!`);
      } else {
        todos.value.push({
        id: (Math.random().toFixed(6)) * 1000000,
        body: state.todo
      });
      state.todo = '';
      }
    } catch (error) {
      console.log(error, '>>>>');
    }
  };
  
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
        <span :style="{display: 'flex', justifyContent: 'center'}">
          <button type="button" class="button-content" @click="handleAddTodo">add</button>
        </span>
      </form>
      <div class="todos" v-if="todos.length !== 0">
        <ul>
          <Todo :todos="{ todos }"/>
        </ul>
      </div>
      <div v-else :style="{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }">
        <v-icon name="px-notes-delete" scale="5" fill="black" />
      </div>
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

  .button-content {
    margin: 5px;
    padding: 7px;
    width: 50%;
    font-family: century gothic;
    font-size: 1em;
    border: 1px solid rgba(0, 0, 0, .3);
    outline: none;
    background-color: #000;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
  .button-content:hover {
    opacity: .8;
  }

  .todos ul {
    display: flex;
    width: 100%;
    margin: 5px;
    padding: 5px;
    flex-direction: column;
    flex-wrap: wrap;
    list-style-type: none;
  }
</style>
