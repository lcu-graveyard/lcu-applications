import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayChartsDetails, ForgeDisplayChartsConfig } from '../display-charts.core';

@Component({
	selector: 'forge-display-charts-builder',
	templateUrl: './display-charts-builder.component.html',
	styleUrls: ['./display-charts-builder.component.scss']
})
export class ForgeDisplayChartsBuilderComponent
	extends ForgeGenericControl<ForgeDisplayChartsDetails, ForgeDisplayChartsConfig>
	implements IControlBuilder<ForgeDisplayChartsDetails, ForgeDisplayChartsConfig> {
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
