import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

it(`not renders the SingleComment component at the start`, () => {
  render(<BookList books={fantasy} />);

  const singleComment = screen.queryByTestId(`single-comment`);
  expect(singleComment).not.toBeInTheDocument();
});
