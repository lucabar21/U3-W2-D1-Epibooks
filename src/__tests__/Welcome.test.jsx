import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

it(`mounts Welcome component`, () => {
  render(<Welcome />);
  const welcomeComponent = screen.getByText(/Benvenuti in EpiBooks!/i);
  expect(welcomeComponent).toBeInTheDocument();
});
