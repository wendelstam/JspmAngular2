var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var DemoComponent = (function () {
    function DemoComponent(params) {
        var _this = this;
        setInterval(function () { return _this.time = new Date().toLocaleTimeString(); }, 1000);
        this.paramValue = params.get("idParam");
    }
    DemoComponent = __decorate([
        angular2_1.Component({
            selector: 'demo',
            template: "<div>\n\t\t\t\t<h3>Hi from demo component @ {{time}}</h3>\n\t\t\t   \t<p>{{paramValue}}</p>\n\t\t\t   </div>",
            styles: ["div {\n\t\t\t\t\tbackground-color: light-gray;\n\t\t\t\t\tcolor: green;\n\t\t\t\t\tfont-family: Verdana;\n\t\t\t\t }"]
        }), 
        __metadata('design:paramtypes', [router_1.RouteParams])
    ], DemoComponent);
    return DemoComponent;
})();
exports.DemoComponent = DemoComponent;
