<template>
  <div>
    <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
      <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
      泛酴留言板
      <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
    </div>
    <div class="Mess-main">
      <div v-for="(item,index) in tableData" :key="index">
        <h3>{{item.messUserId}}</h3>
        <p>{{item.messIntro}}</p>
        <span style="float:right;">{{item.messDate}}</span>
        <p style="height: 10px"></p>
      </div>
    </div>
    <div class="meorder">
      <div>
        <div v-for="(item,index) in ordertableData" :key="index">
          <span style="color: #e58998">{{item.meorderUserId}}：</span>
          <span>{{item.meorderCon}}</span>
<!--          <br>-->
          <span style="float: right">{{item.meorderDate}}</span>
        </div>
      </div>
    </div>
    <div class="input">
      <form action="">
        <textarea v-model="content.meorderCon" placeholder="请输入内容" name="text" id="text" cols="120" rows="5"></textarea>
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
  name: "Meorder",
  data(){
    return{
      tableData:[],
      ordertableData:[],
      content:{},
      messid : this.$route.query.index,
    }
  },
  created() {
    this.sele()
  },
  methods:{
    sele(){
      this.request.get("/message/byid?messid="+this.messid).then(res=>{
        this.tableData=res
        console.log(this.tableData)
      })
      this.request.get("/meorder/allbyid?messid="+this.messid).then(res=>{
        this.ordertableData = res
        console.log(this.ordertableData)
      })
    },
    fabu(){
      if (!localStorage.getItem("user")){
        this.$message.error("请登录")
      }else{
        console.log(JSON.parse(localStorage.getItem("user")).userName)
        this.content.meorderUserId = JSON.parse(localStorage.getItem("user")).userName
        this.content.meorderMessid = this.messid
        console.log(this.content)
        // console.log(content.messUserId)
        this.request.post("/meorder",this.content).then(res =>{
          if(res){
            this.$message.success("保存成功")
            this.sele()
          }else{
            this.$message.error("保存失败")
          }
        })
      }
    }
  }
}
</script>

<style scoped>
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
.Mess-main{
  width: 100%;
  text-align: center;
}
.Mess-main>div{
  text-align: left;
  width: 1200px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  border: #e58998 1px solid;
  margin: 0 auto;
  //margin-bottom: 50px;
}
.Mess-main>div *{
  padding: 5px;
}
.meorder{
  width: 100%;
  height: 20px;
  //background-color: #e58998;
  text-align: center;
}
.meorder>div{
  width: 1260px;
  //background-color: #fff;
  //height: 50px;
  //padding: 30px;
  //border-radius: 20px;
  //border: #e58998 1px solid;
  margin: 0 auto;
  //margin-bottom: 30px;
}
.meorder>div>div{
  text-align: left;
  width: 1100px;
  background-color: #fff;
  padding: 30px;
  border-radius: 20px;
  border: #e58998 1px solid;
  margin: 0 auto;
  //margin-bottom: 50px;
  float: right;
  margin-top: -20px;
}
</style>