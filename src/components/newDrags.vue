<template>
    <newDrag v-model:treeData="treeData"></newDrag>
    <el-button @click="testFunc">打印treeData查看是否被改变</el-button>
    <!--    <div class="demo-collapse">-->
    <!--        <el-collapse v-model="activeNames" @change="">-->
    <!--            &lt;!&ndash;            <el-collapse-item title="Consistency" name="1">&ndash;&gt;-->
    <!--            &lt;!&ndash;                <el-collapse-item title="Consistency" name="1.1">&ndash;&gt;-->

    <!--            &lt;!&ndash;                </el-collapse-item>&ndash;&gt;-->
    <!--            &lt;!&ndash;                <el-collapse-item title="Consistency" name="1.2">&ndash;&gt;-->

    <!--            &lt;!&ndash;                </el-collapse-item>&ndash;&gt;-->
    <!--            &lt;!&ndash;            </el-collapse-item>&ndash;&gt;-->
    <!--            <el-collapse-item v-for="testData in testDataArr" :title="testData.name" :name="testData.id+'爷爷'"-->
    <!--                              v-on:click.stop.prevent="handleGetDragChild(testData.id)">-->
    <!--                <el-collapse-item name="1.2" v-for="test in testData.childArr"-->
    <!--                                  v-on:click.stop.prevent="handleGetDragChild(test.id)" :title="test.name+'父亲'"-->
    <!--                                  :name="test.id">-->
    <!--                    <el-collapse-item name="1.2" v-for="tes in test.childArr"-->
    <!--                                      v-on:click.stop.prevent="handleGetDragChild(tes.id)" :title="tes.name+'儿子'"-->
    <!--                                      :name="tes.id">-->
    <!--                        <el-collapse-item name="1.2" v-for="te in tes.childArr"-->
    <!--                                          v-on:click.stop.prevent="handleGetDragChild(te.id)" :title="te.name+'孙子'"-->
    <!--                                          :name="te.id">-->
    <!--                        </el-collapse-item>-->
    <!--                    </el-collapse-item>-->
    <!--                </el-collapse-item>-->
    <!--            </el-collapse-item>-->
    <!--        </el-collapse>-->
    <!--    </div>-->
</template>

<script>
import {defineComponent} from 'vue'
import {reactive, ref} from 'vue'
import newDrag from "./newDrag";
import request from "@/utils/request";

export default defineComponent({
    setup() {
        return {}
    },
    methods: {
        testFunc(){
            console.log(this.treeData);
        },
        getCaptcha() {
            request({
                url: '/base/captcha',
                method: 'get',
            }).then(res => {
                this.captcha.id = res.data.data.id;
                this.captcha.raw = res.data.data.raw;
                // console.log(this.captcha);
            }).catch(err => {
                ElNotification({
                    title: 'Error',
                    message: err.message,
                    type: 'error',
                })
            })
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
    data() {
        return {
            treeData: [
                {
                    id: 0,
                    name: '0',
                    expectScore: 15,
                    childArr: [{
                        id: 1,
                        name: '1',
                        expectScore: 15,
                        childArr: [{id: 3, name: '3', expectScore: 15, childArr: [], isExtend: false}, {
                            id: 4,
                            name: '4',
                            expectScore: 15,
                            childArr: [],
                            isExtend: false
                        }],
                        isExtend: false
                    }, {id: 2, name: '2', expectScore: 15, childArr: [], isExtend: false},],
                    isExtend: false
                },
            ]
        }
    }
})
</script>