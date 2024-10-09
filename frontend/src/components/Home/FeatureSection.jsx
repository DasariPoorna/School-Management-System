import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { BsFillBookFill, BsFillClipboardCheckFill, BsFillFileEarmarkTextFill, BsFillBarChartFill } from 'react-icons/bs';

const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 30px;
  background: linear-gradient(135deg, #ADD8E6, #9370DB); /* Light Blue to Medium Purple */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  text-align: center;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    min-width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
    margin-right: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextContainer = styled.div`
  flex: 2;
  min-width: 300px;
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

const TextBlock = styled.div`
  flex: 1 1 45%;
  margin: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    margin: 10px 0;
    padding: 15px;
    font-size: 14px;
  }
`;

const Icon = styled.div`
  margin-right: 10px;
  font-size: 24px;
  color: #007bff;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const FeatureSection = () => {
  const [currentImage, setCurrentImage] = useState(teacher1);
  const images = [teacher1, teacher2];
  let imageIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      imageIndex = (imageIndex + 1) % images.length;
      setCurrentImage(images[imageIndex]);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <Section>
      <ImageContainer>
        <Image src={currentImage} alt="Illustration" />
      </ImageContainer>
      <TextContainer>
        <TextBlock>
          <Icon><BsFillBookFill /></Icon>
          <TextContent>
            <Title>Create Digital Lesson Plans</Title>
            <Description>Easy to use pre-filled CBC lesson plans with PCI’s, Key inquiry questions, and suggested learning experiences.</Description>
          </TextContent>
        </TextBlock>
        <TextBlock>
          <Icon><BsFillClipboardCheckFill /></Icon>
          <TextContent>
            <Title>Perform Daily CBC Assessments</Title>
            <Description>Teachers can perform CBC assessments daily and upload evidence to the learner's profile.</Description>
          </TextContent>
        </TextBlock>
        <TextBlock>
          <Icon><BsFillFileEarmarkTextFill /></Icon>
          <TextContent>
            <Title>Generate Digital CBC Grade Books</Title>
            <Description>Generate CBC grade book curated from entire term’s assessments. No more printing of grade books.</Description>
          </TextContent>
        </TextBlock>
        <TextBlock>
          <Icon><BsFillBarChartFill /></Icon>
          <TextContent>
            <Title>Weekly & Monthly Reports to Guardians</Title>
            <Description>Keep guardians informed of their children’s progress more regularly.</Description>
          </TextContent>
        </TextBlock>
      </TextContainer>
    </Section>
  );
};

export default FeatureSection;
