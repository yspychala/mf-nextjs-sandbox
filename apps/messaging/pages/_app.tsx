import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
// import { light } from "@brikke/themes";
import { wrapper } from "store/wrapper";

const theme = {
  colors: { primary: "blue" },
  space: { small: "10px", large: "10px" },
};

const App = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...props.pageProps} store={store} />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
