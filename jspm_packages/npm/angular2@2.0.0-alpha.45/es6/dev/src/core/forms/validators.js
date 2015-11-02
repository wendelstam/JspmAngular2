/* */ 
"format cjs";
import { isBlank, isPresent } from 'angular2/src/core/facade/lang';
import { CONST_EXPR } from 'angular2/src/core/facade/lang';
import { ListWrapper, StringMapWrapper } from 'angular2/src/core/facade/collection';
import { OpaqueToken } from 'angular2/src/core/di';
export const NG_VALIDATORS = CONST_EXPR(new OpaqueToken("NgValidators"));
/**
 * Provides a set of validators used by form controls.
 *
 * ### Example
 *
 * ```
 * var loginControl = new Control("", Validators.required)
 * ```
 */
export class Validators {
    static required(control) {
        return isBlank(control.value) || control.value == "" ? { "required": true } : null;
    }
    static minLength(minLength) {
        return (control) => {
            if (isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return v.length < minLength ?
                { "minlength": { "requiredLength": minLength, "actualLength": v.length } } :
                null;
        };
    }
    static maxLength(maxLength) {
        return (control) => {
            if (isPresent(Validators.required(control)))
                return null;
            var v = control.value;
            return v.length > maxLength ?
                { "maxlength": { "requiredLength": maxLength, "actualLength": v.length } } :
                null;
        };
    }
    static nullValidator(c) { return null; }
    static compose(validators) {
        if (isBlank(validators))
            return Validators.nullValidator;
        return function (control) {
            var res = ListWrapper.reduce(validators, (res, validator) => {
                var errors = validator(control);
                return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
            }, {});
            return StringMapWrapper.isEmpty(res) ? null : res;
        };
    }
}
//# sourceMappingURL=validators.js.map