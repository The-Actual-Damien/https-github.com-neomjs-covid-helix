(self.webpackChunkcovid19_helix=self.webpackChunkcovid19_helix||[]).push([[124],{124:(e,t,a)=>{"use strict";a.r(t),a.d(t,{onStart:()=>p});var n=a(541);class i extends n.Z{static getConfig(){return{className:"CovidHelix.model.Country",fields:[{name:"cases",type:"int"},{name:"country",type:"string"},{name:"critical",type:"int"},{name:"deaths",type:"int"},{name:"recovered",type:"int"},{name:"todayCases",type:"int"},{name:"todayDeaths",type:"int"}]}}}Neo.applyClassConfig(i);var o=a(471);class l extends o.Z{static getConfig(){return{className:"CovidHelix.store.Countries",keyProperty:"country",model:i}}}Neo.applyClassConfig(l);var s=a(859);class r extends s.Z{static getStaticConfig(){return{flagRegEx:/ /gi}}static getConfig(){return{className:"Covid.view.country.Helix",cls:["covid-country-helix","neo-helix"],deltaY:1.2,itemTpl:{cls:["surface","neo-helix-item"],style:{},tabIndex:"-1",cn:[{cls:["neo-item-wrapper"],style:{},cn:[{tag:"div",cls:["neo-country-helix-item"],style:{},cn:[{cls:["neo-item-header"],cn:[{tag:"img",cls:["neo-flag"]},{}]},{tag:"table",cls:["neo-content-table"],cn:[{tag:"tr",cn:[{tag:"td",html:"Cases"},{tag:"td",cls:["neo-align-right"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Cases today"},{tag:"td",cls:["neo-align-right"]}]},{tag:"tr",cn:[{tag:"td",html:"Deaths"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Deaths today"},{tag:"td",cls:["neo-align-right","neo-content-deaths"]}]},{tag:"tr",cn:[{tag:"td",html:"Recovered"},{tag:"td",cls:["neo-align-right","neo-content-recovered"]},{tag:"td",style:{width:"100%"}},{tag:"td",html:"Critical"},{tag:"td",cls:["neo-align-right","neo-content-critical"]}]}]}]}]}]},keyProperty:"country",radius:2500,rotationAngle:720,showCloneInfo:!1,store:l,translateY:500,translateZ:-2300}}createItem(e,t,a){let n=this,i=e.cn[0].cn[0],o=i.cn[1];return e.id=n.getItemVnodeId(t[n.keyProperty]),i.cn[0].cn[0].src=n.getCountryFlagUrl(t.country),i.cn[0].cn[1].html=t.country,o.cn[0].cn[1].html=t.cases,o.cn[1].cn[1].html=t.deaths,o.cn[2].cn[1].html=t.recovered,o.cn[0].cn[4].html=t.todayCases,o.cn[1].cn[4].html=t.todayDeaths,o.cn[2].cn[4].html=t.critical,e}getCountryFlagUrl(e){let t=e.toLowerCase().replace(r.flagRegEx,"-");if(t={bosnia:"bosnia-and-herzegovina","cabo-verde":"cape-verde",car:"central-african-republic","caribbean-netherlands":"netherlands","channel-islands":"jersey","côte-d'ivoire":"ivory-coast",congo:"republic-of-the-congo","congo,-the-democratic-republic-of-the":"democratic-republic-of-congo",curaçao:"curacao",czechia:"czech-republic","diamond-princess":"japan",drc:"democratic-republic-of-congo","el-salvador":"salvador",eswatini:"swaziland","faeroe-islands":"faroe-islands","falkland-islands-(malvinas)":"falkland-islands","french-guiana":"france",guadeloupe:"france","holy-see-(vatican-city-state)":"vatican-city","iran,-islamic-republic-of":"iran","lao-people's-democratic-republic":"laos","libyan-arab-jamahiriya":"libya",macedonia:"republic-of-macedonia","marshall-islands":"marshall-island",mayotte:"france","moldova,-republic-of":"moldova","ms-zaandam":"netherlands","new-caledonia":"france","palestinian-territory,-occupied":"palestine",poland:"republic-of-poland",réunion:"france","s.-korea":"south-korea","st.-barth":"st-barts","saint-lucia":"st-lucia","saint-martin":"sint-maarten","saint-pierre-miquelon":"france","saint-vincent-and-the-grenadines":"st-vincent-and-the-grenadines","syrian-arab-republic":"syria","tanzania,-united-republic-of":"tanzania","timor-leste":"east-timor","turks-and-caicos-islands":"turks-and-caicos","u.s.-virgin-islands":"virgin-islands",uae:"united-arab-emirates",uk:"united-kingdom",usa:"united-states-of-america",uzbekistan:"uzbekistn","venezuela,-bolivarian-republic-of":"venezuela","viet-nam":"vietnam","wallis-and-futuna":"france"}[t]||t,Neo.config.isGitHubPages){let e="../../../../resources/images/flaticon/country_flags/png/"+t+".png";return Neo.config.isExperimental||(e="../../"+e),e}return"https://raw.githubusercontent.com/neomjs/pages/master/resources/images/flaticon/country_flags/png/"+t+".png"}getCloneTransform(){let e=this;return"matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,"+(e.offsetWidth-2800)/6+","+(e.offsetHeight-2700)/6+","+(100400+e.perspective/1.5)+",1)"}getItemId(e){return e.split("__")[1]}}Neo.applyClassConfig(r),a(242),a(309);var c=a(748);class m extends c.Z{static getConfig(){return{className:"CovidHelix.view.MainContainer",ntype:"main-container",autoMount:!0,cls:["neo-helix-maincontainer","neo-viewport"],helix:null,helixConfig:null,layout:{ntype:"hbox",align:"stretch"},items:[{ntype:"container",flex:1,layout:"fit",items:[]},{ntype:"panel",cls:["neo-controls-panel","neo-panel","neo-container"],layout:{ntype:"vbox",align:"stretch"},style:{backgroundColor:"#2b2b2b"},width:250,containerConfig:{style:{overflowY:"scroll"}},itemDefaults:{ntype:"rangefield",flex:"0 1 auto",labelWidth:"100px",style:{padding:"10px"},useInputEvent:!0,listeners:{change:function(e){["deltaY","maxOpacity","minOpacity"].includes(this.name)&&(e.value/=100),Neo.get("neo-helix-1")[this.name]=e.value}}},headers:[{dock:"top",items:[{ntype:"button",text:"X",handler:function(){const e=this.up("panel"),t=40===e.width;e.width=t?250:40,this.text=t?"X":"+"}},{ntype:"label",text:"Helix Controls"}]}],items:[{labelText:"Translate X",maxValue:2e3,minValue:-2e3,name:"translateX",value:400},{labelText:"Translate Y",maxValue:2500,minValue:-2500,name:"translateY",value:-350},{labelText:"Translate Z",maxValue:4500,minValue:-4500,name:"translateZ",value:-1500,listeners:{change:function(e){Neo.get("neo-helix-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-helix-1").on("changeTranslateZ",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Delta Y",labelAlign:"top",maxValue:600,minValue:-600,name:"deltaY",value:70},{labelText:"Rotate",minValue:-720,maxValue:720,name:"rotationAngle",value:0,listeners:{change:function(e){Neo.get("neo-helix-1")[this.name]=e.value},mounted:function(e){let t=Neo.get(e);Neo.get("neo-helix-1").on("changeRotation",(function(e){e=Math.min(Math.max(e,this.minValue),this.maxValue),this.value=e}),t)}}},{labelText:"Radius",maxValue:3500,minValue:900,name:"radius",value:1500},{labelText:"Perspective",minValue:50,maxValue:3e3,name:"perspective",value:800},{labelText:"Item Angle",minValue:1,maxValue:36,name:"itemAngle",value:8},{labelText:"Max Opacity",name:"maxOpacity",minValue:0,maxValue:100,value:80},{labelText:"Min Opacity",name:"minOpacity",minValue:0,maxValue:100,value:30},{ntype:"button",text:"Flip Items",listeners:{},style:{margin:"20px"},domListeners:{click:e=>{const t=Neo.get("neo-helix-1");t.flipped=!t.flipped}}},{ntype:"label",text:"Sort By:"},{ntype:"container",layout:{ntype:"hbox",align:"stretch"},style:{padding:"0"},items:[{ntype:"container",layout:{ntype:"vbox",align:"stretch"},items:[{ntype:"button",text:"Cases",listeners:{},style:{margin:"10px",marginTop:"0"},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"cases",direction:"DESC"}]}}},{ntype:"button",text:"Deaths",listeners:{},style:{margin:"10px",marginBottom:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"deaths",direction:"DESC"}]}}},{ntype:"button",text:"Country",listeners:{},style:{margin:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"country",direction:"ASC"}]}}}]},{ntype:"container",layout:{ntype:"vbox",align:"stretch"},items:[{ntype:"button",text:"Cases today",listeners:{},style:{margin:"10px",marginTop:"0"},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"todayCases",direction:"DESC"}]}}},{ntype:"button",text:"Deaths today",listeners:{},style:{margin:"10px",marginBottom:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"todayDeaths",direction:"DESC"}]}}},{ntype:"button",text:"Critical",listeners:{},style:{margin:"10px",marginTop:0},domListeners:{click:function(){Neo.get("neo-helix-1").store.sorters=[{property:"critical",direction:"DESC"}]}}}]}]},{ntype:"button",iconCls:"fa fa-square",text:"Follow Selection",listeners:{},domListeners:{click:function(e){let t=this,a=Neo.get("neo-helix-1");"fa fa-square"===t.iconCls?(a.followSelection=!0,t.iconCls="fa fa-check-square"):(a.followSelection=!1,t.iconCls="fa fa-square")}},style:{margin:"20px",marginBottom:"10px"}},{ntype:"label",text:["<b>Navigation Concept</b>","<p>Click on an item to select it. Afterwards you can use the Arrow Keys to walk through the items.</p>","<p>Hit the Space Key to rotate the currently selected item to the front.</p>","<p>Hit the Enter Key to expand the currently selected item.</p>"].join(""),style:{backgroundColor:"#323232",color:"#ddd",fontSize:"13px",margin:"10px",padding:"10px",whiteSpace:"normal"}},{ntype:"label",cls:["neo-link-color"],text:["<b>Attribution</b>",'<p>App created with <a href="https://github.com/neomjs/neo">neo.mjs</a>.</p>','<p>Data provided by <a href="https://github.com/disease-sh/API">disease-sh/API</a>.</p>','<p>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.</p>'].join(""),style:{backgroundColor:"#323232",color:"#ddd",fontSize:"13px",margin:"10px",padding:"10px",whiteSpace:"normal"}}]}]}}constructor(e){super(e);const t=this,a="https://corona.lmao.ninja/v2/countries";t.helix=Neo.create({module:r,id:"neo-helix-1",...t.helixConfig||{}}),t.items[0].items.push(t.helix),fetch(a).then((e=>e.json())).then((e=>t.addStoreItems(e))).catch((e=>console.log("Can’t access "+a,e)))}addStoreItems(e){this.getStore().data=e}getStore(){return this.items[0].items[0].store}}Neo.applyClassConfig(m);const p=()=>Neo.app({appPath:"apps/covidhelix/",mainView:m,name:"CovidHelix"})}}]);