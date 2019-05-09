<template>
  <div class="base">
    <form>
      <label for="contentArea">{{ $t('content') }}</label>
      <textarea v-model="content" class="u-full-width" :placeholder="$t('contentPlaceholder')" id="contentArea"></textarea>
      <input v-on:click.passive="addContent" class="button-primary" type="button" :value="$t('save')"><code v-if="error">{{$t('emptyContentError')}}</code>
    </form>
    <div class="list" v-if="todos.length > 0">
      <h3>{{ $t('feelingGratefulTitle') }}</h3>
      <ol>
        <li v-for="(todo, index) in todos" v-bind:key="todo.id">
          {{ todo.text }} <code v-on:click.passive="removeContent(index)">X</code>
        </li>
      </ol>
    </div>
    <div class="list" v-else>
      <h3>{{ $t('noContentTitle') }}</h3>
    </div>
  </div>

</template>

<script>
export default {
  name: 'List',
  data: function() {
    return {
        content: '',
        error: false,
        todos: [
          { id: 0, text: 'ESTO ES UN EJEMPLO' },
          { id: 1, text: 'ESTO ES OTRO EJEMPLO' },
          { id: 2, text: 'MAS EJEMPLOS' }
        ]
      };
  },
  methods: {
    addContent: function(){
      if(this.$data.content.trim().length === 0){
        this.$data.error = true
      }else{
        this.$data.error = false;
        this.$data.todos.push({ id: this.$data.todos.length, text: this.$data.content.toLocaleUpperCase()});
        this.$data.content = ''
      }
    },
    removeContent: function(id){
      this.$data.todos.splice(id, 1)
    }
  }
}
</script>


