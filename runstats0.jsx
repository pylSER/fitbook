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
import DurationIcon from 'material-ui/svg-icons/image/timelapse';




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
               text: '距离'
           },
           min: 0,
           tickInterval:0.5,
           minorGridLineWidth: 1,
           gridLineDashStyle: 'dash',
           gridLineWidth: 1,
           alternateGridColor: null,
           plotBands: [{ // Gentle breeze
               from: 0,
               to: 5.5,
              //  color: 'rgba(68, 170, 213, 0.1)',
               label: {
                   text: '短距离',
                   style: {
                     "font-size":'15px',
                       "color": '#606060',
                   }
               }
           }, { // Moderate breeze
               from: 5.5,
               to: 8,
               color: 'rgba(0, 0, 0, 0)',
               label: {
                   text: '中距离',
                   style: {
                     "font-size":'15px',
                       "color": '#606060',
                   }
               }
           }, { // Fresh breeze
               from: 8,
               to: 15,
              //  color: 'rgba(68, 170, 213, 0.1)',
               label: {
                   text: '长途',
                   style: {
                     "font-size":'15px',
                       "color": '#606060',
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
               pointInterval: 3600000*24, // one hour
               pointStart: Date.UTC(2009, 9, 6, 0, 0, 0)
           }
       },
       tooltip: {
         xDateFormat: '%Y-%m-%d',
       valueSuffix: 'KM'
     },
       series: [{
           name: '距离曲线',
           data: [4.3, 5.1, 4.3, 5.2, 5.4, 4.7, 3.5, 4.1, 5.6, 7.4, 6.9, 7.1,
                  7.9, 7.9, 7.5, 6.7, 7.7, 7.7, 7.4, 7.0, 7.1, 5.8, 5.9, 7.4,
                  8.2, 8.5, 9.4, 8.1, 10.9, 10.4, 10.9, 12.4, 12.1, 9.5, 7.5,
                  7.1, 7.5, 8.1, 6.8, 3.4, 2.1, 1.9, 2.8, 2.9, 1.3, 4.4, 4.2,
                  3.0, 3.0]
       }, ]
}

const SleepTab = React.createClass({
  getInitialState(){
        return {
          sleeptime:"",
          getuptime:"",
          deepduration:"",
          lightduration:"",
          sleepdata:"",
          totalduration:"",
          date:"",
          qsleeptime:"",
          qgetuptime:"",
          qdeepduration:"",
          qlightduration:"",


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

    changeDate(event,date){
      var stddate=this.formatDate(date);

      this.setState({date: stddate});

      var xmlHttp =GetXmlHttpObject();
      if (xmlHttp==null){
        alert ("Browser does not support HTTP Request")
        return
      }
      var url="http://localhost:8888/fitbook/specificsleepgetter.php?ssid=";
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
              that.setState({qsleeptime: "这一天没有数据"});
              return;
            }

            that.setState({qsleeptime: json.sleeptime});
            that.setState({qgetuptime: json.getuptime});
            that.setState({qdeepduration: json.deeptime});
            that.setState({qlightduration: json.lighttime});



        }
      };



      xmlHttp.open("GET",url,true);
      xmlHttp.send();




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
      var url="http://localhost:8888/fitbook/sleepdatagetter.php?ssid=";
      url+=getCookie("ssid");

      var that=this;
      xmlHttp.onreadystatechange=function(){
        // that.setState({btntext: xmlHttp.responseText});
        if (xmlHttp.readyState==4 && xmlHttp.status==200){
          var jsonstr=xmlHttp.responseText;
          var json=new Function("return" + jsonstr)();


          that.setState({sleeptime: json[0].sleepavgtime});
          that.setState({getuptime: json[1].getupavgtime});
          that.setState({totalduration: json[2].totalduration});


        }
      };



      xmlHttp.open("GET",url,true);
      xmlHttp.send();
    },

  render() {


    return (

      <div className="container">

        <div style={{height:'65px'}}></div>


        <h2>跑步距离统计</h2>
        <div style={{height:'20px'}}></div>

      <Divider />


      <ReactHighstock config = {option1} ref="chart1"></ReactHighstock>

<div style={{width:'35%',display:'inline-block',height:'100px',marginTop:'60px'}}>

<div className="statssub1">36分</div>
<div style={{marginTop:'19px',textAlign:'center',color:'#00ACC1'}}>
平均每日跑步时长&nbsp;
  </div>

  </div>
<div style={{width:'1%',display:'inline-block'}}></div>
<div style={{width:'30%',display:'inline-block'}}>
  <div className="statssub1">5.1<span style={{fontSize:'45px'}}>km/h</span></div>
  <div style={{marginTop:'19px',textAlign:'center',color:'#00ACC1'}}>
  平均速度&nbsp;
    </div>

</div>

<div style={{width:'1%',display:'inline-block'}}></div>

<div style={{width:'30%',display:'inline-block'}}>
  <div className="statssub1">20143<span style={{fontSize:'45px'}}>kCal</span></div>
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
