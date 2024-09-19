<script>
import {Category} from "../model/category.entity.js";

export default {
  name: "category-management",
  data() {
    return {
      title: { singular: "Category", plural: "Categories" },
      categories: [],
      category: new Category({}),
      selectedCategories: [],
      categoryService: null,
      createAndEditDialogIsVisible: false,
      isEdit: false,
      submitted: false
    }
  }

}
</script>

<template>

</template>

<style scoped>

</style>