```javascript
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Visualizer } from '../components/Visualizer';
import { AudioPlayer } from '../components/AudioPlayer';

export default function HomePage() {
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/mp3') {
      setAudioFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid MP3 file.');
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      const handleEnd = () => setIsPlaying(false);
      audioRef.current.addEventListener('ended', handleEnd);

      return () => {
        audioRef.current.removeEventListener('ended', handleEnd);
      };
    }
  }, [audioRef]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 flex flex-col items-center justify-center p-4">
      <motion.div
        className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-8 shadow-lg w-full max-w-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Glassmorphism Music Player</h1>
        <input
          type="file"
          accept="audio/mp3"
          onChange={handleFileUpload}
          className="mb-4 w-full text-white"
        />
        <Button onClick={togglePlayPause} className="w-full mb-4">
          {isPlaying ? 'Pause' : 'Play'}
        </Button>
        {audioFile && (
          <audio ref={audioRef} src={audioFile} className="hidden" controls />
        )}
        <Visualizer audioRef={audioRef} />
      </motion.div>
    </div>
  );
}
```