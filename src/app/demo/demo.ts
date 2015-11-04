import {Component} from 'angular2/angular2';
import {RouteParams} from 'angular2/router'

@Component({
	selector: 'demo',
	template: `<div>
				<h3>Hi from demo component @ {{time}}</h3>
			   	<p>{{paramValue}}</p>
			   </div>`,
	styles: [`div {
					background-color: light-gray;
					color: green;
					font-family: Verdana;
				 }`]
})
export class DemoComponent {
	public time: string;
	public paramValue: string;

	constructor(params: RouteParams) {
		setInterval(() => this.time = new Date().toLocaleTimeString(), 1000);
		this.paramValue = params.get("idParam");
	}
}
