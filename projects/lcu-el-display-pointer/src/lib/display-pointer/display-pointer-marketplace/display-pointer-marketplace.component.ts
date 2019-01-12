import { Component, Injector } from '@angular/core';
import { IControlMarketplace } from '@lcu/elements';
import { ForgeGenericControl } from '@lcu/daf-ui';
import { ForgeDisplayPointerDetails, ForgeDisplayPointerConfig } from '../display-pointer.core';

@Component({
	selector: 'forge-display-pointer-marketplace',
	templateUrl: './display-pointer-marketplace.component.html',
	styleUrls: ['./display-pointer-marketplace.component.scss']
})
export class ForgeDisplayPointerMarketplaceComponent
	extends ForgeGenericControl<ForgeDisplayPointerDetails, ForgeDisplayPointerConfig>
	implements IControlMarketplace<ForgeDisplayPointerDetails, ForgeDisplayPointerConfig> {
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
