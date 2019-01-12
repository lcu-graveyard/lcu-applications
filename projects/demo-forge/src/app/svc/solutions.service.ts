import { Injectable } from '@angular/core';
import { BaseSolutionsService } from '@lcu/solutions';
import { SolutionModuleConfig } from '@lcu/elements';
import { ForgeApplicationsSolutionDisplayModule } from '@lowcodeunit/lcu-sln-applications';
import { ForgeDisplayActionDisplayModule } from '@lowcodeunit/lcu-el-display-action';
import { ForgeDisplayChartsDisplayModule } from '@lowcodeunit/lcu-el-display-charts';
import { ForgeDisplayContentDisplayModule } from '@lowcodeunit/lcu-el-display-content';
import { ForgeDisplayJsonViewDisplayModule } from '@lowcodeunit/lcu-el-display-json-view';
import { ForgeDisplayPointerDisplayModule } from '@lowcodeunit/lcu-el-display-pointer';
import { ForgeLayoutFlexDisplayModule } from '@lowcodeunit/lcu-el-layout-flex';
import { ForgeLayoutStackedDisplayModule } from '@lowcodeunit/lcu-el-layout-stacked';
import { ForgeLayoutSwitchStateDisplayModule } from '@lowcodeunit/lcu-el-layout-switch-state';

@Injectable({
	providedIn: 'root'
})
export class DemoForgeSolutionsService extends BaseSolutionsService {
	//	Fields

	//	Constructor

	//	API Methods

	//	Helpers
	protected initSolutionModules() {
		this.localSolutionModules = [
      {
        Name: 'Solutions',
        Icon: 'fullscreen',
        BaseKey: 'forge-solution',
        Modules: <SolutionModuleConfig[]>[
          {
            Name: 'Applications',
            Control: { Base: 'forge-solution', Details: {}, Type: 'applications' },
            Solution: ForgeApplicationsSolutionDisplayModule,
            DisplaySetups: [
              {
                Name: "Display",
                Icon: "fullscreen",
                BaseKey: "forge-display",
                Modules: [
                  {
                    Name: "Action",
                    Control: { Base: "forge-display", Details: { Context: "Internal", Insight: {}, Type: "AnchorMaterial" }, Type: "action" },
                    Display: ForgeDisplayActionDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  },
                  {
                    Name: "Charts",
                    Control: { Base: "forge-display", Details: { Elements: [], Configs: [] }, Type: "charts" },
                    Display: ForgeDisplayChartsDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  },
                  {
                    Name: "Content",
                    Control: { Base: "forge-display", Details: { Type: "h3" }, Type: "content" },
                    Display: ForgeDisplayContentDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  },
                  {
                    Name: "JSON View",
                    Control: { Base: "forge-display", Details: {}, Type: "json-view" },
                    Display: ForgeDisplayJsonViewDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  },
                  {
                    Name: "Pointer",
                    Control: { Base: "forge-display", Details: {}, Type: "pointer" },
                    Display: ForgeDisplayPointerDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  }
                ]
              },
              {
                Name: "Layout",
                Icon: "settings_overscan",
                BaseKey: "forge-layout",
                Modules: [
                  {
                    Name: "Flex",
                    Control: { Base: "forge-layout", Details: { Elements: [], Configs: [] }, Type: "flex" },
                    Display: ForgeLayoutFlexDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  },
                  {
                    Name: "Stacked",
                    Control: { Base: "forge-layout", Details: { Elements: [], Configs: [] }, Type: "stacked" },
                    Display: ForgeLayoutStackedDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  },
                  {
                    Name: "Switch State",
                    Control: { Base: "forge-layout", Details: { Elements: [], Configs: [] }, Type: "switch-state" },
                    Display: ForgeLayoutSwitchStateDisplayModule,
                    HideDrag: false,
                    BuilderState: "Render"
                  }
                ]
              },
            ],
          },
        ],
      },
		];
	}
}
