#!/usr/bin/env node

import { CLIApplication } from "./cli/cli-application.js";
import { HelpCommand } from "./cli/commands/help.command.js";
import { ImportCommand } from "./cli/commands/import.command.js";
import { VersionCommand } from "./cli/commands/version.command.js";

function bootstrap() {
  const cliApplication = new CLIApplication();
  cliApplication.registerCommands([
    new HelpCommand(),
    new VersionCommand(),
    new ImportCommand()
  ]);

  cliApplication.processCommand(process.argv);
}

bootstrap();
