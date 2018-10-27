<template>
  <div>
    <el-form :model="training" :rules="rules" ref="trainingForm" label-width="100px" class="demo-ruleForm">
      <el-form-item
        label="名称"
        prop="title"
      >
        <el-input v-model="training.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="描述"
        prop="description"
      >
        <el-input type="textarea" v-model="training.description" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import service from '@/api'

export default {
  data() {
    const validateTitle = (rule, value, callback) => {
      if (!/^[\u4e00-\u9fa5a-zA-Z0-9]+$/.test(value)) {
        return callback('名称不得包含特殊字符')
      }

      if (value.length > 15) {
        return callback('名称不得多于15个字符')
      }

      callback()
    }

    const validateDescription = (rule, value, callback) => {
      if (value.length > 300) {
        return callback('描述信息不得多于300个字符')
      }

      callback()
    }

    return {
      training: {
        title: '',
        description: ''
      },
      rules: {
        title: [
          { required: true, message: '请填写特训营名称', trigger: 'blur' },
          { validator: validateTitle, trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请填写描述信息', trigger: 'blur' },
          { validator: validateDescription, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs['trainingForm'].validate(valid => {
        if (valid) {
          service.createTraining(this.training).then(({ status, data }) => {
            if (data.code === 200) {
              this.$router.push('/training/list')
            } else if (data.code === 400) {
              this.$message.error('名称重复');
            } else {
              this.$message.error('网络异常，请稍后再试');
            }
          })
        }
      })
    },
    onCancel() {
      this.$router.push('/training/list')
    }
  }
};
</script>
