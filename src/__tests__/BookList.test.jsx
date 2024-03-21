import { render, screen } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

it(`renders the correct number of Bootstrap cards`, () => {
  render(<BookList books={fantasy} />);
  const theRightNumberOfCards = screen.getAllByTestId(`card-element`);
  expect(theRightNumberOfCards).toHaveLength(fantasy.length);
});
