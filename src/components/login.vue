<template>
    <div class="login_container">
       <div class="login_box">
           <div class="avatar_box">
               <img src="../assets/logo.png" alt="">
           </div>
           <el-form :model="loginForm" ref="LoginFormRef" :rules="loginFormRules" label_width="opx" class="login_form">
               <el-form-item prop="username">
                   <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
               </el-form-item>
               <el-form-item prop="password">
                   <el-input type="password" v-model="loginForm.password" prefi-icon="iconfont icon-3702mima"></el-input>
               </el-form-item>
               <el-form-item class="btns">
                   <el-button type="primary" v-on:click="login">登录</el-button>
                   <el-button type="info" v-on:click="resetLoginForm">重置</el-button>
               </el-form-item>
           </el-form>
           
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm:{
                username:'admin',
                password:'123456'
            },
            loginFormRules:{
                username:[
                    {required:true,message:'请输入登录名',trigger:'blur'},
                    {
                        min:3,
                        max:10,
                        message:'登录名长度在9到10个字符',
                        trigger:'blur'
                    }
                ],
                password:[
                    {required:true,message:'请输入密码',trigger:'blur'},
                    {
                        min:6,
                        max:15,
                        message:'密码长度在6到15个字符',
                        trigger:'blur'
                    }
                ]
            }
        }
    },
    methods: {
        resetLoginForm(){
            this.$refs.LoginFormRef.resetFields()
        },
        login(){
            this.$refs.LoginFormRef.validate(async valid=>{
                console.log(this.loginFormRules)
                if(!valid){
                    returne
                }
                const{date:res}=await this.$http.post('login',this.loginForm)
                if(res.meta.status!==200){
                    return this.$message.error('登陆失败'+res.meta.msg)
                }
                this.$message.success('登录成功')
                console.log(res)
                window.sessionStorage.setItem('token',res.data.token)
                this.$router.push('/home')
            })
        }
    },
}
</script>

<style lang="less" scoped>
    .login_container {
        background-color: #2b5b6b;
        height: 100%;
    }
    .login_box {
        width: 450px;
        height: 300px;
        background: #fff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        .avatar_box {
            height: 130px;
            width: 130px;
             border:1px solid #eee;
            border-radius: 50%;
            padding: 10px;
            box-shadow: 0 0 10px #ddd;
            position: absolute;
            left: 50%;
            transform: translate(-50% -50%);
            background-color: #fff;
            img {
                width: 100%;
                height: 100%;
                border-radius:50%;
                background-color: #eee;
            }
        }
    }
    .login_form {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding:0 20px;
        box-sizing: border-box;
    }
    .btns{
        display:flex;
        justify-content: flex-end;
    }
</style>
