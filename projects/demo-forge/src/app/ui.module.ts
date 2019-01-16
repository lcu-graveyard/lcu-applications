import { ModuleWithProviders, NgModule } from "@angular/core";
import { PageViewModule } from "@lcu/daf-ui";
import { FathymSharedModule } from "@lcu/hosting";
import { IBuildersService, ISolutionsService } from "@lcu/elements";
import { NPMPublicService } from "@lcu/applications";
import { DemoForgeBuildersService } from "./svc/builders.service";
import { DemoForgeSolutionsService } from "./svc/solutions.service";
import { DndModule } from '@beyerleinf/ngx-dnd';
import { ForgeApplicationsSolutionModule } from '@lowcodeunit/lcu-sln-applications';

var thirdPartyModules = [
  DndModule,
];

var thirdPartyServices = [];

var fathymModules = [
  PageViewModule,
  ForgeApplicationsSolutionModule,
];

var fathymServices = [
  { provide: IBuildersService, useClass: DemoForgeBuildersService },
  { provide: ISolutionsService, useClass: DemoForgeSolutionsService },
  NPMPublicService,
];

var localModules: Array<any> = [];

var localServices = [];

var modules = [FathymSharedModule, ...thirdPartyModules, ...localModules, ...fathymModules];

var services = [...thirdPartyServices, ...localServices, ...fathymServices];

var comps = [];

@NgModule({
  declarations: [...comps],
  imports: [...modules],
  exports: [...comps, ...modules],
  entryComponents: [...comps],
  providers: []
})
export class UIModule {
  //	Constructors
  constructor() {
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UIModule,
      providers: [...services]
    };
  }
}
