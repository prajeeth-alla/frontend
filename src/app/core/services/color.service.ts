import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  getColorPalette(
    color: 'primary' | 'accent' | 'warn' | 'info',
    shade: number | string = 500
  ): string {
    const cssVar = `--${color}-${shade}`;
    return (
      getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() ||
      this.getFallbackColor(color, shade)
    );
  }

  getContrastColor(
    color: 'primary' | 'accent' | 'warn' | 'info',
    shade: number | string = 500
  ): string {
    const cssVar = `--${color}-contrast-${shade}`;
    return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim() || '#ffffff';
  }

  private getFallbackColor(color: string, shade: number | string): string {
    const fallbacks: any = {
      primary: { 500: '#3E4EE4' },
      accent: { 500: '#FF5771' },
      warn: { 500: '#E09E01' },
      info: { 500: '#617193' },
    };

    return fallbacks[color]?.[shade] || fallbacks[color]?.[500] || '#000000';
  }

  getThemeColors() {
    return {
      primary: this.getColorPalette('primary'),
      accent: this.getColorPalette('accent'),
      warn: this.getColorPalette('warn'),
      info: this.getColorPalette('info'),
    };
  }
}
