import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";
import CommentArea from "../components/CommentArea";

it(`loading reviews after clicking on a book`, async () => {
  render(<BookList books={fantasy} />);
  render(<CommentArea />);

  const cardSelected = screen.getAllByTestId(`card-element`);

  fireEvent.click(cardSelected[0]);

  const reviews = await screen.findByTestId(`single-comment`);
  expect(reviews).toBeInTheDocument();
});
