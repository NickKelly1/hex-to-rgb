import { parseText } from '@nkp/color';
import vscode from 'vscode';
import { MatchColorCallback } from '../types';

/**
 * Convert all colors within the selection
 *
 * @param $e
 * @param start
 * @param end
 * @param mapColor
 */
export function handleSelection(
  $e: vscode.TextEditor,
  start: vscode.Position,
  end: vscode.Position,
  mapColor: MatchColorCallback,
): void {
  // use selection
  // convert all colors within the selection
  const range = new vscode.Range(start, end);
  let altered = false;
  const modifiedText = parseText($e.document.getText(range)).mapColors((match) => {
    altered = true;
    return mapColor(match);
  });
  if (altered) { $e.edit(($b) => { $b.replace(range, modifiedText); }); }
  else { vscode.window.showWarningMessage('No color found in selection'); }
}
