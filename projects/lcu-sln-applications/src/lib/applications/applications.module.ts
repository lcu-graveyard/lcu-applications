import { AppsManageSecurityDialog } from './dialogs/apps-manage-security/apps-manage-security.dialog';
import { AppsManageAppDialog } from './dialogs/apps-manage-app/apps-manage-app.dialog';
import { AppsCreateDialog } from './dialogs/apps-create/apps-create.dialog';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatToolbarModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DndModule } from '@beyerleinf/ngx-dnd';
import { FathymSharedModule } from '@lcu/hosting';
import { BaseSolutionModule } from '@lcu/solutions';
import { NgxMarkdownDocsModule } from '@lowcodeunit/ngx-markdown-docs';
import { ForgeApplicationsSolutionManage } from './manage/applications-manage.component';
import { ForgeApplicationsSolutionDocumentation } from './documentation/applications-documentation.component';
import { ForgeApplicationsSolutionHeading } from './heading/applications-heading.component';
import { ForgeApplicationsSolutionMarketplace } from './marketplace/applications-marketplace.component';
import { ForgeApplicationsSolutionOverview } from './overview/applications-overview.component';


export class ForgeApplicationsSolutionDisplayModule extends BaseSolutionModule {
	public Documentation() {
		return ForgeApplicationsSolutionDocumentation;
	}

	public Heading() {
		return ForgeApplicationsSolutionHeading;
	}

	public Manage() {
		return ForgeApplicationsSolutionManage;
	}

	public Marketplace() {
		return ForgeApplicationsSolutionMarketplace;
	}

	public Overview() { 
		return ForgeApplicationsSolutionOverview;
	}
}

var comps = [
	ForgeApplicationsSolutionDocumentation,
	ForgeApplicationsSolutionHeading,
	ForgeApplicationsSolutionManage,
	ForgeApplicationsSolutionMarketplace,
	ForgeApplicationsSolutionOverview,
	AppsCreateDialog,
	AppsManageAppDialog,
	AppsManageSecurityDialog,
];

@NgModule({
	imports: [
		FathymSharedModule,
		NgxMarkdownDocsModule,
		FlexLayoutModule,
		DndModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatSlideToggleModule,
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
export class ForgeApplicationsSolutionModule { 
}
