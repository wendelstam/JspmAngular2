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
var EventTestComponent = (function () {
    function EventTestComponent() {
        var _this = this;
        this.randomEvent = new angular2_1.EventEmitter();
        this.clickEvent = new angular2_1.EventEmitter();
        this.someState = 'x';
        setInterval(function () { return _this.randomEvent.next({ value: Math.random() }); }, (Math.random() * 100000));
    }
    EventTestComponent.prototype.triggerEvent = function () {
        this.clickEvent.next({ value: 'clicked at ' + new Date().toLocaleTimeString() });
    };
    __decorate([
        angular2_1.Output('somethingHappened'), 
        __metadata('design:type', Object)
    ], EventTestComponent.prototype, "randomEvent");
    __decorate([
        angular2_1.Output('clickEvent'), 
        __metadata('design:type', Object)
    ], EventTestComponent.prototype, "clickEvent");
    __decorate([
        angular2_1.Input('someState'), 
        __metadata('design:type', String)
    ], EventTestComponent.prototype, "someState");
    EventTestComponent = __decorate([
        angular2_1.Component({
            selector: 'event-test',
            template: "\n\t\t<div>\n\t\t\t<a class=\"btn btn-md btn-primary\" (click)=\"triggerEvent()\">Trigger event</a>\n\t\t\t<p>{{someState}}</p>\n\t\t</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], EventTestComponent);
    return EventTestComponent;
})();
exports.EventTestComponent = EventTestComponent;
