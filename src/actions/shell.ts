import { createTemplateAction, executeShellCommand } from '@backstage/plugin-scaffolder-backend';
import path from 'path';

export const shellAction = () => {
    return createTemplateAction<{ command: string; workingDirectory: string, args: string[] }>({
        id: 'shell',
        schema: {
            input: {
                required: ['command'],
                type: 'object',
                properties: {
                    command: {
                        type: 'string',
                        title: 'Command',
                        description: 'The command to run',
                    },
                    workingDirectory: {
                        type: 'string',
                        title: 'Working Directory',
                        description: 'Working directory within the scaffolder workspace to execute the command in'
                    },
                    args: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                        title: 'Arguments to pass to the command'
                    }
                },
            },
        },
        async handler(ctx) {
            await executeShellCommand({
                command: ctx.input.command,
                args: ctx.input.args,
                logStream: ctx.logStream,
                options: {
                    env: process.env,
                    cwd: path.resolve(ctx.workspacePath, ctx.input.workingDirectory || '.')
                }
            });

            ctx.logger.info(`Finished executing ${ctx.input.command}`);
        },
    });
};
