import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Angulartics2Module } from 'angulartics2';
import { FathymSharedModule } from '@lcu/hosting';
import { ForgeDisplayActionBuilderComponent } from './display-action-builder/display-action-builder.component';
import { ForgeDisplayActionMarketplaceComponent } from './display-action-marketplace/display-action-marketplace.component';
import { ForgeDisplayActionRenderComponent } from './display-action-render/display-action-render.component';
import { BaseDisplayModule } from '@lcu/elements';

export class ForgeDisplayActionDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeDisplayActionBuilderComponent;
	}

	public Marketplace() {
		return ForgeDisplayActionMarketplaceComponent;
	}

	public Render() {
		return ForgeDisplayActionRenderComponent;
	}
}

var comps = [
	ForgeDisplayActionBuilderComponent,
	ForgeDisplayActionMarketplaceComponent,
	ForgeDisplayActionRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		Angulartics2Module,
		MatAutocompleteModule,
		MatButtonModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		FlexLayoutModule,
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
export class ForgeDisplayActionModule { }
