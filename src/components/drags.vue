<template>
    <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="">
            <el-collapse-item title="计算机科学与技术" class="l1" name="1">
                <el-collapse-item title="  通识类课程" class="l2" name="2">
                    <el-collapse-item title="通识实践" class="l3" name="3">
                        <el-collapse-item title="通识实践必修" class="l4" name="4">
                            <div class="group">
                                <draggable
                                    :list="state.modules.arr2"
                                    ghost-class="ghost"
                                    handle=".move"
                                    filter=".forbid"
                                    :force-fallback="true"
                                    chosen-class="chosenClass"
                                    animation="300"
                                    @start="onStart"
                                    @end="onEnd"
                                    :group="state.groupB"
                                    :fallback-class="true"
                                    :fallback-on-body="true"
                                    :touch-start-threshold="50"
                                    :fallback-tolerance="50"
                                    :move="onMove"
                                >
                                    <template #item="{ element }">
                                        <div class="item move">
                                            <label class="move">{{ element.coursecode }}</label>
                                            <el-divider direction="vertical"/>
                                            <span class="coursename">{{ element.coursename }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="credit">{{ element.credit }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="totalhours">{{ element.totalhours }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="teachhours">{{ element.teachhours }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="pratice">{{ element.pratice }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="experiment">{{ element.experiment }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="cinclass">{{ element.cinclass }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="coutclass">{{ element.coutclass }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="semester">{{ element.semester }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="assessment">{{ element.assessment }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="time">{{ element.time }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="remarks">{{ element.remarks }}</span>
                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </el-collapse-item>
                        <el-collapse-item title="专业必修" class="l4" name="5">
                            <div class="group">
                                <draggable
                                    :list="state.modules.arr1"
                                    ghost-class="ghost"
                                    handle=".move"
                                    filter=".forbid"
                                    :force-fallback="true"
                                    chosen-class="chosenClass"
                                    animation="300"
                                    @start="onStart"
                                    @end="onEnd"
                                    :group="state.groupA"
                                    :fallback-class="true"
                                    :fallback-on-body="true"
                                    :touch-start-threshold="50"
                                    :fallback-tolerance="50"
                                    :move="onMove"
                                >
                                    <template #item="{ element }">
                                        <div class="item move">
                                            <label class="move">{{ element.coursecode }}</label>
                                            <el-divider direction="vertical"/>
                                            <span class="coursename">{{ element.coursename }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="credit">{{ element.credit }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="totalhours">{{ element.totalhours }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="teachhours">{{ element.teachhours }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="pratice">{{ element.pratice }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="experiment">{{ element.experiment }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="cinclass">{{ element.cinclass }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="coutclass">{{ element.coutclass }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="semester">{{ element.semester }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="assessment">{{ element.assessment }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="time">{{ element.time }}</span>
                                            <el-divider direction="vertical"/>
                                            <span class="remarks">{{ element.remarks }}</span>

                                        </div>
                                    </template>
                                </draggable>
                            </div>
                        </el-collapse-item>
                    </el-collapse-item>
                </el-collapse-item>
            </el-collapse-item>
        </el-collapse>
    </div>

    <div class="msg">{{ state.message }}</div>
    <div class="itxst"></div>
</template>
<script setup>
import {ref, reactive} from "vue";
//导入draggable组件
import draggable from "vuedraggable";

const state = reactive({
    groupA: {
        name: "itxst",
        put: true, //允许拖入
        pull: () => {
            let res = state.modules.arr1.length > 1;
            //当A组元素小于等于3个时，不允许再拖出元素了
            state.message = res ? "只能拖出1个" : "不能再拖了";
            return res;
        },
    },
    groupB: {
        name: "itxst",
        put: true, //允许拖入
        pull: () => {
            let res = state.modules.arr1.length > 1;
            //当A组元素小于等于3个时，不允许再拖出元素了
            state.message = res ? "只能拖出1个" : "不能再拖了";
            return res;
        },
    },
    modules: {
        arr1: [
            {
                coursecode: "A0507980",
                coursename: "数字电路设计",
                credit: "3.0",
                totalhours: 48,
                teachhours: 48,
                pratice: 0,
                experiment: 0,
                cinclass: 0,
                coutclass: 0,
                semester: 3,
                assessment: "X",
                time: "01-16",
                remarks: "",
                id: 1,
            },
            {
                coursecode: "A0401140",
                coursename: "电路与电子学",
                credit: "3.0",
                totalhours: 48,
                teachhours: 48,
                pratice: 0,
                experiment: 0,
                cinclass: 0,
                coutclass: 0,
                semester: 3,
                assessment: "X",
                time: "01-16",
                remarks: "",
                id: 2,
            },
            {
                coursecode: "A0500950",
                coursename: "数据结构（甲）",
                credit: "4.0",
                totalhours: 64,
                teachhours: 64,
                pratice: 0,
                experiment: 0,
                cinclass: 0,
                coutclass: 0,
                semester: 3,
                assessment: "X",
                time: "01-16",
                remarks: "",
                id: 3,
            },
            {
                coursecode: "A0507050",
                coursename: "操作系统（甲）",
                credit: "4.0",
                totalhours: 64,
                teachhours: 64,
                pratice: 0,
                experiment: 0,
                cinclass: 0,
                coutclass: 0,
                semester: 3,
                assessment: "X",
                time: "01-16",
                remarks: "",
                id: 4,
            },
        ],
        arr2: [
            {
                coursecode: "B0501690",
                coursename: "网络安全原理与实践",
                credit: "3.0",
                totalhours: 48,
                teachhours: 32,
                pratice: 0,
                experiment: 16,
                cinclass: 0,
                coutclass: 16,
                semester: 6,
                assessment: "Y",
                time: "01-16",
                remarks: "",
                id: 5,
            },
            {
                coursecode: "B050737s",
                coursename: "数据挖掘",
                credit: "3.0",
                totalhours: 48,
                teachhours: 36,
                pratice: 0,
                experiment: 0,
                cinclass: 12,
                coutclass: 12,
                semester: 5,
                assessment: "C",
                time: "01-16",
                remarks: "双语",
                id: 6,
            },
            {
                coursecode: "S0501721",
                coursename: "软件开发实践1",
                credit: "1.0",
                totalhours: "2周",
                teachhours: 0,
                pratice: 0,
                experiment: 0,
                cinclass: 32,
                coutclass: 0,
                semester: 2,
                assessment: "C",
                time: "短学期",
                remarks: "",
                id: 7,
            },
        ],
    },
});

//拖拽开始的事件
const onStart = () => {
    console.log("开始拖拽");
};

//拖拽结束的事件
const onEnd = () => {
    console.log("结束拖拽");
};

const onMove = (e, originalEvent) => {
    //不允许停靠
    if (e.relatedContext.element.disabledPark == true) return false;

    return true;
};
</script>
<style>
body {
    padding: 0px;
    margin: 0px;
    background-color: #f1f1f1;
}

.msg {
    padding: 10px 20px 0px 20px;
}

.itxst {
    background-color: #f1f1f1;
    display: flex;
    padding: 20px;
}

.group {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    width: auto;
    margin-right: 20px;
}

.item {
    border: solid 1px #ddd;
    padding: 0px;
    text-align: left;
    background-color: #fff;
    margin-bottom: 10px;
    display: flex;
    height: 36px;
    user-select: none;
}

.item > label {
    padding: 6px 10px;
    color: #333;
}

.item > label:hover {
    cursor: move;
}

.item > span {
    padding: 6px 10px;
    color: #666;
}

.ghost {
    border: solid 1px rgb(19, 41, 239) !important;
}

.chosenClass {
    opacity: 1;
    border: solid 1px red;
}

.fallbackClass {
    background-color: aquamarine;
}

.l1 {
    margin-left: 10px;
}

.l2 {
    margin-left: 20px;
}

.l3 {
    margin-left: 30px;
}

.l4 {
    margin-left: 40px;
}

.coursename {
    width: 200px;
    text-align: left;
    display: inline-block;
}

.credit, .teachhours, .pratice, .experiment, .cinclass, .coutclass, .semester, .assessment {
    width: 20px;
    text-align: center;
    display: inline-block;
}

.totalhours {
    width: 30px;
    text-align: center;
    display: inline-block;
}

.time {
    width: 50px;
    text-align: center;
    display: inline-block;
}

.remarks {
    width: 50px;
    text-align: center;
    display: inline-block;
}

</style>
