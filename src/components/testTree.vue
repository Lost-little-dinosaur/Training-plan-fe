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

  <el-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <el-button style="margin-right: 16px">Click to activate</el-button>
      </template>
      <div style="margin-top:3px"><span class="neat">学分</span><el-input-number v-model="num" :min="1" :max="8" /></div>
      <div style="margin-top:3px"><span  class="neat">总学时</span><el-input-number v-model="num" :min="16" :max="64" :step="16" /></div>
      <div style="margin-top:3px"><span  class="neat">讲授</span><el-input-number v-model="num"  /> </div>
      <div style="margin-top:3px"><span  class="neat">课程实践</span><el-input-number v-model="num"  /></div>
      <div style="margin-top:3px"><span  class="neat">实验</span><el-input-number v-model="num"  /></div>
      <div style="margin-top:3px"><span  class="neat">课内上机</span><el-input-number v-model="num"  /></div>
      <div style="margin-top:3px"><span  class="neat">课外上机</span><el-input-number v-model="num"  /> </div>
      <div style="margin-top:3px"><span  class="neat">开课学期</span><el-input-number v-model="num" :min="1" :max="8" /><!--多选 --></div>
        <div style="margin-top:3px"><span  class="neat">考核方式</span><el-input-number v-model="num" :step="2" /></div>
        <div style="margin-top:3px"><span  class="neat">起始周</span><el-input-number v-model="num" :step="2" /></div>
        <el-button style="margin-left:260px">确定</el-button>
    </el-popover>

  
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  data() {
    return {
      iii:"学分，总学时，讲授，课程实践，实验，课内上机，课外上机，开课学期，考核方式，起始周",
      num:12,
      allpf: [
        { name: "计算机科学与技术", id: 1 },
        { name: "软件工程", id: 2 },
        { name: "网络空间安全", id: 3 },
        { name: "机械设计制造极其自动化", id: 4 },
      ],
    };
  },
  setup() {
    const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
    const activeIndex = ref("1");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
  },
};
</script>

<style>
  .neat {
    width:80px;
    display: inline-block;
  }
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
