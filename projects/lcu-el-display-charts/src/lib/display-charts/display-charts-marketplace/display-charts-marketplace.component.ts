import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayChartsDetails, ForgeDisplayChartsConfig } from '../display-charts.core';

@Component({
	selector: 'forge-display-charts-marketplace',
	templateUrl: './display-charts-marketplace.component.html',
	styleUrls: ['./display-charts-marketplace.component.scss']
})
export class ForgeDisplayChartsMarketplaceComponent
	extends ForgeGenericControl<ForgeDisplayChartsDetails, ForgeDisplayChartsConfig>
	implements IControlMarketplace<ForgeDisplayChartsDetails, ForgeDisplayChartsConfig> {
	//  Fields

	//  Properties

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
