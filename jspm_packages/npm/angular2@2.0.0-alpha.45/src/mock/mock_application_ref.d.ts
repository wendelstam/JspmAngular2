import { ApplicationRef } from 'angular2/src/core/application_ref';
import { Type } from 'angular2/src/core/facade/lang';
import { ComponentRef } from 'angular2/src/core/linker/dynamic_component_loader';
import { Provider, Injector } from 'angular2/src/core/di';
import { NgZone } from 'angular2/src/core/zone/ng_zone';
import { Promise } from 'angular2/src/core/facade/async';
export declare class MockApplicationRef extends ApplicationRef {
    registerBootstrapListener(listener: (ref: ComponentRef) => void): void;
    registerDisposeListener(dispose: () => void): void;
    bootstrap(componentType: Type, bindings?: Array<Type | Provider | any[]>): Promise<ComponentRef>;
    injector: Injector;
    zone: NgZone;
    dispose(): void;
    componentTypes: Type[];
}