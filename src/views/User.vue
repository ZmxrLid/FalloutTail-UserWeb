<template>
  <div class="usermain">
    <div id="log-tans" class="log-tan">
      <div>
        <h2>您还没有登录</h2>
        <a href="/login">确定</a>
      </div>
    </div>
    <div class="user-main">
      <div class="user-main-l">
        <button @click="changge(0)">我的信息</button>
        <br>
        <button @click="changge(1)">购物车</button>
        <br>
        <button @click="changge(2)">我的订单</button>
        <br>
        <button @click="changge(3)">我的展会</button>
        <br>
        <button @click="changge(4)">我的地址</button>
      </div>
      <div class="user-main-r">
        <div class="userxinxi" style="height: 600px;overflow-y: auto">
          <span class="mulu">昵称：</span><span class="mulu-main">{{userxi.userName}}</span><br>
          <span class="mulu">性别：</span><span class="mulu-main">{{userxi.userAge}}</span><br>
          <span class="mulu">性别：</span><span class="mulu-main">{{userxi.userSex}}</span><br>
          <span class="mulu">电话：</span><span class="mulu-main">{{userxi.userTel}}</span><br>
          <span class="mulu">签名：</span><span class="mulu-main">{{userxi.userIntroduce}}</span><br>
          <span class="mulu">创建时间：</span><span class="mulu-main">{{userxi.userDate}}</span><br>
          <button @click="rem">退出登录</button>
          <button  @click="xiugai()">修改信息</button>
        </div>
        <div class="gouwuche" style="height: 600px;overflow-y: auto">
          <template>
            <el-table :data="this.gtableData" style="width: 100%" @selection-change="handleSelectionChange">
              <el-table-column
                  type="selection"
                  width="55">
              </el-table-column>
              <el-table-column prop="listCommId" label="商品名">
              </el-table-column>
              <el-table-column prop="listNum" label="商品数量" width="150">
              </el-table-column>
              <el-table-column prop="listPrice" label="商品价格" width="150">
              </el-table-column>
              <el-table-column width="150px">
                <template slot-scope="scope">
                  <el-button style="background-color: darkorange" type="danger" @click="listdele(scope.row.listId)">删除<i class="el-icon-remove-outline"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
          <div style="position: relative;right: 50px;bottom: -40px">
            <button @click="yijian">一键结算</button>
            <span style="float: right;margin-right: 40px;font-size: 30px;color: #e58998;font-weight: bold">{{zongjia}}￥</span>
          </div>
        </div>
        <div class="diingdan" style="height: 600px;overflow-y: auto">
          <template>
            <el-table :data="this.dtableData" style="width: 100%">
              <el-table-column prop="ordersComId" label="商品名" width="300">
              </el-table-column>
              <el-table-column prop="ordersNum" label="商品数量" width="80">
              </el-table-column>
              <el-table-column prop="ordersPrice" label="商品价格">
              </el-table-column>
              <el-table-column prop="ordersState" label="订单状态" width="100">
              </el-table-column>
              <el-table-column prop="ordersDate" label="下单时间" width="160">
              </el-table-column>
              <el-table-column prop="ordersPlace" label="收货地址" width="200">
              </el-table-column>
              <el-table-column>
                <template slot-scope="scope">
                  <el-button type="danger" @click="querenshouhuo(scope.row)">确认收货</el-button>
                </template>
              </el-table-column>
              <el-table-column width="150px">
                <template slot-scope="scope">
                  <el-button style="background-color: darkorange" type="danger" @click="dingdanshanchu(scope.row.ordersId)">删除<i class="el-icon-remove-outline"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="zhanhui" style="height: 600px;overflow-y: auto">
          <template>
            <el-table :data="this.ztableData" style="width: 100%">
              <el-table-column prop="exorderExId" label="展会名">
              </el-table-column>
              <el-table-column prop="exorderDate" label="展会时间">
              </el-table-column>
              <el-table-column prop="exorderNum" label="购买数量">
              </el-table-column>
              <el-table-column width="150px">
                <template slot-scope="scope">
                  <el-button style="background-color: darkorange" type="danger" @click="listdelezh(scope.row.exorderId)">删除<i class="el-icon-remove-outline"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
        <div class="dizhi" style="height: 600px;overflow-y: auto">
          <div>
            <el-button class="ml-5" type="success" style="float: right" @click="placeAdd">新增<i class="el-icon-circle-plus-outline"></i></el-button>
          </div>
          <template>
            <el-table :data="this.dztableData" style="width: 100%">
              <el-table-column prop="placeAdd" label="地址">
              </el-table-column>
              <el-table-column width="150px">
                <template slot-scope="scope">
                  <el-button type="danger" @click="userdelzq(scope.row.placeId)">删除<i class="el-icon-remove-outline"></i></el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </div>
      </div>
    </div>
    <el-dialog title="用户信息" :visible.sync="dialogFormVisible" width="30%">
      <el-form label-width="80px" size="big" style="background-color: rgba(0,0,0,0);width: 500px">
        <el-form-item label="ID" style="display: none">
          <el-input v-model="form.userId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.userAge" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.userSex" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.userTel" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.userPassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="签名">
          <el-input v-model="form.userIntroduce" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="zhenxiugai">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="用户信息" :visible.sync="dizhiadd" width="30%">
      <el-form label-width="80px" size="big" style="background-color: rgba(0,0,0,0);width: 500px">
        <el-form-item label="新增地址">
          <el-input v-model="dzform.placeAdd" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dizhiadd = false">取 消</el-button>
        <el-button type="primary" @click="qddz">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="请选择地址" :visible.sync="dizhidiv" width="30%">
      <el-form label-width="80px" size="big">
        <div v-for="(item,index) in dztableData" :key="index">
          <input type="radio" name="place" :value="item.placeAdd" @change="getR">{{item.placeAdd}}
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dizhidiv = false">取 消</el-button>
        <el-button type="primary" @click="zhifutanchuang">确 定</el-button>
      </div>
    </el-dialog>
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
  name:"User",
  data(){
    return{
      dialogVisible:false,
      userxi: {},
      gtableData:[],
      dtableData:[],
      ztableData:[],
      dztableData:[],
      form:{},
      dialogFormVisible:false,
      dzform:{},
      dizhiadd:false,
      zongjia:0,
      listform:{},
      arrylistid:{},
      listtoorders:{},
      dizhidiv:false,
      ordersPlace:"",
      dznum:0,
      linshi:{}
    }
  },
  created() {
    this.sele();
    this.dizhi()
  },
  mounted() {
    this.sele();
    this.dizhi()
  },
  methods:{
    zhifutanchuang(){
      this.dizhidiv = false
      this.dialogVisible=true;
    },
    listdelezh(id){
      console.log(id)
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request.delete("/exorder/"+id).then(res =>{
          if (res){
            this.zhanhui()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }else {
            this.$message({
              type:"error",
              message:"删除失败"
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    dingdanshanchu(id){
      console.log(id)
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request.delete("/orders/"+id).then(res =>{
          if (res){
            this.dingdan()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }else {
            this.$message({
              type:"error",
              message:"删除失败"
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    zhifuchenggong(){
      this.dizhixuanze()
      this.dialogVisible=false;
    },
    // handleClose(done){
    //   this.dizhixuanze()
    // },
    dizhixuanze(){
      if (!this.ordersPlace==""){
        let bo = true
        console.log(this.ordersPlace)
        let kucunname = this.listform.map(v=>v.listCommId)
        let kucunnum = this.listform.map(v=>v.listNum)
        console.log(kucunname)
        console.log(kucunnum)
        for (let i=0;i<kucunname.length;i++){
          this.request.get("/commodity/listku?kuName="+kucunname[i]).then(res=>{
            let linshi = res
            console.log(kucunnum[i])
            linshi[0].comInventory=linshi[0].comInventory-kucunnum[i]
            if (linshi[0].comInventory>=0){
              this.request.post("/commodity",linshi[0])
            }else {
              bo = false
            }
          })
        }
        if (bo){
          //批量插入
          this.request.post("/orders/allin?ordersPlace="+this.ordersPlace,this.listform).then(res=>{
            if (res){
              let arrlistid = this.listform.map(v=>v.listId)
              //批量插入成功后，批量删除
              this.request.post("/listforcom/deleall",arrlistid).then(res=>{
                if (res){
                  this.$notify({
                    title: '成功',
                    message: '您已成功购买',
                    type: 'success'
                  });
                  this.gouwuche()
                }
              })
            }else{
              this.$notify.error({
                title: '错误',
                message: '购买失败'
              });
            }
          })
        }else {
          this.$notify.error({
            title: '错误',
            message: '库存不足'
          });
        }
      }
    },
    sele(){
        if (!localStorage.getItem("user")){
          document.querySelector('#log-tans').style.display="block"
        }else {
          this.userxi=JSON.parse(localStorage.getItem("user"))
          this.gouwuche();
        }
    },
    rem(){
      console.log("a")
      localStorage.removeItem("user")
      this.$message.success("退出成功")
      this.$router.push("/home")
    },
    gouwuche(){
      this.request.get("/listforcom?listUserId="+this.userxi.userId).then(res=>{
        console.log(res)
        this.gtableData = res
      })
    },
    dingdan(){
      this.request.get("/orders?ordersUserId="+this.userxi.userId).then(res=>{
        this.dtableData = res
      })
    },
    zhanhui(){
      this.request.get("/exorder?exorderUserId="+this.userxi.userId).then(res=>{
        this.ztableData = res
      })
    },
    dizhi(){
      if (localStorage.getItem("user")){
        this.request.get("/place?placeUserId="+this.userxi.userId).then(res=>{
          this.dztableData = res
        })
      }
    },
    xiugai(){
      this.dialogFormVisible = true
      this.form = this.userxi
      console.log(this.form)
    },
    changge(kbn){
      switch (kbn) {
        case 0:
          document.querySelector('.userxinxi').style.display="block"
          document.querySelector('.gouwuche').style.display="none"
          document.querySelector('.diingdan').style.display="none"
          document.querySelector('.zhanhui').style.display="none"
          document.querySelector('.dizhi').style.display="none"
              break;
        case 1:
          document.querySelector('.userxinxi').style.display="none"
          document.querySelector('.gouwuche').style.display="block"
          document.querySelector('.diingdan').style.display="none"
          document.querySelector('.zhanhui').style.display="none"
          document.querySelector('.dizhi').style.display="none"
          this.gouwuche();
          break;
        case 2:
          document.querySelector('.userxinxi').style.display="none"
          document.querySelector('.gouwuche').style.display="none"
          document.querySelector('.diingdan').style.display="block"
          document.querySelector('.zhanhui').style.display="none"
          document.querySelector('.dizhi').style.display="none"
            this.dingdan()
          break;
        case 3:
          document.querySelector('.userxinxi').style.display="none"
          document.querySelector('.gouwuche').style.display="none"
          document.querySelector('.diingdan').style.display="none"
          document.querySelector('.zhanhui').style.display="block"
          document.querySelector('.dizhi').style.display="none"
            this.zhanhui()
          break;
        case 4:
          document.querySelector('.userxinxi').style.display="none"
          document.querySelector('.gouwuche').style.display="none"
          document.querySelector('.diingdan').style.display="none"
          document.querySelector('.zhanhui').style.display="none"
          document.querySelector('.dizhi').style.display="block"
            this.dizhi()
          break;
      }
    },
    zhenxiugai(){
      this.request.post('/user',this.form).then(res => {
        if(res){
          this.$message.success("保存成功,请重新登录")
          setTimeout(()=>{
            this.$router.replace("/login")
          },1500)
          this.dialogFormVisible = false
          this.sele()
        }else{
          this.$message.error("保存失败")
        }
      })
    },
    userdelzq(id) {
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(id)
        this.request.delete("/place/"+id).then(res =>{
          if (res){
            this.dizhi()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }else {
            this.$message({
              type:"error",
              message:"删除失败"
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    placeAdd(){
      this.dizhiadd  = true;
      this.dzform = {};
      this.dzform.placeUserId = this.userxi.userId
    },
    qddz(){
      console.log(this.dzform)
      this.request.post('/place',this.dzform).then(res => {
        if(res){
          this.$message.success("保存成功")
          this.dizhiadd = false
          this.dizhi()
        }else{
          this.$message.error("保存失败")
        }
      })
    },
    listdele(id){
      console.log(id)
      this.$confirm('此操作将永久删除该信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.request.delete("/listforcom/"+id).then(res =>{
          if (res){
            this.gouwuche()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }else {
            this.$message({
              type:"error",
              message:"删除失败"
            })
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSelectionChange(val){
      this.listform=val
      console.log(this.listform)
      this.zongjia=0
      for(let i = 0;i<val.length;i++){
        this.zongjia+=val[i].listNum*val[i].listPrice
      }
    },
    yijian(){
      if (this.zongjia==0){
        this.$message({
          type: 'info',
          message: '您没有选中商品'
        });
      }else{
        this.$confirm('您确定支付'+this.zongjia+'元来购买吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(this.dztableData.length)
          if (this.dztableData.length>0){
            this.dizhidiv=true
          }else{
            this.$message({
              type: 'info',
              message: '暂无地址'
            });
          }
          // this.request.post("/orders/allin",this.listform).then(res=>{
          //   if (res){
          //     let arrlistid = this.listform.map(v=>v.listId)
          //     console.log(arrlistid)
          //     this.request.post("/listforcom/deleall",arrlistid).then(res=>{
          //       if (res){
          //         this.$notify({
          //           title: '成功',
          //           message: '您已成功购买',
          //           type: 'success'
          //         });
          //         this.gouwuche()
          //       }
          //     })
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
            message: '已取消购买'
          });
        });
      }
    },
    getR(val){
      console.log(typeof val.target.value)
      this.ordersPlace = val.target.value
    },
    querenshouhuo(row){
      console.log(row)
      if (row.ordersState=="已收货"){

      }else if(row.ordersState=="未发货"){

      }else {
        this.$confirm('确定要收货嘛?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log("我要收获")
          row.ordersState="已收货"
          this.request.post('/orders',row).then(res => {
            if(res){
              this.$message.success("收货成功")
              this.dingdan()
            }else{
              this.$message.error("收货失败")
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      }
    }
  }
}
</script>

<style>
.log-tan{
  position: fixed;
  top: 140px;
  width: 80%;
  left: 10%;
  height: 700px;
  background-color: #CCC;
  border-radius: 20px;
  display: none;
}
.log-tan>div{
  margin: 50px auto;
  background-color: #fff;
  height: 600px;
  width: 90%;
  border-radius: 20px;
}
.log-tan>div>h2{
  line-height: 100px;
  color: #e58998;
  padding: 100px;
  font-size: 50px;
}
.log-tan>div>a{
  position: absolute;
  right: 150px;
  bottom: 80px;
  text-decoration: none;
  color: #e58998;
  font-size: 40px;
}
.log-tan>div>a:hover{
  /* margin-left: -4px; */
  font-size: 40px;
  font-weight: 600;
}
.user-main{
  width: 80%;
  height: 700px;
  margin: 40px auto;
  background-color: rgba(0,0,0,0.08);
  border-radius: 20px;
  padding: 20px;
}
.user-main-l{
  width: 15%;
  height: 660px;
  margin: 20px;
  border-radius: 20px;
  background-color: #fff;
  float: left;
}
.user-main-r{
  width: 79%;
  height: 660px;
  margin: 20px;
  float: right;
  border-radius: 20px;
  background-color: #fff;
}
.user-main-l button{
  border: #e58998 1px;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 24px;
  line-height: 90px;
  color: #e58998;
  font-weight: bold;
  margin: 20px 0;
  //border-radius: 20px;

}
.mulu{
  line-height: 70px;
  font-size: 24px;
  color: #e58998;
  font-weight: bold;
  margin: 10px 10px;
  margin-left: 50px;
}
.mulu-main{
  line-height: 70px;
  font-size: 24px;
  font-weight: bold;
  color: #ccc;
}
.userxinxi button{
  width: 80px;
  height: 50px;
  margin: 20px;
  color: #e58998;
  font-weight: bold;
  font-size: 16px;
  border: #e58998 1px;
  background-color: rgba(0,0,0,0.08);
  border-radius: 10px;
  float: right;
}
.userxinxi{
   padding: 50px;
 }
.gouwuche{
  padding: 20px;
  display: none;
}
.diingdan{
  padding: 20px;
  display: none;
}
.zhanhui{
  padding: 20px;
  display: none;
}
.dizhi{
  padding: 20px;
  display: none;
}
.gouwuche button:hover{
  background-color: #eeeeee;
  color: #e58998;
}
.gouwuche button{
  float: right;
  font-size: 16px;
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  background-color: #e58998
}
</style>