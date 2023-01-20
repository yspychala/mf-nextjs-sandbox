import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { light as theme } from "@brikke/themes";
import { render, screen, waitFor } from "@testing-library/react";
import Index from "../pages/index";

import { makeStore } from "../../store/store/wrapper";

const store = makeStore();

describe("Home page", () => {
  it("renders a heading", async () => {
    await waitFor(() => {
      render(
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Index />
          </ThemeProvider>
        </Provider>
      );
    });

    const heading = screen.getByRole("heading", {
      name: /Host - index Page/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
