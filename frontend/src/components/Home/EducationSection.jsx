import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPlayCircle } from 'react-icons/fa';

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 30px;
  background: linear-gradient(135deg, #ADD8E6, #9370DB); /* Light Blue to Medium Purple */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  color: white;
  text-align: left;
  margin-right: 20px; /* Margin right for spacing between text and video */

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const VideoContainer = styled.div`
  flex: 1;
  position: relative;
  margin-left: 20px; /* Margin left for spacing between text and video */

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.6;
  margin-bottom: 4px; /* Margin between paragraphs */

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  border-radius: 10px;
  border: 8px solid white; /* Thick white border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

const YouTubeEmbed = ({ embedUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = embedUrl.split('v=')[1];
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="video-responsive">
      {isPlaying ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <VideoContainer>
          <Thumbnail src={thumbnailUrl} alt="Video Thumbnail" onClick={() => setIsPlaying(true)} />
          <PlayButton onClick={() => setIsPlaying(true)}>
            <FaPlayCircle />
          </PlayButton>
        </VideoContainer>
      )}
    </div>
  );
};

const EducationSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <Title><strong>Every child matters</strong></Title>
        <Description>
         Getting the right assessments and also handling of CBC grade books can be tiring and time-consuming, often only used at the end of the term. Our platform offers an easy and revolutionary way to manage CBC online. Teachers can fill out CBC assessments promptly, and parents receive weekly updates on their children's progress.
        </Description>
      </TextContainer>
      <VideoContainer>
        <YouTubeEmbed embedUrl="https://www.youtube.com/watch?v=prf0nGd5eZU" />
      </VideoContainer>
    </SectionContainer>
  );
};

export default EducationSection;
