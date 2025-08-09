import { useState, useRef } from 'react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'audio/mp3') {
      setAudioFile(URL.createObjectURL(file));
    } else {
      alert('Please upload a valid MP3 file');
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

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4 bg-opacity-70 backdrop-blur-md bg-white rounded-lg shadow-lg">
      <input
        type="file"
        accept="audio/mp3"
        onChange={handleFileUpload}
        className="mb-4"
      />
      {audioFile && (
        <audio ref={audioRef} src={audioFile} onEnded={() => setIsPlaying(false)} />
      )}
      <Button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      {audioFile && (
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          animate={{ scaleX: isPlaying ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
};

export default AudioPlayer;
