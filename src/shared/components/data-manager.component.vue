<script>
import { FilterMatchMode } from '@primevue/core/api';
export default {
  name: "data-manager",
  inheritAttrs: false,
  props: {
    items: {type: Array, required: true},
    title: {type: {singular: '', plural: ''}, required: true},
    dynamic: {type: Boolean, default: false},
    columns: {type: Array, default: () => []}
  },
  data() {
    return {
      selectedItems: [],
      filters: null
    }
  },
  methods:
      {
        initFilters() {
          this.filters = { global: { value: null, matchMode: FilterMatchMode.CONTAINS } };
        },
        newItem() {
          this.$emit('new-item-requested');
        },
        confirmDeleteSelected() {
          this.$confirm.require( {
            message: `Are you sure you want to delete the selected ${this.title.plural}?`,

          })
        }
      }
}
</script>

<template>

</template>

<style scoped>

</style>