<template>
    <div class="formDemo">
      <Row >
        <i-col class="i-col" span="5" offset="3">col-8</i-col>
        <i-col class="i-col" span="5">col-8</i-col>
        <i-col class="i-col" span="5">col-8</i-col>
    </Row>
    </div>
</template>

<script>
export default {
    name:'formDemo'
}
</script>

<style lang="scss" scoped>
    .formDemo{
        // position: absolute;
        padding-top: 5%;
        width: 100%;
        height: 100%;
        // background: red;
        .i-col{
            margin-right: 5%;
            background: red;
            width: 254px;
            height: 54px;
        }
    }

</style>

