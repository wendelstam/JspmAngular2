/* */ 
'use strict';
var lang_1 = require('../facade/lang');
var lang_2 = require('../facade/lang');
var collection_1 = require('../facade/collection');
var di_1 = require('../di');
exports.NG_VALIDATORS = lang_2.CONST_EXPR(new di_1.OpaqueToken("NgValidators"));
var Validators = (function() {
  function Validators() {}
  Validators.required = function(control) {
    return lang_1.isBlank(control.value) || control.value == "" ? {"required": true} : null;
  };
  Validators.minLength = function(minLength) {
    return function(control) {
      if (lang_1.isPresent(Validators.required(control)))
        return null;
      var v = control.value;
      return v.length < minLength ? {"minlength": {
          "requiredLength": minLength,
          "actualLength": v.length
        }} : null;
    };
  };
  Validators.maxLength = function(maxLength) {
    return function(control) {
      if (lang_1.isPresent(Validators.required(control)))
        return null;
      var v = control.value;
      return v.length > maxLength ? {"maxlength": {
          "requiredLength": maxLength,
          "actualLength": v.length
        }} : null;
    };
  };
  Validators.nullValidator = function(c) {
    return null;
  };
  Validators.compose = function(validators) {
    if (lang_1.isBlank(validators))
      return Validators.nullValidator;
    return function(control) {
      var res = collection_1.ListWrapper.reduce(validators, function(res, validator) {
        var errors = validator(control);
        return lang_1.isPresent(errors) ? collection_1.StringMapWrapper.merge(res, errors) : res;
      }, {});
      return collection_1.StringMapWrapper.isEmpty(res) ? null : res;
    };
  };
  return Validators;
})();
exports.Validators = Validators;
