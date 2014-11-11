
/// <reference path="../lib/jquery/jquery.min.js" />
/// <reference path="../lib/jstree/jstree.min.js" />
/// <reference path="../lib/bootstrap-editor/bootstrap3-wysihtml5.js" />
/// <reference path="../init.js" />
console.log('tree js loaded');

var Tree = function (options) {

    var self = {};

    self.Data = {};

    self.GetDirectory = function (callback) {
        $.get('api/directory', {}, function (data) {

            self.Data = data;

            if (callback) {
                callback(data);
            }
        });
    }

    self.BindTree = function () {
        // Destroy the tree
        $('#directory').empty().off();

        $('#directory').on('changed.jstree', function (e, data) {
            console.log(data.node.original);

            var $content = $('#_content');

            if (data.node.original.type == "list") {
                $content.load('/documents');
            }

            if (data.node.original.type == "resource") {
                $content.load('/editor');
            }
            
        });

        // Load the Tree 
        $('#directory').jstree({
            'core': {
                'data': self.Data
            }
        });
    };

    self.OpenDocument = function () {

    };
    
    self.GetDirectory(self.BindTree);

    return self;
}


Application.tree = new Tree({

});