import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgbx smart
 *
 * @param $e
 */
export function commandToRgbxSmart($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgbx({ useCommas: true, });
    return match.color.toRgbx();
  });
}
