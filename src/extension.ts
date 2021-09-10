// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode from 'vscode';
import { commandToHex_ } from './commands/to-hex_';
import { commandToHexa } from './commands/to-hexa';
import { commandtoHexx } from './commands/to-hexx';
import { commandToRgb_Css } from './commands/to-rgb_css';
import { commandToRgb_Numbers } from './commands/to-rgb_numbers';
import { commandToRgb_Smart } from './commands/to-rgb_smart';
import { commandToRgbaCss } from './commands/to-rgba-css';
import { commandToRgbaNumbers } from './commands/to-rgba-numbers';
import { commandToRgbaSmart } from './commands/to-rgba-smart';
import { commandToRgbxCss } from './commands/to-rgbx-css';
import { commandToRgbxNumbers } from './commands/to-rgbx-numbers';
import { commandToRgbxSmart } from './commands/to-rgbx-smart';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hex-to-rgb" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  function register(command: string, fn: ($e: vscode.TextEditor) => void): vscode.Disposable {
    return vscode.commands.registerCommand(`hex-to-rgb.${command}`, () => {
      const $e = vscode.window.activeTextEditor;
      if (!$e) vscode.window.showWarningMessage('No active text editor');
      else fn($e);
    });
  }


  context.subscriptions.push(
    register('toHex_', commandToHex_),
    register('toHexa', commandToHexa),
    register('toHexx', commandtoHexx),
    register('toRgb_Css', commandToRgb_Css),
    register('toRgb_Numbers', commandToRgb_Numbers),
    register('toRgb_Smart', commandToRgb_Smart),
    register('toRgbaCss', commandToRgbaCss),
    register('toRgbaNumbers', commandToRgbaNumbers),
    register('toRgbaSmart', commandToRgbaSmart),
    register('toRgbxCss', commandToRgbxCss),
    register('toRgbxNumbers', commandToRgbxNumbers),
    register('toRgbxSmart', commandToRgbxSmart),
  );
}

// this method is called when your extension is deactivated
export function deactivate(): void {}
