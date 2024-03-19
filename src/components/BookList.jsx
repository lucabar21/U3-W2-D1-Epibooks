import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

const BookList = (props) => {
  // state = {
  //   searchQuery: "",
  //   selected: null,
  // };

  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const changeSelected = (newSelectedValue) => {
    setSelected(newSelectedValue);
  };
  // changeState = (newSelectedValue) => {
  //   this.setState({
  //     selected: newSelectedValue,
  //   });
  // };

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3 justify-content-between">
        <Col xs={5}>
          {props.books
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((b, i) => (
              <SingleBook key={i} book={b} selected={selected === b.asin} changeSelected={changeSelected} />
            ))}
        </Col>
        <Col xs={5} key={searchQuery.asin + 1}>
          {selected && <CommentArea asin={selected} />}
        </Col>
      </Row>
    </>
  );
};

export default BookList;
