import { ForgeRenderingDetails } from '@lcu/elements';

export class ForgeLayoutFlexDetails extends ForgeRenderingDetails<ForgeLayoutFlexConfig> {
	public CrossAxisAlign: string;

	public Gap: string;

	public Layout: string;

	public MainAxisAlign: string;

	public Wrap: boolean;
}

export class ForgeLayoutFlexConfig {
	public Align: ForgeLayoutFlexVariations;

	public Fill: boolean;

	public Offset: ForgeLayoutFlexVariations;

	public Order: ForgeLayoutFlexVariations;

	public Size: ForgeLayoutFlexVariations;
}

export class ForgeLayoutFlexVariations {
	public _: any;

	public XS: any;

	public SM: any;

	public MD: any;

	public LG: any;

	public XL: any;

	public GT: {
		XS: any,
		SM: any,
		MD: any,
		LG: any,
	};

	public LT: {
		SM: any,
		MD: any,
		LG: any,
		XL: any,
	};
}
