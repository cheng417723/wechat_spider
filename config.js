﻿'use strict';



var config = {
  mongodb: {
    db: 'mongodb://127.0.0.1:27017/wechat_spider'
  },


  insertJsToNextPage: {
    disable: false,
    jumpInterval: 2,
    minTime: new Date(2017, 0, 1),
    maxTime: new Date(2017, 10, 1),
    isCrawlExist: true,
    // if true updateNumAt - publishAt
    crawlExistInterval: 1000*60*60*24*3,
    targetBiz: []
  },
  insertJsToNextProfile: {
    disable: false,
    jumpInterval: 5,
    // 抓取到minTime 就跳转至下一公众号
    minTime: new Date(2016, 11, 31),
    // 自定义最近多久更新的公众号本次就不用抓取
    maxUpdatedAt: new Date(2017, 9, 28),
    targetBiz: [],
    // 程序开始时间
    beginTime: new Date()
  }
};

config.insertJsToNextProfile.targetBiz = require('./targetProfileBiz.json');
config.insertJsToNextPage.targetBiz = require('./targetProfileBiz.json');

module.exports = config;