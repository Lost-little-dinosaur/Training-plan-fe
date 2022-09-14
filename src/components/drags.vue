<template>
  <div class="demo-progress">
    <el-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="percentage"    
      color="green"
    >
      <span>总学时</span><span>:128</span>
      </el-progress>

  </div>
  <div class="demo-collapse">
    <button @click="changeMethod(22)">test</button>
    <el-collapse v-model="activeNames" @change="handleChange">
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
                  animation="100"
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
                    <div :class="element.disabledMove ? 'forbid item move' : 'item move'" v-if="element.normal">
                      <label class="move">{{ element.coursecode }}</label>
                      <el-divider direction="vertical" />
                      <span class="coursename">{{ element.coursename }}</span>
                      <el-divider direction="vertical" />
                      <span class="courseenglishname">{{
                        element.courseenglishname
                      }}</span>
                      <el-divider direction="vertical" />
                      <span class="credit">{{ element.credit }}</span>
                      <el-divider direction="vertical" />
                      <span class="totalhours">{{ element.totalhours }}</span>
                      <el-divider direction="vertical" />
                      <span class="teachhours">{{ element.teachhours }}</span>
                      <el-divider direction="vertical" />
                      <span class="pratice">{{ element.pratice }}</span>
                      <el-divider direction="vertical" />
                      <span class="experiment">{{ element.experiment }}</span>
                      <el-divider direction="vertical" />
                      <span class="cinclass">{{ element.cinclass }}</span>
                      <el-divider direction="vertical" />
                      <span class="coutclass">{{ element.coutclass }}</span>
                      <el-divider direction="vertical" />
                      <span class="semester">{{ element.semester }}</span>
                      <el-divider direction="vertical" />
                      <span class="assessment">{{ element.assessment }}</span>
                      <el-divider direction="vertical" />
                      <span class="time">{{ element.time }}</span>
                      <el-divider direction="vertical" />
                      <span class="remarks">{{ element.remarks }}</span>
                    </div>
                    <div class="item move" v-else>
                      <span class="longremarks">{{ element.longremarks }}</span>
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
                  animation="100"
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
                    <div :class="element.disabledMove ? 'forbid item move' : 'item move'" v-if="element.normal">
                      <label class="move">{{ element.coursecode }}</label>
                      <el-divider direction="vertical" />
                      <span class="coursename">{{ element.coursename }}</span>
                      <el-divider direction="vertical" />
                      <span class="courseenglishname">{{
                        element.courseenglishname
                      }}</span>
                      <el-divider direction="vertical" />
                      <span class="credit">{{ element.credit }}</span>
                      <el-divider direction="vertical" />
                      <span class="totalhours">{{ element.totalhours }}</span>
                      <el-divider direction="vertical" />
                      <span class="teachhours">{{ element.teachhours }}</span>
                      <el-divider direction="vertical" />
                      <span class="pratice">{{ element.pratice }}</span>
                      <el-divider direction="vertical" />
                      <span class="experiment">{{ element.experiment }}</span>
                      <el-divider direction="vertical" />
                      <span class="cinclass">{{ element.cinclass }}</span>
                      <el-divider direction="vertical" />
                      <span class="coutclass">{{ element.coutclass }}</span>
                      <el-divider direction="vertical" />
                      <span class="semester">{{ element.semester }}</span>
                      <el-divider direction="vertical" />
                      <span class="assessment">{{ element.assessment }}</span>
                      <el-divider direction="vertical" />
                      <span class="time">{{ element.time }}</span>
                      <el-divider direction="vertical" />
                      <span class="remarks">{{ element.remarks }}</span>
                    </div>
                    <div class="item move" v-else>
                      <span class="longremarks">{{ element.longremarks }}</span>
                    </div>
                  </template>
                </draggable>
              </div>
            </el-collapse-item>
            <el-collapse-item title="通识选修" class="l4" name="6">
              <div class="group">
                <draggable
                  :list="state.modules.arr3"
                  ghost-class="ghost"
                  handle=".move"
                  filter=".forbid"
                  :force-fallback="true"
                  chosen-class="chosenClass"
                  animation="100"
                  @start="onStart"
                  @end="onEnd"
                  :group="state.groupC"
                  :fallback-class="true"
                  :fallback-on-body="true"
                  :touch-start-threshold="50"
                  :fallback-tolerance="50"
                  :move="onMove"
                >
                  <template #item="{ element }">
                    <div :class="element.disabledMove ? 'forbid item move' : 'item move'" v-if="element.normal">
                      <label class="move">{{ element.coursecode }}</label>
                      <el-divider direction="vertical" />
                      <span class="coursename">{{ element.coursename }}</span>
                      <el-divider direction="vertical" />
                      <span class="courseenglishname">{{
                        element.courseenglishname
                      }}</span>
                      <el-divider direction="vertical" />
                      <span class="credit">{{ element.credit }}</span>
                      <el-divider direction="vertical" />
                      <span class="totalhours">{{ element.totalhours }}</span>
                      <el-divider direction="vertical" />
                      <span class="teachhours">{{ element.teachhours }}</span>
                      <el-divider direction="vertical" />
                      <span class="pratice">{{ element.pratice }}</span>
                      <el-divider direction="vertical" />
                      <span class="experiment">{{ element.experiment }}</span>
                      <el-divider direction="vertical" />
                      <span class="cinclass">{{ element.cinclass }}</span>
                      <el-divider direction="vertical" />
                      <span class="coutclass">{{ element.coutclass }}</span>
                      <el-divider direction="vertical" />
                      <span class="semester">{{ element.semester }}</span>
                      <el-divider direction="vertical" />
                      <span class="assessment">{{ element.assessment }}</span>
                      <el-divider direction="vertical" />
                      <span class="time">{{ element.time }}</span>
                      <el-divider direction="vertical" />
                      <span class="remarks">{{ element.remarks }}</span>
                    </div>
                    <div class="item move" v-else>
                      <span class="longremarks">{{ element.longremarks }}</span>
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
<script lang="ts">
import {ref, reactive} from "vue";
//导入draggable组件
import draggable from "vuedraggable";
export default {
  methods:{
    changeMethod(n:number){
      alert(n);
      this.percentage=n;
    }
  },
  components:{
    draggable,
  },
  setup(){
    

let percentage = ref(88)
const cacuAllTime = () => (
  console.log('ok'),
  percentage.value=100
)

const state = reactive({
  groupA: {
    name: "itxst",
    put: true, //允许拖入
    pull: true,
  },
  groupB: {
    name: "itxst",
    put: true, //允许拖入
    pull: true,
  },
  groupC: {
    name: "itxst",
    put: true, //允许拖入
    pull: true,
  },
  modules: {
    arr1: [
      {
        normal: true,
        coursecode: "课程代码",
        coursename: "课程名称",
        courseenglishname: "课程英文名称",
        credit: "学分",
        totalhours: "总学时",
        teachhours: "讲授",
        pratice: "课程实践",
        experiment: "实验",
        cinclass: "课内上机",
        coutclass: "课外上机",
        semester: "开课学期",
        assessment: "考核方式",
        time: "起始周",
        remarks: "备注",
        id: 0,
        disabledMove: true,
        disabledPark: true 
      },
      {
        normal: true,
        coursecode: "A0507980",
        coursename: "数字电路设计",
        courseenglishname: "Digital Circuits Design",
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
        normal: true,
        coursecode: "A0401140",
        coursename: "电路与电子学",
        courseenglishname: "Circuits and Electronics",
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
        normal: true,
        coursecode: "A0500950",
        coursename: "数据结构（甲）",
        courseenglishname: "Data Structure (A)",
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
        normal: true,
        coursecode: "A0507050",
        coursename: "操作系统（甲）",
        courseenglishname: "Operating System(A)",
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
        normal: true,
        coursecode: "课程代码",
        coursename: "课程名称",
        courseenglishname: "课程英文名称",
        credit: "学分",
        totalhours: "总学时",
        teachhours: "讲授",
        pratice: "课程实践",
        experiment: "实验",
        cinclass: "课内上机",
        coutclass: "课外上机",
        semester: "开课学期",
        assessment: "考核方式",
        time: "起始周",
        remarks: "备注",
        id: 0,
        disabledMove: true,
        disabledPark: true 
      },
      {
        normal: true,
        coursecode: "B0501690",
        coursename: "网络安全原理与实践",
        courseenglishname: "Network Security Principles and Practices",
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
        normal: true,
        coursecode: "B050737s",
        coursename: "数据挖掘",
        courseenglishname: "Data Mining",
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
        normal: true,
        coursecode: "S0501721",
        coursename: "软件开发实践1",
        courseenglishname: "Software Development Practice 1",
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
    arr3: [
      {
        normal: false,
        longremarks:
          "必须获得2学分的创业教育学分，学生可以在创业教育选修课中修读。",
        id: 8,
      },
    ],
  },
});

//拖拽开始的事件
const onStart = () => {
    console.log("开始拖拽");
    this.onEnd();
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
return{
  onStart,
  onEnd,
  onMove,
  percentage,
  cacuAllTime,
  state,

}
  }
}

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
  height: auto;
  margin-right: 20px;
}

.item {
  border: solid 1px #ddd;
  padding: 0px;
  text-align: left;
  background-color: #fff;
  margin-bottom: 10px;
  display: flex;
  height: 41px;
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
  padding: 0;
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

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
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
  width: 150px;
  text-align: left;
  display: inline-block;
}
.courseenglishname {
  width: 250px;
  text-align: left;
  display: inline-block;
}
.credit,
.teachhours,
.pratice,
.experiment,
.cinclass,
.coutclass,
.semester,
.assessment {
  width: 26px;
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
label.move {
  width: 80px;
}
.longremarks {
  text-align: left;
  display: inline-block;
  margin-left: 10px;
  margin-top: 8px;
}
</style>
