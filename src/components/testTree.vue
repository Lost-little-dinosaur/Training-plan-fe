<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <div class="flex-grow" />
    <el-menu-item index="1">计划制订情况统计</el-menu-item>
    <el-sub-menu index="2">
      <template #title>切换培养计划</template>
      <el-menu-item index="2-1" v-for="item in allpf" :key="item.id">
        <template #title>{{ item.name }}</template>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>

  <el-col :span="1">
    <el-input type="text" />
  </el-col>

  
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  data() {
    return {
      allpf: [
        { name: "计算机科学与技术", id: 1 },
        { name: "软件工程", id: 2 },
        { name: "网络空间安全", id: 3 },
        { name: "机械设计制造极其自动化", id: 4 },
      ],
    };
  },
  setup() {
    const activeIndex = ref("1");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
  },
};
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.el-menu {
  background-color: #f1f1f1;
}
.testa {
  width:50px;
  height: 20px;
}
</style>
