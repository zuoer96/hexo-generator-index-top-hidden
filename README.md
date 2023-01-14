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
## 指定某篇文章
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

## 隐藏单篇文章
在文章的 Front-matter 中增加一个 hide 参数用来隐藏。
```
---
title: example
hide: true
---
```

## 隐藏某个分类
在 Hexo 的 _config.yml 中可以通过 hide_categories 选项设置隐藏某个分类下的文章
```
hide_categories:
  - category1
  - category2
```