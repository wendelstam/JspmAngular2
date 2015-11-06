import {Component, NgFor, NgClass, Host} from 'angular2/angular2';

@Component({
	selector: 'tabs',
	template: `
		<div>
			<ul class="nav nav-tabs">
				<li *ng-for="#tab of tabs" (click)="selectTab(tab, $event)" [ng-class]="{active : tab.active}">
					<a>{{tab.tabTitle}}</a>
				</li>
			</ul>
			<div tab-content class="tabContent">
				<ng-content></ng-content>
			</div>
		</div>
	`,
	styles: ['.tabContent { padding: 30px; }'],
	directives: [NgFor, NgClass]
})
export class Tabs {
	public tabs: Tab[];

	constructor() {
		this.tabs = [];
	}

	addTab(tab: Tab) {
		if (this.tabs.length === 0) {
			tab.active = true;
		}
		this.tabs.push(tab);
	}

	selectTab(tab: Tab, $event: Event) {
		$event.preventDefault();
		this.tabs.forEach(tab=> {
			tab.active = false;
		});
		tab.active = true;
	}
}


@Component({
	selector: 'tab',
	properties: ['tabTitle: tab-title'],
	template: `
		<div [hidden]="!active" class="tab-pane" [class.active]="active">
			<ng-content></ng-content>
		</div>
	`,
	directives: [NgClass]
})
export class Tab {
	public active: boolean;

	constructor( @Host() tabs: Tabs) {
		tabs.addTab(this);
	}
}

export const TABS_DIRECTIVES = [Tabs, Tab];