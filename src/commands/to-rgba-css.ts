import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgba css
 *
 * @param $e
 */
export function commandToRgbaCss($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgba({ useCss: true, useCommas: true, });
    return match.color.toRgba({ useCss: true, });
  });
}
