var user = {
    //用户登录
    login: function(options) {
        $.ajax({
            type: "POST",
            url: LOGIN,
            data: {
                user_name: options.data.username,
                password: options.data.password
            },
            success: function(res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },
    //用户退出
    logout: function(options) {
        $.ajax({
            type: "POST",
            url: LOGOUT,
            success: function(res) {
                if (res.code = 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    //获取用户基础信息
    getuser: function(options) {
        $.ajax({
            type: "GET",
            url: GETUSER,
            success: function(res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    //获取用户详细信息
    getUserInfo: function(options) {
        $.ajax({
            type: "GET",
            url: GET_USERINFO,
            success: function(res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        })
    },
    userInfoEdit: function(options) {
        $.ajax({
            type: "POST",
            url: USERINFO_EDIT,
            data: options.fd,
            contentType: false,
            processData: false,
            success: function(res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    }
}