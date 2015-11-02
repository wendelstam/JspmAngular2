/* */ 
"format cjs";
import { isPresent } from 'angular2/src/core/facade/lang';
import { unimplemented } from 'angular2/src/core/facade/exceptions';
export class AbstractControlDirective {
    get control() { return unimplemented(); }
    get value() { return isPresent(this.control) ? this.control.value : null; }
    get valid() { return isPresent(this.control) ? this.control.valid : null; }
    get errors() {
        return isPresent(this.control) ? this.control.errors : null;
    }
    get controlsErrors() { return isPresent(this.control) ? this.control.controlsErrors : null; }
    get pristine() { return isPresent(this.control) ? this.control.pristine : null; }
    get dirty() { return isPresent(this.control) ? this.control.dirty : null; }
    get touched() { return isPresent(this.control) ? this.control.touched : null; }
    get untouched() { return isPresent(this.control) ? this.control.untouched : null; }
    get path() { return null; }
}
//# sourceMappingURL=abstract_control_directive.js.map