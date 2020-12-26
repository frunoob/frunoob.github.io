---
title: SSM-VUE-讲义-2
tags:
  - null
categories:
  - null
top_img: false
cover: false
comments: false
mathjax: true
date: 2020-12-27 00:14:50
top:
updated:
keywords:
description:
toc:
toc_number:
katex:
aplayer:
highlight_shrink:
aside:
---

Vue+SSM+Element-Ui

前后端分离练习

SSM: Spring 、SpringMVC、 MyBatis

功能完善：添加用户、修改用户、删除用户，完善

效果图：

![](https://gitee.com/frunoob/blog-image/raw/master/image/20201227000824.png)

Element UI教程：https://element.eleme.cn/\#/zh-CN/component/installation

# 添加用户

## 1.1前端

修改user/UserList.vue的用户列表，添加如下内容：

| \<el-main class="elMain"\>  \<el-button \@click="initAddUser" size="mini" \>添加\</el-button\>  \<el-table v-loading="loading" :data="tableData" stripe border size="mini"\>  \<el-table-column align="center" width="55px" type="index"\>\</el-table-column\>  \<el-table-column align="center" label="编号" prop="uid"\>\</el-table-column\>  \<el-table-column align="center" label="用户名" prop="userName"\>\</el-table-column\>  \<el-table-column align="center" label="姓名" prop="uName"\>\</el-table-column\>  \<el-table-column align="center" label="年龄" prop="age"\>\</el-table-column\>  \<el-table-column align="center" label="性别"\>  \<template slot-scope="scope"\>  \<span v-if="scope.row.sex===0"\>男\</span\>  \<span v-if="scope.row.sex===1"\>女\</span\>  \</template\>  \</el-table-column\>  \<el-table-column align="center" label="操作"\>  \<template slot-scope="scope"\>  \<el-button size="mini" \@click="initEditUser(scope.row)"\>编辑\</el-button\>  \<el-button size="mini" type="danger" \@click="removeUserById(scope.row.id)"\>删除\</el-button\>  \</template\>  \</el-table-column\>  \</el-table\> \</el-main\> |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


添加用户对话框：

| \<!-- 添加用户 --\> \<el-dialog :title="formTitle" :visible.sync="dialogFormVisible" width="580px"\>  \<el-form :model="form"\>  \<el-form-item label="编号" :label-width="formLabelWidth"\>  \<el-input v-model="form.uid" autocomplete="off"\>\</el-input\>  \</el-form-item\>  \<el-form-item label="用户名" :label-width="formLabelWidth"\>  \<el-input v-model="form.userName" autocomplete="off"\>\</el-input\>  \</el-form-item\>  \<el-form-item label="密码" :label-width="formLabelWidth"\>  \<el-input v-model="form.password" autocomplete="off" show-password\>\</el-input\>  \</el-form-item\>  \<el-form-item label="姓名" :label-width="formLabelWidth"\>  \<el-input v-model="form.uName" autocomplete="off"\>\</el-input\>  \</el-form-item\>  \<el-form-item label="年龄" :label-width="formLabelWidth"\>  \<el-input v-model="form.age" autocomplete="off"\>\</el-input\>  \</el-form-item\>  \<el-form-item label="性别" :label-width="formLabelWidth"\>  \<el-select v-model="form.sex" placeholder="请选择"\>  \<el-option label="男" value="0"\>\</el-option\>  \<el-option label="女" value="1"\>\</el-option\>  \</el-select\>  \</el-form-item\>  \</el-form\>  \<div slot="footer" class="dialog-footer"\>  \<el-button \@click="dialogFormVisible = false"\>取 消\</el-button\>  \<el-button type="primary" \@click="submitAddOrEditUser"\>确 定\</el-button\>  \</div\> \</el-dialog\> |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


修改data属性：

| data() {  return {  tableData: [],  loading: false,  formInline: {  userName: '',  sex: '',  pageNum:1,  pageSize:10  },  pageSizes:[5, 10, 15, 20],  pageTotal:0,  dialogFormVisible: false,  delVisible: false,//删除提示弹框的状态  formTitle:'',  form: {},  flag:true, //添加修改标识，true：添加；false: 修改  formLabelWidth: '80px'  } } |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


添加初始化方法：

| //添加用户：初始化 initAddUser(){  this.form={};  this.formTitle='添加用户';  this.flag=true;  this.dialogFormVisible = true; } |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


提交保存方法：

| //提交保存:添加或编辑用户 submitAddOrEditUser(){  let methodName="editUser";  if (this.flag){  methodName="addUser";  }  commonAPI(methodName,this.form)  .then(res =\> {  this.form={};  this.dialogFormVisible = false;  this.getData();  }); } |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


## 1.2后端

UserMapper.xml

| \<!-- 添加用户 --\> \<insert id="addUser" parameterType="user" \>  INSERT INTO tbUser(  uId,userName,password,uName,age,sex  )VALUES (  \#{uid},  \#{userName},  \#{password},  \#{uName},  \#{age},  \#{sex}  )  \</insert\> |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


UserMapper.java

| //添加用户 void addUser(User user);  //编辑用户 void editUser(User user);  //删除用户 void deleteUserById(Integer id); |
|------------------------------------------------------------------------------------------------------------------------------------|


IUserService.java

| void addUser(User user);  void editUser(User user);  void deleteUserById(Integer id); |
|---------------------------------------------------------------------------------------------------|


UserServiceImpl.java

| \@Override public void addUser(User user) {  userMapper.addUser(user); }  \@Override public void editUser(User user) {  userMapper.editUser(user); }  \@Override public void deleteUserById(Integer id) {  userMapper.deleteUserById(id); } |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


UserController.java

| \@RequestMapping(value = "/addUser", produces = "application/json;charset=utf-8") public ResponseBody addUser(\@RequestBody User user) {  try {  userService.addUser(user);  return new AssembleResponseMsg().success("OK");  } catch (Exception e) {  e.printStackTrace();  return new AssembleResponseMsg().failure(200, "error", "添加用户失败！");  } } |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


# 修改用户

## 2.1前端

user/UserList.vue添加编辑初始化方法：

| //编辑用户:初始化 initEditUser(row){  this.form=row;  this.formTitle='编辑用户';  this.flag=false;  this.dialogFormVisible = true; } |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


编辑提交保存方法：（同添加提交保存--优化后）

| //提交保存:添加或编辑用户 submitAddOrEditUser(){  let methodName="editUser";  if (this.flag){  methodName="addUser";  }  commonAPI(methodName,this.form)  .then(res =\> {  this.form={};  this.dialogFormVisible = false;  this.getData();  }); } |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


## 2.2后端

UserMapper.xml

| \<!-- 编辑用户--\> \<update id="editUser" parameterType="user"\>  UPDATE tbUser  \<set\>  \<if test="uid !=null "\>  uid=\#{uid},  \</if\>  \<if test="userName !=null and userName !='' "\>  userName=\#{userName},  \</if\>  \<if test="password !=null and password !='' "\>  password=\#{password},  \</if\>  \<if test="uName !=null and uName !='' "\>  uName=\#{uName},  \</if\>  \<if test="age !=null and age !='' "\>  age=\#{age},  \</if\>  \<if test="sex !=null and sex !='' "\>  sex=\#{sex},  \</if\>  \</set\>  WHERE id=\#{id} \</update\> |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


UserMapper.java

| //添加用户 void addUser(User user);  //编辑用户 void editUser(User user);  //删除用户 void deleteUserById(Integer id); |
|------------------------------------------------------------------------------------------------------------------------------------|


IUserService.java

| void addUser(User user);  void editUser(User user);  void deleteUserById(Integer id); |
|---------------------------------------------------------------------------------------------------|


UserServiceImpl.java

| \@Override public void editUser(User user) {  userMapper.editUser(user); } |
|------------------------------------------------------------------------------------|


UserController.java

| \@RequestMapping(value = "/editUser", produces = "application/json;charset=utf-8") public ResponseBody editUser(\@RequestBody User user) {  try {  userService.editUser(user);  return new AssembleResponseMsg().success("OK");  } catch (Exception e) {  e.printStackTrace();  return new AssembleResponseMsg().failure(200, "error", "修改用户失败！");  } } |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


# 删除用户

## 3.1前端

修改user/UserList.vue,增加删除方法，如下：

| //删除用户:根据id删除用户 async removeUserById(id){  console.log(id);  const confirmResult = await this.\$confirm('此操作将永久删除该用户, 是否继续?', '提示', {  confirmButtonText: '确定',  cancelButtonText: '取消',  type: 'warning'  }).catch(err =\> err);  // console.log(confirmResult);  // 确认删除则返回字符串 confirm  // 取消返回 cancel  if(confirmResult !== 'confirm') {  return this.\$message.info('已取消删除');  }  const {data:res} = await commonAPI('deleteUserById/' + id,'');  // 刷新列表  this.getData(); } |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


## 3.2后端

UserMapper.xml

| \<!-- 删除用户--\> \<delete id="deleteUserById" parameterType="int"\>  DELETE FROM tbUser where id=\#{id} \</delete\> |
|-----------------------------------------------------------------------------------------------------------------------------------|


UserMapper.java

| //添加用户 void addUser(User user);  //编辑用户 void editUser(User user);  //删除用户 void deleteUserById(Integer id); |
|------------------------------------------------------------------------------------------------------------------------------------|


IUserService.java

| void addUser(User user);  void editUser(User user);  void deleteUserById(Integer id); |
|---------------------------------------------------------------------------------------------------|


UserServiceImpl.java

| \@Override public void deleteUserById(Integer id) {  userMapper.deleteUserById(id); } |
|-----------------------------------------------------------------------------------------------|


UserController.java

| \@RequestMapping(value = "/deleteUserById/{id}", produces = "application/json;charset=utf-8") public ResponseBody deleteUserById(\@PathVariable("id") Integer id) {  try {  userService.deleteUserById(id);  return new AssembleResponseMsg().success("OK");  } catch (Exception e) {  e.printStackTrace();  return new AssembleResponseMsg().failure(200, "error", "删除用户失败！");  } } |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


# 完善

## 4.1 添加面包屑导航

| \<template\>  \<el-container\>  \<el-breadcrumb separator-class="el-icon-arrow-right"\>  \<el-breadcrumb-item\>用户管理\</el-breadcrumb-item\>  \<el-breadcrumb-item\>用户列表\</el-breadcrumb-item\>  \</el-breadcrumb\>  \<el-header style="background-color:white"\> ... ... |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


## 4.2 调整列表容器大小

修改user/UserList.vue样式，如下：

| \<style\>  .el-main {  padding: 5px 10px;  }  .elMain{  height: 500px;  }  .el-table th {  height: 45px;  font-size: 16px;  font-family: 微软雅黑;  font-weight: 500;  color: darkblue;  } \</style\> |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|


## 4.3菜单栏调整

修改router/index.js，去掉无用的菜单项，如下：

| let menu=[  {  path:'/user',  name:'layoutYHGL',  component:()=\>import('\@/views/layout/Layout'),  meta:{  title:'用户管理',  icon:'el-icon-user',  menu:true,  funcNode:'1'  },  children:[  {  path:'/user/userList',  name:'UserList',  component:()=\>import('\@/views/user/UserList'),  meta:{  title:'用户列表',  icon:'el-icon-notebook-2',  menu:true,  funcNode:'1-1'  }  }  ]  },  {  path:'/sys',  name:'layoutXTGL',  component:()=\>import('\@/views/layout/Layout'),  meta:{  title:'系统管理',  icon:'el-icon-setting',  menu:true,  funcNode:'2'  },  children:[  {  path:'/sys/sysLogList',  name:'SysLogList',  component:()=\>import('\@/views/sys/SysLogList'),  meta:{  title:'系统访问日志',  icon:'el-icon-notebook-1',  menu:true,  funcNode:'2-1'  }  }  ]  },  {  path:'',  redirect:'login',  meta:{  menu:false  }  },  {  path:'/login',  name:'Login',  component:()=\>import('\@/views/login/Login'),  meta:{  menu:false  }  } ] |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|

