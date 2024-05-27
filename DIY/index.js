 // 获取JSON数据
 fetch("index.json")
 .then((response) => response.json())
 .then((data) => {
   const container = document.getElementById("container");

   data.forEach(function (item) {
     // 遍历JSON数据，动态生成HTML元素并插入到页面中
     const centerDiv = document.createElement("div");
     centerDiv.className = "center";

     const wDiv = document.createElement("div");
     wDiv.className = "w";

     const nameDiv = document.createElement("div");
     nameDiv.className = "m";
     nameDiv.id = "name";
     nameDiv.innerText = "作品名：" + item.name;

     const bhDiv = document.createElement("div");
     bhDiv.className = "m";
     bhDiv.id = "bh";
     bhDiv.innerText = "编号：" + item.bh;

     const jsyDiv = document.createElement("div");
     jsyDiv.className = "jsy";
     jsyDiv.id = "jsy";
     jsyDiv.innerText = "介绍：" + item.jsy;

     const videoContainer = document.createElement("div");
     videoContainer.className = "video-container";

     const video = document.createElement("video");
     video.controls = true;
     video.ended = true;
     video.timeupdate = true;

     const source = document.createElement("source");
     source.id = "sp";
     source.type = "video/mp4";
     source.src = item.sp;

     video.appendChild(source);
     videoContainer.appendChild(video);
     wDiv.appendChild(nameDiv);
     wDiv.appendChild(bhDiv);
     wDiv.appendChild(jsyDiv);
     centerDiv.appendChild(wDiv);
     centerDiv.appendChild(videoContainer);
     container.appendChild(centerDiv);
   });
 })
 .catch((error) => console.error("Error fetching data:", error));

var video = document.getElementById("sp");

// 监听页面可见性变化
document.addEventListener("visibilitychange", function () {
 if (document.hidden) {
   // 页面不可见，暂停视频
   video.pause();
 } else {
   // 页面可见，恢复播放
   video.play();
 }
});