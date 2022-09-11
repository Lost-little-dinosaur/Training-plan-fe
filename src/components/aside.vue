<template>
    <el-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
        打开侧边栏
    </el-button>
    <el-drawer v-model="drawer2" :direction="direction">
        <template #title>
            <h4>set title by slot</h4>
        </template>
        <template #default>
            <div>
                <el-radio v-model="radio1" label="Option 1" size="large"
                    >查看课程
                </el-radio>
                <el-radio v-model="radio1" label="Option 2" size="large"
                    >添加课程
                </el-radio>
            </div>
        </template>
    </el-drawer>
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { ElMessageBox } from 'element-plus'

    const drawer = ref(false)
    const drawer2 = ref(false)
    const direction = ref('ltr')
    const radio1 = ref('Option 1')
    const handleClose = (done: () => void) => {
        ElMessageBox.confirm('Are you sure you want to close this?')
            .then(() => {
                done()
            })
            .catch(() => {
                // catch error
            })
    }
    // function cancelClick() {
    //     drawer2.value = false
    // }
    function confirmClick() {
        ElMessageBox.confirm(`Are you confirm to chose ${radio1.value} ?`)
            .then(() => {
                drawer2.value = false
            })
            .catch(() => {
                // catch error
            })
    }
</script>