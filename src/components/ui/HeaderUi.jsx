import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  font-size: 2rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  color: #56b280;
`;

export const LogoImg = styled.div`
  background-color: #56b280;
  width: 3.3rem;
  height: 3.3rem;
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
    right: 7px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;

  :first-child {
    margin-right: 1rem;
  }
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & a {
    color: black;
    text-decoration: none;
  }

  :last-child {
    margin-right: 0;
  }
`;

export const NavItem = styled.li`
  display: inline;
  margin-right: 7rem;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
`;

export const MiddlePic = styled.div`
  position: absolute;
  border-radius: 2px;
  background: rgba(247, 248, 250, 0.8);
  backdrop-filter: blur(12px);
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h2,
  span {
    font-size: 3rem;
    font-weight: 500;
    margin-top: 0;
  }

  & p {
    text-align: center;
    width: 80%;
  }

  & button {
    outline: 0;
    border: 0;
    padding: 0.75rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    color: white;
    cursor: pointer;
    background-color: #56b280;
  }
`;

export const HeaderUi = () => {
  return <div>HeaderUi</div>;
};
