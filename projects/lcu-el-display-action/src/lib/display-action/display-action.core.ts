import { ForgeRenderingDetails, InsightsConfig } from '@lcu/elements';

export class ForgeDisplayActionDetails extends ForgeRenderingDetails<ForgeDisplayActionConfig> {
	public Color: string;

	public Context: 'External' | 'Internal' | 'Page';

	public Icon: string;

	public Insight: InsightsConfig;

	public Path: string;

	public ScrollOffset: number;

	public Text: string;

	public Type: 'Anchor' | 'AnchorMaterial' | 'AnchorRaised' | 'Button' | 'ButtonMaterial' | 'ButtonRaised' | 'Menu'	;
}

export class ForgeDisplayActionConfig {
}
