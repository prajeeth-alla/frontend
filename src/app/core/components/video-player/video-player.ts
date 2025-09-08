import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  Input,
  inject,
  ChangeDetectorRef,
  AfterViewChecked,
} from '@angular/core';
import RxPlayer from 'rx-player';
import { VehicleVideo } from '../../models/vehicle.model';
import { VideoFallback } from '../../directives/video-fallback/video-fallback';
import { ImgFallback } from '../../directives/img-fallback/img-fallback';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.html',
  styleUrls: ['./video-player.scss'],
  imports: [ImgFallback, VideoFallback]
})
export class VideoPlayer implements AfterViewChecked, OnDestroy {
  @Input({ required: true }) video!: VehicleVideo;
  @ViewChild('videoEl') videoEl?: ElementRef<HTMLVideoElement>;

  private readonly cdr = inject(ChangeDetectorRef);
  private player: RxPlayer | null = null;
  private shouldInitPlayer = false;
  isPlaying = false;

  play() {
    this.isPlaying = true;
    this.shouldInitPlayer = true;

    // Tell Angular: re-render now so <video> is created
    this.cdr.detectChanges();
  }

  ngAfterViewChecked() {
    if (this.shouldInitPlayer && this.videoEl) {
      this.shouldInitPlayer = false;

      const el = this.videoEl.nativeElement;
      this.player = new RxPlayer({ videoElement: el });

      const isMpd = /\.mpd(\?.*)?$/.test(this.video.clipUrl);
      const transport = isMpd ? 'dash' : 'directfile';

      this.player.loadVideo({
        url: this.video.clipUrl,
        transport,
        autoPlay: true,
      });
    }
  }

  ngOnDestroy() {
    if (this.player) {
      try {
        this.player.stop();
      } catch {}
      this.player = null;
    }
  }
}
