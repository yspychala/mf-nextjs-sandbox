import { Provider } from "react-redux";
import styled from "styled-components";
import AddCount from "./AddCount";
import count from "../store/count/reducer";
import { useStore } from "react-redux";
// import { ThemeProvider } from "styled-components";

// const theme = {
//   colors: { primary: "blue" },
//   space: { small: "10px", large: "10px" },
// };

const Container = styled("header")`
  background: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.space.small};
  border-radius: 5px;
  color: white;
  font-family: Helvetica;
  margin-bottom: ${(props) => props.theme.space.large};
`;

function Header() {
  return (
    <Container>
      header <AddCount />
    </Container>
  );
}

const RemoteHeader = (props) => {
  const store = props?.store || useStore() || {};
  // The “count” reducer is injected because it doesn’t exist in the “messaging” app
  store.injectReducer("count", count);

  return (
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <Header {...props} />
      {/* </ThemeProvider> */}
    </Provider>
  );
};

export default RemoteHeader;
