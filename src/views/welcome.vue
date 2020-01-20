<template>
    <div>
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Doctors</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Patient</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Nurse</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Pharmacist</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Laboratorist</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Payment</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Medicine</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Operation Report</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Birth Report</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex md3>
                    <v-card dark color="blue-grey darken-2" class="white--text">
                        <v-card-text style="padding:40px 0px 40px 0px" class="px-0">Death Report</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
            <div id="chartdiv" style="width:100%; height:50%" >

            </div>
        </v-container>

    </div>
</template>

<script>
    export default {
        created () {
    AmCharts.makeChart("chartdiv",
      {
        "type": "serial",
        "categoryField": "type",
        "chartCursor": {},
        "graphs": [
          {
            "type": "column",
            "title": "Pizza types",
            "valueField": "sold",
            "fillAlphas": 0.8
          }
        ],

        "dataProvider": [
          { "type": "Margherita", "sold": 120 },
          { "type": "Funghi", "sold": 82 },
          { "type": "Capricciosa", "sold": 78 },
          { "type": "Quattro Stagioni", "sold": 71 }
        ]
      }
    );
  }
        
    }
</script>

<style scoped>

</style>