import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeDisplayJsonViewBuilderComponent } from './display-json-view-builder/display-json-view-builder.component';
import { ForgeDisplayJsonViewMarketplaceComponent } from './display-json-view-marketplace/display-json-view-marketplace.component';
import { ForgeDisplayJsonViewRenderComponent } from './display-json-view-render/display-json-view-render.component';

export class ForgeDisplayJsonViewDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeDisplayJsonViewBuilderComponent;
	}

	public Marketplace() {
		return ForgeDisplayJsonViewMarketplaceComponent;
	}

	public Render() {
		return ForgeDisplayJsonViewRenderComponent;
	}
}

var comps = [
	ForgeDisplayJsonViewBuilderComponent,
	ForgeDisplayJsonViewMarketplaceComponent,
	ForgeDisplayJsonViewRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
	],
	declarations: [
		...comps,
	],
	exports: [
		...comps,
	],
	entryComponents: [
		...comps,
	]
})
export class ForgeDisplayJsonViewModule { }
