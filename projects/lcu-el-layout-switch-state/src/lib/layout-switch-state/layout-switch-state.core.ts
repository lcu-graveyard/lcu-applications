import { ForgeRenderingDetails } from '@lcu/elements';

export class ForgeLayoutSwitchStateDetails extends ForgeRenderingDetails<ForgeLayoutSwitchStateConfig> {
	public States: { [state: string]: ForgeLayoutSwitchState };
}

export class ForgeLayoutSwitchStateConfig {
	public State: string;
}

export class ForgeLayoutSwitchState {
	public Order: number;

	public Text: string;
}
