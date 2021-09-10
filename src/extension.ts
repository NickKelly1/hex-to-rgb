// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import vscode from 'vscode';
import { commandHexToRgb } from './commands/hex-to-rgb';
import { commandHexToRgbRaw } from './commands/hex-to-rgb-raw';
import { commandRgbToHex } from './commands/rgb-to-hex';
import { commandToHex } from './commands/to-hex';
import { commandToRgb } from './commands/to-rgb';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext): void {

  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "hex-to-rgb" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json

  const dhexToRgb = vscode.commands.registerCommand('hex-to-rgb.hexToRgb', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) vscode.window.showWarningMessage('[Hex to RGB::hexToRgb] No editor');
    else commandHexToRgb(editor);
  });

  const dHexToRgbRaw = vscode.commands.registerCommand('hex-to-rgb.hexToRgbRaw', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) vscode.window.showWarningMessage('[Hex to RGB::hexToRgbRaw] No editor');
    else commandHexToRgbRaw(editor);
  });

  const dRgbToHex = vscode.commands.registerCommand('hex-to-rgb.rgbToHex', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) vscode.window.showWarningMessage('[Hex to RGB::rgbToHex] No editor');
    else commandRgbToHex(editor);
  });

  const dToHex = vscode.commands.registerCommand('hex-to-rgb.toHex', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) vscode.window.showWarningMessage('[Hex to RGB::toHex] No editor');
    else commandToHex(editor);
  });

  const dToRgb = vscode.commands.registerCommand('hex-to-rgb.toRgb', () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) vscode.window.showWarningMessage('[Hex to RGB::toRgb] No editor');
    else commandToRgb(editor);
  });

  context.subscriptions.push(
    dhexToRgb,
    dHexToRgbRaw,
    dRgbToHex,
    dToHex,
    dToRgb,
  );
}

// this method is called when your extension is deactivated
export function deactivate(): void {}
