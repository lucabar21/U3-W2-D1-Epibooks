import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasy from "../data/fantasy.json";

describe(`renders borders correctly`, () => {
  it(`renders the border of a book after clicks`, () => {
    render(<BookList books={fantasy} />);

    const cardSelected = screen.getAllByTestId(`card-element`);
    fireEvent.click(cardSelected[0]);

    const showsNoBorder = getComputedStyle(cardSelected[0]);
    const showsBorder = getComputedStyle(cardSelected[0]).borderColor;
    expect(showsBorder).not.toBe(showsNoBorder);
  });

  it(`renders the border of a second book after clicks after the first one`, () => {
    render(<BookList books={fantasy} />);

    const cardSelected = screen.getAllByTestId(`card-element`);
    fireEvent.click(cardSelected[0]);

    const showsNoBorder = getComputedStyle(cardSelected[0]);
    const showsBorder = getComputedStyle(cardSelected[0]).borderColor;

    expect(showsBorder).not.toBe(showsNoBorder);

    fireEvent.click(cardSelected[1]);
    expect(showsNoBorder).not.toBe(showsBorder);
  });
});
