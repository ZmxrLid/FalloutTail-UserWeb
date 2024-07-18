<template>
  <div>
    <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
      <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
      泛酴留言板
      <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
    </div>
    <div class="Mess-main">
      <div v-for="(item,index) in tableData" :key="index" @click="chuan(item.messId)">
        <h3>{{item.messUserId}}</h3>
        <p>{{item.messIntro}}</p>
        <span>{{item.messDate}}</span>
      </div>
    </div>
    <div class="input">
      <form action="">
        <textarea v-model="content.messIntro" placeholder="请输入内容" name="text" id="text" cols="120" rows="5"></textarea>
        <input @click="fabu" value="发送" type="button">
        <input class="qingkong" value="清空" type="reset">
      </form>
    </div>
    <div style="width: 100%;height: 300px">

    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return{
      tableData:[],
      form:{},
      messName:"",
      messUserId:[],
      messDate:[],
      messIntro:[],
      messUserName:[],
      content:{}
    }
  },
  created() {
    this.sele()
  },
  methods:{
    sele(){
      this.request.get("/message"+"?messName="+this.messName).then(res =>{
        this.tableData = res
        console.log(this.tableData)
        this.messUserId=res.map(v=>v.messUserId)
        this.messDate=res.map(v=>v.messDate)
        this.messIntro=res.map(v=>v.messIntro)
      })
    },
    fabu(){
      if (!localStorage.getItem("user")){
        this.$message.error("请登录")
      }else{
        console.log(JSON.parse(localStorage.getItem("user")).userName)
        this.content.messUserId = JSON.parse(localStorage.getItem("user")).userName
        console.log(this.content)
        // console.log(content.messUserId)
        this.request.post("/message",this.content).then(res =>{
          if(res){
            this.$message.success("保存成功")
            this.sele()
          }else{
            this.$message.error("保存失败")
          }
        })
      }
    },
    chuan(messid){
      if (!localStorage.getItem("user")){
        this.$message.error("请登录")
      }else {
        this.$router.push({path: '/meorder?index='+messid})
      }
    }
  },
  module:function (){
  }
}
</script>

<style>
.input{
  width: 100%;
  height: 150px;
  margin: 20px auto;
  /* background-color: aqua; */
  position: fixed;
  bottom: 50px;
  text-align: center;
}
form{
  width: 1100px;
  padding: 20px;
  text-align: left;
  margin: 20px auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
}
textarea{
  font-size: 16px;
  padding: 10px;
  border-radius: 20px;
  resize: none;
}
.input form input{
  width: 80px;
  height: 50px;
  float: right;
  font-size: 16px;
  border-radius: 10px;
  background-color: #e58998;
  color: #fff;
}
.input .qingkong{
  position: relative;
  top: -54px;
}
.fenge{
  margin-top: 150px;
}
.Mess-main{
  width: 100%;
  text-align: center;
}
.Mess-main div{
  text-align: left;
  width: 1200px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  border: #e58998 1px solid;
  margin: 0 auto;
  margin-bottom: 50px;
}
.Mess-main div *{
  padding: 5px;
}
.Mess-main div span{
  float: right;
}
</style>