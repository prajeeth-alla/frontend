import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImgFallback]',
})
export class ImgFallback {
  @Input() fallbackImg: string = 'https://gcb.vd.onl/clients/11764/images/500B46A5-E64F-0B13-E892-D1A6F69C5EC9/960/500B46A5-E64F-0B13-E892-D1A6F69C5EC9_f00010.jpg'; // default fallback
  private readonly renderer = inject(Renderer2);
  private readonly el = inject<ElementRef<HTMLImageElement>>(ElementRef);

  @HostListener('error')
  onError() {
    const element = this.el?.nativeElement;
    if (element) {
      if (element.src !== this.fallbackImg) {
        this.renderer.setAttribute(element, 'src', this.fallbackImg);
      }
    }
  }
}
