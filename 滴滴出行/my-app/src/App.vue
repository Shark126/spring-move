<template>
  <div id="app">
    <button @click="showDate">展示数据</button>
  </div>
</template>

<script>
import res from './assets/date'
import deepClone from './untils/index'
export default {
  name: 'App',
  components: {
  },
  methods:{
    showDate(){
      console.log(res);

      // 处理表格数据
      let tabelDatas = []
        let tempData = res.data.options
        tempData.forEach((item)=>{
          let data = deepClone(item.children)
          data.push(item.data_statictis)
          tabelDatas.push({
            label: item.label,
            children: data
          })
        })
        //得到处理好的初始数据，接下来给p0～p3的数据 加前缀
        const lastDatas = tabelDatas.map(item =>{
          return item.children.map(child =>{
            return child
          })
        })
        console.log(tabelDatas);
        let tables = []
        lastDatas.forEach(item =>{
          for(let childCase of item){
            let obj = {}
            let dic = {
              'row': 0,
              'business': item.label,
              'childBusiness': childCase.label,
              'mark': false
            }
            console.log(dic);
            for(let attr in childCase){
              if(attr !== 'value' && attr !== 'label'){
                for(let key in childCase[attr]){
                  let KeyName = `${attr}_${key}`
                  this.$set(obj,KeyName,childCase[attr][key])
                }
              }
            }
            obj = {...obj,...dic}
            tables.push(obj)
          }
        })
        console.log(tables);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
