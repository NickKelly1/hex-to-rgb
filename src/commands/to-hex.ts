import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * Convert all colours to hex
 *
 * @param $e
 */
export function commandToHex($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    return match.color.toHex();
  });
}
