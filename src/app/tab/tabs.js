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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var Tabs = (function () {
    function Tabs() {
        this.tabs = [];
    }
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    Tabs.prototype.selectTab = function (tab, $event) {
        $event.preventDefault();
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
    };
    Tabs = __decorate([
        angular2_1.Component({
            selector: 'tabs',
            template: "\n\t\t<div>\n\t\t\t<ul class=\"nav nav-tabs\">\n\t\t\t\t<li *ng-for=\"#tab of tabs\" (click)=\"selectTab(tab, $event)\" [ng-class]=\"{active : tab.active}\">\n\t\t\t\t\t<a>{{tab.tabTitle}}</a>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t\t<div tab-content class=\"tabContent\">\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t",
            styles: ['.tabContent { padding: 30px; }'],
            directives: [angular2_1.NgFor, angular2_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
var Tab = (function () {
    function Tab(tabs) {
        tabs.addTab(this);
    }
    Tab = __decorate([
        angular2_1.Component({
            selector: 'tab',
            properties: ['tabTitle: tab-title'],
            template: "\n\t\t<div [hidden]=\"!active\" class=\"tab-pane\" [class.active]=\"active\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t",
            directives: [angular2_1.NgClass]
        }),
        __param(0, angular2_1.Host()), 
        __metadata('design:paramtypes', [Tabs])
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;
exports.TABS_DIRECTIVES = [Tabs, Tab];
