import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * Convert the target hex's to rgbx (raw)
 *
 * @param $e
 */
export function commandHexToRgbRaw($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type !== MatchType.Rgbx) return match.original;
    return match.color.toRgbx({ useCommas: true, useCss: false, });
  });
}
