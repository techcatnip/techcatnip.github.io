var posts=["posts/2013454d.html","posts/217c81a9.html","posts/ec80583f.html","posts/4a17b156.html","posts/dfa35092.html","posts/7c4b9639.html","posts/da20005e.html","posts/ec805823.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };