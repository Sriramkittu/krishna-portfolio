"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import Overlay from "./Overlay";
import FrameCounter from "./FrameCounter";
import { Sparkles, Loader2 } from "lucide-react";

interface ScrollyCanvasProps {
  totalFrames?: number;
  frameFolder?: string;
}

export default function ScrollyCanvas({
  totalFrames = 30,
  frameFolder = "/sequence",
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [isPreloaded, setIsPreloaded] = useState<boolean>(false);
  const [activeFrame, setActiveFrame] = useState<number>(0);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  // Hook into Framer Motion useScroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Render a specific frame on canvas with object-fit: cover
  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Reset and fill with true black background to match frames seamlessly
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, width, height);

    // Object-fit: cover calculation
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    // High quality image smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Handle window resizing with devicePixelRatio for Retina/HiDPI displays
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;

    // Redraw the current frame after resize
    renderFrame(currentFrameRef.current);
  }, [renderFrame]);

  // Preload all sequence images in useEffect
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];
    imagesRef.current = images;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      // Primary format: WebP generated frame_XX_delay-0.067s.webp
      const paddedIndex = i.toString().padStart(2, "0");
      const webpPath = `${frameFolder}/frame_${paddedIndex}_delay-0.067s.webp`;
      const fallbackPngPath = `${frameFolder}/ezgif-frame-${(i + 1).toString().padStart(3, "0")}.png`;

      img.src = webpPath;

      img.onload = () => {
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        setLoadingProgress(pct);

        if (loadedCount === 1) {
          // Render first frame as soon as it's ready
          requestAnimationFrame(() => renderFrame(0));
        }

        if (loadedCount === totalFrames) {
          setIsPreloaded(true);
          requestAnimationFrame(() => renderFrame(0));
        }
      };

      img.onerror = () => {
        // Fallback to PNG if WebP fails
        img.src = fallbackPngPath;
        img.onload = () => {
          loadedCount++;
          const pct = Math.round((loadedCount / totalFrames) * 100);
          setLoadingProgress(pct);
          if (loadedCount === totalFrames) {
            setIsPreloaded(true);
            requestAnimationFrame(() => renderFrame(0));
          }
        };
      };

      images.push(img);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [totalFrames, frameFolder, handleResize, renderFrame]);

  // Sync scroll position to frame index
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const clampedProgress = Math.min(Math.max(progress, 0), 1);
    setScrollPercent(Math.round(clampedProgress * 100));

    // Map 0 to 1 onto [0, totalFrames - 1]
    const targetIndex = Math.min(
      totalFrames - 1,
      Math.floor(clampedProgress * totalFrames)
    );

    if (targetIndex !== currentFrameRef.current) {
      currentFrameRef.current = targetIndex;
      setActiveFrame(targetIndex);
      requestAnimationFrame(() => renderFrame(targetIndex));
    }
  });

  return (
    <section
      id="scrolly-section"
      ref={containerRef}
      className="relative w-full h-[500vh] bg-black"
    >
      {/* Sticky 100vh Viewport Wrapper */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0 block bg-black"
          style={{ width: "100vw", height: "100vh" }}
        />

        {/* Subtle Ambient Vignette / Radial Grain Overlay */}
        <div className="absolute inset-0 z-[5] pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/50" />
        <div className="absolute inset-0 z-[6] pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/80" />

        {/* Loading Overlay with Sleek Awwwards Progress Bar */}
        {!isPreloaded && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl transition-opacity duration-700">
            <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-white animate-spin" />
                </div>
                <div className="absolute inset-0 rounded-full border-t border-white shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-spin" />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-300">
                  Synthesizing Sequence
                </span>
              </div>

              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mb-3">
                <div
                  className="bg-white h-full transition-all duration-200 ease-out shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>

              <div className="flex items-center justify-between w-full font-mono text-[11px] text-gray-500">
                <span>BUFFERING FRAMES</span>
                <span className="text-white font-medium">{loadingProgress}%</span>
              </div>
            </div>
          </div>
        )}

        {/* Parallax Overlay Texts (z-index 10) */}
        <Overlay scrollYProgress={scrollYProgress} />

        {/* Fixed Scrubber HUD / Frame Counter */}
        <FrameCounter
          currentFrame={activeFrame}
          totalFrames={totalFrames}
          scrollPercent={scrollPercent}
        />
      </div>
    </section>
  );
}
