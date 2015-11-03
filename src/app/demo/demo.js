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
var DemoComponent = (function () {
    function DemoComponent() {
        var _this = this;
        setInterval(function () { return _this.time = new Date().toLocaleTimeString(); }, 1000);
    }
    DemoComponent = __decorate([
        angular2_1.Component({
            selector: 'demo',
            template: "<h1>Hi from demo @ {{time}}</h1>",
            styles: ["h1 { \n\t\t\t\t\tcolor: grey;\n\t\t\t\t\tfont-size: 19px;\n\t\t\t\t\tfont-family: Verdana;\n\t\t\t\t }"]
        }), 
        __metadata('design:paramtypes', [])
    ], DemoComponent);
    return DemoComponent;
})();
exports.DemoComponent = DemoComponent;
