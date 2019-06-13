<template>
  <div class="see">
    <Collapse v-model="value">
      <Panel v-for="(item,index) in showList" v-bind:key="item.id">
        {{item.date}}-{{index}}
        <div slot="content" >
        {{item.fengxiang}}
        </div>
      </Panel>
      <Page :total='dataCount' :page-size="pageSize" show-total @on-change="changepage" show-elevator></Page>
    </Collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      // items: [{id:1,class:2},{id:2,class:3},{id:3,class:4}],
      items: [],
      dataCount:0,
      pageSize:2,
      showList:[],
      totalProblemList:[]
    };
  },
  created() {
    // let aa=[{id:1,class:2},{id:2,class:3},{id:3,class:4}];
    // this.items=aa;
    this.action();
  },
  mounted() {
   
  },
  methods: {
    action() {
      const api =
      // "/user/controlManager/bsVenue/getVenueList.do";

      "user/weatherApi?city=%E6%88%90%E9%83%BD";
      this.$axios
        .post(api)
        .then(res => {
          this.totalProblemList=res.data.data.forecast;
          this.dataCount = this.totalProblemList.length;
          if(this.dataCount<this.pageSize){
            this.showList=this.totalProblemList;

          }else{
            this.showList=this.totalProblemList.slice(0,this.pageSize)
          }
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
          console.log(666);

        });
    },
       changepage(index){
        var _start=(index-1)*this.pageSize;
        var _end=index*this.pageSize;
        this.showList=this.totalProblemList.slice(_start,_end)
      }
  }
};
</script>

<style>
    .see{
        /* height: 500px; */
        padding-top: 10%;
    }
</style>
