import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 40px 60px;
  background: #0d0d11;
  color: #aaa;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FooterCol = styled.div`
  margin: 10px;
  min-width: 180px;

  h4 {
    margin-bottom: 15px;
    color: #fff;
  }

  a {
    display: block;
    margin-bottom: 8px;
    color: #aaa;
    text-decoration: none;
    &:hover {
      color: #facc15;
    }
  }
`;
