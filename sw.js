self.addEventListener('fetch', (event) => {
  event.respondWith(
    // 从缓存中获取内容
    caches.match(event.request).then((cache) => {
      // 返回匹配的缓存，如无则尝试请求
      return cache || fetch(event.request).then((res) => {
        // 打开缓存，如无则自动创建一个空缓存并返回
        return caches.open('restaurant-stage').then((cache) => {
          const fetchUrl = event.request.url;

          // 添加缓存条目（存储副本），只缓存向本地服务器请求的资源
          if (fetchUrl.startsWith('http://localhost')
            || fetchUrl.startsWith('http://127.0.0.1')) {
            cache.put(event.request, res.clone());
          }

          return res;
        });
      });
    })
  )
});