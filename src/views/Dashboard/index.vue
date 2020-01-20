<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <user-dash/>
            <v-layout style="padding-top:50px" wrap row>
                <v-flex md6>
                    <Line-chart :label="_label" :labels="_labels" :data="_count"/>
                </v-flex>
                <v-flex md6>
                    Projects Due Today
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import { apiDomain } from "@/utils/constants";
import UserDash from "./components/UserDash";
export default {
  data() {
    return {
      objData: {},
      label: "",
      labels: [],
      count: []
    };
  },
  components: {
    UserDash
  },
  computed: {
    _label() {
      return this.label;
    },
    _labels() {
      return this.labels;
    },
    _count() {
      return this.count;
    }
  },
  methods: {
    dosomething() {
        alert()
      return this.label = "Projects Bid ";
    }
  },
  mounted() {
    this.objData.url = apiDomain + "admin/project/linechart";
    this.$store.dispatch("getReqData", this.objData).then(res => {
      let obj = res.data;
      obj = obj.filter(project => {
        return project.bid_count > 0;
      });
      this.label ="Projects Bid Ratio"
      this.count = obj.map(project => project.bid_count);
      this.labels = obj.map(project => project.name);
      console.log(this.count, this.labels);
    });
  }
  
};
</script>

<style scoped>
</style>