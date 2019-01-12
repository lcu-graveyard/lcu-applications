import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatIconModule, MatMenuModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeLayoutStackedBuilderComponent } from './layout-stacked-builder/layout-stacked-builder.component';
import { ForgeLayoutStackedMarketplaceComponent } from './layout-stacked-marketplace/layout-stacked-marketplace.component';
import { ForgeLayoutStackedRenderComponent } from './layout-stacked-render/layout-stacked-render.component';
import { DAFUIModule } from '@lcu/daf-ui';

export class ForgeLayoutStackedDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeLayoutStackedBuilderComponent;
	}

	public Marketplace() {
		return ForgeLayoutStackedMarketplaceComponent;
	}

	public Render() {
		return ForgeLayoutStackedRenderComponent;
	}
}

var comps = [
	ForgeLayoutStackedBuilderComponent,
	ForgeLayoutStackedMarketplaceComponent,
	ForgeLayoutStackedRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		DAFUIModule,
		DndModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatMenuModule,
		MatToolbarModule,
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
export class ForgeLayoutStackedModule { }
