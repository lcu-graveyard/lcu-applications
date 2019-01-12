import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule, GaugeModule } from '@swimlane/ngx-charts';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeDisplayChartsBuilderComponent } from './display-charts-builder/display-charts-builder.component';
import { ForgeDisplayChartsMarketplaceComponent } from './display-charts-marketplace/display-charts-marketplace.component';
import { ForgeDisplayChartsRenderComponent } from './display-charts-render/display-charts-render.component';

export class ForgeDisplayChartsDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeDisplayChartsBuilderComponent;
	}

	public Marketplace() {
		return ForgeDisplayChartsMarketplaceComponent;
	}

	public Render() {
		return ForgeDisplayChartsRenderComponent;
	}
}

var comps = [
	ForgeDisplayChartsBuilderComponent,
	ForgeDisplayChartsMarketplaceComponent,
	ForgeDisplayChartsRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		NgxChartsModule,
		FlexLayoutModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatSlideToggleModule,
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
export class ForgeDisplayChartsModule { }
