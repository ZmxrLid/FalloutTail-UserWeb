<template>
  <div>
    <div id="top-header">
          <div class="top-header-left">
            <img src="../assets/Logo.png" alt="" />
          </div>
          <ul class="top-header-right">
            <li class="top-hr-li">
              <a class="top-hr-a-a" href="#">APP</a>
              <a href="" class="top-hr-a">下载</a>
              <ul>
                <li class="top-hr-a-e">
                  <div class="top-hr-a-s"></div>
                  <img src="../assets/APP-QR.png" alt="" />
                </li>
              </ul>
            </li>
            <li><a class="top-hr-a" href="/user">我的</a></li>
            <li><a class="top-hr-a" href="/message">留言</a></li>
            <li><a class="top-hr-a" href="/anno">公告</a></li>
            <li><a class="top-hr-a" href="/comm">周边</a></li>
            <li><a class="top-hr-a" href="/exh">展会</a></li>
            <li><a class="top-hr-a" href="/home">首页</a></li>
          </ul>
        </div>
  </div>
</template>

<script>
export default {
  name:"Header",
  data(){
    return{
    }
  },
  methods:{
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  background-image: url(../assets/bg-img.png);
}
a{
  text-decoration: none;
}
#top-header{
  width: 100%;
  height: 81px;
  background-color: #fff;
  top: 0;
  //position: fixed;
  z-index: 20;
  border-bottom: #e58998 1px solid;
}
.top-header-left{
  width: 320px;
  height: 80px;
  float: left;
  /* background-color: white; */
}
.top-header-left img{
  height: 100%;
}
.top-header-right{
  height: 80px;
}
.top-header-right>li{
  float: right;
  list-style-type: none;
  line-height: 40px;
  margin: 20px;
}
.top-header-right>li a{
  color: black;
  font-size: 20px;
}
.top-header-right>li:hover .top-hr-a{
  color: #e58998;
  /* margin-left: -4px; */
  font-size: 20px;
  font-weight: 600;
}
.top-header-right>li:hover .top-hr-a-a{
  color: #e58998;
  /* margin-left: -4px; */
  font-size: 20px;
  /* font-weight: 600; */
}
.top-header-right>li li{
  list-style-type: none;
  margin-top: 25px;
  width: 180px;
  height: 214px;
  background-color: white;
  position: absolute;
  background: white;
  box-shadow: 20px 5px 50px #999;
  right: 10px;
  display: none;
}
.top-header-right>li li img{
  width: 180px;
}
.top-hr-li:hover .top-hr-a-e{
  display: block;
}
.top-hr-a-s{
  border-bottom: 15px solid white;
  border-left: 15px solid rgba(0, 0, 0, 0);
  border-right: 15px solid rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 1;
  right: 30px;
  top: -15px;
}
body{
  background-image: url(../assets/bg-img.png);
}
a{
  text-decoration: none;
}
#top-header{
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: #e58998 1px solid;
}
.top-header-left{
  width: 320px;
  height: 80px;
  float: left;
  /* background-color: white; */
}
.top-header-left img{
  height: 100%;
}
.top-header-right{
  height: 80px;
}
.top-header-right>li{
  float: right;
  list-style-type: none;
  line-height: 40px;
  margin: 20px;
}
.top-header-right>li a{
  color: black;
  font-size: 20px;
}
.top-header-right>li:hover .top-hr-a{
  color: #e58998;
  /* margin-left: -4px; */
  font-size: 20px;
  font-weight: 600;
}
.top-header-right>li:hover .top-hr-a-a{
  color: #e58998;
  /* margin-left: -4px; */
  font-size: 20px;
  /* font-weight: 600; */
}
.top-header-right>li li{
  list-style-type: none;
  margin-top: 25px;
  width: 180px;
  height: 214px;
  background-color: white;
  position: absolute;
  background: white;
  box-shadow: 20px 5px 50px #999;
  right: 10px;
  display: none;
}
.top-header-right>li li img{
  width: 180px;
}
.top-hr-li:hover .top-hr-a-e{
  display: block;
}
.top-hr-a-s{
  border-bottom: 15px solid white;
  border-left: 15px solid rgba(0, 0, 0, 0);
  border-right: 15px solid rgba(0, 0, 0, 0);
  position: absolute;
  z-index: 1;
  right: 30px;
  top: -15px;
}
</style>