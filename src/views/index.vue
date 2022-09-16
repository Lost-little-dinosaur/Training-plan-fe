<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Aside @updateIndex="updateIndex"/>
            </el-header>
            <el-main>
                <drag v-if="nowIndex===1"/>
                <addLesson v-if="nowIndex===2"/>
                <testTable v-if="nowIndex===3"/>
                <testTree v-if="nowIndex===4"/>
            </el-main>
            <el-footer>
                <div style="height: 100px">
                    <span style="margin-bottom: 10px">
                        Contributors
                    </span>
                    <a href="https://github.com/Lost-little-dinosaur">
                        <el-avatar :size="30" src="https://avatars.githubusercontent.com/u/82520400?v=4" />
                    </a>
                    <a href="https://github.com/Amereflower">
                    <el-avatar :size="30" src="https://avatars.githubusercontent.com/u/77317822?v=4" />
                    </a>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
import Aside from "@/components/aside.vue";
import Drag from "@/components/drags.vue";
import addLesson from "@/components/addLesson.vue"
import testTable from "@/components/testTable.vue"
import testTree from "@/components/testTree.vue"
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'index',
    methods: {
        updateIndex(n: number) {
            this.nowIndex = n;
        },
    },
    data() {
        return {
            nowIndex: 1
        }
    },
    components: {
    Aside,
    Drag,
    addLesson,
    testTable,
    testTree
}
})

</script>