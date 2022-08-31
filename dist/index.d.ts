import * as _backstage_plugin_scaffolder_backend from '@backstage/plugin-scaffolder-backend';
import { Config } from '@backstage/config';

declare const shellAction: (options?: {
    config?: Config;
    allowedTemplateLocations?: string[];
}) => _backstage_plugin_scaffolder_backend.TemplateAction<{
    command: string;
    workingDirectory: string;
    args: string[];
}>;

export { shellAction };
