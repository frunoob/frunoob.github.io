---

title: (Java spring+vue)购物商场项目
tags:
  - Web课程设计
categories:
	- 课程  
	- Web
top_img: false
cover: false
comments: false
mathjax: 
date: 2020-12-26 18:58:26
top: 
updated:
keywords:
description:
toc:
toc_number:
katex: true
aplayer:
highlight_shrink:
aside:
---

<style>
    .title1{
        color: #44d35ce8;
        font-family: sans-serif;
        font-weight: 900;
        font-size:2em;
        border: #09894b solid ;
        border-width:0 0 5px 0;
        text-align:center;
    }
    </style>



{%note info%}

本项目共五人完成。其中一人负责前端，其余四人负责后端（一人至少写出5个接口）。

{%endnote%}

{%note blue fas fa-file-video disabled%}

教程[视频](https://www.bilibili.com/video/BV15E411H7BZ)
{%endnote%}

{%note primary%}

[web开发实践源码、数据库、报告](https://frunoob.lanzous.com/iqlVek9hapg)

{%endnote%}

# 购物商城项目

## 功能分配

### 闫

* 用户表：

   

  1. 用户登录

     ```
     login() {
           this.$axios
             .post("http://localhost:8888/user/login", this.user)
             .then((res) => {
               console.log(res);
               this.msg = res.data.msg;
             });
         },
     ```

     

  2. 用户注册

     ```
        data() {
         return {
             user:{}
         }
     },
        addUser(){
             this.$axios
             .post("http://localhost:8888/user/save",this.user)
             .then(res=>{
                 console.log(res);
             })
         }
     ```

     

  3. 显示所有用户的信息

     ```
         methods: {
             getuser(){
                 this.$axios
                 .get("http://localhost:8888/user/getAll")
                 .then(res =>{
                     if(res.status == 200){
                         this.user = res.data;
                         console.log(this.user);
                     }
                 })
             }
         },
     ```

     

  4. 删除用户

     ```
     methods: {
         delUserById() {
           this.$axios
             .get("http://localhost:8888/user/delUserById", {
                 params:{
                     id:1
                 }
             })
             .then((res) => {
               console.log(res);
             });
         },
        }
     ```

     

  5. 修改用户信息

     ```
       data() {
         return {
           user1: {
             id: 1,
             username: "rrr",
             name: "rrr",
             phone: 2222,
             sex: "女",
             address: "你好北京",
           },
         };
       },
       methods: {
         update() {
           this.$axios
            .post("http://localhost:8888/user/updateUserById",this.user1)
             .then((res) => {
               console.log(res);
             });
         },
       },
     ```

     

  6. 通过id修改用户密码

     ```
     editPassword() {
           this.$axios
             .get("http://localhost:8888/user/updatePassword", {
                 params:{
                     id : 1,
                     password : 4444
                 }
             })
             .then((res) => {
               console.log(res);
               this.msg = res.data.msg;
             });
         },
     ```

     

  ### 伊 

  管理员表：

  1. 登录

     ```
          data() {
             return {
                 user:{},
                 flog:"", //后端传来的返回信息
             }
         },
         methods: {
             getAdminById(){
                 this.flog="";
                 this.$axios
                 .post('http://localhost:8888/admin/login',this.user) 
                 .then(res=>{
                     console.log(res);
                     this.flog = res.data.msg;
                 })
             }
         },
     ```

     

  2. 修改密码

     ```
            editPassword(){
                  this.$axios
                 .get('http://localhost:8888/admin/updatePassword',{
                     params:{
                         id:1,
                         password:"12345678910"
                     }
                 }) 
                 .then(res=>{
                     console.log(res);
                 })
     ```

  3. 通过num账号查找管理员

     ```
     this.$axios
     .get("http://localhost:8888/admin/getAdminByNum", 
     { 
       params: { 
         num:'111'
         } })
     .then((res) => {
       console.log(res.data);
     });
     ```

     

  购物车表：

  1. 修改购物车内商品数量 **存在跨域问题**

     ```
     editCartNum() {
       this.$axios
       .get("http://localhost:8888/cart/arbitrarilyOne", {
           params:{
           id:2,
             number:7
         }
         })
         .then((res) => {
           console.log(res);
         });
     },
     ```
  
     
  
  2. 购物车内商品数量加一
  
   ```
     this.$axios
   .get("http://localhost:8888/cart/addOne", 
     { 
     params: { 
         id:1
         } })
     .then((res) => {
       console.log(res.data);
     });
   ```
  
     
  
  3. 购物车内商品数量减一
  
   ```
     this.$axios
   .get("http://localhost:8888/cart/reduceOne", 
     { 
     params: { 
         id:1
         } })
     .then((res) => {
       console.log(res.data);
     });
   ```
  
     
  
  4. 显示指定用户的购物车内全部商品
	
	   ```
	   this.$axios
	   .get("http://localhost:8888/cart/getAll", 
	   { 
	     params: { 
	       username:'1'
	       } })
	   .then((res) => {
	     console.log(res.data);
	   });
	   ```
	
	5. 添加商品到购物车内
	
	   ```
	     methods: {
	       save() {
	         this.cart.subtime = this.getTime();
	         this.cart.number = 2;
	         this.cart.price = 3;
	         this.cart.username = "1";
	         this.cart.title = "1";
	         this.cart.allmoney = this.cart.price * this.cart.number;
	         this.$axios
	           .post("http://localhost:8888/cart/save",this.cart)
	           .then((res) => {
	             console.log(res.data);
	           });
	       },
	       getTime() {
	         var data = new Date();
	         var year = data.getFullYear();
	         var seperator1 = "-";
	         var seperator2 = ":";
	         var seperator3 = " ";
	         var month = data.getMonth() + 1;
	         var day = data.getDate();
	         var hour = data.getHours();
	         var minutes = data.getMinutes();
	         var second = data.getSeconds();
	         if (month >= 1 && month <= 9) {
	           month = "0" + month;
	         }
	         if (day >= 0 && day <= 9) {
	           day = "0" + day;
	         }
	         var currentdata =
	           year +
	           seperator1 +
	           month +
	           seperator1 +
	           day +
	           seperator3 +
	           hour +
	           seperator2 +
	           minutes +
	           seperator2 +
	           second;
	           console.log(currentdata);
	         return currentdata;
	       },
	     },
	   ```
	

	6. 删除购物车内的商品
	
	   ```
	   this.$axios
	   .get("http://localhost:8888/cart//delById", 
	   { 
	     params: { 
	       id:1
	       } })
	   .then((res) => {
	     console.log(res.data);
	   });
	   ```
	
### 朱


  商品表：

  1. 显示指定类型的商品

     ```
     this.$axios
     .get("http://localhost:8888/goods/findAllGoodsBykind", { params: { kind:"女装男装" } })
     .then((res) => {
         console.log(res.data);
     });
     ```

     

  2. 通过标题模糊查询商品

     ```
     this.$axios
     .get("http://localhost:8888/goods/findGoodsByTitle", { params: { title:"大" } })
     .then((res) => {
         console.log(res.data);
         this.good = res.data;
     });
     ```

     

  3. 通过id查找商品

     ```
     this.$axios
     .get("http://localhost:8888/goods/findGoodById",
     {
     params:{
     	id:2
     	}
     })
     .then(res=>{
       console.log(res.data);
     });
     ```

     

  4. 删除商品

     ```
     this.$axios
     .get("http://localhost:8888/goods/deleteGoodById", 
     { 
       params: { 
         id:24
         } })
     .then((res) => {
       console.log(res.data);
     });
     ```

     

  5. 增加商品

     ```
     this.$axios
     .get("http://localhost:8888/goods/addGood", 
     { 
       params: { 
         title:"琦哥最帅",
         kind:"女装男装" ,
         img_url:"写图片地址就行",
         price: 12.00,
         numall: this.numall,
         numleft:this.numall,
         } })
     .then((res) => {
       console.log(res.data);
     });
     ```

     

  6. 修改商品信息

     ```
     this.$axios
     .get("http://localhost:8888/goods/editGood", 
     { 
       params: { 
         id:25,
         title:"琦哥最帅",
         kind:"女装男装" ,
         img_url:"写图片地址就行",
         price: 22.00,
         numall:this.numall,
         // numleft = numleft修改前的商品剩余量 + numall:修改后的商品总数 - numallOld:修改前的商品总数
         numleft:this.numleft+this.numall - this.numallOld, 
         } })
     .then((res) => {
       console.log(res.data);
     });
     ```

### 符

  订单表：

  1. 添加订单 

     ```
     methods: {
     
       addOrder() {
         this.order.paytime = this.getTime();
         this.order.num = this.getOrderNum();
         this.order.allpay = 100;
         this.order.address = 111;
         this.order.isdeliver = 0;
         this.order.ispay = 0;
         this.order.username = 1;
         console.log(this.order);
         this.$axios
           .post("http://localhost:8888/order/addOrder", this.order)
           .then((res) => {
             console.log(res);
           });
       },
       getTime() {
         var data = new Date();
         var year = data.getFullYear();
         var seperator1 = "-";
         var seperator2 = ":";
         var seperator3 = " ";
         var month = data.getMonth() + 1;
         var day = data.getDate();
         var hour = data.getHours();
         var minutes = data.getMinutes();
         var second = data.getSeconds();
         if (month >= 1 && month <= 9) {
           month = "0" + month;
         }
         if (day >= 0 && day <= 9) {
           day = "0" + day;
         }
         var currentdata =
           year +
           seperator1 +
           month +
           seperator1 +
           day +
           seperator3 +
           hour +
           seperator2 +
           minutes +
           seperator2 +
           second;
         console.log(currentdata);
         return currentdata;
       },
       getOrderNum() {
         var data = new Date();
         var year = data.getFullYear();
         var month = data.getMonth() + 1;
         var day = data.getDate();
         var hour = data.getHours();
         var minutes = data.getMinutes();
         var second = data.getSeconds();
         if (month >= 1 && month <= 9) {
           month = "0" + month;
         }
         if (day >= 0 && day <= 9) {
           day = "0" + day;
         }
         var currentdata = year + month + day + hour + minutes + second;
         console.log(currentdata);
         return currentdata;
       },
     },
     ```

     

  2. 删除订单 

     ```
     delOrder(){
      this.$axios
           .get("http://localhost:8888/order/deleteOrderById", {
             params: {
               id: 2,
             },
           })
           .then((res) => {
             console.log(res);
           });
       },
     ```

     

  3. 按用户名查找订单 

     ```
       findOrderByName(){
          this.$axios
           .get("http://localhost:8888/order/getOrder", {
             params: {
               username:"2",
             },
           })
           .then((res) => {
             console.log(res);
           });
       },
     ```

     

  4. 修改是否确认收货 

     ```
       editOrderIsDeliver(){
          this.$axios
           .get("http://localhost:8888/order/editDeliver", {
             params: {
               id:5,
               isDeliver:1
             },
           })
           .then((res) => {
             console.log(res);
           });
     },
     ```

     

  5. 修改支付状态 

     ```
     editOrderIsPay(){
          this.$axios
           .get("http://localhost:8888/order/editPay", {
             params: {
               id:5,
               isPay:1
             },
           })
           .then((res) => {
             console.log(res);
           });
     },
     ```

     

## 数据库表

### 商品表

<p class="title1" style="text-align:center">goods</p>


|   名    |  类型   | 长度 |                             备注                             |
| :-----: | :-----: | :--: | :----------------------------------------------------------: |
|   id    |   int   |  8   |                 商品的唯一编码<br />自动递增                 |
|  title  | varchar | 255  |                           商品标题                           |
| img_url | varchar | 255  |                         商品图片地址                         |
|  price  | decimal |  10  |                           商品价格                           |
| numleft |   int   |  8   |                            货余量                            |
| numall  |   int   |  8   |                            货总量                            |
|  kind   | varchar |  30  | 种类包括以下10种：<br />女装男装、鞋类箱包<br />母婴用品、护肤彩妆<br />汇吃美食、珠宝配饰<br />家装建材、家居家纺<br />手机数码、家电办公 |

### 用户表

<p class="title1" style="text-align:center">user</p>

|    名    |  类型   | 长度  |                 备注                  |
| :------: | :-----: | :---: | :-----------------------------------: |
|    id    |   int   |   8   | 每个用户的id不能重复<br />id自动递增  |
| username | varchar |  30   | 用户名包括了<br />数字、 字母、汉字。 |
|   name   | varcahr |  30   |            用户的真实姓名             |
|   sex    | varchar |   2   |           用户的性别(男/女)           |
|  phone   | varchar |  11   |             用户电话号码              |
| address  | varchar |  255  |               用户地址                |
| password | varchar |  13   |               用户密码                |

### 订单表

<p class="title1" style="text-align:center">order</p>

|    名     |   类型   | 长度 |               备注               |
| :-------: | :------: | :--: | :------------------------------: |
|    id     |   int    |  8   |         关键字，自动递增         |
|    num    |  String  |  20  |              订单号              |
|  paytime  | datatime |      |             下单时间             |
|  allpay   | decimal  |  10  |            订单总金额            |
|  address  | varchar  | 255  |             收货地址             |
|   good    | varchar  | 255  |             商品信息             |
| isdeliver |   int    |  1   | 是否收货（未收货：0，已收货：1） |
|   ispay   |   int    |  1   | 是否付款（未付款：0，已付款：1） |
| username  | varchar  |  30  |           收货人用户名           |

### 购物车表

<p class="title1" style="text-align:center">shopcart</p>

|    名    |            类型             | 长度 |         备注         |
| :------: | :-------------------------: | :--: | :------------------: |
|    id    |             int             |  8   | 关键字<br />自动递增 |
|          |                             |      |                      |
| username |           varchar           |  30  |        用户名        |
| subtime  | dat加入ime		提交到ime |      |   加入到购物车时间   |
| allmoney |           decimal           |  10  |         总额         |
|  price   |           decimal           |  10  |         单价         |
|  title   |           varchar           | 255  |       商品标题       |
|  number  |             int             |  8   |       商品数量       |

### 管理员表

<p class="title1" style="text-align:center">admin</p>

|    名    | 类型    | 长度  |       备注       |
| :------: | ------- | :---: | :--------------: |
|    id    | int     |   8   | 关键字，自动递增 |
|   num    | varchar |  13   |    管理员账号    |
| password | varchar |  13   |    管理员密码    |


### 项目创建

#### Create New Project
![image-20201229225032865](https://gitee.com/frunoob/blog-image/raw/master/image/20201229225036.png)

#### Spring Initializr
![image-20201229225416186](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000927.png)

#### 填写项目信息
Jar包内置了Tomcat，可以直接运行项目。
War包需要凡在Tomcat的WebApp目录下才能访问项目。

![image-20201229233045901](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000928.png)

#### 选择插件
![image-20201229233646801](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000929.png)
![image-20201229233656707](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000930.png)

#### 最后一步

![image-20201229234041098](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000931.png)
![image-20201229234055705](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000932.png)

#### 创建后的项目界面
![image-20201229234937019](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000933.png)

### 创建数据库（依照上面的[表格](./#数据库表)来创建数据库表）
![image-20201229235105041](https://gitee.com/frunoob/blog-image/raw/master/image/20201230000934.png)

### 建立与数据库一一对应的包及相关配置文件

#### 先以`user`表为例，创建如下包：

![image-20201231110324223](https://gitee.com/frunoob/blog-image/raw/master/image/20201231113132.png)

#### 创建包中文件

![image-20201231111546837](https://gitee.com/frunoob/blog-image/raw/master/image/20201231113135.png)

``` java UserController
package edu.hebeu.demo.user.contoller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
* RestController = @ResponseBody+@Controller
* */
@RestController // spring boot 提供的注解
@RequestMapping("user") // 访问路径
public class UserController {

}
```

``` java UserDao
package edu.hebeu.demo.user.dao;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserDao {
}

```

``` java UserEntity
package edu.hebeu.demo.user.entity;

public class UserEntity {
    private Integer id;
    private String username;
    private String name;
    private String sex;
    private String phone;
    private String address;
    private String password;

    public void setId(Integer id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Integer getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getName() {
        return name;
    }

    public String getSex() {
        return sex;
    }

    public String getPhone() {
        return phone;
    }

    public String getAddress() {
        return address;
    }

    public String getPassword() {
        return password;
    }

    public UserEntity(){

    }

    public UserEntity(Integer id, String username, String name, String sex, String phone, String address, String password) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.sex = sex;
        this.phone = phone;
        this.address = address;
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserEntity{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", phone='" + phone + '\'' +
                ", address='" + address + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}

```

``` java UserService
package edu.hebeu.demo.user.service;

public interface UserService {
}

```

``` java UserServiceImpl
package edu.hebeu.demo.user.service;

import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

}
```

#### 在resources中创建相关配置文件

##### 创建mapper -> user文件夹

* 右击resources -> new -> Directory
  ![](https://gitee.com/frunoob/blog-image/raw/master/image/20201231113133.png)
* 在mapper下新建一个user文件夹，创建成功后结果如图：
  ![](https://gitee.com/frunoob/blog-image/raw/master/image/20201231113134.png)

##### 创建mapper配置文件

* 右击mapper.user -> new -> File
  ![](https://gitee.com/frunoob/blog-image/raw/master/image/20201231165329.png)

* 创建好的文件在mapper -> user 文件夹下
  ![](https://gitee.com/frunoob/blog-image/raw/master/image/20201231165330.png)

* 右击UserDao -> Copy Refenrence，复制UserDao参考路径。
  ![image-20201231171837507](https://gitee.com/frunoob/blog-image/raw/master/image/20201231171940.png)

* 在建好的文件下填写一下内容
  注意：下方代码中的`namespace`为刚才复制的UserDao的参考路径。

  ``` xml UserDao.xml
  <?xml version="1.0" encoding="UTF-8" ?>
  <!DOCTYPE mapper
          PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
          "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
  
  <mapper namespace="edu.hebeu.demo.user.dao.UserDao">
  
  </mapper>
  ```

##### 配置application.yml

* 重命名`application.properties`为`application.yml`

  右击`application.properties`  -> Refactor -> Rename
  ![image-20201231172502026](https://gitee.com/frunoob/blog-image/raw/master/image/20201231172735.png)

* 修改`application.yml`的内容

  ``` [] application.yml
  server:
    port: 8080
    context-path: /
  spring:
    datasource:
    # username 是masql登录的用户名
      username: root
    # password 为登录密码
      password: 1305108661Qq
    # shoppingsystem 为数据库的名称
      url: jdbc:mysql://localhost:3306/shoppingsystem?useUnicode=true&characterEncoding=utf8&allowMultiQueries=true&serverTimezone=GMT%2B8&useSSL=false
      driver-class-name: com.mysql.cj.jdbc.Driver
  mybatis:
  #  代表 mapper 下的全部xml文件
    mapper-locations: classpath:mapper/**/*.xml
  ```

##### 测试项目是否能正常访问

* 写一个接口

  打开`UserController`
  ![](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164947.png)

* 修改`UserController`内容如下

  ``` [] UserController.java
  package edu.hebeu.demo.user.contoller;
  
  import org.springframework.web.bind.annotation.RequestMapping;
  import org.springframework.web.bind.annotation.RestController;
  
  /*
  * RestController = @ResponseBody+@Controller
  * */
  @RestController // spring boot 提供的注解
  @RequestMapping("user") // 访问路径
  public class UserController {
  
      @RequestMapping("/test")
      public String test(){
          return "看见我就说明你做的工作没有问题";
      }
  }
  ```

* 启动项目

  点击绿色的三角即可启动项目
  ![image-20201231181246219](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164948.png)

* 在浏览器中输入网址`localhost:8080/user/test`
  页面显示“看见我就说明你做的工作没有问题”，则说明项目可正常访问。
  ![image-20201231181518526](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164949.png)

* 在`static`文件夹下新建一个`index.html`文件
  ![image-20201231181910009](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164950.png)

* 修改文件内容

  ``` html index.html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>首页</title>
  </head>
  <body>
  <h1>你好</h1>
  </body>
  </html>
  ```

* 重启项目
  ![image-20201231182142156](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164951.png)

* 浏览器地址栏中输入 `localhost:8080` 
  ![image-20201231182302596](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164952.png)

### 配置前端显示界面

####  下载[bootscrap](https://frunoob.lanzous.com/i6VVqjwdcri)

#### 解压压缩包，复制文件夹到项目的`static`目录下

![](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164953.png)

#### 修改`index.html`

``` html index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" href="bt/css/bootstrap.min.css">
    <link rel="stylesheet" href="bt/css/bootstrap-theme.min.css">
    <script type="text/javascript" src="bt/js/jquary.js"></script>
    <script type="text/javascript" src="bt/js/bootstrap.min.js"></script>
</head>
<body>

    <div class="container">
        <table class="table table-hover">
            <tr>
                <th>id</th>
                <th>用户名</th>
                <th>姓名</th>
                <th>性别</th>
                <th>电话</th>
                <th>地址</th>
                <th>密码</th>
            </tr>
            <tr>
                <td>1</td>
                <td>001</td>
                <td>张三</td>
                <td>男</td>
                <td>17330277809</td>
                <td>中国</td>
                <td>1234</td>
                <td>
                    <a href="#" class="btn btn-danger">删除</a>
                    <a href="#" class="btn btn-success">修改</a>
                </td>
            </tr>
        </table>
    </div>
</body>
</html>
```

#### 设置Chrome浏览器

​		有时候会发生，js文件或html文件没有正常更新，这是因为浏览器缓存没有及时清除，设置谷歌浏览器在开发这模式下不保留**缓存**，这样就随时加载最新的js文件和html文件。
点击键盘上的`F12`或`Ctrl`+`Shift`+`I`来打开开发者模式窗口。

* 点击小齿轮
  ![image-20210101111002566](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164954.png)
* 勾上`Disable cache (while DevTools is open)`
  ![image-20210101111214455](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164955.png)

#### 重启项目 浏览器访问`locahost:8080`

显示如下界面：

![image-20210101111336579](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164956.png)

#### 在`static`文件夹下创建`js`文件夹

在`js`文件夹下创建`getData.js`文件，并修改内容如下。
![image-20210101111642808](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164957.png)

``` js getData.js
$(function () {
    $.post({
        url:'user/getAll',
        success:function (data) {
            for (var i = 0; i<data.length;i++){
                console.log(data[i].username);
            }
        }
    });
});

```

#### 在`index.html`文件中添加`getData.js`文件

![image-20210101111817368](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164958.png)

```  html index.html
<script src="js/getData.js"></script>
```

#### 重启项目并刷新浏览器页面

控制台出现了数据库表中的全部用户的姓名
![image-20210101112003677](https://gitee.com/frunoob/blog-image/raw/master/image/20210102164959.png)

#### 