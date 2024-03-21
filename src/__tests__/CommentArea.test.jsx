import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";
import CommentArea from "../components/CommentArea";

it("renders CommentArea component", () => {
  render(<BookList books={fantasy} />);
  render(<CommentArea />);

  const cardSelected = screen.getAllByTestId(`card-element`);

  fireEvent.click(cardSelected[0]);

  const showsArea = screen.getAllByText(/Recensione/i);
  expect(showsArea[0]).toBeInTheDocument();
});
