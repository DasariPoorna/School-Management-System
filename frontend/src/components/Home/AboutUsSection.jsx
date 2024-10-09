import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import about from '../../assets/about.png';
import about2 from '../../assets/about2.png';
import about3 from '../../assets/about3.png';

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 30px;
  background: linear-gradient(135deg, #ADD8E6, #9370DB); /* Light Blue to Medium Purple */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px; /* Adjusted margin to the right for spacing */

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: right; /* Align image container to the right */
  margin-left: 20px; /* Add space between image and text */

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-left: 0;
  }
`;

const Image = styled.img`
  width: 100%; /* Ensure image covers full width of the container */
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Set maximum width to keep images consistent */
  max-height: 300px; /* Set maximum height to maintain aspect ratio */
  object-fit: cover; /* Ensure the image scales without distortion */
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #FFFFFF; /* White */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #FFFFFF; /* White */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutUsSection = () => {
  const [currentImage, setCurrentImage] = useState(about);
  const images = [about, about2, about3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images]);

  return (
    <SectionContainer>
      <TextContainer>
        <Title>About Us</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod fermentum leo, nec tincidunt nisi hendrerit non.
          Vivamus et pulvinar libero. Nam efficitur, dolor sit amet congue tempus,
          purus ipsum ultrices odio, eget cursus mauris nisi vel arcu. Fusce tempus,
          justo at egestas feugiat, risus leo viverra lorem, quis pretium est libero sed ipsum.
        </Content>
      </TextContainer>
      <ImageContainer>
        <Image src={currentImage} alt="About Us" />
      </ImageContainer>
    </SectionContainer>
  );
}

export default AboutUsSection;
