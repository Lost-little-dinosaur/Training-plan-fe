<template>
    <newDrag v-model:treeData="treeData"></newDrag>
    <el-button @click="testFunc">打印treeData查看是否被改变</el-button>
</template>

<script>
import {defineComponent} from 'vue'
import {ElMessage} from 'element-plus'
import {reactive, ref} from 'vue'
import newDrag from "./newDrag";
import request from "@/utils/request";

export default defineComponent({
    setup() {
        return {}
    },
    methods: {
        handleGetTreeData() {
            request({
                url: '/module',
                method: 'get',
            }).then(res => {
                res.data.data.forEach(item => {
                    if (item.mod_parent_id == null) {//如果是根节点，push到treeData中
                        this.treeData.push({
                            module_eid: item.module_eid,
                            name: item.name,
                            mod_parent_id: item.mod_parent_id,
                            expect_score: item.expect_score,
                            isCatalogue: true,
                            childArr: []
                        })
                        //删除已经push到treeData中的节点
                        res.data.data.splice(res.data.data.indexOf(item), 1)
                    }
                })
                this.treeData = this.getChildTreeData(res.data.data, this.treeData)
                ElMessage({
                    message: '获取数据成功',
                    type: 'success',
                })
            }).catch(err => {
                const open4 = () => {
                    ElMessage.error('获取数据失败，下面是报错信息：\n', err)
                }
            })
        },
        getChildTreeData(tableData, treeData) {
            //先遍历treeData,找到每个节点的子节点
            treeData.forEach(item => {
                tableData.forEach(item2 => {
                    if (item.module_eid === item2.mod_parent_id) {
                        item.childArr.push({
                            module_eid: item2.module_eid,
                            name: item2.name,
                            mod_parent_id: item2.mod_parent_id,
                            expect_score: item2.expect_score,
                            isCatalogue: true,
                            childArr: []
                        })
                        //删除已经push到treeData中的节点
                        tableData.splice(tableData.indexOf(item2), 1)
                    }
                })
                //递归调用
                this.getChildTreeData(tableData, item.childArr)
            })
            return treeData
        },
        testFunc() {
            console.log(this.treeData);
        },
        // handleGetDragChild(id) {//传入当前ID
        //     this.testDataArr[id].childArr = []
        //     if (!this.testDataArr[id].isExtend) {
        //         for (let i = 0; i < this.testDataArr.length; i++) {//遍历数组
        //             if (this.testDataArr[i].parentId === id) {//如果当前ID等于数组中的fatherId
        //                 this.testDataArr[id].childArr.push(this.testDataArr[i])
        //             }
        //         }
        //         console.log("这一层的儿子是", this.testDataArr[id].childArr)
        //     }
        //     this.testDataArr[id].isExtend = !this.testDataArr[id].isExtend
        // }
    },
    components: {
        newDrag
    },
    mounted() {
        this.handleGetTreeData()
    },
    data() {
        return {
            treeElement: {},
            treeData: [
                // {
                //     id: 0,
                //     name: '0',
                //     expectScore: 15,
                //     childArr: [{
                //         id: 1,
                //         name: '1',
                //         expectScore: 15,
                //         childArr: [{id: 3, name: '3', expectScore: 15, childArr: [], isExtend: false}, {
                //             id: 4,
                //             name: '4',
                //             expectScore: 15,
                //             childArr: [],
                //             isExtend: false
                //         }],
                //         isExtend: false
                //     }, {id: 2, name: '2', expectScore: 15, childArr: [], isExtend: false},],
                //     isExtend: false
                // },
            ]
        }
    }
})
</script>