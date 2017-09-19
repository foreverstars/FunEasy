export default {
    getHotMoviesData : "v2/movie/in_theaters",                              //获取热门电影
    getHotNewsData :  "http://newsapi.gugujiankong.com/Handler.ashx",                                //获取热门新闻
    getHotMusicsData :  "v1/restserver/ting",                                //获取热门音乐
    getHotBooksData :  "v2/book/search",                               //获取热门书籍
    getSoonMovieData : "v2/movie/coming_soon",
    getTopMovieData :   "v2/movie/top250",
    getNorthMovieData : "v2/movie/us_box",
    getMusicList: "v2/music/search",                                 //获取音乐列表
    getMovieDetail: "v2/movie/subject"                               //获取电影详情
}
//
//获取新闻列表 `http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${opt.type}&count=${opt.count}`
//type = "top"
//count= 10
