<script setup>
  const props = defineProps(['todos']);
  const handleDelete = (id) => {
    const todoToBeDeletedIndex = props.todos.todos.findIndex(
      (todo) => todo?.id === id
    );
    return props.todos.todos.splice(todoToBeDeletedIndex, 1);
  }
</script>

<template>
  <li v-for="todo in props.todos.todos" :key="todo.id">
    <span>
      <input 
        type="checkbox" 
        id="{{ todo.completed }}" 
        value="{{ todo.completed }}" 
        v-model="todo.completed"
      />
      {{ todo.body }}
    </span>
    <v-icon 
      name="ri-delete-bin-line" 
      scale="1.3" 
      class="icon"
      @click="handleDelete(todo?.id)"
    />
  </li>
</template>

<style scoped>
  li {
    display: flex;
    justify-content: space-between;
    margin: 5px;
    padding: 5px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
  }
 li span {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 2px;
  }
  li span input {
    margin-right: 10px;
    width: 15px;
    height: 15px;
    transform: translateY(-1px);
  }
  .icon:hover {
    color: red;
    cursor: pointer;
  }
</style>