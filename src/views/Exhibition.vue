<template>
  <div class="exmain">
    <div class="Exhibition-main-m">
      <div style="width: 100%;height: 75px;">
        <div class="ex-top">
          <div style="padding: 10px 0;margin-bottom: 40px" >
            <button type="primary" @click="seles">搜索</button>
            <input placeholder="请输入" v-model="sName">
          </div>
        </div>
      </div>
      <div class="Exhibition-main">
        <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
          <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
          推荐展会
          <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
        </div>
<!--        款470高230-->
        <!-- 宽350 高210 间距10 -->
        <div class="Emain-l" @click="chuan(30005)">
          <img src="../assets/上海·遇见新海诚--帝玖「这次一定」室内乐ACG音乐会.png">
          <div>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>凯迪拉克·上海音乐厅
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.03.17 14:00-03.17 16:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥180
            </span>
          </div>
        </div>
        <div class="Emain-r" @click="chuan(30006)">
          <img src="../assets/北京·IDO动漫游戏嘉年华45th.png">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              北京·IDO动漫游戏嘉年华45th
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>北京亦创国际会展中心
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.05.01 09:30-05.03 17:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥85
            </span>
          </div>
        </div>
        <div class="Emain-r" @click="chuan(30003)">
          <img src="../assets/北京Aw动漫游戏嘉年华7th来自异世界的召唤.png">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              北京·Aw动漫游戏嘉年华7th- 来自异世界的召唤
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>北京首钢会展中心
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.03.16 10:00-03.17 17:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥78
            </span>
          </div>
        </div>
        <div class="Emain-r" @click="chuan(30007)">
          <img src="../assets/大连·SSR动漫游戏展.png">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              大连·SSR动漫游戏展
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>东港商务区国际会议中心
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.03.16 10:00-03.17 17:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥58
            </span>
          </div>
        </div>
        <div class="Emain-l" style="float: right" @click="chuan(30004)">
          <img src="../assets/北京thebONEGOJO超次元嘉年华02.png">
          <div>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>北投购物公园
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.03.16 10:00-03.17 17:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥70
            </span>
          </div>
        </div>
        <div class="Emain-r" @click="chuan(30008)">
          <img src="../assets/大连·第二届运动番only-开学季.png">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              大连·第二届运动番only-开学季
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>大世界运动工场
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.03.30 10:00-03.30 17:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥68
            </span>
          </div>
        </div>
        <div class="Emain-r" @click="chuan(30009)">
          <img src="../assets/瓦房店·情愫二次元线下聚会2.png">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              瓦房店·情愫二次元线下聚会
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>湘裕宴会中心
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.05.01 09:00-05.01 16:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥25
            </span>
          </div>
        </div>
        <div class="Emain-r" @click="chuan(30000)">
          <img src="../assets/大连·首届Unicorn ACG动漫嘉年华.png">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              大连·首届Unicorn ACG动漫嘉年华
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>大连世界博览广场
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>2024.03.16 09:00-03.17 17:00
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥60
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="Exhibition-main-m">

      <div class="Exhibition-main-main" style="display: block">
        <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
          <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
          所有展会
          <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
        </div>
        <div class="Emain-r" v-for="(item,index) in tableData" :key="index" @click="chuan(item.exId)">
          <img :src="require('../../../Dispose/src/main/java/files/'+item.exImg)">
          <div class="tit">
            <span style="font-size: 16px;overflow: hidden;color: rgba(0,0,0,0.8);line-height: 50px">
              {{item.exName}}
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-position" style="margin-right: 5px"></i>{{item.exPlace}}
            </span>
            <br>
            <span style="font-size: 14px;overflow: hidden;color: rgba(0,0,0,0.5);line-height: 30px">
              <i class="el-icon-date" style="margin-right: 5px"></i>{{item.exDate}}
            </span>
            <br>
            <span style="font-size: 24px;overflow: hidden;color: #e58998;line-height: 50px">
              ￥{{item.exPrice}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import "../js/Exhibition"
import "../js/jquery-3.3.1.min"
export default {
  name: "Exhibition",
  data(){
    return{
      tableData:[],
      sName:"",
      exName:"",
      exId:"",
      exPrice:"",
      exDate:"",
      exPlace:"",
      exImg:""
    }
  },
  created() {
    this.sele()
  },
  methods:{
    sele(){
      this.request.get("/exhibition"+"?exName="+this.sName).then(res=>{
        this.tableData = res
        console.log(this.tableData)
        this.exName=res.map(v=>v.exName)
        this.exId=res.map(v=>v.exId)
        this.exPrice=res.map(v=>v.exPrice)
        this.exDate=res.map(v=>v.exDate)
        this.exPlace=res.map(v=>v.exPlace)
        this.exImg=res.map(v=>v.exImg)
        console.log(this.exImg)
      })
    },
    seles(){
      if (this.sName==""){
        document.querySelector(".Exhibition-main").style.display="block"
        console.log("kong")
        this.sele()
      }else{
        console.log("xiaoshi")
        document.querySelector(".Exhibition-main").style.display="none"
        this.sele()
      }
    },
    chuan(id){
      this.$router.push({path: '/exdetail?index='+id})
    }
  }
}
</script>

<style>
.exmain{
  background-color: rgba(0,0,0,0.07);
}
.Emain-title{
  margin: 0 auto;
  width: 1500px;
  height: 110px;
  /* background-color: aqua; */
}
.Et-place{
  width: 80%;
  margin: 0 auto;
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
.Exhibition-main{
  width: 1440px;
  margin: 0 auto;
  display: block;
  margin-top: 20px;
  //background-color: aqua;
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
.Emain-l img{
  width: 470px;
  //height: 344px;
  overflow: hidden;
  border-radius: 10px;
}
.Emain-l{
  width: 470px;
  height: 710px;
  float: left;
  //border-radius: 20px;
  background-color: #fff;
  margin-right: 10px;
  margin-bottom: 10px;
}
.Emain-l>div{
  width: 450px;
  height: 110px;
  //background-color: #e58998;
  padding: 10px;
  padding-top: 0;
}
.Emain-r{
  width: 470px;
  height: 230px;
  float: left;
  background-color: #fff;
  margin-bottom: 10px;
  margin-right: 10px;
}
.Emain-r:hover img{
  width: 170px;
  left: 10px;
  top: -20px;
  box-shadow: #ccc 5px 5px 5px;
}
.Emain-r:hover{
  box-shadow: #ccc 5px 5px 5px;
}
.Emain-l:hover{
  box-shadow: #ccc 5px 5px 5px;
}
.Emain-r img{
  width: 150px;
  position: relative;
  left: 20px;
  top: 20px;
  float: left;
  z-index: 20;
}
.Emain-r .tit{
  width: 280px;
  height: 180px;
  //background-color: #e58998;
  position: relative;
  right: 0;
  top: 30px;
  float: right;
}
.FilterResults{
  width: 100%;
  display: inline-block;
  /* background-color: black; */
}
.FR-main{
  width: 1440px;
  margin: 0 auto;
}
.FR-all{
  width: 350px;
  height: 210px;
  float: left;
  background-color: beige;
  margin-bottom: 10px;
  margin-right: 10px;
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
</style>