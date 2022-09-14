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
                        <el-form-item label="课程编号" prop="coursecode">
                            <el-input v-model="ruleForm.coursecode" type="password" autocomplete="off"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="课程名字" prop="coursename">
                            <el-input
                                v-model="ruleForm.coursename"
                                type="password"
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
                        <el-form-item label="总时间" prop="totalhours">
                            <el-input v-model.number="ruleForm.totalhours"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="教学时间" prop="teachhours">
                            <el-input v-model.number="ruleForm.teachhours"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="练习" prop="pratice">
                            <el-input v-model.number="ruleForm.pratice"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="实验" prop="experiment">
                            <el-input v-model.number="ruleForm.experiment"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="cinclass" prop="cinclass">
                            <el-input v-model.number="ruleForm.cinclass"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="开班数量" prop="coutclass">
                            <el-input v-model.number="ruleForm.coutclass"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="学期" prop="semester">
                            <el-input v-model.number="ruleForm.semester"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="任务" prop="assessment">
                            <el-input v-model.number="ruleForm.assessment"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="时间" prop="time">
                            <el-input v-model.number="ruleForm.time"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="标记" prop="remarks">
                            <el-input v-model.number="ruleForm.remarks"/>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="ID" prop="id">
                            <el-input v-model.number="ruleForm.id"/>
                        </el-form-item>
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

const ruleFormRef = ref<FormInstance>()

const validateCourseCode = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课程编号！'))
    } else {
        callback()
    }
}
const validateCourseName = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入课程名字！'))
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
        callback(new Error('请输入总时间！'))
    } else {
        callback()
    }
}
const validateTeachHours = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入教学时间！'))
    } else {
        callback()
    }
}
const validatePratice = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入练习！'))
    } else {
        callback()
    }
}
const validateExperiment = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入实验！'))
    } else {
        callback()
    }
}
const validateCinclass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入cinclass！'))
    } else {
        callback()
    }
}
const validateCoutclass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入coutclass！'))
    } else {
        callback()
    }
}
const validateSemester = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入semester！'))
    } else {
        callback()
    }
}
const validateAssessment = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入assessment！'))
    } else {
        callback()
    }
}
const validateTime = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入time！'))
    } else {
        callback()
    }
}
const validateRemarks = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入remarks！'))
    } else {
        callback()
    }
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
