var express = require('express');
var axios = require('axios');
var apiRoutes = express.Router();

apiRoutes.get('/getHotKey', (req, res) => {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg';
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com',
    },
    params: req.query
  }).then((response) => {
    res.json(response.data);
  }).catch((err) => {
    console.log(err + '热搜词汇请求失败');
  })
});
apiRoutes.get('/getSearch', (req, res) => {
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp';
  axios.get(url, {
    headers: {
      referer: 'https://c.y.qq.com',
      host: 'c.y.qq.com',
    },
    params: req.query
  }).then((response) => {
    res.json(response.data);
  }).catch((err) => {
    console.log(err + ' 搜索歌曲歌手失败');
  })
})
module.exports = apiRoutes;

