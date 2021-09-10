import { ColorMatch } from '@nkp/color';

export interface MatchColorCallback {
  (match: ColorMatch): string;
}
