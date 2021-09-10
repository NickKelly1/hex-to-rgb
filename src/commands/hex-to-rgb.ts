import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * Convert the target hex's to rgbx
 *
 * @param $e
 */
export function commandHexToRgb($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type !== MatchType.Hex) return match.original;
    return match.color.toRgbx({ useCommas: true, useCss: true, });
  });
}
