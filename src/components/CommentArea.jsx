import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";
import { useState } from "react";
import { useEffect } from "react";

const CommentArea = (props) => {
  // state = {
  //   comments: [],
  //   isLoading: true,
  //   isError: false,
  // };
  const [comments, setComments] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Commentsfetch();
  }, []);

  useEffect(() => {
    Commentsfetch();
  }, [props]);

  const Commentsfetch = async () => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4Mzk4N2FiYWQyODAwMTliZDRjYjciLCJpYXQiOjE3MTA3NjY0NzIsImV4cCI6MTcxMTk3NjA3Mn0.G_nTK4lM8tcJWB7dLSW_AHoqRkSakiFxcL7Y_EIVBLE",
        },
      });
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setisLoading(!true);
        setIsError(!true);
        // this.setState({ comments: comments, isLoading: false, isError: false });
      } else {
        setisLoading(!true);
        setIsError(!false);
        // this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
      setisLoading(!true);
      setIsError(!false);
      // this.setState({ isLoading: false, isError: true });
    }
  };

  // componentDidMount() {
  //   this.Commentsfetch();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.Commentsfetch();
  //   }
  // }

  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={props.asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
