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
var metadata_1 = require('../../metadata');
var linker_1 = require('../../linker');
var render_1 = require('../../render');
var di_1 = require('../../di');
var control_value_accessor_1 = require('./control_value_accessor');
var lang_1 = require('../../facade/lang');
var shared_1 = require('./shared');
var NUMBER_VALUE_ACCESSOR = lang_1.CONST_EXPR(new di_1.Provider(control_value_accessor_1.NG_VALUE_ACCESSOR, {
  useExisting: di_1.forwardRef(function() {
    return NumberValueAccessor;
  }),
  multi: true
}));
var NumberValueAccessor = (function() {
  function NumberValueAccessor(_renderer, _elementRef) {
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.onChange = function(_) {};
    this.onTouched = function() {};
  }
  NumberValueAccessor.prototype.writeValue = function(value) {
    shared_1.setProperty(this._renderer, this._elementRef, 'value', value);
  };
  NumberValueAccessor.prototype.registerOnChange = function(fn) {
    this.onChange = function(value) {
      fn(lang_1.NumberWrapper.parseFloat(value));
    };
  };
  NumberValueAccessor.prototype.registerOnTouched = function(fn) {
    this.onTouched = fn;
  };
  NumberValueAccessor = __decorate([metadata_1.Directive({
    selector: 'input[type=number][ng-control],input[type=number][ng-form-control],input[type=number][ng-model]',
    host: {
      '(change)': 'onChange($event.target.value)',
      '(input)': 'onChange($event.target.value)',
      '(blur)': 'onTouched()'
    },
    bindings: [NUMBER_VALUE_ACCESSOR]
  }), __metadata('design:paramtypes', [render_1.Renderer, linker_1.ElementRef])], NumberValueAccessor);
  return NumberValueAccessor;
})();
exports.NumberValueAccessor = NumberValueAccessor;
