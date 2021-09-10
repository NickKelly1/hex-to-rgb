import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To #hexx
 *
 * @param $e
 */
export function commandtoHexx($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    return match.color.toHex();
  });
}
