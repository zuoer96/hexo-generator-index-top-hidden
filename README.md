# hexo-generator-index-top-hidden
![npm-image](https://img.shields.io/npm/v/hexo-generator-index-top-hidden?style=flat-square)
![lic-image](https://img.shields.io/npm/l/hexo-generator-index-top-hidden?style=flat-square)

hexo 插件：置顶、隐藏文章、隐藏分类


# 安装
![size-image](https://img.shields.io/github/languages/code-size/zuoer96/hexo-generator-index-top-hidden?style=flat-square)
![dm-image](https://img.shields.io/npm/dm/hexo-generator-index-top-hidden?style=flat-square)
![dt-image](https://img.shields.io/npm/dt/hexo-generator-index-top-hidden?style=flat-square)

``` bash
$ npm install hexo-generator-index-top-hidden --save
```

# 用法
## 置顶某篇文章
在文章的 Front-matter 中增加一个 sticky 参数用来置顶，其值应为大于0的整数，表示置顶的优先级（未指定则默认为 0）。数字越大，文章越靠前。
```
---
title: example
sticky: 100
---
```
或者
```
---
title: example
top: 100
---
```
## 隐藏文章
在 _config.yml 中添加配置：

```
hide_posts:
  enable: true
  # 自定义隐藏的标识名称
  filter: hidden
  # 指定你想要传递隐藏文章的 generator，比如让所有隐藏文章在存档页面可见
  # 常见的 generators 有：index, tag, category, archive, sitemap, feed, etc.
  public_generators: []
  # 为隐藏的文章添加 noindex meta 标签，阻止搜索引擎收录
  noindex: true
```

比如：设置 filter: secret 之后，你就可以在 front-matter 中使用 secret: true 来隐藏文章了。

注意：不是所有插件注册的 generator 名称都与其插件名称相同。比如 hexo-generator-searchdb 插件，其注册的 generator 名称就是 xml 和 json，而非 searchdb。因此，在填写 public_generators 参数时要注意使用插件实际注册的 generator 名称（可以查阅对应插件的源码来获取准确的注册名）。

## 隐藏单篇文章
当一篇文章被设置为「隐藏」时，它不会出现在任何列表中（包括首页、存档、分类页面、标签页面、Feed、站点地图等），也不会被搜索引擎索引（前提是搜索引擎遵守 noindex 标签）。

只有知道文章链接的人才可以访问被隐藏的文章。

```
---
title: example
hidden: true
---
```
虽然首页上被隐藏了，但你仍然可以通过 https://域名/文章url/ 链接访问它。（如果想要完全隐藏一篇文章，可以直接将其设置为[草稿](https://hexo.io/zh-cn/docs/writing.html#%E8%8D%89%E7%A8%BF)）

## 本地查看所有隐藏文章
hexo hidden:list

你可以在命令行运行 hexo hidden:list 来获取当前所有的已隐藏文章列表。

插件也在 [Local Variables](https://hexo.io/api/locals) 中添加了 all_posts 和 hidden_posts 变量，供自定义主题使用。

<!-- ## 隐藏某个分类
在 Hexo 的 _config.yml 中可以通过 hide_categories 选项设置隐藏某个分类下的文章
```
hide_categories:
  - category1
  - category2
``` -->