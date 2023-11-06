import { Header, Footer, Main } from "./components";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  /* background-color: red; */
`;
const App = () => {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
};

export default App;
