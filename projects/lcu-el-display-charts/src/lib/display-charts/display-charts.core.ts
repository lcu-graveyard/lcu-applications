import { ForgeRenderingDetails } from '@lcu/elements';

export class ForgeDisplayChartsDetails extends ForgeRenderingDetails<ForgeDisplayChartsConfig> {
    public ChartType: string;

    public Colors: {};

    public Info: ForgeReportingChartsGaugeInfo;

    public LegendTitle: string;

    public Results: { name: string, value: number }[];

    public ShowLegend: boolean;

    public Theme: 'Light' | 'Dark';
}

export class ForgeDisplayChartsConfig {
}

export class ForgeReportingChartsGaugeInfo {
    public AngleSpan: number;

    public AngleStart: number;

    public ScaleEnd: number;

    public ScaleStart: number;

    public ValueFormatting: string;
}