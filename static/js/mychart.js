// 南丁格尔玫瑰图
    (function () {
   var dom = document.getElementById('Nightingale Chart');
var chart = echarts.init(dom);
 var option = {
  // title: {
  //   text: 'Nightingale Chart',
  //   subtext: 'Fake Data',
  //   left: 'center'
  // },
      color: ['#003366', '#006699', '#4cabce','#6495ED','#4B0082'],


  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  textStyle: {
                fontFamily: 'Arial' // 优化字体
            }
  },
  legend:[ {
    left: 'center',
    top: 'bottom',
        textStyle: {
                color: '#ddd', // 图例文字颜色更浅，以便在深色背景上显示
              fontFamily: 'Arial', // 优化字体

            },
    data: [
           { value: 128, name: '动作' },
        { value: 76, name: '剧情' },
        { value: 49, name: '喜剧' },
        { value: 42, name: '动画' },
        { value: 42, name: '科幻' },
        { value: 40, name: '爱情' },
        { value: 31, name: '其他' },
        { value: 16, name: '奇幻' },
    ]
  },
    {
    left: 'center',
    top: 'top',
        textStyle: {
                color: '#ddd' // 图例文字颜色更浅，以便在深色背景上显示
            },
    data: [
      { value: 231, name: 'China' },
        { value: 154, name: 'America' },
        { value: 20, name: 'Hong Kong, China' },
        { value: 19, name: 'Other' },
    ],
  }],
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Genre Mode',
      type: 'pie',
      radius: [80, 150],
      center: ['25%', '50%'],
      roseType: 'radius',
      itemStyle: {
        borderRadius: 5
      },
      label: {
        show: false
      },
      emphasis: {
        label: {
          show: true
        }
      },
      data: [
        { value: 128, name: '动作' },
        { value: 76, name: '剧情' },
        { value: 49, name: '喜剧' },
        { value: 42, name: '动画' },
        { value: 42, name: '科幻' },
        { value: 40, name: '爱情' },
        { value: 31, name: '其他' },
        { value: 16, name: '奇幻' },



      ]
    },
    {
      name: 'Area Mode',
      type: 'pie',
      radius: [100, 150],
      center: ['75%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 5
      },
      data: [
        { value: 231, name: 'China' },
        { value: 154, name: 'America' },
        { value: 20, name: 'Hong Kong, China' },
        { value: 19, name: 'Other' },

      ]
    }
  ]
};
    chart.setOption(option);
})();

// bar 柱状与折现混合图
(function () {
   var chartDom = document.getElementById('bar');
var myChart = echarts.init(chartDom);
var option;

const colors = ['#003366', '#006699', '#4cabce', '#6495ED', '#4B0082'];
option = {
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    data: ['Average', 'Maximum', 'Count'],
       textStyle: {
                color: '#ddd' // 图例文字颜色更浅，以便在深色背景上显示
            },
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['古装 ','纪录片','魔幻','爱情','动画','喜剧','动作','剧情','科幻','战争','灾难','奇幻','惊悚 ']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Average',
      position: 'right',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
         color: '#777'
        }
      },
      axisLabel: {
        formatter: '{value} 万'
      }
    },
    {
      type: 'value',
      name: 'Maximum',
      position: 'right',
      alignTicks: true,
      offset: 80,
      axisLine: {
        show: true,
        lineStyle: {
         color: '#777'
        }
      },
      axisLabel: {
        formatter: '{value} 万'
      }
    },
    {
      type: 'value',
      name: '数量',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} '
      }
    }
  ],
  series: [
    {
      name: 'Average',
      type: 'bar',
      data: [
        18648, 1592, 34850, 43372, 66319, 117516, 75274, 100841, 77422, 138318,
        92683, 86454, 14573
      ]
    },
    {
      name: 'Maximum',
      type: 'bar',
      yAxisIndex: 1,
      data: [
        18648, 2728, 104549, 164667, 500359, 541330, 567875, 577283, 468150,
        406922, 170339, 243997, 41184
      ]
    },
    {
      name: 'Count',
      type: 'line',
      yAxisIndex: 2,
      data: [1, 2, 10, 40, 42, 49, 128, 76, 42, 7, 3, 16, 8]
    }
  ]
};
option && myChart.setOption(option);

})();

