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

> 写在前头

## 彻底隐藏文章

如果你有这样的需求：你是在本地博客目录直接做笔记，但是某篇笔记不想发布

在`front-matter`做如下设置即可

```markdown
---
published: false
---
```

## 某篇文章输入密码才可以查看

如果你有这样的需求：某篇文章发布了，但是需要用户输入特定密码才能看到内容

> 待研究研究，但是没有后台理论上加密是无效的，君子协议罢了。



## 某篇文章添加置顶

> 怎么添加置顶标签自行百度

如果你有这样的需求：某篇文章觉得写的不错，或者想让访客第一时间关注到

在`front-matter`做如下设置即可。
```markdown
---
title: example
top: 100 或者 top: true 或者 sticky: 100 或者 ticky: true  
---
```
## 文章在首页隐藏掉

> 并不是完全隐藏，通过特定文章链接还是可以访问到

如果你有这样的需求：首页中不想看到某篇文章，把它放到专栏里，或者说在其他入口访问。

在 `front-matter` 中添加设置：

```markdown
---
title: example
hidden: true
---
```

在 `_config.yml` 中添加配置：

```yaml
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

比如：设置 `filter: secret` 之后，你就可以在 `front-matter` 中使用 `secret: true` 来隐藏文章了。

> 注意：不是所有插件注册的 generator 名称都与其插件名称相同。比如 hexo-generator-searchdb 插件，其注册的 generator 名称就是 xml 和 json，而非 searchdb。因此，在填写 public_generators 参数时要注意使用插件实际注册的 generator 名称（可以查阅对应插件的源码来获取准确的注册名）。



## 某个分类在首页隐藏掉

> 并不是完全隐藏，通过特定文章链接还是可以访问到

如果你有这样的需求：只要某篇文章设置了某个特定的分类，就可以不显示在首页

在 `_config.yml` 中可以通过 `hide_categories` 选项设置隐藏某个分类下的文章，**让他在首页不显示**
```markdown
hide_categories:
  - category1
  - category2
```



## 本地查看所有不在首页显示的文章

命令行运 `hexo hidden:list` 可以查看当前站点设置`hidden: true`的文章。 

插件也在 [Local Variables](https://hexo.io/api/locals) 中添加了 `all_posts` 和 `hidden_posts` 变量，供自定义主题使用。
