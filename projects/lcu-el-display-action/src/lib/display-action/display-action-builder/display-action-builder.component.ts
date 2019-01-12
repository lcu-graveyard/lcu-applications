import { Component, Injector } from '@angular/core';
import { IControlBuilder } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayActionDetails, ForgeDisplayActionConfig } from '../display-action.core';

@Component({
	selector: 'forge-display-action-builder',
	templateUrl: './display-action-builder.component.html',
	styleUrls: ['./display-action-builder.component.scss']
})
export class ForgeDisplayActionBuilderComponent
	extends ForgeGenericControl<ForgeDisplayActionDetails, ForgeDisplayActionConfig>
	implements IControlBuilder<ForgeDisplayActionDetails, ForgeDisplayActionConfig> {
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
