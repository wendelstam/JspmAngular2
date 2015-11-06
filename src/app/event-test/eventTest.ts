import {Component, Output, Input, EventEmitter} from 'angular2/angular2';
import {RouteParams} from 'angular2/router'

@Component({
	selector: 'event-test',
	template: `
		<div>
			<a class="btn btn-md btn-primary" (click)="triggerEvent()">Trigger event</a>
			<p>{{someState}}</p>
		</div>`
})
export class EventTestComponent {
	outputValue: string;

	@Output('somethingHappened')
	randomEvent = new EventEmitter();

	@Output('clickEvent')
	clickEvent = new EventEmitter();

	@Input('someState')
	someState: string = 'x';

	triggerEvent() {
		this.clickEvent.next({ value: 'clicked at ' + new Date().toLocaleTimeString() });
	}

	constructor() {
		setInterval(() => this.randomEvent.next({ value: Math.random() }), (Math.random() * 100000));
	}
}
