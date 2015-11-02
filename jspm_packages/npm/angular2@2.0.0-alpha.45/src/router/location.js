/* */ 
'use strict';
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
var __param = (this && this.__param) || function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var location_strategy_1 = require('./location_strategy');
var lang_1 = require('../core/facade/lang');
var async_1 = require('../core/facade/async');
var lang_2 = require('../core/facade/lang');
var exceptions_1 = require('../core/facade/exceptions');
var angular2_1 = require('../../angular2');
exports.APP_BASE_HREF = lang_1.CONST_EXPR(new angular2_1.OpaqueToken('appBaseHref'));
var Location = (function() {
  function Location(platformStrategy, href) {
    var _this = this;
    this.platformStrategy = platformStrategy;
    this._subject = new async_1.EventEmitter();
    var browserBaseHref = lang_1.isPresent(href) ? href : this.platformStrategy.getBaseHref();
    if (lang_2.isBlank(browserBaseHref)) {
      throw new exceptions_1.BaseException("No base href set. Either provide a provider for the APP_BASE_HREF token or add a base element to the document.");
    }
    this._baseHref = stripTrailingSlash(stripIndexHtml(browserBaseHref));
    this.platformStrategy.onPopState(function(_) {
      async_1.ObservableWrapper.callNext(_this._subject, {
        'url': _this.path(),
        'pop': true
      });
    });
  }
  Location.prototype.path = function() {
    return this.normalize(this.platformStrategy.path());
  };
  Location.prototype.normalize = function(url) {
    return stripTrailingSlash(_stripBaseHref(this._baseHref, stripIndexHtml(url)));
  };
  Location.prototype.prepareExternalUrl = function(url) {
    if (!url.startsWith('/')) {
      url = '/' + url;
    }
    return this.platformStrategy.prepareExternalUrl(stripTrailingSlash(_addBaseHref(this._baseHref, url)));
  };
  Location.prototype.go = function(path, query) {
    if (query === void 0) {
      query = '';
    }
    this.platformStrategy.pushState(null, '', path, query);
  };
  Location.prototype.forward = function() {
    this.platformStrategy.forward();
  };
  Location.prototype.back = function() {
    this.platformStrategy.back();
  };
  Location.prototype.subscribe = function(onNext, onThrow, onReturn) {
    if (onThrow === void 0) {
      onThrow = null;
    }
    if (onReturn === void 0) {
      onReturn = null;
    }
    return async_1.ObservableWrapper.subscribe(this._subject, onNext, onThrow, onReturn);
  };
  Location = __decorate([angular2_1.Injectable(), __param(1, angular2_1.Optional()), __param(1, angular2_1.Inject(exports.APP_BASE_HREF)), __metadata('design:paramtypes', [location_strategy_1.LocationStrategy, String])], Location);
  return Location;
})();
exports.Location = Location;
function _stripBaseHref(baseHref, url) {
  if (baseHref.length > 0 && url.startsWith(baseHref)) {
    return url.substring(baseHref.length);
  }
  return url;
}
function _addBaseHref(baseHref, url) {
  if (!url.startsWith(baseHref)) {
    return baseHref + url;
  }
  return url;
}
function stripIndexHtml(url) {
  if (/\/index.html$/g.test(url)) {
    return url.substring(0, url.length - 11);
  }
  return url;
}
function stripTrailingSlash(url) {
  if (/\/$/g.test(url)) {
    url = url.substring(0, url.length - 1);
  }
  return url;
}
