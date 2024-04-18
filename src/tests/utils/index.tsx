import userEvent from "@testing-library/user-event";
import { render as renderTestingLibrary } from "@testing-library/react";

// setup function
export default function render(jsx: React.ReactNode) {
  return {
    user: userEvent.setup(),
    // Import `render` from the framework library of your choice.
    // See https://testing-library.com/docs/dom-testing-library/install#wrappers
    ...renderTestingLibrary(jsx),
  };
}
