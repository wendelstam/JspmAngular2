/* */ 
'use strict';
var __extends = (this && this.__extends) || function(d, b) {
  for (var p in b)
    if (b.hasOwnProperty(p))
      d[p] = b[p];
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    return Reflect.decorate(decorators, target, key, desc);
  switch (arguments.length) {
    case 2:
      return decorators.reduceRight(function(o, d) {
        return (d && d(o)) || o;
      }, target);
    case 3:
      return decorators.reduceRight(function(o, d) {
        return (d && d(target, key)), void 0;
      }, void 0);
    case 4:
      return decorators.reduceRight(function(o, d) {
        return (d && d(target, key, o)) || o;
      }, desc);
  }
};
var __metadata = (this && this.__metadata) || function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(k, v);
};
var dom_adapter_1 = require('../core/dom/dom_adapter');
var angular2_1 = require('../../angular2');
var location_strategy_1 = require('./location_strategy');
var PathLocationStrategy = (function(_super) {
  __extends(PathLocationStrategy, _super);
  function PathLocationStrategy() {
    _super.call(this);
    this._location = dom_adapter_1.DOM.getLocation();
    this._history = dom_adapter_1.DOM.getHistory();
    this._baseHref = dom_adapter_1.DOM.getBaseHref();
  }
  PathLocationStrategy.prototype.onPopState = function(fn) {
    dom_adapter_1.DOM.getGlobalEventTarget('window').addEventListener('popstate', fn, false);
  };
  PathLocationStrategy.prototype.getBaseHref = function() {
    return this._baseHref;
  };
  PathLocationStrategy.prototype.prepareExternalUrl = function(internal) {
    return this._baseHref + internal;
  };
  PathLocationStrategy.prototype.path = function() {
    return this._location.pathname + location_strategy_1.normalizeQueryParams(this._location.search);
  };
  PathLocationStrategy.prototype.pushState = function(state, title, url, queryParams) {
    this._history.pushState(state, title, (url + location_strategy_1.normalizeQueryParams(queryParams)));
  };
  PathLocationStrategy.prototype.forward = function() {
    this._history.forward();
  };
  PathLocationStrategy.prototype.back = function() {
    this._history.back();
  };
  PathLocationStrategy = __decorate([angular2_1.Injectable(), __metadata('design:paramtypes', [])], PathLocationStrategy);
  return PathLocationStrategy;
})(location_strategy_1.LocationStrategy);
exports.PathLocationStrategy = PathLocationStrategy;
