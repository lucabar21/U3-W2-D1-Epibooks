import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };
  const checkSelected = (value) => (value === props.selected ? `selected` : "");

  return (
    <>
      <Card
        data-testid="card-element"
        onClick={() => props.changeSelected(props.book.asin)}
        style={{ border: props.selected ? "3px solid red" : "none" }}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
