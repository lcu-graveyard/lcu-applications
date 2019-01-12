import { NgModule } from '@angular/core';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeDisplayPointerBuilderComponent } from './display-pointer-builder/display-pointer-builder.component';
import { ForgeDisplayPointerMarketplaceComponent } from './display-pointer-marketplace/display-pointer-marketplace.component';
import { ForgeDisplayPointerRenderComponent } from './display-pointer-render/display-pointer-render.component';
import { ForgeDisplayCreatePointerBuilderDialog } from './dialogs/create-pointer/create-pointer.dialog';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { DAFUIModule } from '@lcu/daf-ui';

export class ForgeDisplayPointerDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeDisplayPointerBuilderComponent;
	}

	public Marketplace() {
		return ForgeDisplayPointerMarketplaceComponent;
	}

	public Render() {
		return ForgeDisplayPointerRenderComponent;
	}
}

var comps = [
	ForgeDisplayPointerBuilderComponent,
	ForgeDisplayPointerMarketplaceComponent,
	ForgeDisplayPointerRenderComponent,
	ForgeDisplayCreatePointerBuilderDialog,
];

@NgModule({
	imports: [
		FathymSharedModule,
		MatFormFieldModule,
		MatSelectModule,
		MatToolbarModule,
		DAFUIModule,
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
export class ForgeDisplayPointerModule { }
