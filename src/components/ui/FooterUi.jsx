import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

export const FooterNavListContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  background-color: #272727;
`;

export const FooterNavList = styled.div`
  width: 70%;
  padding: 2rem 0;
  border-top: 1px solid #fff;
  margin: 0 auto;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DesignerInfoContainer = styled.div`
  width: 100%;
  font-size: 1.6rem;
  padding: 1.2rem 0;
  background-color: #e5e5e5;
`;

export const DesignerInfo = styled.div`
  width: 70%;
  margin: 0 auto;
  color: #5e6e89;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoFooterContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

export const LogoImgFooter = styled.div`
  background-color: #fff;
  width: 6.3rem;
  height: 6.3rem;
  border-radius: 100%;
  position: relative;
  margin-right: 1rem;

  & img {
    position: absolute;
  }

  :first-child {
    z-index: 1;
  }

  :last-child {
    bottom: 0;
    right: 1.6rem;
  }
`;

export const RightSideFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  & p {
    width: 54%;
    font-size: 1.2rem;
  }
`;

export const LeftSideFooter = styled.ul`
  display: grid;
  grid-template-columns: 2.5fr 2fr 2fr;

  & li {
    list-style-type: none;
    white-space: nowrap;
    font-size: 1.3rem;
    font-weight: 300;
    cursor: pointer;
  }
`;

export const FooterUi = () => {
  return <div>FooterUi</div>;
};
