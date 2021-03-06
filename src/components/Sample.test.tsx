import "@testing-library/jest-dom/extend-expect";
import { Sample } from "./Sample";
import { render, screen, TestAuthProvider } from "test-utils";

describe("SampleComponent", () => {
  test("is rendered", async () => {
    render(
      <TestAuthProvider>
        <Sample />
      </TestAuthProvider>
    );
    // Auth0 contain async logic, so you should use findBy~ not getBy~.
    // See: https://testing-library.com/docs/dom-testing-library/api-async/#findby-queries
    await expect(screen.findByRole("button")).resolves.toHaveTextContent(
      "revalidate API"
    );
  });
});
