import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

it(`creates the right number of result when the input changes`, () => {
  render(<BookList books={fantasy} />);

  const searchField = screen.getByPlaceholderText(/Cerca un libro/i);

  fireEvent.change(searchField, { target: { value: `the last` } });

  const theRightNumberOfCards = screen.getAllByTestId(`card-element`);
  expect(theRightNumberOfCards).toHaveLength(2);
});
