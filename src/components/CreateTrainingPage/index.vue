<template>
  <div>
    <el-form :model="training" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="名称"
        prop="title"
      >
        <el-input v-model.number="training.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="描述"
        prop="description"
      >
        <el-input v-model.number="training.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      training: {
        title: '',
        description: ''
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      })
    },
    onCancel(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
