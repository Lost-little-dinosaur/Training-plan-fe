<template>
    <el-row>
        <el-col :span="4"></el-col>
        <el-col :span="16">
            <el-form
                ref="ruleFormRef"
                :model="ruleForm"
                status-icon
                :rules="rules"
                label-width="100px"
                class="demo-ruleForm"
                size="default"
            >
                <el-row>
                    <el-col :span="12">
                        <el-form-item label="课程代码" prop="coursecode">
                            <el-input v-model="ruleForm.coursecode" type="text" autocomplete="off"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="课程名称" prop="coursename">
                            <el-input
                                v-model="ruleForm.coursename"
                                type="text"
                                autocomplete="off"
                            />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="课程英文名称" prop="courseenglishname">
                            <el-input
                                v-model="ruleForm.courseenglishname"
                                type="text"
                                autocomplete="off"
                            />
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="学分" prop="credit">
                            <el-input v-model.number="ruleForm.credit"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="总学时" prop="totalhours">
                            <el-input v-model.number="ruleForm.totalhours"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="讲授" prop="teachhours">
                            <el-input v-model.number="ruleForm.teachhours"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="课程实践" prop="pratice">
                            <el-input v-model.number="ruleForm.pratice"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="实验" prop="experiment">
                            <el-input v-model.number="ruleForm.experiment"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="课内上机" prop="cinclass">
                            <el-input v-model.number="ruleForm.cinclass"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="课外上机" prop="coutclass">
                            <el-input v-model.number="ruleForm.coutclass"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="开课学期" prop="semester">
                            <el-input v-model.number="ruleForm.semester"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="考核方式" prop="assessment">
                            <el-input v-model.number="ruleForm.assessment"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="起始周" prop="time">
                            <el-input v-model.string="ruleForm.time"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="备注" prop="remarks">
                            <el-input v-model.string="ruleForm.remarks"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="ID" prop="id">
                            <el-input v-model.number="ruleForm.id"/>
                        </el-form-item>
                    </el-col>
                    <el-col>
                        <el-cascader :options="options" clearable />
                    </el-col>
                    <el-col :span="12">
                        <el-form-item>
                            <el-button type="primary" @click="submitForm(ruleFormRef)"
                            >添加课程
                            </el-button
                            >
                            <el-button @click="resetForm(ruleFormRef)">重置</el-button>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </el-col>
        <el-col :span="4"></el-col>

    </el-row>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import type {FormInstance} from 'element-plus'

const options = [
    {
        value:'CS',
        label:'计算机科学与技术',
        children:[{
            value:'normalmain',
            label:'通识类课程',
            children:[
                {
                    value:'normalmust',
                    label:'通识必修'
                },
                {
                    value:'normalchoose',
                    label:'通识选修'
                },
                {
                    value:'subjectmust',
                    label:'专业必修'
                }
            ]    
        }

        ]
    }
]
const ruleFormRef = ref<FormInstance>()

const validateCourseCode = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课程代码！'))
    } else {
        callback()
    }
}
const validateCourseName = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课程名称！'))
    } else {
        callback()
    }
}
const validateCredit = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入学分！'))
    } else {
        callback()
    }
}
const validateTotalHours = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入总学时！'))
    } else {
        callback()
    }
}
const validateTeachHours = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入讲授学时！'))
    } else {
        callback()
    }
}
const validatePratice = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课程实践学时！'))
    } else {
        callback()
    }
}
const validateExperiment = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入实验学时！'))
    } else {
        callback()
    }
}
const validateCinclass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课内上机学时！'))
    } else {
        callback()
    }
}
const validateCoutclass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课外上机学时！'))
    } else {
        callback()
    }
}
const validateSemester = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入开课学期！'))
    } else {
        callback()
    }
}
const validateAssessment = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入考核方式！'))
    } else {
        callback()
    }
}
const validateTime = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入起始周！'))
    } else {
        callback()
    }
}
const validateRemarks = (rule: any, value: any, callback: any) => {
}
const validateId = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入id！'))
    } else {
        callback()
    }
}


const ruleForm = reactive({
    coursecode: "",
    coursename: "",
    courseenglishname:"",
    credit: "",
    totalhours: "",
    teachhours: "",
    pratice: "",
    experiment: "",
    cinclass: "",
    coutclass: "",
    semester: "",
    assessment: "",
    time: "",
    remarks: "",
    id: "",
})

const rules = reactive({
    coursecode: [{validator: validateCourseCode, trigger: 'blur'}],
    coursename: [{validator: validateCourseName, trigger: 'blur'}],
    credit: [{validator: validateCredit, trigger: 'blur'}],
    totalhours: [{validator: validateTotalHours, trigger: 'blur'}],
    teachhours: [{validator: validateTeachHours, trigger: 'blur'}],
    pratice: [{validator: validatePratice, trigger: 'blur'}],
    experiment: [{validator: validateExperiment, trigger: 'blur'}],
    cinclass: [{validator: validateCinclass, trigger: 'blur'}],
    coutclass: [{validator: validateCoutclass, trigger: 'blur'}],
    semester: [{validator: validateSemester, trigger: 'blur'}],
    assessment: [{validator: validateAssessment, trigger: 'blur'}],
    time: [{validator: validateTime, trigger: 'blur'}],
    remarks: [{validator: validateRemarks, trigger: 'blur'}],
    id: [{validator: validateId, trigger: 'blur'}],
})

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}
</script>
