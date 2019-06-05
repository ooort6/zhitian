<template>
  <div class="see">
    <Collapse v-model="value">
      <Panel v-for="(item,index) in items" v-bind:key="item.id">
        {{item.date}}-{{index}}
        <div slot="content" >
        {{item.fengxiang}}
        </div>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [],
      // items: [{id:1,class:2},{id:2,class:3},{id:3,class:4}],
      items: []
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
          // this.items = res.data.data.forecast;
          console.log(res.data);
        })
        .catch(error => {
          console.log(error);
          console.log(666);

        });
    },
  }
};
</script>

<style>
    .see{
        padding-top: 20%;
    }
</style>
