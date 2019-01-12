import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayActionDetails, ForgeDisplayActionConfig } from '../display-action.core';

@Component({
	selector: 'forge-display-action-marketplace',
	templateUrl: './display-action-marketplace.component.html',
	styleUrls: ['./display-action-marketplace.component.scss']
})
export class ForgeDisplayActionMarketplaceComponent
	extends ForgeGenericControl<ForgeDisplayActionDetails, ForgeDisplayActionConfig>
	implements IControlMarketplace<ForgeDisplayActionDetails, ForgeDisplayActionConfig> {
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
