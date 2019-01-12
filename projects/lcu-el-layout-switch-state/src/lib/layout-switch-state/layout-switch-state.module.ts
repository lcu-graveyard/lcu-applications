import { NgModule } from '@angular/core';
import { ForgeLayoutSwitchStateBuilderComponent } from './layout-switch-state-builder/layout-switch-state-builder.component';
import { ForgeLayoutSwitchStateMarketplaceComponent } from './layout-switch-state-marketplace/layout-switch-state-marketplace.component';
import { ForgeLayoutSwitchStateRenderComponent } from './layout-switch-state-render/layout-switch-state-render.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { BaseDisplayModule } from '@lcu/elements';
import { FathymSharedModule } from '@lcu/hosting';
import { DAFUIModule } from '@lcu/daf-ui';

export class ForgeLayoutSwitchStateDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeLayoutSwitchStateBuilderComponent;
	}

	public Marketplace() {
		return ForgeLayoutSwitchStateMarketplaceComponent;
	}

	public Render() {
		return ForgeLayoutSwitchStateRenderComponent;
	}
}

var comps = [
	ForgeLayoutSwitchStateBuilderComponent,
	ForgeLayoutSwitchStateMarketplaceComponent,
	ForgeLayoutSwitchStateRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
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
export class ForgeLayoutSwitchStateModule { }
