/// <reference path="lib/director/director.js" />
/// <reference path="lib/head.js/1.0.0/head.js" />

// ------------------------------------------------------------------------------------
// Load Libraries
// ------------------------------------------------------------------------------------
head.load(
    'script/lib/director/director.min.js',
    'script/lib/jquery/jquery.min.js',
    'script/lib/bootstrap/bootstrap.min.js',
    'script/lib/bootstrap-editor/bootstrap3-wysihtml5.all.min.js',
    'script/lib/jstree/jstree.min.js',

    function () {
        console.log('libraries loaded');
    }
);

// ------------------------------------------------------------------------------------
// Load Application
// ------------------------------------------------------------------------------------
var Application = {};

Application.routes = {
    '/account': Application.Account,
    '/tree' : Application.Tree
}

head.load(
    'script/app/app.user.js',
    'script/app/app.tree.js',
    'script/app/app.editor.js',
    function () {
        // Now that all Application Modules have been loaded...
        console.log('application loaded');
        Application.Router = new Router(Application.routes);
    }
);



