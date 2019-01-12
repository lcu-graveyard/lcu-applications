import { ApplicationModel } from '@lcu/apps';

export class AppsCreateDialogConfig {
	public Host: string;

	public Path: string;

	public ViewType: 'API' | 'View';
}

export class AppsManageAppDialogConfig {
	public Application: ApplicationModel;

	public AppOptions: ApplicationModel[]
}