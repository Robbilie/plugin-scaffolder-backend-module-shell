import * as _backstage_plugin_scaffolder_backend from '@backstage/plugin-scaffolder-backend';

declare const shellAction: () => _backstage_plugin_scaffolder_backend.TemplateAction<{
    command: string;
    workingDirectory: string;
    args: string[];
}>;

export { shellAction };
