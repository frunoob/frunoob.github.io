---
layout: false
---
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/frunoob/Library@master/blog/js/video.css">

  <video id="my_video_1" class="video-js vjs-default-skin" controls preload="auto" 
  data-setup='{}'>
      <track default
           kind="captions"
           srclang="no"
           label="english and chinese"
           src="https://cdn.jsdelivr.net/gh/frunoob/videos-2/TheShawshankRedemption/XiaoShenKeDeJiuShu.vtt" />
    <source src="https://cdn.jsdelivr.net/gh/frunoob/videos-2/TheShawshankRedemption/playlist.m3u8" type="application/x-mpegURL">
  </video>
<script src="https://cdn.jsdelivr.net/gh/frunoob/Library@master/blog/js/hls.js"></script>
<script src="https://cdn.jsdelivr.net/gh/frunoob/Library@master/blog/js/hls-videos.js"></script>
<script>
var player = videojs('vid1');
player.play();
</script>