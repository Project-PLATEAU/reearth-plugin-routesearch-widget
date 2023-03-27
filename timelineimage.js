reearth.ui.show(`
  <style>


    html,body {
      margin: 0;
      width:270px;
      font-size:14px;
    }
    #wrapper {
      display:inline-block;
      height: 100%;
      border-radius: 1px;
      width:100%;
      background:#F0F0F0;
    }
    .clockdiv{
      width:auto;
      height: auto;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      text-align:center;
      background:rgb(23, 22, 24);
      color:rgb(191, 191, 191);
    }

    #fig{
      object-fit: contain;
      display:none;
      background:rgb(23, 22, 24);
    }


    .close-btn{
      width:32px;
      height:32px;
      padding:2.4px;
      font-size:16px;
      cursor: pointer;
      color:#fff;
      border:1px rgb(0, 190, 190) solod;
      background:rgb(23, 22, 24);
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
      background:rgb(23, 22, 24);
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      box-shadow: 0 1px 0 rgb(0 0 0 / 5%);
      border: 1px solid #d9d9d9;
    }
    
    

  </style>
<body> 
  <div id="wrappe3r">
    <button type="button" class="open-btn" style="display: none; border: none;" onclick="openWrapper()"><span role="img" aria-label="menu" class="anticon anticon-menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="14" cy="14" r="13.5" stroke="rgb(191, 191, 191)" stroke-width="2"/>
      <circle cx="14" cy="14" r="3" fill="rgb(191, 191, 191)"/>
      <path d="M14 3L14.866 12H13.134L14 3Z" fill="rgb(191, 191, 191)"/>
      <path d="M23 14L14 14.866V13.134L23 14Z" fill="rgb(191, 191, 191)"/>
      </svg>
    </span></button>
  </div>
  <div id="wrapper">
    <div>
      <button type="button" class="close-btn" style="position: absolute; right: 0px; border-radius: 0px;" onclick="openWrapper()"><span role="img" aria-label="close" class="anticon anticon-close"><svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span></button>
    </div>
    <div class="clockdiv">
      <span id="prefix"></span><span class="clock">0:00:00</span>
    </div>
    <img id="fig" src="" width="270px" height="210px">
  </div>

</body>
<script>

let reearth, clock, imgList;


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
}



window.addEventListener("message", e => {
  if (e.source !== parent) return;
  reearth = e.source.reearth;
  clock = e.source.reearth.clock;   
  imgList = e.data.widget.imglist;

  if (e.data.widget.header && e.data.widget.header.prefix){
    document.getElementById("prefix").innerHTML= e.data.widget.header.prefix;
  }else{
    document.getElementById("prefix").innerHTML= "";
  }

  if (e.data.widget.header && e.data.widget.header.textColor){
    document.getElementsByClassName("clockdiv")[0].style.color = e.data.widget.header.textColor;
  }else{
    document.getElementsByClassName("clockdiv")[0].style.color = "rgb(191, 191, 191)";
  }

  if (e.data.widget.header && e.data.widget.header.bgColor){
    document.getElementsByClassName("clockdiv")[0].style.background = e.data.widget.header.bgColor;
    document.getElementById("fig").style.background = e.data.widget.header.bgColor;
  }else{
    document.getElementsByClassName("clockdiv")[0].style.background = "rgb(23, 22, 24)";
    document.getElementById("fig").style.background = "rgb(23, 22, 24)";
  }


  let elmClock = document.getElementsByClassName("clock")[0];
 

  


  function refreshTime(){
    let currentTime = reearth.clock.currentTime
    let diff  = (reearth.clock.currentTime)-(reearth.clock.startTime);

    //HH部分取得
    let diffHour = (diff / (1000 * 60 * 60));
    //MM部分取得
    let diffMinute = (diffHour - Math.floor(diffHour)) * 60;
    //SS部分取得
    let diffSecond = (diffMinute - Math.floor(diffMinute)) * 60;
    let diffClock =('00' + Math.floor(diffHour)).slice(-2) + ':' + ('00' + Math.floor(diffMinute)).slice(-2) + ':' + ('00' + Math.round(diffSecond)).slice(-2);


    elmClock.innerHTML =diffClock;

  }

  function refleshImg(){
    let elmImg = document.getElementById("fig");

    if(imgList && imgList.length>0){
      let currentTime = reearth.clock.currentTime
      const foundImg = imgList.find((v) => new Date(v.start) <= currentTime && currentTime < new Date(v.stop));

      if(foundImg){
        elmImg.style.display = "block"
        elmImg.setAttribute('src', foundImg.image);
        currentImg = foundImg.image;
      } else{
        elmImg.style.display = "none"
      }
    }
  }

  var intervalId = setInterval(refreshTime, e.data.widget.header.interval *1000);
  var intervalId = setInterval(refleshImg,  e.data.widget.header.interval *1000);

  
    

});



</script>

`);


reearth.on("update", send);
send();

function send() {
  reearth.ui.postMessage({
    reearth: reearth,
    widget: reearth.widget.property
  });
}
