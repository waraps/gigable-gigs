import type { ReactNode } from "react";
import Router from "./app/routes/Router";
import { Provider } from "react-redux";

import { store } from "./app/state/store";

const App: () => ReactNode = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
