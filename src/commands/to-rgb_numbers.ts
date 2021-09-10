import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgb_ numbers
 *
 * @param $e
 */
export function commandToRgb_Numbers($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgb({ useCss: false, useCommas: true, });
    return match.color.toRgb({ useCss: false, });
  });
}
