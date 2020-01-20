<template>
    <div>
        <div>{{this.label}}</div>
        <canvas id="lineChart" width="400" height="400"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js'
    export default {
        props:{
            label:{
                type:String,
                required:true, 
            },
            labels:{
                type:Array,
                required:true,
            },
            data:{
                type:Array,
                required:true,
            }
        },
        computed:{
           
        },
        methods:{
            showChart(){
                var ctx = document.getElementById('lineChart').getContext('2d');
                var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: this.labels,
                    datasets: [{
                        label: this.label,
                        data: this.data,
                        backgroundColor: [
                            'rgba(0, 0, 0, 0.1)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
                
            }
        },
        mounted(){
           this.showChart()
        },
        beforeUpdate() {
            this.showChart()
        }
            
        
    }
</script>

