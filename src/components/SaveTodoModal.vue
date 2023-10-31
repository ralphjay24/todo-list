<template>
  <v-dialog
    :value="value"
    persistent
    max-width="500px"
    @input="$emit('input', !value)"
  >
    <v-card>
      <v-card-title class="text-h5 pl-5">
        Todo Form
      </v-card-title>
      <v-card-text class="pt-3">
        <v-text-field
          :value="todo ? todo.label : label"
          label="Todo Name"
          @input="label = $event"
        />
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          text
          @click="$emit('input', false)"
        >
          Cancel
        </v-btn>

        <v-btn
          text
          color="success"
          @click.prevent="$emit('onSave', label, todo.idx)"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'SaveTodoModal',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    todo: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      label: '',
    }
  },
  created() {
    this.label = this.todo ? this.todo.label : ''
  }
}
</script>

<style>

</style>