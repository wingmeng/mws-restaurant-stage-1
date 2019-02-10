# Restaurant Reviews: Stage 1（餐厅点评 APP —— 阶段1）
----

> @Wing Meng

## 需求实现清单

1. 响应式设计
    - 提供 mobile、desktop、wide screen 等显示设备的展示支持；
    - 在保障美观的前提下，尽可能的利用实际屏幕空间；
    - 图片按视口尺寸等比缩放大小；
    - 首页的 restaurants list 根据屏幕宽度自动调整每行显示列数；
    - 详情页根据屏幕宽度自动切换两种视图模式。

2. 可访问性
    - 为图像设置替代文本；
    - 采用可焦点访问的标签元素；
    - 调整了部分 HTML 结构，使用更加语义化的标签，如 article、figure 等；
    - 对于非语义元素，按适当的ARIA roles定义。

3. 离线访问
    - 建立缓存（Caches），存储所有请求结果

4. 其他
    - 细节美化
    - 为网站使用更加合理的字体集

## 用到的第三方库

- [Normalize.css](http://necolas.github.io/normalize.css/)
- [Leaflet](https://leafletjs.com/)
- [Mapbox](https://www.mapbox.com/)
