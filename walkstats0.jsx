import React from 'react';

import ReactHighcharts from 'react-highcharts';
import ReactHighstock from 'react-highcharts/ReactHighstock.src';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import SocialIcon from 'material-ui/svg-icons/social/share';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import FirstIcon from 'material-ui/svg-icons/image/filter-1';
import SecIcon from 'material-ui/svg-icons/image/filter-2';
import ThirdIcon from 'material-ui/svg-icons/image/filter-3';
import DatePicker from 'material-ui/DatePicker';
import RightPaper from './rightpaper.jsx';
import Divider from 'material-ui/Divider';
import Chart from './myhighchart.jsx';


var myDate = new Date();

var averages;

var option1={
  chart: {
           type: 'spline'
       },
       title: {
           text: ''
       },
       subtitle: {
           text: ''
       },
       xAxis: {
           type: 'datetime',
           labels: {
               overflow: 'justify'
           }
       },
       yAxis: {
           title: {
               text: '步数'
           },
           min: 0,
           tickInterval:500,
           minorGridLineWidth: 1,
           gridLineWidth: 1,
           alternateGridColor: null,
           gridLineDashStyle: 'dash',
           plotBands: [{ // Gentle breeze
               from: 0,
               to: 2000,
              //  color: 'rgba(68, 170, 213, 0.1)',
               label: {
                   text: '宅',
                   style: {
                     "font-size":'15px',
                       "color": '#606060',
                       "margin-top":'17px',
                   }
               }
           }, { // Moderate breeze
               from: 2000,
               to: 8000,
               color: 'rgba(0, 0, 0, 0)',
               label: {
                   text: '正常',
                   style: {
                     "font-size":'15px',
                       "color": '#606060',
                        "margin-top":'17px',
                   }
               }
           }, { // Fresh breeze
               from: 8000,
               to: 12000,
              //  color: 'rgba(68, 170, 213, 0.1)',
               label: {
                   text: '暴走',
                   style: {
                     "font-size":'15px',
                       "color": '#606060',
                        "margin-right":'17px',
                   }
               }
           }]
       },
       plotOptions: {
           spline: {
               lineWidth: 2,
               states: {
                   hover: {
                       lineWidth: 2
                   }
               },
               marker: {
                   enabled: false
               },
           }
       },
       tooltip: {
         xDateFormat: '%Y-%m-%d',
       valueSuffix: '步'
     },
       series: [{
           name: '步数',
           data: [4.3]
       }, ]
}



const SleepTab = React.createClass({
  getInitialState(){
        return {
          avgstep:"",
          avgdistance:"",
          avgcal:"",
          qstep:"",
          qdistance:"",
          qduration:"",
          qcal:"",
          date:"",



        }
    },
    formatDate(strdate){
    var date=new Date(strdate);


    var year=date.getFullYear();
    var month=date.getMonth() + 1;
    var day=date.getDate();
    var strmonth="";
    var strday=""
    if(month<10){
      month="0"+month;
    }
    if(day<10){
      day="0"+day;
    }

    return year+"-"+month+"-"+day;

    },
    componentDidMount: function() {
      this.initData();
    },
    initData(){
      var xmlHttp =GetXmlHttpObject();
      if (xmlHttp==null){
        alert ("Browser does not support HTTP Request")
        return
      }
      var url="http://localhost:8888/fitbook/walkdatagetter.php?ssid=";
      url+=getCookie("ssid");

      var that=this;
      xmlHttp.onreadystatechange=function(){
        // that.setState({btntext: xmlHttp.responseText});
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
          var jsonstr=xmlHttp.responseText;
          var json=new Function("return" + jsonstr)();


          that.setState({avgstep: json[0].avgstep});
          that.setState({avgdistance: json[1].avgdistance});
          that.setState({avgcal: json[2].avgcal});


            let chart = that.refs.chart1.getChart();
            chart.series[0].setData(json[3]);
        }
      };



      xmlHttp.open("GET",url,true);
      xmlHttp.send();


    },
    changeDate(event,date){
      var stddate=this.formatDate(date);

      this.setState({date: stddate});

      var xmlHttp =GetXmlHttpObject();
      if (xmlHttp==null){
        alert ("Browser does not support HTTP Request")
        return
      }
      var url="http://localhost:8888/fitbook/specificwalkgetter.php?ssid=";
      url+=getCookie("ssid");
      url+="&date=";
      url+=stddate;



      var that=this;
      xmlHttp.onreadystatechange=function(){
        // that.setState({btntext: xmlHttp.responseText});
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
          var jsonstr=xmlHttp.responseText;
          var json=new Function("return" + jsonstr)();

            if(json.isava==0){
              that.setState({qstep: "这一天没有数据"});
              return;
            }

            that.setState({qstep: json.steps});
            that.setState({qduration: json.duration});
            that.setState({qdistance: json.distance});
            that.setState({qcal: json.cal});



        }
      };



      xmlHttp.open("GET",url,true);
      xmlHttp.send();




    },
  render() {


    return (

      <div className="container">

        <div style={{height:'65px'}}></div>


        <h2>步数统计</h2>
        <div style={{height:'20px'}}></div>

      <Divider />


      <ReactHighstock config = {option1} ref="chart1"></ReactHighstock>

<div style={{width:'35%',display:'inline-block',height:'100px',marginTop:'60px'}}>

<div className="statssub1">3876步</div>
<div style={{marginTop:'19px',textAlign:'center',color:'#00ACC1'}}>
平均每日步数&nbsp;
  </div>

  </div>

<div style={{width:'32%',display:'inline-block'}}>
  <div className="statssub1">4.6<span style={{fontSize:'40px'}}>km</span></div>
  <div style={{marginTop:'19px',textAlign:'center',color:'#00ACC1'}}>
  平均每日行走距离&nbsp;
    </div>

</div>

<div style={{width:'32%',display:'inline-block'}}>
  <div className="statssub1">2986<span style={{fontSize:'40px'}}>kCal</span></div>
  <div style={{marginTop:'19px',textAlign:'center',color:'#00ACC1'}}>
  到目前共消耗热量
    </div>
</div>



{/*
    <Card style={{marginTop:'25px'}}>
    <CardHeader
      title="起床统计"
      titleStyle={{fontSize:'27px',paddingLeft:'40px'}}

    />
    <CardText>
      <ReactHighcharts config = {option2} ref="chart2"></ReactHighcharts>
    </CardText>
  </Card>

  */}







        </div>
    );

  }
});

export default SleepTab;
