'use client';
import React from 'react';

type VideoPlayerProps = {
  youtubeId: string | null | undefined;
};

const VideoPlayer = ({ youtubeId }: VideoPlayerProps) => {
  if (!youtubeId) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl mb-4 font-semibold text-text-primary">Trailer</h2>
        <div className="flex h-48 items-center justify-center rounded-lg bg-slate-800">
          <p className="text-slate-400">Trailer untuk anime ini tidak tersedia.</p>
        </div>
      </div>
    );
  }

  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className='mt-8'>
      <h2 className='mb-4 text-2xl font-semibold text-text-primary'>Trailer</h2>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          src={embedUrl}
          title="Anime Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy='strict-origin-when-cross-origin'
          className="w-full h-full rounded-lg shadow-xl"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayer;
