'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var pluginScaffolderBackend = require('@backstage/plugin-scaffolder-backend');
var path = require('path');
var errors = require('@backstage/errors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

const shellAction = (options) => {
  return pluginScaffolderBackend.createTemplateAction({
    id: "shell",
    schema: {
      input: {
        required: ["command"],
        type: "object",
        properties: {
          command: {
            type: "string",
            title: "Command",
            description: "The command to run"
          },
          workingDirectory: {
            type: "string",
            title: "Working Directory",
            description: "Working directory within the scaffolder workspace to execute the command in"
          },
          args: {
            type: "array",
            items: {
              type: "string"
            },
            title: "Arguments to pass to the command"
          }
        }
      }
    },
    async handler(ctx) {
      var _a, _b, _c;
      if (options && options.allowedTemplateLocations && ((_a = ctx.templateInfo) == null ? void 0 : _a.baseUrl) && !options.allowedTemplateLocations.includes((_b = ctx.templateInfo) == null ? void 0 : _b.baseUrl)) {
        throw new errors.InputError(
          `Base URL ${(_c = ctx.templateInfo) == null ? void 0 : _c.baseUrl} not allowed`
        );
      }
      await pluginScaffolderBackend.executeShellCommand({
        command: ctx.input.command,
        args: ctx.input.args,
        logStream: ctx.logStream,
        options: {
          env: process.env,
          cwd: path__default["default"].resolve(ctx.workspacePath, ctx.input.workingDirectory || ".")
        }
      });
      ctx.logger.info(`Finished executing ${ctx.input.command}`);
    }
  });
};

exports.shellAction = shellAction;
//# sourceMappingURL=index.cjs.js.map
