import { NgModule } from '@angular/core';

import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeDisplayContentBuilderComponent } from './display-content-builder/display-content-builder.component';
import { ForgeDisplayContentMarketplaceComponent } from './display-content-marketplace/display-content-marketplace.component';
import { ForgeDisplayContentRenderComponent } from './display-content-render/display-content-render.component';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MonacoEditorModule } from 'ngx-monaco-editor';

export class ForgeDisplayContentDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeDisplayContentBuilderComponent;
	}

	public Marketplace() {
		return ForgeDisplayContentMarketplaceComponent;
	}

	public Render() {
		return ForgeDisplayContentRenderComponent;
	}
}

var comps = [
	ForgeDisplayContentBuilderComponent,
	ForgeDisplayContentMarketplaceComponent,
	ForgeDisplayContentRenderComponent,
];

@NgModule({
	imports: [
		FathymSharedModule,
		MatAutocompleteModule,
		MatFormFieldModule,
		MatInputModule,
		MonacoEditorModule,
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
export class ForgeDisplayContentModule { }
