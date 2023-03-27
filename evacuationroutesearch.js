reearth.ui.show(`
  <style>


    html,body {
      margin: 0;
      width:350px;
      font-size:14px;
    }
    #wrapper {
      height: 100%;
      border-radius: 1px;
      width:100%;
    }
    #header {
      background: white;
      color: #00BEBE;
      padding:12px 32px;
      height:46px;
      margin:auto;
      
    }
    .title{
      font-size:14px;
      position: absolute;
      top: 11%;
      -webkit-transform : translateY(-50%);
      transform : translateY(-50%);
      margin-left:8px;
    }
    p{
      display:inline-block;
    }

#contents-wrapper{
  padding:10px 10px 12px;
  background:#F0F0F0;
}

hr{
  border:1px solid rgba(0,0,0,0.03);
}

.content{
  background:#FFF;
  margin-top:10px;
  padding:12px 0px;
}
.content-head{
  color:#00BEBE;
  text-align:left;
  padding:0px 12px;
}

.btn-location{
  width:32px;
  height:32px;
  background:#FFF;
  border: 1px solid #D9D9D9;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 2px;
}

#inputXY{
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  height:26px;
}

.startInfo-block{
  margin:0px 16px;
}

.startInfo-depth,.startInfo-times{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0px;
  gap: 12px;

}

.route-contents{
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding:0px 12px;
  gap: 8px;
  margin-top:12px;
}

.input-from,.input-how,.input-run{
  margin:0px 12px;
}

.how{
  margin:0px 12px;
  display:inline-block;
}

.input-how{
  text-align:center;
}

.input-from{
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 12px;

}

.routeInfo{
  padding:12px 16px 12px 16px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  border-radius:6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  order: 1;
  flex-grow: 1;
}
.routeInfo-distance,.routeInfo-time{
  display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px;
gap: 16px;
width:100%;
}

.info-value{
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 0px;
  gap: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  width:30%;
}


.btn{
  margin:auto;
  width:100%;
  color:#fff;
  background: #00BEBE;
  border:1px solid #01ABAB;
  height:32px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
  border-radius: 2px;
}

.btn:active{
  background: #01ABAB;

}

.headIcon{
  position: relative;
  margin-top:12px;
}

.close-btn{
  width:32px;
  height:32px;
  padding:2.4px;
  font-size:16px;
  cursor: pointer;
  color:#fff;
  border:1px rgb(0, 190, 190) solod;
  background:rgb(0, 190, 190);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  border: 0px solid #d9d9d9;
}

.open-btn{
  display:none;
  width:32px;
  height:32px;
  padding:2.4px;
  font-size:16px;
  cursor: pointer;
  color:#fff;
  border:1px rgb(0, 190, 190) solod;
  background:rgb(0, 190, 190);
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
  border: 0px solid #d9d9d9;
}
 


  </style>
<body> 
  <div id="wrappe3r">
    <button type="button" class="open-btn" style="display: none; border: none;" onclick="openWrapper()"><span role="img" aria-label="menu" class="anticon anticon-menu"><svg viewBox="64 64 896 896" focusable="false" data-icon="menu" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg></span></button>
  </div>
  <div id="wrapper">

    <div>
      <button type="button" class="close-btn" style="position: absolute; right: 0px; border-radius: 0px;" onclick="openWrapper()"><span role="img" aria-label="close" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></button>
    </div>
    <div id="header">
      <div style="float: center">
        <img class="headIcon" src="" width="25px" style="display:none">
        <span class="title">
        浸水避難ルート検索
        </span>
      </div>
    </div>
    <div id ="contents-wrapper">
      <div class="content-input content">
        <div class="input-from">
          <span style="float: left;">開始点を選択：</span>
          <input type="text" id ="inputXY">
          <button class="btn-location" onclick="getLocation()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12.5 14H9.40874C9.92883 13.5364 10.4193 13.0406 10.8773 12.5156C12.5931 10.5424 13.5 8.46228 13.5 6.5C13.5 5.04131 12.9205 3.64236 11.8891 2.61091C10.8576 1.57946 9.45869 1 8 1C6.54131 1 5.14236 1.57946 4.11091 2.61091C3.07946 3.64236 2.5 5.04131 2.5 6.5C2.5 8.46228 3.40692 10.5424 5.12268 12.5156C5.58068 13.0406 6.07117 13.5364 6.59127 14H3.5C3.36739 14 3.24021 14.0527 3.14645 14.1464C3.05268 14.2402 3 14.3674 3 14.5C3 14.6326 3.05268 14.7598 3.14645 14.8536C3.24021 14.9473 3.36739 15 3.5 15H12.5C12.6326 15 12.7598 14.9473 12.8536 14.8536C12.9473 14.7598 13 14.6326 13 14.5C13 14.3674 12.9473 14.2402 12.8536 14.1464C12.7598 14.0527 12.6326 14 12.5 14ZM8.00002 4.5C8.39558 4.5 8.78226 4.6173 9.11116 4.83706C9.44005 5.05682 9.6964 5.36918 9.84777 5.73463C9.99915 6.10009 10.0388 6.50222 9.96159 6.89018C9.88442 7.27814 9.69393 7.63451 9.41423 7.91421C9.13452 8.19392 8.77816 8.3844 8.3902 8.46157C8.00223 8.53874 7.6001 8.49913 7.23465 8.34776C6.8692 8.19638 6.55684 7.94004 6.33708 7.61114C6.11731 7.28224 6.00002 6.89556 6.00002 6.5C6.00001 6.23736 6.05174 5.97728 6.15225 5.73463C6.25276 5.49198 6.40008 5.2715 6.5858 5.08578C6.77151 4.90006 6.99199 4.75274 7.23465 4.65224C7.4773 4.55173 7.73737 4.5 8.00002 4.5V4.5Z" fill="black"/>
            </svg>
          </button>
        </div>
      
        <hr>
        <div class="how">
          <span style="float: left;">移動方法</span>
        </div>
        <div class="input-how">
          <form id="how">
            <input type="radio" id ="how_walk" name="input_how" value="1" checked>
            <label for="how_walk">歩行者</label>
            <input type="radio" id ="how_chair" name="input_how" value="2">
            <label for="how_chair">高齢者</label>
            <input type="radio" id ="how_car" name="input_how" value="3">
            <label for="how_car">避難時要支援者</label>
          </form>
        </div>
        <hr>
        <div class="input-run">
          <button id="run-route" class="btn" onclick="getRoute()">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M13.2125 12.3535L9.15469 8.2957C9.78438 7.48164 10.125 6.48633 10.125 5.43945C10.125 4.18633 9.63594 3.01133 8.75156 2.12539C7.86719 1.23945 6.68906 0.751953 5.4375 0.751953C4.18594 0.751953 3.00781 1.24102 2.12344 2.12539C1.2375 3.00977 0.75 4.18633 0.75 5.43945C0.75 6.69102 1.23906 7.86914 2.12344 8.75352C3.00781 9.63945 4.18438 10.127 5.4375 10.127C6.48438 10.127 7.47813 9.78633 8.29219 9.1582L12.35 13.2145C12.3619 13.2264 12.376 13.2358 12.3916 13.2422C12.4071 13.2487 12.4238 13.252 12.4406 13.252C12.4575 13.252 12.4741 13.2487 12.4897 13.2422C12.5052 13.2358 12.5194 13.2264 12.5312 13.2145L13.2125 12.5348C13.2244 12.5229 13.2338 12.5087 13.2403 12.4932C13.2467 12.4776 13.2501 12.461 13.2501 12.4441C13.2501 12.4273 13.2467 12.4106 13.2403 12.3951C13.2338 12.3795 13.2244 12.3654 13.2125 12.3535V12.3535ZM7.9125 7.91445C7.25 8.57539 6.37187 8.93945 5.4375 8.93945C4.50313 8.93945 3.625 8.57539 2.9625 7.91445C2.30156 7.25195 1.9375 6.37383 1.9375 5.43945C1.9375 4.50508 2.30156 3.62539 2.9625 2.96445C3.625 2.30352 4.50313 1.93945 5.4375 1.93945C6.37187 1.93945 7.25156 2.30195 7.9125 2.96445C8.57344 3.62695 8.9375 4.50508 8.9375 5.43945C8.9375 6.37383 8.57344 7.25352 7.9125 7.91445Z" fill="white"/>
            </svg>
            ルート検索
          </button>
        </div>

      </div>

      <div class="content-startInfo content">
        <div class="content-head">
          <span>開始点情報</span>
        </div>
        <hr>
        <div class="startInfo-block">
          <div class="startInfo-depth">
            <span style="float: left">最大浸水深</span>
            <div class="info-value">
              <span id ="depthValue" style="font-size:20px">0.0</span>
              <span style="color: #000000;opacity:0.5;font-size:12px">メートル</span>
            </div>
          </div>
          <div class="startInfo-times">
            <span style="float: left">継続時間</span>
            <div class="info-value">
              <span id ="timeValue" style="font-size:20px">0.0</span>
              <span id ="timeUnit" style="color: #000000;opacity:0.5;font-size:12px">日</span>
            </div>
          </div>
        </div>
        
        
      </div>

      <div class="content-routeInfo content" style="display:none">
        <div class="content-head">
          <span>ルート情報</span>
        </div>
        <hr>

        <div class="route-block">
          <div class="route-contents">
            <div class="routeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M19.625 17.125C19.0709 17.1257 18.5327 17.3102 18.0946 17.6494C17.6566 17.9887 17.3434 18.4637 17.2041 19H9.625C8.96196 19 8.32607 18.7366 7.85723 18.2678C7.38839 17.7989 7.125 17.163 7.125 16.5C7.125 15.837 7.38839 15.2011 7.85723 14.7322C8.32607 14.2634 8.96196 14 9.625 14H17.125C17.9538 14 18.7487 13.6708 19.3347 13.0847C19.9208 12.4987 20.25 11.7038 20.25 10.875C20.25 10.0462 19.9208 9.25134 19.3347 8.66529C18.7487 8.07924 17.9538 7.75 17.125 7.75H9.625C9.45924 7.75 9.30027 7.81585 9.18306 7.93306C9.06585 8.05027 9 8.20924 9 8.375C9 8.54076 9.06585 8.69973 9.18306 8.81694C9.30027 8.93415 9.45924 9 9.625 9H17.125C17.6223 9 18.0992 9.19754 18.4508 9.54917C18.8025 9.90081 19 10.3777 19 10.875C19 11.3723 18.8025 11.8492 18.4508 12.2008C18.0992 12.5525 17.6223 12.75 17.125 12.75H9.625C8.63044 12.75 7.67661 13.1451 6.97335 13.8483C6.27009 14.5516 5.875 15.5054 5.875 16.5C5.875 17.4946 6.27009 18.4484 6.97335 19.1517C7.67661 19.8549 8.63044 20.25 9.625 20.25H17.2041C17.321 20.7028 17.5625 21.1137 17.9012 21.4361C18.2399 21.7585 18.6623 21.9794 19.1202 22.0738C19.5782 22.1682 20.0535 22.1322 20.4921 21.97C20.9306 21.8078 21.3149 21.5259 21.6013 21.1562C21.8877 20.7866 22.0646 20.344 22.1121 19.8788C22.1595 19.4136 22.0756 18.9444 21.8697 18.5246C21.6639 18.1047 21.3444 17.751 20.9476 17.5036C20.5508 17.2562 20.0926 17.125 19.625 17.125Z" fill="#FF0000"/>
              </svg>
            </div>
            <div class="routeInfo">
              <div class="routeInfo-distance">
                <span style="float: left">距離</span>
                <div class="info-value">
                  <span style="font-size:20px">0.0</span>
                  <span style="color: #000000;opacity:0.5;font-size:12px">キロ</span>
                </div>
              </div>
              <div class="routeInfo-time">
                <span style="float: left">歩き</span>
                <div class="info-value">
                  <span style="font-size:20px">00</span>
                  <span style="color: #000000;opacity:0.5;font-size:12px">分</span>
                </div>
              </div>
            </div>
          </div>

          <div class="route-contents">
            <div class="routeIcon">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M19.625 17.125C19.0709 17.1257 18.5327 17.3102 18.0946 17.6494C17.6566 17.9887 17.3434 18.4637 17.2041 19H9.625C8.96196 19 8.32607 18.7366 7.85723 18.2678C7.38839 17.7989 7.125 17.163 7.125 16.5C7.125 15.837 7.38839 15.2011 7.85723 14.7322C8.32607 14.2634 8.96196 14 9.625 14H17.125C17.9538 14 18.7487 13.6708 19.3347 13.0847C19.9208 12.4987 20.25 11.7038 20.25 10.875C20.25 10.0462 19.9208 9.25134 19.3347 8.66529C18.7487 8.07924 17.9538 7.75 17.125 7.75H9.625C9.45924 7.75 9.30027 7.81585 9.18306 7.93306C9.06585 8.05027 9 8.20924 9 8.375C9 8.54076 9.06585 8.69973 9.18306 8.81694C9.30027 8.93415 9.45924 9 9.625 9H17.125C17.6223 9 18.0992 9.19754 18.4508 9.54917C18.8025 9.90081 19 10.3777 19 10.875C19 11.3723 18.8025 11.8492 18.4508 12.2008C18.0992 12.5525 17.6223 12.75 17.125 12.75H9.625C8.63044 12.75 7.67661 13.1451 6.97335 13.8483C6.27009 14.5516 5.875 15.5054 5.875 16.5C5.875 17.4946 6.27009 18.4484 6.97335 19.1517C7.67661 19.8549 8.63044 20.25 9.625 20.25H17.2041C17.321 20.7028 17.5625 21.1137 17.9012 21.4361C18.2399 21.7585 18.6623 21.9794 19.1202 22.0738C19.5782 22.1682 20.0535 22.1322 20.4921 21.97C20.9306 21.8078 21.3149 21.5259 21.6013 21.1562C21.8877 20.7866 22.0646 20.344 22.1121 19.8788C22.1595 19.4136 22.0756 18.9444 21.8697 18.5246C21.6639 18.1047 21.3444 17.751 20.9476 17.5036C20.5508 17.2562 20.0926 17.125 19.625 17.125Z" fill="#FF0000"/>
              </svg>
            </div>
            <div class="routeInfo">
              <div class="routeInfo-distance">
                <span style="float: left">距離</span>
                <div class="info-value">
                  <span style="font-size:20px">0.0</span>
                  <span style="color: #000000;opacity:0.5;font-size:12px">キロ</span>
                </div>
              </div>
              <div class="routeInfo-time">
                <span style="float: left">歩き</span>
                <div class="info-value">
                  <span style="font-size:20px">00</span>
                  <span style="color: #000000;opacity:0.5;font-size:12px">分</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        
      </div>
      
      
      
    </div>
    
  </div>

</body>
<script>
let expanded = false;

function openWrapper(){
  let openBtn = document.getElementsByClassName("open-btn")[0];
  let ElemWrapper = document.getElementById("wrapper");
  if(openBtn.style.display == "none"){
    openBtn.style.display = "block"
    ElemWrapper.style.display = "none"
  }else{
    openBtn.style.display = "none"
    ElemWrapper.style.display = "block"
  }
  expanded = !expanded
  parent.postMessage({ type: "resize", expanded }, "*");
}

let reearth, layers,layerId, locateY, locateX, property;

 


  function fetchStartData(location) {
    const endpoint = property.api.floodurl;
    
    const formdata = new FormData();
    formdata.append("latitude", location.lat);
    formdata.append("longitude", location.lng);
    formdata.append("token", property.api.floodtoken);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    }; 

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
        let res = result;
 
        if(res.status === "200"){
          document.getElementById("depthValue").innerHTML=(Math.round(res.data.depth * 10) / 10).toFixed(1);
          

          let v = (res.data.time / 60).toFixed(1)
          if(v < 24){
            document.getElementById("timeValue").innerHTML=v;
            document.getElementById("timeUnit").innerHTML="時間";
          }else{
            document.getElementById("timeValue").innerHTML=(v/24).toFixed(1);
            document.getElementById("timeUnit").innerHTML="日";
          } 
        }else{
          document.getElementById("depthValue").innerHTML="-";
          
          document.getElementById("timeValue").innerHTML="-";
        }
      });
  }
   
  
 

  async function fetchRouteData(location) {
    const endpoint = property.api.url;
    
    const formdata = new FormData();
    formdata.append("latitude", location.lat);
    formdata.append("longitude", location.lng);
    formdata.append("type", location.type);
    formdata.append("token", property.api.routetoken);
    formdata.append("url", property.api.routeurl);

    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    }; 

    await fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => {
        let res = result;


        var founda = reearth.layers.layers.find(e => e.title === 'Evacuation_Route');
        if (founda === undefined){
          let czmlLayer = reearth.layers.add({
            id:"Route",
            extensionId: "resource",
            type:"resource",
            isVisible: true,
            title: "Evacuation_Route",
            property: {
              default: {
                url : res.czml,
                type : "czml",
                clampToGround : true
              }
            } 
          })
          
          document.getElementById("run-route").dataset.czmlLayerId = czmlLayer;
          
        }else{
          reearth.layers.overrideProperty(founda.id, {
            default: {
              url: res.czml,
              type: "czml",
              clampToGround: true
            }
          });


          document.getElementById("run-route").dataset.czmlLayerId = founda.id;
        };

    }); 

  }

 
 

  
  
async function getLocation(){
  let locateY, locateX;
  await reearth.on('click',(mousedata)=>{
    locateY = parseFloat(mousedata.lat.toFixed(5));
    locateX = parseFloat(mousedata.lng.toFixed(5));

    var foundb = reearth.layers.layers.find(e => e.title === 'start_point');
    if (foundb === undefined){
      let startMarker = reearth.layers.add({
        id:"startPoint",
        extensionId: "marker",
        type:"marker",
        isVisible: true,
        title: "start_point",
        property: { 
          default: {
            location:{
              lat:locateY,
              lng:locateX
            },
            heightReference:"relative",
            height:15,
            label:false,
            style:"point",
            pointColor:"#45FF04",
            pointSize:20,
            labelText: ""
          }
        }
      })
      document.getElementById("inputXY").dataset.startLayerId = startMarker;
    }else{
      reearth.layers.overrideProperty(foundb.id, {
        default: {
          location: {
            lat: locateY,
            lng: locateX
          }
        }
      })

      document.getElementById("inputXY").dataset.startLayerId = foundb.id;

    }

    let location = new Object();
    location.lat = locateY;
    location.lng = locateX;
    fetchStartData(location);
    
    document.getElementById("inputXY").value=location.lat + "," + location.lng;
  });
};
 

 

function getRoute(){
  inputvalue = document.getElementById("inputXY").value;
  elem = document.getElementById("how");
  type = elem.input_how.value;


  locateY = inputvalue.split(",")[0]
  locateX = inputvalue.split(",")[1]

  let location = new Object();
  location.lat = locateY;
  location.lng = locateX;
  location.type = type;

  var founda = reearth.layers.layers.find(e => e.title === 'Evacuation_Route');
  if(founda) {
  reearth.layers.overrideProperty(founda.id, {
    default: {
      url: "",
      type: "czml",
      clampToGround: true
    }
  });
  }
  
  fetchRouteData(location);
}
  





  function setIcon(){
    if (!property || !property.header) return;
    let elemTitle = document.getElementsByClassName("title")[0];
    if (property.header.title){
      elemTitle.innerHTML = property.header.title;
    }else if(property.header.title ===""){
      elemTitle.innerHTML = "浸水避難ルート検索";
      }


    let elemImg = document.getElementsByClassName("headIcon")[0];
    if (property.header.headIcon){
      elemImg.style.display = "inline";
      elemImg.src = property.header.headIcon;
    }else{
      elemImg.style.display="none";
    }

  }


    window.addEventListener("message", e => {
      if (e.source !== parent) return;
      property = e.data.property;
      reearth = e.source.reearth;
      setIcon()

    });

 




 
</script>

`,
  { width: 350, height: 410 });







reearth.on("update", send);
send();


function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property,
    layers: reearth.layers.layers
  });
}




reearth.on("message", msg => {
  if (msg.type === "resize") {
    reearth.ui.resize?.(msg.expanded ? 32 : 350, msg.expanded ? 32 : 400, msg.expanded ? undefined : true);
  }

});
