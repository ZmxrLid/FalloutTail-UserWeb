<template>
  <div>
    <div class="exd-main">
      <div class="exd-img">
        <img :src="require('../../../Dispose/src/main/java/files/'+this.tableData[0].exImg)">
        <div class="exd-right">
          <h2>{{this.tableData[0].exName}}</h2>
          <span class="mulu">时间：</span><i class="el-icon-date" style="margin-right: 5px"></i><span>{{this.tableData[0].exDate}}</span>
          <br>
          <span class="mulu">地点：</span><i class="el-icon-position" style="margin-right: 5px"></i><span>{{this.tableData[0].exPlace}}</span>
          <br>
          <span class="mulu">基本介绍：</span><i class="el-icon-collection" style="margin-right: 5px"></i><span>{{this.tableData[0].exIntroduce}}</span>
          <br><br>
          <div class="xuannum" @click="jian" style="margin-left: 50px"><span><</span></div>
          <div style="float: left" class="num"><span>{{Num}}</span></div>
          <div class="xuannum" @click="jia"><span>></span></div>
          <br><br>
          <span style="font-size: 30px;overflow: hidden;color: #e58998;line-height: 90px;margin-left: 50px;">
              ￥{{this.tableData[0].exPrice}}
          </span>
          <br>
          <button @click="jiaru">立即购票</button>
        </div>
      </div>
    </div>
    <div class="exd-minor">
      <div class="exd-mi-ma">
        <span class="mulu" style="font-size: 24px;line-height: 100px">参展嘉宾：</span><i class="el-icon-user" style="margin-right: 5px;font-size: 24px" ></i><span style="font-size: 24px">{{this.tableData[0].exPeople}}</span>

        <div style="display: inline;position: relative;left: -34px">
          <img style="width: 100%;" :src="require('../../../Dispose/src/main/java/files/'+this.tableData[0].exDetailImg)">
        </div>
      </div>
    </div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <span style="text-align: center;margin: auto">请使用微信支付</span>
      <img style="width: 100%" src="../assets/支付.jpg">
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="zhifuchenggong">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Exhibition",
  data(){
    return{
      dialogVisible:false,
      tableData:{},
      exxId : this.$route.query.index,
      form:{},
      Num:1,
      user:{}
    }
  },
  created() {
    this.sele()
  },
  methods:{
    jia(){
        this.Num = this.Num+1
    },
    jian(){
      if (this.Num==1){
        this.Num = 1
      }else{
        this.Num = this.Num-1
      }
    },
    zhifuchenggong(){
      this.user=JSON.parse(localStorage.getItem("user"))
      this.form.exorderUserId=this.user.userId;
      this.form.exorderExId=this.tableData[0].exName;
      this.form.exorderPrice=this.tableData[0].exPrice;
      this.form.exorderNum=this.Num;
      console.log(this.form)
      this.request.post("/exorder",this.form).then(res=>{
        if (res){
          this.$notify({
            title: '成功',
            message: '您已成功购买',
            type: 'success'
          });
        }else{
          this.$notify.error({
            title: '错误',
            message: '购买失败'
          });
        }
      })
      this.dialogVisible=false
    },
    sele(){
      this.request.get("/exhibition/allbyid"+"?exId="+this.exxId).then(res=>{
        this.tableData = res
        console.log(this.tableData[0].exId)
      })
    },
    jiaru(){
      if (localStorage.getItem("user")){
        this.$confirm('您确定要购买,并支付吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.dialogVisible=true
          // this.user=JSON.parse(localStorage.getItem("user"))
          // this.form.exorderUserId=this.user.userId;
          // this.form.exorderExId=this.tableData[0].exName;
          // this.form.exorderPrice=this.tableData[0].exPrice;
          // console.log(this.form)
          // this.request.post("/exorder",this.form).then(res=>{
          //   if (res){
          //     this.$notify({
          //       title: '成功',
          //       message: '您已成功购买',
          //       type: 'success'
          //     });
          //   }else{
          //     this.$notify.error({
          //       title: '错误',
          //       message: '购买失败'
          //     });
          //   }
          // })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '您已取消'
          });
        });
      }else{
        this.$notify({
          title: '您好',
          message: '您还没有登录',
          offset: 100
        });
      }
    }
  }
}
</script>

<style scoped>
.exd-main{
  width: 80%;
  height: 490px;
  padding: 30px;
  margin: 20px auto;
  background-color: rgba(0,0,0,0.1);
  border-radius: 50px;
}
.exd-minor{
  width: 80%;
  padding: 30px;
  //height: 190px;
  margin: 20px auto;
  background-color: rgba(0,0,0,0.1);
  border-radius: 50px;
}
.exd-img{
  width: 90%;
  height: 100%;
  background-color: #FFF;
  margin: auto;
  border-radius: 20px;
}
.exd-img img{
  border-radius: 20px;
  position: relative;
  top: 60px;
  left: 50px;
}
.exd-right{
  //background-color: rgba(0,0,0,0.1);
  width: 70%;
  height: 100%;
  float: right;
}
.exd-right h2{
  color: #e58998;
  margin-top: 70px;
  margin-left: 50px;
}
.mulu{
  color: #cccccc;
  margin-left: 50px;
  line-height: 50px;
  font-weight: bold;
}
.exd-right button{
  float: right;
  margin-right: 200px;
  background-color: #e58998;
  color: #fff;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  border: #ccc 2px solid;
  position: relative;
  bottom: 80px;
}
.exd-right button:hover{
  background-color: #fff;
  color: #e58998;
  font-weight: 900;
}
.exd-mi-ma{
  width: 90%;
  margin: auto;
  height: 100%;
  background-color: #fff;
}
.xuannum{
  width: 40px;
  height: 40px;
  background-color: rgba(0,0,0,0.1);
  border: #e58998 1px solid;
  //font-size: 40px;
  //line-height: 50px;
}
.xuannum span{
  font-size: 40px;
  position: relative;
  bottom: 8px;
  left: 3px;
  float: left;
  color: #e58998;
  user-select: none;
}
.xuannum{
  float: left;
}
.num{
  width: 80px;
  height: 40px;
  background-color: #fff;
  border: #ccc 1px solid;
  text-align: center;
}
.num span{
  line-height: 40px;
  //text-align: center;
  font-size: 20px;
}
</style>