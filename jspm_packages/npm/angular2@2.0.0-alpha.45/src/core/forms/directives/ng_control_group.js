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
var __param = (this && this.__param) || function(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
};
var metadata_1 = require('../../metadata');
var di_1 = require('../../di');
var lang_1 = require('../../facade/lang');
var control_container_1 = require('./control_container');
var shared_1 = require('./shared');
var validators_1 = require('../validators');
var controlGroupBinding = lang_1.CONST_EXPR(new di_1.Provider(control_container_1.ControlContainer, {useExisting: di_1.forwardRef(function() {
    return NgControlGroup;
  })}));
var NgControlGroup = (function(_super) {
  __extends(NgControlGroup, _super);
  function NgControlGroup(parent, validators) {
    _super.call(this);
    this._parent = parent;
    this._validators = validators;
  }
  NgControlGroup.prototype.onInit = function() {
    this.formDirective.addControlGroup(this);
  };
  NgControlGroup.prototype.onDestroy = function() {
    this.formDirective.removeControlGroup(this);
  };
  Object.defineProperty(NgControlGroup.prototype, "control", {
    get: function() {
      return this.formDirective.getControlGroup(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NgControlGroup.prototype, "path", {
    get: function() {
      return shared_1.controlPath(this.name, this._parent);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NgControlGroup.prototype, "formDirective", {
    get: function() {
      return this._parent.formDirective;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(NgControlGroup.prototype, "validator", {
    get: function() {
      return validators_1.Validators.compose(this._validators);
    },
    enumerable: true,
    configurable: true
  });
  NgControlGroup = __decorate([metadata_1.Directive({
    selector: '[ng-control-group]',
    bindings: [controlGroupBinding],
    inputs: ['name: ng-control-group'],
    exportAs: 'form'
  }), __param(0, di_1.Host()), __param(0, di_1.SkipSelf()), __param(1, di_1.Optional()), __param(1, di_1.Inject(validators_1.NG_VALIDATORS)), __metadata('design:paramtypes', [control_container_1.ControlContainer, Array])], NgControlGroup);
  return NgControlGroup;
})(control_container_1.ControlContainer);
exports.NgControlGroup = NgControlGroup;
