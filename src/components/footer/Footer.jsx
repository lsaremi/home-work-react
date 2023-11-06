import blackLeaf from "../../images/black-leaf.svg";
import blackCandle from "../../images/black-candle.svg";
import {
  DesignerInfo,
  DesignerInfoContainer,
  FooterContainer,
  FooterNavList,
  FooterNavListContainer,
  LeftSideFooter,
  LogoFooterContainer,
  LogoImgFooter,
  RightSideFooter,
} from "../ui";

export const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterNavListContainer>
          <FooterNavList>
            <RightSideFooter>
              <LogoFooterContainer>
                <LogoImgFooter>
                  <img src={blackLeaf} alt="logo" />
                  <img src={blackCandle} alt="logo" />
                </LogoImgFooter>
                candleaf
              </LogoFooterContainer>
              <p>
                Your natural candle made for your home and for your wellness.
              </p>
            </RightSideFooter>
            <LeftSideFooter>
              <li style={{ color: "#56B280", marginBottom: "1rem" }}>
                Discovery
              </li>
              <li style={{ color: "#56B280", marginBottom: "1rem" }}>About</li>
              <li style={{ color: "#56B280", marginBottom: "1rem" }}>Info</li>
              <li>New season</li>
              <li>Help</li>
              <li>Contact us</li>
              <li>Most searched</li>
              <li>Shipping</li>
              <li>Privacy Policies</li>
              <li>Most selled</li>
              <li>Affiliate</li>
              <li>Terms & Conditions</li>
            </LeftSideFooter>
          </FooterNavList>
        </FooterNavListContainer>
        <DesignerInfoContainer>
          <DesignerInfo>
            <div>©Candleaf All Rights Reserved.</div>
            <div>Designed with ❤️ by uxbly</div>
          </DesignerInfo>
        </DesignerInfoContainer>
      </FooterContainer>
    </>
  );
};
