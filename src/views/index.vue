<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Aside></Aside>
            </el-header>
            <el-main>
                <drag />
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
    import Aside from "@/components/aside.vue";
    import Drag from "@/components/drags.vue";
    export default{
        name: 'index',
        components:{
            Aside,
            Drag
        }
    } 

</script>