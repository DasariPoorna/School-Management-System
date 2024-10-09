import React from 'react';
import styled from 'styled-components';
import pricingImage from '../../assets/pricing.png'; // Adjust the path as needed
import {
  SectionContainer,
  Header,
  Title,
  Subtitle,
  PlansContainer,
  PricingImage
} 
from '../../styles/PricingSectionStyles';

const PricingSection = () => {
  return (
    <SectionContainer>
      <Header>
        <Title>Pricing</Title>
        <Subtitle>Pricing for everyone. Choose your plan now! * Licenses billed per classroom termly</Subtitle>
      </Header>
      <PlansContainer>
        <PricingImage src={pricingImage} alt="Pricing details" />
      </PlansContainer>
    </SectionContainer>
  );
};

export default PricingSection;
