/************\
 * 缓存资源 *
\************/
self.addEventListener('fetch', (event) => {
  // console.log(caches);
  event.respondWith(
    // new Response('hello world')
    // 从缓存中获取内容
    caches.match(event.request).then((cache) => {
      // console.info(cache);
      // 返回匹配的缓存，如无则尝试请求
      return cache || fetch(event.request).then((res) => {
        // console.log(res);
        // 打开缓存，如无则自动创建一个空缓存并返回
        return caches.open('restaurant-stage').then((cache) => {
          // 添加缓存条目（存储副本）
          cache.put(event.request, res.clone());
          return res;
        });
      });
    })
  )
});