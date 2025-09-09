import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVideoFallback]'
})
export class VideoFallback {
  @Input() fallbackVideo: string = 'https://videos.pexels.com/video-files/14052141/14052141-hd_1920_1080_25fps.mp4'; // default fallback
  private readonly renderer = inject(Renderer2);
  private readonly el = inject<ElementRef<HTMLVideoElement>>(ElementRef);

  @HostListener('error')
  onError() {
    const element = this.el?.nativeElement;
    if (element) {
      if (element.src !== this.fallbackVideo) {
        this.renderer.setAttribute(element, 'src', this.fallbackVideo);
      }
    }
  }
}
