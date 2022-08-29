import styled from "@emotion/styled/macro";

export const HomePane = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${({ theme }) => theme.colors.textPrimary};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeaderPane = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

export const HeaderLogoTitle = styled.h2`
  margin-left: 0.5em;
`;

export const HeroSection = styled.section`
  display: none;
  flex-direction: column;
  justify-content: center;
  padding: 1em;
  width: 100%;
  @media (min-width: ${(props) => props.theme.media.medium}) {
    display: flex;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  padding: 0;
  margin: 0;
  margin-left: 3rem;
`;

export const HeroBody = styled.h3`
  padding: 0;
  margin: 0;
  margin-left: 3rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const FormWrapper = styled.div`
  width: 100%;
  margin: 1em 2em;
  border-radius: 16px;
  max-width: 500px;
  min-height: 350px;
  padding: 1em;
  height: 100%;
  border: 2px solid ${(props) => props.theme.colors.secondaryLight};
`;

export const ActionTitle = styled.h3`
  padding: 1em;
  width: 100%;
  text-align: center;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `2px solid ${theme.colors.textPrimary}` : "none"};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.textPrimary : theme.colors.textSecondary};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.secondaryLight};
  }
`;

export const FooterPane = styled.footer`
  max-width: 1400px;

  padding: 2em;
  margin: 0 auto;
  border-top: ${(props) => `1px solid ${props.theme.colors.border}`};
  width: 100%;

  ul {
    list-style: none;
    padding: 0;
    width: 100%;
  }

  li {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 0.35em;
    text-align: left;
    width: 100%;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  @media (min-width: ${(props) => props.theme.media.medium}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: none;

  @media (min-width: ${(props) => props.theme.media.medium}) {
    display: block;
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
`;
