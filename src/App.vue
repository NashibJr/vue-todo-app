<script setup>
  import { reactive } from 'vue';

  const state = reactive({
    todo: '',
    todos: [
      { id: 1, body: 'Eating' },
      { id: 2, body: 'Showering' },
      { id: 3, body: 'sleeping' },
    ],
    completed: [],
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
        <span :style="{display: 'flex', justifyContent: 'center'}">
          <button type="button" class="button-content">add</button>
        </span>
      </form>
      <div class="todos">
        <ul>
          <li>
            <span>
              <input 
                type="checkbox" 
                id="completed" 
                value="completed" 
                v-model="state.completed" 
              />
              Eating
            </span>
            <v-icon 
              name="ri-delete-bin-line" 
              scale="1.3" 
              class="icon"
            />
          </li>
        </ul>
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

  .todos ul li {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
  }

  .todos ul li span {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2px;
  }

  .todos ul li span input {
    margin-right: 10px;
    width: 17px;
    height: 17px;
    transform: translateY(-1px);
  }

  .icon:hover {
    color: red;
    cursor: pointer;
  }
</style>
