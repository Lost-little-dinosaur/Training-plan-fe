<template>
    <el-collapse v-model="activeNames" @change="">
        <el-collapse-item v-for="(item, index) in treeData" :key="index">
            <template #title>
                <div>{{ item.name }}</div>
                <el-button @click.stop.prevent="item.name+='hahaha'"
                >创建子分支
                </el-button
                >
                <el-button @click.stop.prevent="addcourse3(item2.id)"
                >添加课程
                </el-button
                >
            </template>
            <div class="children" v-if="item.childArr">
                <!-- 嵌套自身 -->
                <drags v-model:treeData="item.childArr"></drags>
            </div>
        </el-collapse-item>
    </el-collapse>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {reactive, ref} from 'vue'

export default defineComponent({
    name: "drags",
    props: {
        modelValue: {
            type: Number,
            default: 0,
        },
        treeData: {
            type: Array,
            default: '0',
        },
    },
    setup() {
        const activeNames = ref(['1'])
        // const handleChange = (val) => {
        //     console.log(val)
        // }
        return {
            activeNames,
            // handleChange
        }
    },
    methods:{
        changeTreeData(nowTreeData){
            this.$emit('update:modelValue', nowTreeData)
        }
    },
    data() {
        return {};
    },
});
</script>
<style scoped>
.children {
    padding-left: 10px;
}
</style>