// 年份折线图
(function(){

       var chartDom = document.getElementById('line');
var myChart = echarts.init(chartDom);
var option;

option = {
    // Added a title for better context
    title: {

      subtext: '2008-2023',
      left: '20%',

    },
    // Added tooltip for interaction
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#f7faff'
        }
      }
    },
    // Added legend for series
    legend: {
      data: ['Data Trend'],
      bottom: 0
    },
    // Added toolbox with options for saving image, data view, etc.
    toolbox: {
      feature: {
        saveAsImage: {},
        restore: {},
        dataView: {},
        dataZoom: {
          yAxisIndex: 'none'
        },
        magicType: { type: ['line', 'bar'] }
      },
      right: 10
    },
    // Enhanced XAxis configuration
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023]
    },
    // Enhanced YAxis configuration
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      axisPointer: {
        snap: true
      }
    },
    // Added data zoom for better control
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 100
      },
      {
        start: 0,
        end: 10,
        handleIcon: 'M8,0 L12,0 L12,2 L8,2 L8,0 M12,4 L12,6 L8,6 L8,4 L12,4 M8,8 L12,8 L12,10 L8,10 L8,8 Z',
        handleSize: '80%',
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(208,188,188,0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        }
      }
    ],
    // Added series with more visuals
    series: [
      {
        name: 'Data Trend',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: '#003366'
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgb(108,149,225)'
          }, {
            offset: 1,
            color: '#4B0082'
          }])
        },
        data: [9925,15835,26666,29160,40460,46975,65336,99800,100520,131485,156652,172160,67046,140055,97918,155217]
      }
    ]
  };

option && myChart.setOption(option);

})();


//10大top榜单
(function () {
  var chartDom = document.getElementById('top2');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
color: ['#003366', '#006699', '#4cabce','#6495ED','#4B0082'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        var tar = params[0];
        return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
    },
    grid: {
      left: '5%',
      right: '10%',
      bottom: '5%',
      top: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: [
          '长津湖',
          '战狼2',
          '你好，李焕英',
          '哪吒之魔童降世',
          '流浪地球',
          '满江红',
          '唐人街探案3',
          '复仇者联盟4：终局之战',
          '长津湖之水门桥',
          '流浪地球2'
        ],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 30, // 旋转标签显示
          textStyle: {
            fontSize: 12 // 更改标签字体大小
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value}' // 格式化Y轴标签
        }
      }
    ],
    series: [
      {
        name: '票房',
        type: 'bar',
        barWidth: '60%',
        data: [
          577283, 567875, 541330, 500359, 468150, 454589, 451505, 424922, 406922,
          403027
        ],
        itemStyle: {
          // 柱状图添加渐变色
          normal: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 1, 2,
              [
                { offset: 0, color: '#003366' },
                { offset: 0.5, color: '#006699' },
                { offset: 1, color: '#6495ED' }
              ]
            ),
            shadowBlur: 4,
            shadowColor: 'rgb(108,149,225)'
          }
        },
        label: {
          show: true,
          position: 'top',
          formatter: '{c}'
        }
      }
    ],
    dataZoom: [
      {
        type: 'slider', // 数据缩放滑块
        start: 0,
        end: 100
      }
    ],
    animationEasing: 'elasticOut', // 初始动画弹出效果
    animationDelayUpdate: function (idx) {
      // 每个柱子的动画延迟
      return idx * 50;
    }
  };

  option && myChart.setOption(option);
})();

//雷达图
(function () {
    var myChart = echarts.init(document.getElementById('ld'));
    var option;
    option = {
        legend: {
            bottom: 0,

            data: ['2023', '2015', '2010'],
            textStyle: {
                color: '#6495ED' // 图例文字颜色设置

            },

        },
        radar: {
            indicator: [
                { name: '动作', max: 10 },
                { name: '剧情', max: 10 },
                { name: '科幻', max: 5 },
                { name: '喜剧', max: 5 },
                { name: '爱情', max: 5 },
            ]
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [4, 10, 1, 2, 1],
                        name: '2023',
                        itemStyle: {
                            color: '#003366'
                        },
                        areaStyle: {
                            color: '#003366'
                        }
                    },
                    {
                        value: [9, 1, 0, 4, 5],
                        name: '2015',
                        itemStyle: {
                            color: '#6495ED'
                        },
                        areaStyle: {
                            color: '#6495ED'
                        }
                    },
                    {
                        value: [7,3,4,0,3],
                        name: '2010',
                        itemStyle: {
                            color: '#4B0082'
                        },
                        areaStyle: {
                            color: '#4B0082'
                        },
                    },
                ]
            }
        ]
    };

    option && myChart.setOption(option);

})();

(function () {

var chartDom = document.getElementById('huan');
var myChart = echarts.init(chartDom);
var option;

option = {
  color: [ '#4B0082','#6495ED' ],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    bottom:0,
    left: 'center',
        textStyle: {
                color: '#ddd', // 图例文字颜色更浅，以便在深色背景上显示
              fontFamily: 'Arial', // 优化字体

            },
  },
  series: [
    {
      name: '国内外比例',
      type: 'pie',
      radius: ['60%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 251, name: '国内' },
        { value: 173, name: '国外' }
      ]
    }
  ]
};

option && myChart.setOption(option);


})();