import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const FooterContainer = styled.footer`
  background-color:  #9370DB;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  margin-top: 40px; /* Adjust margin-top as needed */
`;

const FooterText = styled.p`
  font-size: 14px;
  cursor: pointer; /* Add cursor pointer for clickable text */
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterIcon = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

const Footer = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Function to handle navigation when "Zawadii Inc" is clicked
  const handleZawadiiClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <FooterContainer>
      <FooterText>About Zawadii.</FooterText>
      <FooterText>
        A Kenyan-based EdTech startup Building the world's best assessment tool for learning.
      </FooterText>
      
      <FooterLinks>
        <FooterLink href="#">Connect</FooterLink>
        <FooterLink href="#">News / Events</FooterLink>
        <FooterLink href="#">Resources</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms</FooterLink>
        <FooterLink href="#">Careers</FooterLink>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinks>

      <FooterText>Nairobi, Kenya</FooterText>
      <FooterText>0794203261</FooterText>
      <FooterText>hello@zawadii.org</FooterText>

      <FooterLinks>
        <FooterIcon href="#"><FaFacebook /></FooterIcon>
        <FooterIcon href="#"><FaTwitter /></FooterIcon>
        <FooterIcon href="#"><FaLinkedin /></FooterIcon>
        <FooterIcon href="#"><FaInstagram /></FooterIcon>
      </FooterLinks>

      <FooterText onClick={handleZawadiiClick}>
        &copy; 2024 All rights reserved || Zawadii Company .
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
