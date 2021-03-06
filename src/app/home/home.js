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
var tabs_1 = require("./../tab/tabs");
var HomeComponent = (function () {
    function HomeComponent() {
        var _this = this;
        setInterval(function () { return _this.time = new Date().toLocaleTimeString(); }, 1000);
    }
    HomeComponent = __decorate([
        angular2_1.Component({
            selector: 'home',
            template: "\n\t\t\t\t<h1>Hi from home container @ {{time}}</h1>\n\t\t\t\t<tabs>\n\t\t\t\t\t<tab tab-title=\"Foo\">\n\t\t\t\t\t\tContent of tab Foo\n\t\t\t\t\t</tab>\n\t\t\t\t\t<tab tab-title=\"Bar\">\n\t\t\t\t\t\tContent of tab Bar\n\t\t\t\t\t</tab>\n\t\t\t\t</tabs>\n\t\t\t\t",
            directives: [tabs_1.TABS_DIRECTIVES],
            styles: ["h1 { \n\t\t\t\t\tcolor: grey;\n\t\t\t\t\tfont-size: 19px;\n\t\t\t\t\tfont-family: Verdana;\n\t\t\t\t }"]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
