import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * Convert the target rgbx's to hex
 *
 * @param $e
 */
export function commandRgbToHex($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type !== MatchType.Rgbx) return match.original;
    return match.color.toHex({ useHash: true, });
  });
}
