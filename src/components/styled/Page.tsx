import * as React from "react";
import styled, { StyledFunction } from "styled-components";

interface HeroProps {
  height?: string;
  bgImage: string;
}

export const Fullwidth = styled.div`
  width: 100%;
`;

export const Center = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const hero: StyledFunction<HeroProps & React.HTMLProps<HTMLInputElement>> =
  styled.div;

export const Hero = hero`
  width: 100%;
  min-height: ${props => props.height || "100vh"};
  background: ${props =>
    "linear-gradient(287.44deg, rgba(26, 27, 37, 0.69) 9.79%, #1A1B25 50.93%), url(" +
    props.bgImage +
    ");"}
`;
