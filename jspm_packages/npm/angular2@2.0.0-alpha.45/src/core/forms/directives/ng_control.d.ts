import { ControlValueAccessor } from './control_value_accessor';
import { AbstractControlDirective } from './abstract_control_directive';
/**
 * A base class that all control directive extend.
 * It binds a {@link Control} object to a DOM element.
 */
export declare abstract class NgControl extends AbstractControlDirective {
    name: string;
    valueAccessor: ControlValueAccessor;
    validator: Function;
    abstract viewToModelUpdate(newValue: any): void;
}