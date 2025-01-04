var posts=["2025/01/01/Love/","2025/01/01/更新日志/","2024/12/29/前言/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };