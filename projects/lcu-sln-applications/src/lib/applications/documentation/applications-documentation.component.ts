import { Component, Injector } from '@angular/core';
import { ISolutionControl, ForgeGenericSolution } from '@lcu/solutions';

@Component({
	selector: 'forge-solution-applications-documentation',
	templateUrl: './applications-documentation.component.html',
	styleUrls: ['./applications-documentation.component.scss']
})
export class ForgeApplicationsSolutionDocumentation extends ForgeGenericSolution
	implements ISolutionControl {
	//  Fields

	//  Properties
	public DocsRoot: string;

	//  Constructors
	constructor(protected injector: Injector) {
		super(injector);

		this.DocsRoot = 'https://raw.githubusercontent.com/lowcodeunit/lcu-sln-applications/master/docs/';
	}

	//	Life Cycle

	//	API Methods

	//	Helpers
}
