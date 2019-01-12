import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig } from '../layout-switch-state.core';

@Component({
	selector: 'forge-layout-switch-state-marketplace',
	templateUrl: './layout-switch-state-marketplace.component.html',
	styleUrls: ['./layout-switch-state-marketplace.component.scss']
})
export class ForgeLayoutSwitchStateMarketplaceComponent
	extends ForgeGenericControl<ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig>
	implements IControlMarketplace<ForgeLayoutSwitchStateDetails, ForgeLayoutSwitchStateConfig> {
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
