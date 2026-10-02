import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Sparkles, Maximize2 } from 'lucide-react';

interface HeroVideoPlayerProps {
  videoSrc?: string;
  posterSrc?: string;
}

export const HeroVideoPlayer: React.FC<HeroVideoPlayerProps> = ({
  videoSrc = "/Professional_video.mp4",
  posterSrc = "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto my-8">
      {/* Ambient Video Backlight Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#FF2E93] via-[#00D4FF] to-[#00E575] rounded-3xl blur-2xl opacity-30 animate-pulse-glow pointer-events-none" />

      {/* Main Video Frame with Animated Rainbow Border */}
      <div className="relative rounded-3xl rainbow-card border-2 border-white/20 overflow-hidden shadow-2xl bg-black">
        
        {/* Top Video Header Pill */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-black text-white">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping inline-block" />
            <span>PILLOW DIGITAL MOTION REEL</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-[#00D4FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>4K Cinema Production</span>
          </div>
        </div>

        {/* Video Element */}
        <div className="relative aspect-video w-full overflow-hidden bg-[#0A0D24] flex items-center justify-center">
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onError={() => setHasError(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover"
          />

          {/* Placeholder Notice if user hasn't copied the file yet */}
          {hasError && (
            <div className="absolute inset-0 bg-[#07091B]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3 z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF2E93] to-[#00D4FF] p-[2px] shadow-xl">
                <div className="w-full h-full bg-[#080D26] rounded-[14px] flex items-center justify-center">
                  <Play className="w-6 h-6 text-[#FFDE00]" />
                </div>
              </div>
              <h4 className="text-lg font-black text-white">
                Place Your Custom Video File
              </h4>
              <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                Paste your video into the project folder as: <br />
                <code className="text-[#00D4FF] font-mono px-2 py-1 rounded bg-black/50 border border-white/10 mt-1 inline-block">
                  public/hero-video.mp4
                </code>
              </p>
              <p className="text-[11px] text-slate-400">
                (Once pasted, your animation video will immediately play here!)
              </p>
            </div>
          )}

          {/* Bottom Floating Play / Pause & Audio Controls */}
          <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
            <div className="flex items-center space-x-2">
              <button
                onClick={togglePlay}
                className="p-3 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 text-white hover:text-[#00D4FF] hover:bg-black/85 transition-all shadow-xl"
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-3 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 text-white hover:text-[#00D4FF] hover:bg-black/85 transition-all shadow-xl"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg">
              <span>By R GROUP</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
