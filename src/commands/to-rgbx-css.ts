import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgbx css
 *
 * @param $e
 */
export function commandToRgbxCss($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgbx({ useCss: true, useCommas: true, });
    return match.color.toRgbx({ useCss: true, });
  });
}
