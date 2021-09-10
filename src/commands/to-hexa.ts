import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To #hexa
 *
 * @param $e
 */
export function commandToHexa($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    return match.color.toHex({ useAlpha: true, });
  });
}
