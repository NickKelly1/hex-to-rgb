import vscode from 'vscode';
import { MatchColorCallback } from '../types';
import { handleCursor } from './handle-cursor';
import { handleSelection } from './handle-selection';

/**
 * Convert the target colour encoding
 *
 * @param $e
 * @param mapColor
 */
export function handleConversion($e: vscode.TextEditor, mapColor: MatchColorCallback): void {
  const selection = $e.selection;
  const start = selection.start;
  const end = selection.end;

  if (start.line === end.line && start.character === end.character) {
    handleCursor($e, start, mapColor);
  } else {
    handleSelection($e, start, end, mapColor);
  }
}
