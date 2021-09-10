import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgb_ smart
 *
 * @param $e
 */
export function commandToRgb_Smart($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgb({ useCommas: true, });
    return match.color.toRgb();
  });
}
