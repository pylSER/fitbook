import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router';
import FriendIcon from 'material-ui/svg-icons/action/face';
import GroupIcon from 'material-ui/svg-icons/social/people';
import AtyIcon from 'material-ui/svg-icons/image/assistant-photo';

import Card_friend from './friendCard.jsx';
import Card_group from './groupCard.jsx';
import Card_aty from './atyCard.jsx';


const DetailInfo = React.createClass({
    getInitialState(){
        return {
            username: this.props.username,
            friendnum: "",
            rowobj: "",
            rowatyobj: "",
            atynum: "",
            atyTip: "",
            friendTip: "",
            remainAty: "",
            remainFriend: ""
        }
    },
    componentDidMount: function () {
        this.getfriends();
        this.getatys();
    },
    refresh(name){
        // location.reload();
        //

        var url = "http://localhost:8080/#/myinfo/";
        url += name;
        url += "?refs=yes";
        window.location.href = url;

        location.reload();


    },
    setFriendTip(){
        if (this.state.friendTip == "展开") {
            this.setState({friendTip: "收起"});
            this.state.rowobj.push(this.state.remainFriend);
            this.render();
        } else if (this.state.friendTip == "收起") {
            this.setState({friendTip: "展开"});
            this.state.rowobj.splice(8);
            this.render();
        }
    },
    getfriends(){

        var xmlHttp = GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Browser does not support HTTP Request")
            return
        }
        var url = "http://localhost:8888/fitbook/friendgetter.php?username=";
        url += this.state.username;
        var that = this;
        xmlHttp.onreadystatechange = function () {
            // that.setState({btntext: xmlHttp.responseText});
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var rows = [];
                var tmp_friend = [];
                var jsonstr = xmlHttp.responseText;
                var json = new Function("return" + jsonstr)();

                var max = 8;

                that.setState({friendnum: json.length + "人"});

                if (json.length == 0) {
                    rows.push("还没有好友");
                } else if (json.length > 0 && json.length <= max) {
                    for (var i = 0; i < json.length; i++) {
                        rows.push(<Card_friend friendname={json[i].username} avatarlink={json[i].avatarlink}
                                               coverlink={json[i].coverLink} maincolor={json[i].mainColor}/>);
                    }
                } else if (json.length > max) {
                    that.setState({friendTip: "展开"});
                    for (var i = 0; i < max; i++) {
                        rows.push(<Card_friend friendname={json[i].username} avatarlink={json[i].avatarlink}
                                               coverlink={json[i].coverLink} maincolor={json[i].mainColor}/>);
                    }
                    for (var i = max; i < json.length; i++) {
                        tmp_friend.push(<Card_friend friendname={json[i].username} avatarlink={json[i].avatarlink}
                                                     coverlink={json[i].coverLink} maincolor={json[i].mainColor}/>);
                    }
                }
                // for (var i = 0; i < json.length; i++) {
                //     rows.push(<Card_friend friendname={json[i].username} avatarlink={json[i].avatarlink}
                //                            coverlink={json[i].coverLink} maincolor={json[i].mainColor}/>);
                // rows.push(<ListItem
                //   primaryText={json[i].username}
                //   onTouchTap={that.refresh.bind(that, json[i].username)}
                //   leftAvatar={<Avatar src={json[i].avatarlink} />}
                //
                //   />);
                // }
                that.setState({rowobj: rows});
                that.setState({remainFriend: tmp_friend});
                that.render();
            }
        };


        xmlHttp.open("GET", url, true);
        xmlHttp.send();


    },
    getgroups(){

    },
    setAtyTip(){
        if (this.state.atyTip == "展开") {
            this.setState({atyTip: "收起"});
            this.state.rowatyobj.push(this.state.remainAty);
            this.render();
        } else if (this.state.atyTip == "收起") {
            this.setState({atyTip: "展开"});
            this.state.rowatyobj.splice(6);
            this.render();
        }
    },

    getatys(){
        var xmlHttp = GetXmlHttpObject();
        if (xmlHttp == null) {
            alert("Browser does not support HTTP Request")
            return
        }
        var url = "http://localhost:8888/fitbook/atygetter.php?username=";
        url += this.state.username;
        var that = this;
        xmlHttp.onreadystatechange = function () {
            // that.setState({btntext: xmlHttp.responseText});
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                var rows = [];
                var tmp_aty = [];
                var jsonstr = xmlHttp.responseText;
                var json = new Function("return" + jsonstr)();

                that.setState({atynum: json.length + "个"});

                var max = 6;
                // alert(jsonstr);
                if (json.length == 0) {
                    rows.push("还没有参加任何活动");
                } else if (json.length <= max && json.length > 0) {
                    for (var i = 0; i < json.length; i++) {
                        rows.push(<Card_aty title={json[i].title} atyid={json[i].atyid} num={json[i].num}
                                            intro={json[i].intro} coverlink={json[i].coverlink}
                                            maincolor={json[i].maincolor}/>);
                    }
                } else if (json.length > max) {
                    that.setState({atyTip: "展开"});
                    for (var i = 0; i < max; i++) {
                        rows.push(<Card_aty title={json[i].title} atyid={json[i].atyid} num={json[i].num}
                                            intro={json[i].intro} coverlink={json[i].coverlink}
                                            maincolor={json[i].maincolor}/>);
                    }
                    for (var i = max; i < json.length; i++) {
                        tmp_aty.push(<Card_aty title={json[i].title} atyid={json[i].atyid} num={json[i].num}
                                               intro={json[i].intro} coverlink={json[i].coverlink}
                                               maincolor={json[i].maincolor}/>);
                    }
                }
                {/*for (var i = 0; i < json.length; i++) {*/
                }
                {/*rows.push(<Card_aty title={json[i].title} atyid={json[i].atyid} num={json[i].num}*/
                }
                {/*intro={json[i].intro} coverlink={json[i].coverlink}*/
                }
                {/*maincolor={json[i].maincolor}/>);*/
                }

                // rows.push(<Link to={"/atyinfo/" + json[i].atyid} style={{textDecoration: 'none'}}><ListItem
                //     primaryText={json[i].title}
                //     leftAvatar={<AtyIcon/>}
                // /></Link>);
                // }
                that.setState({rowatyobj: rows});
                that.setState({remainAty: tmp_aty});
                that.render();
                // alert("aa"+that.state.remainAty);
                // setTimeout(()=>{
                //
                // },0);

            }
        };


        xmlHttp.open("GET", url, true);
        xmlHttp.send();

    },

    render() {

        return (

            <div className="rightwidth">
                {/*<div className="quanzi">圈子</div>*/}
                <div className="haoyou">好友</div>
                {/*{alert(this.state.friendTip)}*/}
                <div className="friendTip" onClick={this.setFriendTip}>{this.state.friendTip}</div>

                <div>
                    {this.state.rowobj}
                </div>


                {/*<div>*/}
                {/*<Card style={{marginTop:'30px'}}>*/}
                {/*<CardHeader*/}
                {/*title="好友"*/}
                {/*style={{cursor:'pointer'}}*/}
                {/*avatar={<FriendIcon/>}*/}
                {/*subtitle={this.state.friendnum}*/}
                {/*actAsExpander={true}*/}
                {/*showExpandableButton={true}*/}
                {/*/>*/}
                {/*<CardText expandable={true}>*/}
                {/*<List>*/}

                {/*{this.state.rowobj}*/}

                {/*</List>*/}

                {/*</CardText>*/}

                {/*</Card>*/}
                {/*</div>*/}


                <div className="qunzu">群组</div>
                <div>
                    <Card_group/>
                </div>
                {/*<div>*/}
                {/*<Card>*/}
                {/*<CardHeader*/}
                {/*title="群组"*/}
                {/*style={{cursor:'pointer'}}*/}
                {/*avatar={<GroupIcon/>}*/}
                {/*subtitle="1组"*/}
                {/*actAsExpander={true}*/}
                {/*showExpandableButton={true}*/}
                {/*>*/}


                {/*</CardHeader>*/}
                {/*<CardText expandable={true}>*/}
                {/*<List>*/}
                {/*<Link to="/groupInfo" style={{ textDecoration: 'none' }}> <ListItem*/}
                {/*primaryText="马拉松爱好者"*/}
                {/*leftAvatar={<GroupIcon/>}*/}
                {/*/>*/}
                {/*</Link>*/}

                {/*</List>*/}

                {/*</CardText>*/}

                {/*</Card>*/}
                {/*</div>*/}


                <div className="huodong">活动</div>
                <div className="tip" onClick={this.setAtyTip}>{this.state.atyTip}</div>
                {this.state.rowatyobj}

                {/*<div>*/}
                {/*<Card>*/}
                {/*<CardHeader*/}
                {/*title="活动"*/}
                {/*style={{cu



                  rsor: 'pointer'}}*/}
                {/*avatar={<AtyIcon/>}*/}
                {/*subtitle={this.state.atynum}*/}
                {/*actAsExpander={true}*/}
                {/*showExpandableButton={true}*/}
                {/*/>*/}
                {/*<CardText expandable={true}>*/}
                {/*<List>*/}
                {/*{this.state.rowatyobj}*/}
                {/*</List>*/}
                {/*</CardText>*/}
                {/*</Card>*/}
                {/*</div>*/}


            </div>


        );
    }
});

export default DetailInfo;
