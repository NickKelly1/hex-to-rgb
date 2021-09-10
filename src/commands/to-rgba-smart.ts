import { MatchType } from '@nkp/color';
import vscode from 'vscode';
import { handleConversion } from '../utils/handle-conversion';

/**
 * To 🎨 rgba smart
 *
 * @param $e
 */
export function commandToRgbaSmart($e: vscode.TextEditor): void {
  handleConversion($e, (match) => {
    if (match.type === MatchType.Hex)
      return match.color.toRgba({ useCommas: true, });
    return match.color.toRgba();
  });
}
