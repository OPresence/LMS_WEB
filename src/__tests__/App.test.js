import { Screen, render } from "@testing-library/react";
import AboutUs from "../components/About-us";

describe("App Component", () => {
  it("Should render app", () => {
    render(<AboutUs />);
  });
});
