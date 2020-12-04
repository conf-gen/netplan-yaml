/* require */
require('mofron');
const AppBase=require("mofron-comp-appbase");
const Heading=require("mofron-comp-heading");
const Form=require("mofron-comp-form");
const DropDown=require("mofron-comp-dropdown");
const Input=require("mofron-comp-input");
const Check=require("mofron-comp-checkbox");
const Frame=require("mofron-comp-frame");
const IpAddr=require("mofron-comp-dev");
const Button=require("mofron-comp-button");
const Text=require("mofron-comp-text");
const Code=require("mofron-comp-code");
const Footer=require("mofron-comp-footer");
const Fade=require("mofron-effect-fade");
const HrzPos=require("mofron-effect-hrzpos");
const Margin=require("mofron-layout-margin");
const Grid=require("mofron-layout-grid");
const HrzCent=require("mofron-layout-hrzcenter");
const comutl=mofron.util.common;
const cmputl=mofron.util.component;
try {

    /* script (extern) */

    /* script (init) */
    let generate=()=>{let e={network:{varsion:2}};if(!1===ethchk.value())if(e.network.ethernets={},e.network.ethernets[ifname.value()]={},0===addrtype.value())e.network.ethernets[ifname.value()]={dhcp4:!0,dhcp6:!0};else{let t="["+addr.toString()+subnet.valueText()+"]";e.network.ethernets[ifname.value()]={addresses:t,gateway4:gateway.toString(),nameservers:{addresses:"["+namesrv.toString()+"]"}}}!1===wifichk.value()&&(e.network.wifis={},e.network.wifis[w_ifname.value()]={dhcp4:!0,dhcp6:!0,"access-points":{}},e.network.wifis[w_ifname.value()]["access-points"]['"'+ssid.value()+'"'],e.network.wifis[w_ifname.value()]["access-points"]['"'+ssid.value()+'"']={password:'"'+passwd.value()+'"'}),retcode.text(conv2yml(e,0))},conv2yml=(e,t)=>{try{let s="";for(let a in e){for(let e=0;e<t;e++)s+="\t";s+=a+":","object"==typeof e[a]?s+="\n"+conv2yml(e[a],t+1):s+=e[a]+"\n"}return s}catch(e){throw console.error(e.stack),e}};
    let disable = (d1,d2,d3) => {
        try {
            let grp = ("ethchk" === d1.name()) ? ethgrp : wifigrp;
            grp.visible(!d2);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    let addr_type = (t1,t2,t3) => {
        try {
            let is_manual = (1 === t2) ? true : false;
            addr.status(is_manual);
            subnet.status(is_manual);
            gateway.status(is_manual);
            namesrv.status(is_manual);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /* template */

    /* component */
    let cmp0_0=new Heading("netplan yaml");
    let cmp0_1_0_0_0=new Text();
    let ethchk=new Check("disable",false);
    let cmp0_1_0_0=new mofron.class.Component();
    let ifname=new Input();
    let addrtype=new DropDown();
    let addr=new IpAddr([192,168,1,1]);
    let subnet=new DropDown();
    let ethgrp_0=new mofron.class.Component();
    let gateway=new IpAddr([192,168,1,254]);
    let namesrv=new IpAddr([8,8,8,8]);
    let ethgrp_1=new mofron.class.Component();
    let ethgrp=new mofron.class.Component();
    let cmp0_1_0_1=new mofron.class.Component();
    let cmp0_1_0_2_0=new Text();
    let wifichk=new Check("disable",true);
    let cmp0_1_0_2=new mofron.class.Component();
    let w_ifname=new Input();
    let ssid=new Input();
    let passwd=new Input();
    let wifigrp=new mofron.class.Component();
    let cmp0_1_0_3=new mofron.class.Component();
    let gen_btn=new Button();
    let cmp0_1_0=new mofron.class.Component();
    let cmp0_1_1_0=new Text("result:");
    let retcode=new Code();
    let result=new Frame();
    let cmp0_1_1=new mofron.class.Component();
    let cmp0_1=new mofron.class.Component();
    let cmp0_2=new Footer();
    let cmp0=new AppBase();
    let root_cmp=new mofron.class.Component();
    cmp0_1_0_0.child([cmp0_1_0_0_0,ethchk]);
    ethgrp_0.child([addr,subnet]);
    ethgrp_1.child([namesrv]);
    ethgrp.child([ifname,addrtype,ethgrp_0,gateway,ethgrp_1]);
    cmp0_1_0_1.child([ethgrp]);
    cmp0_1_0_2.child([cmp0_1_0_2_0,wifichk]);
    wifigrp.child([w_ifname,ssid,passwd]);
    cmp0_1_0_3.child([wifigrp]);
    cmp0_1_0.child([cmp0_1_0_0,cmp0_1_0_1,cmp0_1_0_2,cmp0_1_0_3,gen_btn]);
    result.child([retcode]);
    cmp0_1_1.child([cmp0_1_1_0,result]);
    cmp0_1.child([cmp0_1_0,cmp0_1_1]);
    cmp0.child([cmp0_0,cmp0_1,cmp0_2]);
    root_cmp.child([cmp0]);
    cmp0_0.config({style:{'padding':"0.5rem"}});
    cmp0_1_0_0_0.config({text:"Ethernet:",size:"0.3rem",style:new mofron.class.ConfArg({'font-family':"monospace"},{lock:true})});
    ethchk.config({name:"ethchk",style:{'margin-left':"0.3rem"},changeEvent:disable});
    cmp0_1_0_0.config({style:{'display':"flex",'align-items':"center"}});
    ifname.config({name:"ifname",label:"interface name"});
    addrtype.config({name:"addrtype",changeEvent:addr_type,height:"0.25rem",label:"address",text:["DHCP","Manual"]});
    addr.config({name:"addr",label:"ipaddress",status:false});
    subnet.config({name:"subnet",label:"subnet",height:"0.25rem",effect:new HrzPos("right"),status:false,select:9,width:new mofron.class.ConfArg("0.9rem",{lock:true}),text:["/10","/16","/17","/18","/19","/20","/21","/22","/23","/24","/25","/26","/27","/28","/29","/30","/31","/32"]});
    gateway.config({name:"gateway",label:"gateway",status:false});
    namesrv.config({name:"namesrv",label:"nameserver",status:false});
    ethgrp.config({name:"ethgrp",layout:new Margin("top","0.3rem"),theme:{FormItem:{config:{width:"100%"}}}});
    cmp0_1_0_1.config({layout:new HrzCent(70)});
    cmp0_1_0_2_0.config({text:"WiFi:",size:"0.3rem",style:new mofron.class.ConfArg({'font-family':"monospace"},{lock:true})});
    wifichk.config({name:"wifichk",style:{'margin-left':"0.3rem"},changeEvent:disable});
    cmp0_1_0_2.config({style:{'display':"flex",'align-items':"center",'margin-top':"0.3rem"}});
    w_ifname.config({name:"w_ifname",label:"interface name"});
    ssid.config({name:"ssid",label:"ssid"});
    passwd.config({name:"passwd",label:"password",type:"password"});
    wifigrp.config({name:"wifigrp",layout:new Margin("top","0.3rem"),theme:{FormItem:{config:{width:"100%"}}}});
    cmp0_1_0_3.config({layout:new HrzCent(70)});
    gen_btn.config({name:"gen_btn",clickEvent:generate,style:{'margin-top':"0.3rem"},height:"0.4rem",text:"Generate"});
    cmp0_1_0.config({layout:new HrzCent(80)});
    cmp0_1_1_0.config({size:"0.3rem"});
    retcode.config({name:"retcode",style:new mofron.class.ConfArg({'font-family':"monospace"},{lock:true})});
    result.config({name:"result",size:new mofron.class.ConfArg("90%",null)});
    cmp0_1.config({layout:new Grid([50,50])});
    cmp0_2.config({color:'#ccd1f5',style:{'margin-top':"0.3rem"},height:"0.5rem"});
    cmp0.config({color:'#ccd1f5',baseColor:'#fafafa',title:new mofron.class.ConfArg("CONF-GEN","./img/icon_b.png")});
    let eff1=new Fade(true,1000);
    root_cmp.config({effect:eff1,theme:{Text:{config:{color:'#787878',font:"'Major Mono Display'"}}}});

    /* script (before) */

    /* start visible */
    root_cmp.visible(true,() => {try{

        /* script (after) */

    }catch(e){console.error(e.stack);}});
} catch (e) {
    console.error(e.stack);
}
