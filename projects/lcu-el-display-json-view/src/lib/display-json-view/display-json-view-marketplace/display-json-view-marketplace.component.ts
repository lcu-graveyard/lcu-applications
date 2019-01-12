import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig } from '../display-json-view.core';

@Component({
	selector: 'forge-display-json-view-marketplace',
	templateUrl: './display-json-view-marketplace.component.html',
	styleUrls: ['./display-json-view-marketplace.component.scss']
})
export class ForgeDisplayJsonViewMarketplaceComponent
	extends ForgeGenericControl<ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig>
	implements IControlMarketplace<ForgeDisplayJsonViewDetails, ForgeDisplayJsonViewConfig> {
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
