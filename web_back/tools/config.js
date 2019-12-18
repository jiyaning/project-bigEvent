var BASE_URL = 'http://localhost:8000';

var LOGIN = BASE_URL + '/admin/login'; //用户登录接口
var LOGOUT = BASE_URL + '/admin/logout'; //用户退出登录
var GETUSER = BASE_URL + '/admin/getuser'; //获取用户基本信息
var ARTICLE_COUNT = BASE_URL + '/admin/article_count'; //获取文章数量
var COMMENT_COUNT = BASE_URL + '/admin/comment_count'; //获取评论数量
var GET_USERINFO = BASE_URL + '/admin/userinfo_get'; //获取用户详细信息
var USERINFO_EDIT = BASE_URL + '/admin/userinfo_edit'; //用户信息编辑
var GET_CAT = BASE_URL + '/admin/category_search'; //文章分类数据
var ADD_CAT = BASE_URL + '/admin/category_add'; //新增分类
var EDIT_CAT = BASE_URL + '/admin/category_edit'; //编辑分类
var DEL_CAT = BASE_URL + '/admin/category_delete'; //删除分类
var SERCH = BASE_URL + '/admin/search'; //文章搜索
var COMMENTNUM = BASE_URL + 'admin/comment_search'; //文章评论搜索