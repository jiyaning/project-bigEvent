var article = {
    getCat: function(options) {
        $.ajax({
            url: GET_CAT,
            success: function(res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        });
    },
    addCat: function(options) {
        $.ajax({
            type: "POST",
            url: ADD_CAT,
            data: options.data,
            success: function(res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    editCat: function(options) {
        $.ajax({
            type: "POST",
            url: EDIT_CAT,
            data: options.data,
            success: function(res) {
                console.log(res);
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },
    delCat: function(options) {
        $.ajax({
            type: "post",
            url: DEL_CAT,
            data: {
                id: options.id
            },
            success: function(res) {
                if (res.code === 200) {
                    options.success();
                }
            }
        })
    },
    getArticle: function(options) {
        $.ajax({
            url: SERCH,
            data: {
                page: options.page,
                type: options.type,
                state: options.state
            },
            success: function(res) {
                if (res.code === 200) {
                    options.success(res);
                }
            }
        });
    }
}