<script lang="ts" setup>
import { FormInstance } from "element-plus";
import { reactive, ref } from "vue";
import { useRenderIcon } from "@/components/Icon/src/hooks";
import { loginRules } from "@/utils/rule";

const loading = ref(false);
const title = "健新智能";
const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  username: "",
  password: ""
});

const onLogin = async (formEl: FormInstance | undefined) => {
  loading.value = true;
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
    }
  });
};
</script>

<template>
  <div class="select-none">
    <img src="/@/assets/login/bg.png" class="wave" />

    <div class="login-container">
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <Motion>
            <h2 class="outline-none">{{ title }}</h2>
          </Motion>

          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            :rules="loginRules"
            size="large"
            @keyup.enter="onLogin(ruleFormRef)"
          >
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur'
                  }
                ]"
                prop="username"
              >
                <el-input
                  clearable
                  v-model="ruleForm.username"
                  placeholder="请输入账号"
                  :prefix-icon="useRenderIcon('user')"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item prop="password">
                <el-input
                  clearable
                  show-password
                  v-model="ruleForm.password"
                  placeholder="请输入密码"
                  :prefix-icon="useRenderIcon('lock')"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="250">
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                :loading="loading"
                @click="onLogin(ruleFormRef)"
              >
                登录
              </el-button>
            </Motion>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("/@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}

// .translation {
//   ::v-deep(.el-dropdown-menu__item) {
//     padding: 5px 40px;
//   }

//   .check-zh {
//     position: absolute;
//     left: 20px;
//   }

//   .check-en {
//     position: absolute;
//     left: 20px;
//   }
// }
</style>
