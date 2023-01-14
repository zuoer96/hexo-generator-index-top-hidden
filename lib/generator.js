'use strict';

const pagination = require('hexo-pagination');
// const { sort } = require('timsort');

module.exports = function(locals) {
  const config = this.config;
  const posts = locals.posts.sort(config.index_generator.order_by); // 所有文章

  //
  posts.data = posts.data.filter(item => {
    if (item.hide) {
      return false;
    }
    if (config.hide_categories && item.categories.length) {
      for (const category of item.categories.data) {
        if (config.hide_categories.includes(category.name)) {
          return false;
        }
      }
    }
    return true;
  });
  posts.length = posts.data.length;

  // 支持top: true/num
  posts.data = posts.data.sort((a, b) => (b.top || 0) - (a.top || 0));
  // 支持 sticky: true/num
  posts.data = posts.data.sort((a, b) => (b.sticky || 0) - (a.sticky || 0));
  // sort(posts.data, (a, b) => (b.sticky || 0) - (a.sticky || 0));

  const paginationDir = config.pagination_dir || 'page';// pagination_dir: page #分页文件夹名称
  const path = config.index_generator.path || '';// 路径 缺省为空

  return pagination(path, posts, {
    perPage: config.index_generator.per_page, // 找的是 _config.yml里面index_generator的per_page
    layout: ['index', 'archive'],
    format: paginationDir + '/%d/',
    data: {
      __index: true
    }
  });
};
