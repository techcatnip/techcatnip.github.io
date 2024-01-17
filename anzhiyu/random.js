var posts=["posts/4a17b156.html","posts/dfa35092.html","posts/7c4b9639.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };