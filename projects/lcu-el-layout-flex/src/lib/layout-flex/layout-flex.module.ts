import { NgModule } from '@angular/core';
import { MatSelectModule, MatButtonModule, MatInputModule, MatSlideToggleModule, MatAutocompleteModule, MatIconModule, MatExpansionModule, MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseDisplayModule } from '@lcu/elements';
import { ForgeLayoutFlexBuilderComponent } from './layout-flex-builder/layout-flex-builder.component';
import { ForgeLayoutFlexMarketplaceComponent } from './layout-flex-marketplace/layout-flex-marketplace.component';
import { ForgeLayoutFlexRenderComponent } from './layout-flex-render/layout-flex-render.component';
import { FlexConfigDialog } from './dialogs/flex-config/flex-config.dialog';
import { FlexLayoutDialog } from './dialogs/flex-layout/flex-layout.dialog';
import { DAFUIModule } from '@lcu/daf-ui';

export class ForgeLayoutFlexDisplayModule extends BaseDisplayModule {
	public Builder() {
		return ForgeLayoutFlexBuilderComponent;
	}

	public Marketplace() {
		return ForgeLayoutFlexMarketplaceComponent;
	}

	public Render() {
		return ForgeLayoutFlexRenderComponent;
	}
}

var comps = [
	ForgeLayoutFlexBuilderComponent,
	ForgeLayoutFlexMarketplaceComponent,
	ForgeLayoutFlexRenderComponent,
	FlexConfigDialog,
	FlexLayoutDialog,
];

@NgModule({
	imports: [
		FathymSharedModule,
		DAFUIModule,
		DndModule,
		FlexLayoutModule,
		MatDialogModule,
		MatSelectModule,
		MatButtonModule,
		MatExpansionModule,
		MatIconModule,
		MatInputModule,
		MatSlideToggleModule,
		MatAutocompleteModule,
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
export class ForgeLayoutFlexModule { }
