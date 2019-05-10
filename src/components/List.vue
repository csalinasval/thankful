<template>
  <div>
    <form>
      <textarea v-model="content" class="u-full-width" :placeholder="$t('contentPlaceholder')" id="contentArea"></textarea>
      <input v-on:click.passive="addContent" class="button-primary" type="button" :value="$t('save')"><code v-if="createError">{{$t('emptyContentError')}}</code>
    </form>
    <div class="list" v-if="model.thoughts.length > 0">
      <h3>{{ $t('feelingGratefulTitle') }}</h3>
      <ol>
        <li v-for="(thought, index) in model.thoughts" v-bind:key="thought.id">
          <span v-if="selected===index">
            <textarea class="u-full-width" v-model="thought.text"></textarea>
            <input v-on:click.passive="selected=-1" class="button-primary" type="button" :value="$t('save')">
          </span>
          <span v-else>
            <span v-on:click="selected=index">{{ thought.text }}</span>
            <code v-on:click.passive="removeContent(index)">X</code>
          </span>
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
        count: 0,
        content: '',
        createError: false,
        selected: -1,
        model: {
          date: new Date(),
          thoughts: []
        }
      };
  },
  methods: {
    addContent: function(){
      if(this.$data.content.trim().length === 0){
        this.$data.createError = true
      }else{
        this.$data.createError = false;
        this.$data.model.thoughts.push({ id: this.$data.model.thoughts.length, text: this.$data.content.trim( ), mode: 0});
        this.$data.content = ''
      }
    },
    removeContent: function(index){
      this.$data.model.thoughts.splice(index, 1)
    }
  }
}
</script>


