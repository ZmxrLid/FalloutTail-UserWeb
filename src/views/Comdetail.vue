<template>
  <div>
    <div class="comdmain">
      <div class="comd-main">
        <img :src="require('../../../Dispose/src/main/java/files/'+this.tableData[0].comImg)">
        <div>
          <h2 style="font-size: 30px;color: #e58998">{{this.tableData[0].comName}}</h2>
          <span class="mulu" style="color: #e58998">详情：</span><span>{{this.tableData[0].comIntroduce}}</span>
          <br>
          <span class="mulu" style="color: #e58998">品牌：</span><span>{{this.tableData[0].comBrand}}</span>
          <br>
          <span class="mulu" style="color: #e58998">库存：</span><span>{{this.tableData[0].comInventory}}</span>
          <br><br>
          <div>
            <div class="xuannum" @click="jian"><span><</span></div>
            <div style="float: left" class="num"><span>{{Num}}</span></div>
            <div class="xuannum" @click="jia"><span>></span></div>
          </div>
          <br>
          <br>
          <br>
          <span style="font-size: 36px;overflow: hidden;color: #e58998;line-height: 70px;">
              ￥{{this.tableData[0].comPrice}}
          </span>
          <button style="margin-right: 100px" @click="orders">立即购买</button>
          <button style="background-color: #ccc" @click="list">加入购物车</button>
        </div>
      </div>
    </div>
    <el-dialog title="请选择地址" :visible.sync="dialogFormVisible" width="30%">
      <el-form label-width="80px" size="big">
        <div v-for="(item,index) in placeAdd" :key="index">
          <input type="radio" name="place" :value="item" @change="getR">{{item}}
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="zhifutanchuang">确 定</el-button>
      </div>
    </el-dialog>
    <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
      <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
      商品详情
      <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
    </div>
    <div class="exd-minor">
      <div class="exd-mi-ma">
        <div style="display: inline">
          <img style="width: 100%;" :src="require('../../../Dispose/src/main/java/files/'+this.tableData[0].comDetailImg)">
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
  name: "Comdetail",
  data(){
    return{
      tableData:[],
      dialogVisible:false,
      coName:"",
      comName:"",
      comIntroduce:"",
      comInventory:"",
      comPrice:"",
      comImg:"",
      comBrand:"",
      comId:"",
      commId : this.$route.query.index,
      Num:1,
      listform:{},
      ordersform:{},
      user:{},
      dialogFormVisible:false,
      dztableData:[],
      placeAdd:"",
      userxi:{},
      orderPlace:""
    }
  },
  created() {
    this.sele()
    this.dzcha()
  },
  methods:{
    zhifutanchuang(){
      this.dialogFormVisible = false
      this.dialogVisible=true;
    },
    zhifuchenggong(){
      this.zhenxiugai()
      this.dialogVisible = false
    },
    sele(){
      this.request.get("/commodity/allbyid"+"?comId="+this.commId).then(res=>{
        this.tableData = res
        console.log(this.tableData[0].comId)
      })
    },
    jia(){
      if (this.Num==this.tableData[0].comInventory){
        this.$notify({
          title: '抱歉',
          message: '库存不足啦',
          type: 'success'
        });
      }else {
        this.Num = this.Num+1
      }
    },
    jian(){
      if (this.Num==1){
        this.Num = 1
      }else{
        this.Num = this.Num-1
      }
    },
    list(){
      if (localStorage.getItem("user")){
        this.$confirm('您确定要添加到购物车吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.user=JSON.parse(localStorage.getItem("user"))
          this.listform.listUserId=this.user.userId;
          this.listform.listCommId=this.tableData[0].comName;
          this.listform.listNum=this.Num;
          this.listform.listPrice=this.tableData[0].comPrice;
          console.log(this.listform.listCommId)
          this.request.get("/listforcom/getid?listCommId="+this.listform.listCommId+"&listUserId="+this.listform.listUserId).then(res=>{
            if (res.length==0){
              this.request.post("/listforcom",this.listform).then(res=>{
                if (res){
                  this.$notify({
                    title: '成功',
                    message: '您已成功添加',
                    type: 'success'
                  });
                }else{
                  this.$notify.error({
                    title: '错误',
                    message: '添加失败'
                  });
                }
              })
            }else{
              // this.listform.listId = res.list
              console.log(res[0].listId)
              this.listform.listId = res[0].listId
              this.listform.listNum= res[0].listNum+this.listform.listNum;
              console.log(this.listform)
              this.request.post("/listforcom",this.listform).then(res=>{
                if (res){
                  this.$notify({
                    title: '成功',
                    message: '您已成功添加',
                    type: 'success'
                  });
                }else{
                  this.$notify.error({
                    title: '错误',
                    message: '添加失败'
                  });
                }
              })
              console.log("有")
            }
          })
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
    },
    getR(val){
      console.log(val.target.value)
      this.orderPlace = val.target.value
    },
    zhenxiugai(){
      console.log(this.orderPlace)
      if (!this.orderPlace==""){
        this.user=JSON.parse(localStorage.getItem("user"))
        this.ordersform.ordersUserId=this.user.userId;
        this.ordersform.ordersComId=this.tableData[0].comName;
        this.ordersform.ordersNum=this.Num;
        this.ordersform.ordersPrice=this.tableData[0].comPrice;
        this.ordersform.ordersState="未发货";
        this.ordersform.ordersPlace=this.orderPlace;
        console.log(this.ordersform)
        this.request.post("/orders",this.ordersform).then(res=>{
          if (res){
            this.tableData[0].comInventory = this.tableData[0].comInventory-this.Num
            console.log(this.tableData[0])
            this.request.post("/commodity",this.tableData[0]).then(res=>{
              if (res){
                console.log("yes")
              }
            })
            this.$notify({
              title: '成功',
              message: '您已成功购买',
              type: 'success'
            });
            this.dialogFormVisible=false
          }else{
            this.$notify.error({
              title: '错误',
              message: '购买失败'
            });
          }
        })
      }
    },
    orders(){
      if (localStorage.getItem("user")){
        this.$confirm('您确定要购买,并支付吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (this.dztableData.length==0){
            this.$message({
              type: 'info',
              message: '暂无地址'
            });
          }else{
            this.dialogFormVisible=true
          }
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
    },
    dzcha(){
      this.userxi=JSON.parse(localStorage.getItem("user"))
      this.request.get("/place?placeUserId="+this.userxi.userId).then(res=>{
        this.dztableData = res
        this.placeAdd=res.map(v=>v.placeAdd)
        console.log(this.placeAdd)
      })
    },
  }
}
</script>

<style>
.comdmain{
  width: 80%;
  margin: auto;
  height: 450px;
  margin-top: 70px;
  background-color: rgba(0,0,0,0.1);
  border-radius: 50px;
  padding: 25px 50px;
}
.exd-minor{
  width: 80%;
  padding: 30px;
  //height: 190px;
  margin: 20px auto;
  background-color: rgba(0,0,0,0.1);
  border-radius: 50px;
}
.comd-main{
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 50px;
}
.comd-main img{
  width: 350px;
  margin: 50px 40px 0;
  float: left;
}
.comd-main>div{
  width: 70%;
  height: 100%;
  float: right;
  //background-color: rgba(0,0,0,0.1);
}
.comd-main>div>span{
  font-size: 20px;
  font-weight: bold;
  color: #bbb;
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
.mulu{
  color: #e58998;
  line-height: 50px;
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
.comd-main button{
  float: right;
  margin-right: 20px;
  background-color: #e58998;
  color: #fff;
  border-radius: 10px;
  width: 200px;
  height: 50px;
  border: #ccc 2px solid;
}
.comd-main button:hover{
  background-color: #fff;
  color: #e58998;
  font-weight: 900;
}
</style>