<template>
  <!-- <i v-if="icon" class="el-sub-icon" :class="icon"></i> -->
  <span v-if="title">{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  icon: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  }
})

</script>

<style lang="scss" scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
