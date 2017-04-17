define(["require", "exports"], function (require, exports) {
    "use strict";
    var uploadDirectiveModule;
    (function (uploadDirectiveModule) {
        var uploadDirective = (function () {
            function uploadDirective($parse) {
                this.$parse = $parse;
                this.restrict = 'A';
            }
            uploadDirective.prototype.link = function (scope, element, attrs) {
                var model = this.$parse(attrs['mbFile']);
                var modelSetter = model.assign;
                element.bind('change', function () {
                    scope.$apply(function () {
                        modelSetter(scope, element[0].files[0]);
                    });
                });
            };
            return uploadDirective;
        }());
        uploadDirectiveModule.uploadDirective = uploadDirective;
    })(uploadDirectiveModule = exports.uploadDirectiveModule || (exports.uploadDirectiveModule = {}));
});
//# sourceMappingURL=upload.directive.js.map