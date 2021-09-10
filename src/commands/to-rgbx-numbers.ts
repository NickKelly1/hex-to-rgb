import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgbx numbers
 *
 * @param $e
 */
export function commandToRgbxNumbers($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgbx({ useCss: false, useCommas: true, });
    return match.color.toRgbx({ useCss: false, });
  });
}
