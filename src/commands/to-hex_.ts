import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To #hex_
 *
 * @param $e
 */
export function commandToHex_($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    return match.color.toHex({ useAlpha: false, });
  });
}
