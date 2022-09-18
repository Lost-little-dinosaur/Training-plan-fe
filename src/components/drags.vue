<template>
  <div class="demo-progress">
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
        <el-menu-item v-for="item in allpf" :key="item.id" :index="item.index">
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
  <div class="demo-collapse">
    <el-collapse>
      <el-collapse-item class="l1">
        <template #title>
          计算机科学与技术<el-button class="mkson" @click="mkson1"
            >创建子分支</el-button
          >
        </template>
        <div v-for="item1 in secmenu" :key="item1.id">
          <el-collapse-item class="l2">
            <template #title>
              {{ item1.title }}
              <el-button class="mkson" @click="mkson2(item1.id)"
                >创建子分支</el-button
              >
              <el-button class="mkbro" @click="addcourse2(item1.id)"
                >添加课程</el-button
              >
            </template>
            <div v-for="item2 in thirdmenu" :key="item2.id">
              <el-collapse-item class="l3" v-if="item2.parent == item1.id">
                <template #title>
                  {{ item2.title }}
                  <el-button class="mkson" @click="mkson3(item2.id)"
                    >创建子分支</el-button
                  >
                  <el-button class="mkbro" @click="addcourse3(item2.id)"
                    >添加课程</el-button
                  >
                </template>
                <div v-for="item3 in forthmenu" :key="item3.id">
                  <el-collapse-item class="l4" v-if="item3.parent == item2.id">
                    <template #title>
                      {{ item3.title }}
                      <!-- <el-button class="mkson" @click="mkson4(item3.id)"
                        >创建子分支</el-button
                      > -->
                      <el-button class="mkbro" @click="addcourse4(item3.id)"
                        >添加课程</el-button
                      >
                    </template>
                    <div class="group">
                      <!-- 在这里修改显示的逻辑，不是单纯的显示arr2，而是与目录相结合 -->
                      <draggable
                        :list="item3.table"
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
                      <div
                        :class="
                          element.disabledMove
                            ? 'forbid item move'
                            : 'item move'
                        "
                        v-if="element.normal"
                      >
                        <label class="move coursecode">
                          <span v-if="element.editable">{{
                            element.coursecode
                          }}</span>
                          <el-input
                            style="font-size: small"
                            type="text"
                            v-model="element.coursecode"
                            v-else
                          />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="coursename"
                          ><span v-if="element.editable">{{
                            element.coursename
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.coursename"
                            v-else
                          />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="courseenglishname"
                          ><span v-if="element.editable">{{
                            element.courseenglishname
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.courseenglishname"
                            v-else
                        /></label>

                        <div v-if="element.editable">
                          <el-divider direction="vertical" />
                          <label class="credit">{{ element.credit }} </label>
                          <el-divider direction="vertical" />
                          <label
                            class="totalhours"
                            :class="{ totalhourslabel: element.disabledMove }"
                            ><span v-if="element.editable">{{
                              element.totalhours
                            }}</span>
                          </label>
                          <el-divider direction="vertical" />
                          <label class="teachhours">{{
                            element.teachhours
                          }}</label>
                          <el-divider direction="vertical" />
                          <label
                            class="pratice"
                            :class="{ praticelabel: element.disabledMove }"
                            >{{ element.pratice }}</label
                          >
                          <el-divider direction="vertical" />
                          <label class="experiment">{{
                            element.experiment
                          }}</label>
                          <el-divider direction="vertical" />
                          <label
                            class="cinclass"
                            :class="{ cinclasslabel: element.disabledMove }"
                            >{{ element.cinclass }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="coutclass"
                            :class="{ coutclasslabel: element.disabledMove }"
                            >{{ element.coutclass }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="semester"
                            :class="{ semesterlabel: element.disabledMove }"
                            >{{ element.semester }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="assessment"
                            :class="{ assessmentlabel: element.disabledMove }"
                            >{{ element.assessment }}</label
                          >
                        </div>
                        <el-popover
                          placement="right"
                          :width="400"
                          trigger="click"
                          @hide="editok()"
                          v-else
                        >
                          <template #reference>
                            <el-button class="openedit"
                              >打开/关闭面板</el-button
                            >
                          </template>
                          <div style="margin-top: 3px">
                            <span class="neat">学分</span
                            ><el-input-number
                              v-model="element.credit"
                              :min="1"
                              :max="8"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">总学时</span
                            ><el-input-number
                              v-model="element.totalhours"
                              :min="16"
                              :max="64"
                              :step="16"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">讲授</span
                            ><el-input-number v-model="element.teachhours" />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课程实践</span
                            ><el-input-number
                              v-model="element.pratice"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">实验</span
                            ><el-input-number
                              v-model="element.experiment"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课内上机</span
                            ><el-input-number
                              v-model="element.cinclass"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课外上机</span
                            ><el-input-number
                              v-model="element.coutclass"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">开课学期</span
                            ><el-input-number
                              v-model="element.semester"
                              :min="1"
                              :max="8"
                            /><!--多选 -->
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">考核方式</span>
                            <el-select
                              v-model="element.assessment"
                              class="m-2"
                              placeholder="Select"
                              size="small"
                            >
                              <el-option
                                v-for="item in assessway"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              />
                            </el-select>
                          </div>
                          <!-- <el-button style="margin-left: 260px">确定</el-button> -->
                        </el-popover>
                        <el-divider direction="vertical" />
                        <label class="time"
                          ><span v-if="element.editable">{{
                            element.time
                          }}</span>
                          <el-input type="text" v-model="element.time" v-else />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="remarks"
                          ><span v-if="element.editable">{{
                            element.remarks
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.remarks"
                            v-else
                          />
                        </label>
                        <el-divider
                          direction="vertical"
                          v-if="!element.disabledMove"
                        />
                        <el-row
                          ><el-button
                            type="primary"
                            size="small"
                            :icon="Edit"
                            circle
                            v-if="!element.disabledMove"
                            @click="editcourse2(item3.id, element.id)"
                            style="margin-top:10px"
                        /></el-row>
                        <el-divider
                          direction="vertical"
                          v-if="!element.editable"
                        />
                        <el-button
                          class="mkson"
                          v-if="!element.editable"
                          @click="afteredit2(item3.id, element.id)"
                          style="margin-top:10px"
                          >保存</el-button
                        >
                      </div>
                      <div class="item move" v-else>
                        <span class="longremarks">{{
                          element.longremarks
                        }}</span>
                      </div>
                    </template>
                      </draggable>
                    </div>
                  </el-collapse-item>
                </div>
                <div class="group">
                  <draggable
                    :list="item2.table"
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
                      <div
                        :class="
                          element.disabledMove
                            ? 'forbid item move'
                            : 'item move'
                        "
                        v-if="element.normal"
                      >
                        <label class="move coursecode">
                          <span v-if="element.editable">{{
                            element.coursecode
                          }}</span>
                          <el-input
                            style="font-size: small"
                            type="text"
                            v-model="element.coursecode"
                            v-else
                          />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="coursename"
                          ><span v-if="element.editable">{{
                            element.coursename
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.coursename"
                            v-else
                          />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="courseenglishname"
                          ><span v-if="element.editable">{{
                            element.courseenglishname
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.courseenglishname"
                            v-else
                        /></label>

                        <div v-if="element.editable">
                          <el-divider direction="vertical" />
                          <label class="credit">{{ element.credit }} </label>
                          <el-divider direction="vertical" />
                          <label
                            class="totalhours"
                            :class="{ totalhourslabel: element.disabledMove }"
                            ><span v-if="element.editable">{{
                              element.totalhours
                            }}</span>
                          </label>
                          <el-divider direction="vertical" />
                          <label class="teachhours">{{
                            element.teachhours
                          }}</label>
                          <el-divider direction="vertical" />
                          <label
                            class="pratice"
                            :class="{ praticelabel: element.disabledMove }"
                            >{{ element.pratice }}</label
                          >
                          <el-divider direction="vertical" />
                          <label class="experiment">{{
                            element.experiment
                          }}</label>
                          <el-divider direction="vertical" />
                          <label
                            class="cinclass"
                            :class="{ cinclasslabel: element.disabledMove }"
                            >{{ element.cinclass }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="coutclass"
                            :class="{ coutclasslabel: element.disabledMove }"
                            >{{ element.coutclass }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="semester"
                            :class="{ semesterlabel: element.disabledMove }"
                            >{{ element.semester }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="assessment"
                            :class="{ assessmentlabel: element.disabledMove }"
                            >{{ element.assessment }}</label
                          >
                        </div>
                        <el-popover
                          placement="right"
                          :width="400"
                          trigger="click"
                          @hide="editok()"
                          v-else
                        >
                          <template #reference>
                            <el-button class="openedit"
                              >打开/关闭面板</el-button
                            >
                          </template>
                          <div style="margin-top: 3px">
                            <span class="neat">学分</span
                            ><el-input-number
                              v-model="element.credit"
                              :min="1"
                              :max="8"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">总学时</span
                            ><el-input-number
                              v-model="element.totalhours"
                              :min="16"
                              :max="64"
                              :step="16"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">讲授</span
                            ><el-input-number v-model="element.teachhours" />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课程实践</span
                            ><el-input-number
                              v-model="element.pratice"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">实验</span
                            ><el-input-number
                              v-model="element.experiment"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课内上机</span
                            ><el-input-number
                              v-model="element.cinclass"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课外上机</span
                            ><el-input-number
                              v-model="element.coutclass"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">开课学期</span
                            ><el-input-number
                              v-model="element.semester"
                              :min="1"
                              :max="8"
                            /><!--多选 -->
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">考核方式</span>
                            <el-select
                              v-model="element.assessment"
                              class="m-2"
                              placeholder="Select"
                              size="small"
                            >
                              <el-option
                                v-for="item in assessway"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              />
                            </el-select>
                          </div>
                          <!-- <el-button style="margin-left: 260px">确定</el-button> -->
                        </el-popover>
                        <el-divider direction="vertical" />
                        <label class="time"
                          ><span v-if="element.editable">{{
                            element.time
                          }}</span>
                          <el-input type="text" v-model="element.time" v-else />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="remarks"
                          ><span v-if="element.editable">{{
                            element.remarks
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.remarks"
                            v-else
                          />
                        </label>
                        <el-divider
                          direction="vertical"
                          v-if="!element.disabledMove"
                        />
                        <el-row
                          ><el-button
                            type="primary"
                            size="small"
                            :icon="Edit"
                            circle
                            v-if="!element.disabledMove"
                            @click="editcourse(item2.id, element.id)"
                            style="margin-top:10px"
                        /></el-row>
                        <el-divider
                          direction="vertical"
                          v-if="!element.editable"
                        />
                        <el-button
                          class="mkson"
                          v-if="!element.editable"
                          @click="afteredit(item2.id, element.id)"
                          style="margin-top:10px"
                          >保存</el-button
                        >
                      </div>
                      <div class="item move" v-else>
                        <span class="longremarks">{{
                          element.longremarks
                        }}</span>
                      </div>
                    </template>
                  </draggable>
                </div>
              </el-collapse-item>
            </div>
            <div class="group">
              <draggable
                :list="item1.table"
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
                      <div
                        :class="
                          element.disabledMove
                            ? 'forbid item move'
                            : 'item move'
                        "
                        v-if="element.normal"
                      >
                        <label class="move coursecode">
                          <span v-if="element.editable">{{
                            element.coursecode
                          }}</span>
                          <el-input
                            style="font-size: small"
                            type="text"
                            v-model="element.coursecode"
                            v-else
                          />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="coursename"
                          ><span v-if="element.editable">{{
                            element.coursename
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.coursename"
                            v-else
                          />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="courseenglishname"
                          ><span v-if="element.editable">{{
                            element.courseenglishname
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.courseenglishname"
                            v-else
                        /></label>

                        <div v-if="element.editable">
                          <el-divider direction="vertical" />
                          <label class="credit">{{ element.credit }} </label>
                          <el-divider direction="vertical" />
                          <label
                            class="totalhours"
                            :class="{ totalhourslabel: element.disabledMove }"
                            ><span v-if="element.editable">{{
                              element.totalhours
                            }}</span>
                          </label>
                          <el-divider direction="vertical" />
                          <label class="teachhours">{{
                            element.teachhours
                          }}</label>
                          <el-divider direction="vertical" />
                          <label
                            class="pratice"
                            :class="{ praticelabel: element.disabledMove }"
                            >{{ element.pratice }}</label
                          >
                          <el-divider direction="vertical" />
                          <label class="experiment">{{
                            element.experiment
                          }}</label>
                          <el-divider direction="vertical" />
                          <label
                            class="cinclass"
                            :class="{ cinclasslabel: element.disabledMove }"
                            >{{ element.cinclass }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="coutclass"
                            :class="{ coutclasslabel: element.disabledMove }"
                            >{{ element.coutclass }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="semester"
                            :class="{ semesterlabel: element.disabledMove }"
                            >{{ element.semester }}</label
                          >
                          <el-divider direction="vertical" />
                          <label
                            class="assessment"
                            :class="{ assessmentlabel: element.disabledMove }"
                            >{{ element.assessment }}</label
                          >
                        </div>
                        <el-popover
                          placement="right"
                          :width="400"
                          trigger="click"
                          @hide="editok()"
                          v-else
                        >
                          <template #reference>
                            <el-button class="openedit"
                              >打开/关闭面板</el-button
                            >
                          </template>
                          <div style="margin-top: 3px">
                            <span class="neat">学分</span
                            ><el-input-number
                              v-model="element.credit"
                              :min="1"
                              :max="8"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">总学时</span
                            ><el-input-number
                              v-model="element.totalhours"
                              :min="16"
                              :max="64"
                              :step="16"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">讲授</span
                            ><el-input-number v-model="element.teachhours" />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课程实践</span
                            ><el-input-number
                              v-model="element.pratice"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">实验</span
                            ><el-input-number
                              v-model="element.experiment"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课内上机</span
                            ><el-input-number
                              v-model="element.cinclass"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">课外上机</span
                            ><el-input-number
                              v-model="element.coutclass"
                              :min="0"
                            />
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">开课学期</span
                            ><el-input-number
                              v-model="element.semester"
                              :min="1"
                              :max="8"
                            /><!--多选 -->
                          </div>
                          <div style="margin-top: 3px">
                            <span class="neat">考核方式</span>
                            <el-select
                              v-model="element.assessment"
                              class="m-2"
                              placeholder="Select"
                              size="small"
                            >
                              <el-option
                                v-for="item in assessway"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              />
                            </el-select>
                          </div>
                          <!-- <el-button style="margin-left: 260px">确定</el-button> -->
                        </el-popover>
                        <el-divider direction="vertical" />
                        <label class="time"
                          ><span v-if="element.editable">{{
                            element.time
                          }}</span>
                          <el-input type="text" v-model="element.time" v-else />
                        </label>
                        <el-divider direction="vertical" />
                        <label class="remarks"
                          ><span v-if="element.editable">{{
                            element.remarks
                          }}</span>
                          <el-input
                            type="text"
                            v-model="element.remarks"
                            v-else
                          />
                        </label>
                        <el-divider
                          direction="vertical"
                          v-if="!element.disabledMove"
                        />
                        <el-row
                          ><el-button
                            type="primary"
                            size="small"
                            :icon="Edit"
                            circle
                            v-if="!element.disabledMove"
                            @click="editcourse1(item1.id, element.id)"
                            style="margin-top:10px"
                        /></el-row>
                        <el-divider
                          direction="vertical"
                          v-if="!element.editable"
                        />
                        <el-button
                          class="mkson"
                          v-if="!element.editable"
                          @click="afteredit1(item1.id, element.id)"
                          style="margin-top:10px"
                          >保存</el-button
                        >
                      </div>
                      <div class="item move" v-else>
                        <span class="longremarks">{{
                          element.longremarks
                        }}</span>
                      </div>
                    </template>
              </draggable>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>

  <div class="itxst"></div>
</template>
<script lang="ts">
import { EnumNumberMember } from "@babel/types";
import { ElMessage, ElMessageBox } from "element-plus";
import { ref, reactive } from "vue";
import { defineComponent } from "vue";
//导入draggable组件
import draggable from "vuedraggable";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
export default defineComponent({
  data() {
    return {
      assessway: [
        { value: "Y", label: "Y" },
        { value: "X", label: "X" },
        { value: "C", label: "C" },
        { value: " ", label: " " },
      ],
      testcontend: "",
      isspan: true,
      testdata: false,
      allpf: [
        { name: "计算机科学与技术", id: 1, index: "2-1" },
        { name: "软件工程", id: 2, index: "2-2" },
        { name: "网络空间安全", id: 3, index: "2-3" },
        { name: "机械设计制造极其自动化", id: 4, index: "2-4" },
      ],
      // secmenu是第二級菜单，即计算机科学与技术下面的模块：
      // 如果有table则代表，下面没有目录分支，直接是课程或课程说明。
      // 再往下thirdmenu是第三级菜单，这里的都要包含parent，指向上一级的id
      // 同样的，如果没有再往下的分支，就多一个table，代表课程信息。
      secmenu: [
        { title: "通识公共课", id: 1, table: [] as any[] },
//         never类型是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
//  即使 any也不可以赋值给never。
// 你把一个String类型的值，赋值给了Never类型的变量。
        { title: "通识选修课", id: 2, table: [] },
        { title: "学科基础课", id: 3, table: [] },
        { title: "专业课", id: 4, table: [] },
        { title: "交叉与个性发展学分", id: 5, table: [] },
        { title: "实践教学环节", id: 6, table: [] },
        {
          title: "课外教育项目",
          id: 7,
          table: [
          {
              editable: true,
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
              disabledPark: true,
            },
            {
              normal: false,
              longremarks:
                "必须获得2学分的创业教育学分，学生可以在创业教育选修课中修读。",
              id: 1,
            },
          ],
        },
      ],
      
      thirdmenu: [
        {
          title: "通识必修",
          parent: 1,
          id: 1,
          table: [
            {
              editable: true,
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
              disabledPark: true,
            },
            {
              editable: true,
              normal: true,
              coursecode: "A2301240",
              coursename: "马克思主义基本原理",
              courseenglishname: "Basic Principles of Marxism",
              credit: "3.0",
              totalhours: "48",
              teachhours: "42",
              pratice: "6",
              experiment: "0",
              cinclass: "0",
              coutclass: "0",
              semester: "6",
              assessment: "Y",
              time: "01-16",
              remarks: " ",
              id: 1,
            },
          ],
        },
        {
          title: "通识选修",
          parent: 1,
          id: 2,
          table: [{ editable: true, coursename: "" }],
        },
        {
          title: "通识选修",
          parent: 2,
          id: 3,
          table: [{ editable: true, coursename: "" }],
        },
        {
          title: "学科必修",
          parent: 3,
          id: 4,
          table: [
            {
              editable: true,
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
              disabledPark: true,
            },
            {
              editable: true,
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
              id: 1,
            },
            {
              editable: true,
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
              id: 2,
            },
            {
              editable: true,
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
              id: 3,
            },
          ],
        },
        {
          title: "专业必修",
          parent: 4,
          id: 5,
          table: [{ editable: true, coursename: "" }],
        },
        {
          title: "专业选修",
          parent: 4,
          id: 6,
          table: [{ editable: true, coursename: "" }],
        },
        {
          title: "选修",
          parent: 5,
          id: 7,
          table: [{ editable: true, coursename: "" }],
        },
        {
          title: "实践必修",
          parent: 6,
          id: 8,
          table: [{ editable: true, coursename: "" }],
        },
      ],
      forthmenu: [
        {
          title: "计算机系统模块",
          parent: 6,
          id: 1,
          table: [
            {
              editable: true,
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
              disabledPark: true,
            },
            {
              editable: true,
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
              editable: true,
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
              editable: true,
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
              editable: true,
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
        },
        { title: "物联网工程模块", parent: 6, id: 2 ,table:[]},
        { title: "人工智能模块", parent: 6, id: 3 ,table:[]},
        { title: "数据科学模块", parent: 6, id: 4 ,table:[]},
        { title: "网络安全模块", parent: 6, id: 5 ,table:[]},
        { title: "公共模块", parent: 6, id: 6 ,table:[]},
      ],
    };
  },
  components: {
    draggable,
    Edit,
  },
  setup(props:any) {
    const activeIndex = ref("1");
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath);
    };
    //导航栏  为什么点击无法触发handleselect?
    let percentage = ref(88);
    const cacuAllTime = () => (console.log("ok"), (percentage.value = 100));

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
    return {
      onStart,
      onEnd,
      onMove,
      percentage,
      cacuAllTime,
      state,
      Edit,
    };
  },
  methods: {
    editok() {
      ElMessage({
        type: "success",
        message: `编辑生效`,
      });
    },
    afteredit2(n:number,m:number) {
      this.forthmenu[n-1].table[m].editable=true;
      ElMessage({
        type: "success",
        message: `保存成功`,
      });
    },
    afteredit1(n:number,m:number) {
      console.log("Afteredit n is "+n+",m is "+m);
      this.secmenu[n-1].table[m].editable=true;
      ElMessage({
        type: "success",
        message: `保存成功`,
      });
    },
    afteredit(n: number, m: number) {
      this.thirdmenu[n - 1].table[m].editable = true;
      console.log("n is"+n+"m is "+m);
      ElMessage({
        type: "success",
        message: `保存成功`,
      });
    },
    editcourse1(n:number,m:number) {
      this.secmenu[n-1].table[m].editable =  false;


    },
    editcourse2(n:number,m:number) {
      this.forthmenu[n-1].table[m].editable = false;

    },
    editcourse(n: number, m: number) {
      this.thirdmenu[n - 1].table[m].editable = false;
      console.log("n is" + n + "m is " + m);
      // this.isspan=false;
    },
    handleSelect(key: string, keyPath: string[]) {
      console.log(key, keyPath);
      if (keyPath[1] === "2-2") {
        this.secmenu = [];
      }
      //从后端返回一个新的专业的培养计划，更新data里面的数据  对接
    },
    changeMethod(n: number) {
      alert(n);
    },
    mkson1(name: string) {
      // this.secmenu.push({title:"idup",id:34})

      ElMessageBox.prompt("请输入子节点名称", "Tip", {
        confirmButtonText: "添加",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          // this.secmenu.push({title:"idup",id:34}) 无法访问secmenu
          this.secmenu.push({
            title: value,
            id: this.secmenu.length,
            table: [],
          });

          ElMessage({
            type: "success",
            message: `Your email is:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Input canceled",
          });
        });
    },
    mkson2(prtid: number) {
      ElMessageBox.prompt("请输入子节点名称", "Tip", {
        confirmButtonText: "添加",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          // this.secmenu.push({title:"idup",id:34}) 无法访问secmenu
          this.thirdmenu.push({
            title: value,
            id: this.thirdmenu.length,
            parent: prtid,
            table: [],
          });

          ElMessage({
            type: "success",
            message: `Your email is:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Input canceled",
          });
        });
    },
    mkson3(prtid: number) {
      ElMessageBox.prompt("请输入子节点名称", "Tip", {
        confirmButtonText: "添加",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          // this.secmenu.push({title:"idup",id:34}) 无法访问secmenu
          this.forthmenu.push({
            title: value,
            id: this.forthmenu.length,
            parent: prtid,
            table:[]
          });

          ElMessage({
            type: "success",
            message: `Your email is:${value}`,
          });
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "Input canceled",
          });
        });
    },
    mkson4(prtid: number) {
      ElMessage({
        type: "info",
        message: "当前级别不允许再添加子节点",
      });
    },
    addcourse4(index:number) {
      this.forthmenu[index - 1].table.push({
              editable: false,
              normal: true,
              coursecode: " ",
              coursename: " ",
              courseenglishname: " ",
              credit: " ",
              totalhours: " ",
              teachhours: " ",
              pratice: " ",
              experiment: " ",
              cinclass: " ",
              coutclass: " ",
              semester: " ",
              assessment: " ",
              time: " ",
              remarks: " ",
              id: this.forthmenu[index-1].table.length,
              disabledMove: false,
              disabledPark: false,
            });
    },
    addcourse3(index:number) {
      this.thirdmenu[index - 1].table.push({
              editable: false,
              normal: true,
              coursecode: " ",
              coursename: " ",
              courseenglishname: " ",
              credit: " ",
              totalhours: " ",
              teachhours: " ",
              pratice: " ",
              experiment: " ",
              cinclass: " ",
              coutclass: " ",
              semester: " ",
              assessment: " ",
              time: " ",
              remarks: " ",
              id: this.thirdmenu[index-1].table.length,
              disabledMove: false,
              disabledPark: false,
            });
    },
    addcourse2(index: number) {
      alert('test')
      //对话框实现添加课程信息？？
      this.secmenu[index - 1].table.push({
              editable: false,
              normal: true,
              coursecode: " ",
              coursename: " ",
              courseenglishname: " ",
              credit: " ",
              totalhours: " ",
              teachhours: " ",
              pratice: " ",
              experiment: " ",
              cinclass: " ",
              coutclass: " ",
              semester: " ",
              assessment: " ",
              time: " ",
              remarks: " ",
              id: this.secmenu[index-1].table.length,
              disabledMove: false,
              disabledPark: false,
            });
      //zhelizheli
    },
  },
});
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.el-menu {
  background-color: #f1f1f1;
}
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
  color: #333;
}

.item > label:hover {
  cursor: move;
}

.item > span {
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
  margin: 40px;
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
  padding-top: 8px;
  width: 150px;
  text-align: left;
  display: inline-block;
}
.courseenglishname {
  padding-top: 8px;
  width: 250px;
  text-align: left;
  display: inline-block;
}
.coursecode,
.credit,
.teachhours,
.pratice,
.experiment,
.cinclass,
.coutclass,
.semester,
.assessment {
  padding-top: 8px;
  width: 26px;
  text-align: center;
  display: inline-block;
}

.totalhours {
  padding-top: 8px;
  width: 30px;
  text-align: center;
  display: inline-block;
}

.time {
  padding-top: 8px;
  width: 60px;
  text-align: center;
  display: inline-block;
}

.remarks {
  padding-top: 8px;
  width: 50px;
  text-align: center;
  display: inline-block;
}

.totalhourslabel,
.praticelabel,
.cinclasslabel,
.coutclasslabel,
.semesterlabel,
.assessmentlabel {
  padding: 0px !important;
}

label.move {
  width: 90px;
}
.longremarks {
  text-align: left;
  display: inline-block;
  margin-left: 10px;
  margin-top: 8px;
}
.mkson {
  margin-left: 20px;
  font-size: 1px;
  height: 22px;
  width: 88px;
}
.mkbro {
  margin-left: 20px;
  font-size: 1px;
  height: 22px;
  width: 99px;
}
.openedit {
  margin: 8px 140px 0px 140px;
}
.el-input__inner {
  border: none;
  font-size: small;
}
.el-select {
  width:150px;
  text-align: center;
}
.el-input__inner{
  
}
</style>
