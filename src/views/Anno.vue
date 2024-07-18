<template>
  <div>
    <div style="width: 100%;height: 100px;line-height: 100px;font-size: 37px;color: #e58998;font-weight: bold;text-align: center">
      <i class="el-icon-partly-cloudy" style="margin-right: 10px"></i>
      泛酴公告栏
      <i class="el-icon-partly-cloudy" style="margin-left: 10px"></i>
    </div>
    <div class="announcement--main">
      <div v-for="(item,index) in tableData" :key="index">
        <h3>{{item.annoTitle}}</h3>
        <p>{{item.annoIntroduce}}</p>
        <span>{{item.annoDate}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Anno",
  data(){
    return{
      annoName:'',
      tableData:[],
      annoIntroduce:[],
      annoTitle:[],
      annoDate:[]
    }
  },
  created() {
    this.sele()
  },
  methods: {
    sele() {
      this.request.get("/anno" + "?annoName=" + this.annoName).then(res => {
        this.tableData = res
        console.log(this.tableData)
        this.annoDate = res.map(v => v.annoDate)
        this.annoIntroduce = res.map(v => v.annoIntroduce)
        this.annoTitle = res.map(v => v.annoTitle)
      })
    }
  }
}
</script>

<style>
.announcement--main{
  width: 100%;
  display: inline-block;
  text-align: center;
  /* background-color: rgba(230, 203, 203, 0.5); */
}
.announcement--main>div>h3{

}
.announcement--main div{
  width: 1400px;
  border-radius: 20px;
  display: inline-block;
  font-size: 20px;
  padding: 20px;
  margin: 50px;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.1);
}
.announcement--main span{
  float: right;
}
</style>