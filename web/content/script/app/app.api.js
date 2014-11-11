/// <reference path="../init.js" />
/// <reference path="../lib/jquery/jquery.js" />

/// ---------------------------------------------------------------
/// API Template
/// ---------------------------------------------------------------
var Api = function (options) {
    var self = {};

    self.Options = options;

    // ------------------------------------------------------------
    // Types 
    // ------------------------------------------------------------
    self.Types = {};

    self.Types.User = function (obj) {
        var user = {};

        user.Name = "";
        user.Path = "/user/";
        user.Id = 0;

        if (obj) {
            user = obj;
        }

        return user;
    };

    self.Types.Directory = function (obj) {
        var dir = {};

        dir.Path = "";
        dir.Name = "";
        dir.Icon = "";

        if (obj) {
            dir = obj;
        }

        return dir;
    }

    self.Types.Resource = function (obj) {
        var resource = {};

        resource.Path = "";
        resource.Document = "";
        resource.Meta = {};

        if (obj) {
            resource = obj;
        }

        return resource;
    }

    // ------------------------------------------------------------
    // Actions / Create 
    // ------------------------------------------------------------
    self.Create = {};

    self.Create.User = function (user_type, callback) {
        var obj = new self.Types.User(user_type);

        $.post('api/user/' + obj.Path, obj, function (d, r, t) {
            if (callback) {
                callback(d);
            }
        });
    }

    self.Create.Directory = function (directory_type, callback) {
        var obj = new self.Types.Directory(directory_type);

        $.post('api/directory/' + obj.Path, obj, function (d, r, t) {
            if (callback) {
                callback(d);
            }
        });
    }

    self.Create.Resource = function (resource_type, callback) {
        var obj = new self.Types.Resource(resource_type);

        $.post('api/resource/' + obj.Path, obj, function (d, r, t) {
            if (callback) {
                callback(d);
            }
        });
    }

    // ------------------------------------------------------------
    // Actions / Get 
    // ------------------------------------------------------------
    self.Get = {};

    self.Get.User = function (search_path, callback) {
        var obj = new self.Types.User(user_type);

        $.get('api/user/' + search_path, obj, function (d, r, t) {
            if (callback) {
                callback(d);
            }
        });
    }

    self.Get.Directory = function (search_path, callback) {
        var obj = new self.Types.Directory(directory_type);

        $.get('api/directory/' + search_path, obj, function (d, r, t) {
            if (callback) {
                callback(d);
            }
        });
    }

    self.Get.Resource = function (search_path, callback) {
        var obj = new self.Types.Resource(resource_type);

        $.get('api/resource/' + search_path, obj, function (d, r, t) {
            if (callback) {
                callback(d);
            }
        });
    }

    // ------------------------------------------------------------
    // Actions / update 
    // ------------------------------------------------------------
    self.Update = {};

    self.Update.User = function (user_type, callback) {
        var obj = new self.Types.User(user_type);

        $.ajax({
            type: "PUT",
            url: "api/user/" + obj.Path,
            data: obj
        }).done(function ( data ) {
            if (callback) {
                callback(data);
            }
        });
    }

    self.Update.Directory = function (directory_type, callback) {
        var obj = new self.Types.Directory(directory_type);

        $.ajax({
            type: "PUT",
            url: "api/directory/" + obj.Path,
            data: obj
        }).done(function (data) {
            if (callback) {
                callback(data);
            }
        });
    }

    self.Update.Resource = function (resource_type, callback) {
        var obj = new self.Types.Resource(resource_type);

        $.ajax({
            type: "PUT",
            url: "api/resource/" + obj.Path,
            data: obj
        }).done(function (data) {
            if (callback) {
                callback(data);
            }
        });
    }

    // ------------------------------------------------------------
    // Actions / Delete 
    // ------------------------------------------------------------
    self.Delete = {};

    self.Delete.User = function (user_type, callback) {
        var obj = new self.Types.User(user_type);

        $.ajax({
            type: "DELETE",
            url: "api/user/" + obj.Path,
            data: obj
        }).done(function (data) {
            if (callback) {
                callback(data);
            }
        });
    }

    self.Delete.Directory = function (directory_type, callback) {
        var obj = new self.Types.Directory(directory_type);

        $.ajax({
            type: "DELETE",
            url: "api/directory/" + obj.Path,
            data: obj
        }).done(function (data) {
            if (callback) {
                callback(data);
            }
        });
    }

    self.Delete.Resource = function (resource_type, callback) {
        var obj = new self.Types.Resource(resource_type);

        $.ajax({
            type: "DELETE",
            url: "api/resource/" + obj.Path,
            data: obj
        }).done(function (data) {
            if (callback) {
                callback(data);
            }
        });
    }

    return self;
};

Application.Api = new Api({
    server_path: "/api"
});