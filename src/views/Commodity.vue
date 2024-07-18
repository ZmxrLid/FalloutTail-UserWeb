<template>
  <div class="exmain">
    <div class="Exhibition-main-m">
      <div style="width: 100%;">
        <div class="ex-top">
          <div style="padding: 10px 0;margin-bottom: 40px" >
            <button type="primary" @click="sele">搜索</button>
            <input placeholder="请输入" v-model="coName">
          </div>
        </div>
        <div class="ex-top" style="margin-top: 20px;width: 80%">
          <div style="padding: 10px 0;" >
            <span style="margin-left: 100px;font-size: 16px;color: #e58998;font-weight: bold;line-height: 55px">商品分类：</span>
            <a href="#" @click="quanbu">全部</a>
            <a href="#" @click="zhoubian">周边</a>
            <a href="#" @click="wenchuang">文创</a>
            <a href="#" @click="riyongpin">日用品</a>
            <a href="#" @click="shouban">手办</a>
            <a href="#" @click="moxing">模型</a>
            <a href="#" @click="maorongwanji">毛绒玩偶</a>
            <a href="#" @click="fushi">服饰</a>
            <a href="#" @click="hedan">盒蛋</a>
            <a href="#" @click="shuma">3c数码</a>
          </div>
        </div>
      </div>
    </div>
    <div class="Exhibition-main-m">

      <div class="Exhibition-main-main" style="display: block">
        <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
          <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
          所有商品
          <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
        </div>
        <div style="width: 1280px;background-color: #e58998;" class="comain">
          <div v-for="(item,index) in tableData" :key="index" @click="chuan(item.comId)">
            <img :src="require('../../../Dispose/src/main/java/files/'+item.comImg)">
            <span style="white-space:nowrap;color: #000;margin-left: 20px">{{item.comName}}</span>
            <span style="white-space:nowrap;color: #aaa;margin-left: 20px">详情：{{item.comIntroduce}}</span>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px;margin-left: 20px">
              ￥{{item.comPrice}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tableData:[],
      coName:"",
      comName:"",
      comIntroduce:"",
      comInventory:"",
      comPrice:"",
      comImg:"",
      comBrand:"",
      comId:"",
    }
  },
  created() {
    this.sele()
  },
  methods:{
    sele(){
      this.request.get("/commodity"+"?coName="+this.coName).then(res=>{
        this.tableData = res
        console.log(this.tableData)
        this.comName=res.map(v=>v.comName)
        this.comIntroduce=res.map(v=>v.comIntroduce)
        this.comInventory=res.map(v=>v.comInventory)
        this.comPrice=res.map(v=>v.comPrice)
        this.comImg=res.map(v=>v.comImg)
        this.comBrand=res.map(v=>v.comBrand)
        this.comId=res.map(v=>v.comId)
      })
    },
    chuan(conid){
      this.$router.push({path: '/comdetail?index='+conid})
    },
    zhoubian(){
      this.coName = "周边"
      this.sele()
    },
    shuma(){
      this.coName = "数码"
      this.sele()
    },
    shouban(){
      this.coName = "手办"
      this.sele()
    },
    maorongwanji(){
      this.coName = "毛绒玩偶"
      this.sele()
    },
    wenchuang(){
      this.coName = "文创"
      this.sele()
    },
    hedan(){
      this.coName = "盒蛋"
      this.sele()
    },
    riyongpin(){
      this.coName = "日用品"
      this.sele()
    },
    fushi(){
      this.coName = "服饰"
      this.sele()
    },
    moxing(){
      this.coName = "模型"
      this.sele()
    },
    quanbu(){
      this.coName = ""
      this.sele()
    }
  },
  module:function (){
  }
}
</script>

<style>
.exmain{
  background-color: rgba(0,0,0,0.07);
}
.ex-top{
  width: 1600px;
  height: 75px;
  background-color: #fff;
  border-radius: 20px;
  margin: auto;
}
.Et-place ol{
  color: coral;
}
.Et-place li,ol{
  float: left;
  font-size: 24px;
  margin-right: 20px;
  margin-top: 0px;
  list-style: none;
  font-weight: 550;
}
.Et-place li:hover{
  color: #e58998;
}
.Exhibition-main-m{
  width: 100%;
  display: inline-block;
  /* background: beige; */
  margin-top: 15px;
  /* display: none; */
}
.Exhibition-main-main{
  width: 1440px;
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  //background-color: aqua;
}
.Exhibition-main div,img{
  border-radius: 10px;
}
.Exhibition-main-main div,img{
  border-radius: 10px;
}
.ex-top button{
  float: right;
  height: 45px;
  margin-right: 50px;
  width: 80px;
  background-color: #e58998;
  border-radius: 20px;
  margin-top: 5px;
}
.ex-top input{
  float: right;
  outline: none;
  height: 40px;
  width: 200px;
  margin-bottom: 20px;
  text-indent: 10px;
  border: 1px solid #ccc;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  margin-top: 5px;
  /* 增加磨砂质感 */
  backdrop-filter: blur(10px);
}
.ex-top input:focus {
  /* 光标颜色 */
  color: #000;

}
.comain{
  width: 1160px;
  margin: auto;
}
.comain>div{
  width: 270px;
  height: 357px;
  margin: 0 0 20px 20px;
  float: left;
  background-color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ex-top a{
  font-weight: lighter;
  color: #bbb;
  margin: 20px;
  text-decoration: none;
}
.ex-top a:hover{
  color: #e58998;
  font-weight: bold;
}
</style>