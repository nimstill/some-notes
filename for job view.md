<section> 写文章的时候会经常用到，w3school的说法是：文档中的节（section、区段）。比如章节、页眉、页脚或文档中的其他部分。

input, 详细文档

可以指定 type 为 url, email, 可以方便地检测用户输入。还是指定为 file, submit, button, checkbox, radio, datetime, color等，改变input的样式和行为。
可以通过 value 属性指定初始值
宽高只能通过 CSS 指定


textarea, 详细文档

可以输入多行文字
输入值初始化需要用标签对包裹，并可以夹杂 HTML 代码，而不会被浏览器解析
<textarea><h1>h1</h1></textarea>
宽高能用 CSS 或 rows, cols 指定
相同：

都可以使用 maxlength, minlength等限制输入

用一个div模拟textarea的实现

加个 contenteditable 属性就行（不知道是不是出题人的意思）。

忽略页面中的电话号码

<meta name="format-detection" content="telephone=no" />

animation: 动画，3D可以调用硬件渲染。
新的长度单位：rem， ch，vw，vh，vmax，vmin 等。
clip-path: 绘制路径，类似SVG技术。 国外炫酷产品。
flex: flex布局，继 table 和 div 后的趋势，不了解或不熟悉的可以参考cssreference。
伪类选择器：如::target, :enabled, :disabed, :first-child, last-child等等
@media 媒体查询，适用于一些响应式布局中
columns: 分栏布局。
will-change: 改善渲染性能, 参考使用CSS3 will-change提高页面滚动、动画等渲染性能。

