<template>
  
  <div class="demo-collapse" >
    <el-collapse v-model="activeNames" @change="handleChange">
      
 

      <el-collapse-item title="L1" name="1" >
        <el-collapse-item title="L2" name="2" v-for="(item, index) in items">

        </el-collapse-item>
      </el-collapse-item>

    </el-collapse>
  </div>
</template>

<script lang="ts">
  import { ref, reactive } from "vue";
    export default {
      data() {
  return {
    parentMessage: 'Parent',
    items: [{ message: 'Foo' }, { message: 'Bar' },{message:'yes'}]
  }
}
    }
  

</script>