import { Config } from '@backstage/config';
export declare const shellAction: (options: {
    config?: Config;
    allowedTemplateLocations?: string[];
}) => import("@backstage/plugin-scaffolder-backend").TemplateAction<{
    command: string;
    workingDirectory: string;
    args: string[];
}>;
