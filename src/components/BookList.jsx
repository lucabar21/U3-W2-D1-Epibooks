import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    searchQuery: "",
    selected: false,
  };

  changeState = (newSelectedValue) => {
    this.setState({
      selected: newSelectedValue,
    });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3 justify-content-between">
          <Col xs={5}>
            {this.props.books
              .filter((b) => b.title.toLowerCase().includes(this.state.searchQuery))
              .map((b) => (
                <SingleBook
                  key={this.state.asin}
                  book={b}
                  selected={this.state.selected === b.asin}
                  changeSelected={this.changeState}
                />
              ))}
          </Col>
          <Col xs={5} key={this.state.asin + 1}>
            {this.state.selected && <CommentArea asin={this.state.selected} />}
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
