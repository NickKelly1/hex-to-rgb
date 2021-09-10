import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgba numbers
 *
 * @param $e
 */
export function commandToRgbaNumbers($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgba({ useCss: false, useCommas: true, });
    return match.color.toRgba({ useCss: false, });
  });
}
