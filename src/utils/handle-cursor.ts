import { parseText } from '@nkp/color';
import vscode from 'vscode';
import { MatchColorCallback } from '../types';

/**
 * If the cursor hovers over a color, convert it
 *
 * @param $e
 * @param cursor
 * @param mapColor
 */
export function handleCursor(
  $e: vscode.TextEditor,
  cursor: vscode.Position,
  mapColor: MatchColorCallback,
): void {
  const line = $e.document.lineAt(cursor.line);
  let altered = false;
  const modifiedText = parseText(line.text).mapColors((match) => {
    if (match.start <= cursor.character && cursor.character <= match.end) {
      altered = true;
      return mapColor(match);
    }
    return match.original;
  });

  if (altered) $e.edit( $b => { $b.replace(line.range, modifiedText); });
  else vscode.window.showWarningMessage('No color found on cursor');
}
