<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Aside @updateIndex="updateIndex"/>
            </el-header>
            <el-main>
                <drag v-if="nowIndex===1"/>
                <addLesson v-if="nowIndex===2"/>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
import Aside from "@/components/aside.vue";
import Drag from "@/components/drags.vue";
import addLesson from "@/components/addLesson.vue"
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'index',
    methods: {
        updateIndex(n: number) {
            // alert("hahahaha");
            this.nowIndex = n;
        },
    },
    data() {
        return {
            nowIndex: 2
        }
    },
    components: {
        Aside,
        Drag,
        addLesson
    }
})

</script>