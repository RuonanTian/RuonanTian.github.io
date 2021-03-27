//模块ATGC_content
(function(){
    
    //实例化对象
    var myChart = echarts.init(document.querySelector(".pie .chart"));
    //指定配置项和数据
    var option = {
        title: {
            text: 'The AGCT content of TE',
            left: 'center',
            top:'5%'
        },
        toolbox:{
            feature:{
                saveAsImage:{
                    title:"save",
                    pixelRatio:2
                }
            }

        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
        },
        series: [
            {
                type: 'pie',
                radius: '50%',
                data: [
                    {value: 0.0718, name: 'A%'},
                    {value: 0.0204, name: 'G%'},
                    {value: 0.0220, name: 'C%'},
                    {value: 0.0535, name: 'T%'},
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    //把配置项给实例对象
    myChart.setOption(option);
    //让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function() {
        myChart.resize();
      });
})();