'use strict';

const chalk = require('chalk');

// 打印隐藏文章列表
function getHiddenList() {
  // 获取 config.yml 配置的 hide_posts 变量
  const config = this.config.hide_posts;

  this.load().then(() => {
    [].concat(
      this.locals.get('hidden_posts').toArray(),
      this.locals.get('pages').find({ [config.filter]: true }).toArray()
    ).forEach(post => {
      console.log('');
      // Print properties
      ['source', 'slug', 'title', 'date', 'updated'].forEach(prop => {
        console.log(`${chalk.green(prop)}: ${post[prop]}`);
      });
    });
  });
}

module.exports = getHiddenList;
