import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgb_ css
 *
 * @param $e
 */
export function commandToRgb_Css($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgb({ useCss: true, useCommas: true, });
    return match.color.toRgb({ useCss: true, });
  });
}
