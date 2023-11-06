import {
  HeaderContainer,
  IconWrapper,
  NavItem,
  NavList,
  ImageBox,
  MiddlePic,
  LogoContainer,
  LogoImg,
} from "../ui";
import leaf from "../../images/leaf.svg";
import candle from "../../images/candle.svg";
import cart from "../../images/Cart.svg";
import profile from "../../images/Profile.svg";
import imagePic from "../../images/bg-image.png";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <LogoImg>
            <img src={leaf} alt="logo" />
            <img src={candle} alt="logo" />
          </LogoImg>
          candleaf
        </LogoContainer>
        <NavList>
          <NavItem>
            <a href="#">Discovery</a>
          </NavItem>
          <NavItem>
            <a href="#">About</a>
          </NavItem>
          <NavItem>
            <a href="#">Contact us</a>
          </NavItem>
        </NavList>
        <IconWrapper>
          <img src={profile} alt="icon profile" />
          <img src={cart} alt="icon cart" />
        </IconWrapper>
      </HeaderContainer>
      <ImageBox>
        <img src={imagePic} alt="candle pic" style={{ width: "100%" }} />
        <MiddlePic>
          <span>🌿</span>
          <h2>The nature candle</h2>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments
          </p>
          <button>Discovery our collection</button>
        </MiddlePic>
      </ImageBox>
    </>
  );
};
