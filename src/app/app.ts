import {bootstrap, Component, provide} from 'angular2/angular2';
import {RouteConfig, Route, RouteParams, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {HomeComponent} from './home/home';
import {DemoComponent} from './demo/demo';
import {EventTestComponent} from './event-test/eventTest'
import 'bootstrap/css/bootstrap.min.css!';

@Component({
	selector: 'app-root',
	templateUrl: 'src/app/app.html',
	directives: [ROUTER_DIRECTIVES, DemoComponent, EventTestComponent]
})
@RouteConfig([
	new Route({ path: '/', component: HomeComponent, as: 'Home' }),
	new Route({ path: '/demo/:idParam', component: DemoComponent, as: 'Demo' })
])
class AppComponent {
	public time: string;
	public test: string = 'some state from app component';

	constructor() {
		setInterval(() => this.time = new Date().toLocaleTimeString(), 1000);
	}
	
	eventHandler($event) {
		this.test = $event.value;
		console.log("event handler invoked : " + $event.value);
	}
}

bootstrap(AppComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);