import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * Convert all colours to rgbx
 *
 * @param $e
 */
export function commandToRgb($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgb({ useCss: true, useCommas: true, });

    return match.color.toRgb({ useCss: true, });
  });
}
