import React, { useEffect, useState } from "react";

/*
- Get the list of comments from the following API https://jsonplaceholder.typicode.com/comments
- Render the comments list as a component
- Each list item should also be a sub component
- List items should include the following data:
    * name
    * email
    * body
*/

const CommentsList = () => {
  const [comments, setComments] = useState<[]>([]);

  const fetchComments = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/comments");
    if (resp.ok) {
      const json = await resp.json();
      setComments(json);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      Test
      {comments.length > 0 &&
        comments.map((comment) => (
          <CommentsListItem
            name={comment["name"]}
            email={comment["email"]}
            body={comment["body"]}
          />
        ))}
    </>
  );
};

type CommentListItemProps = {
  name: string;
  email: string;
  body: string;
};

const CommentsListItem = (props: CommentListItemProps) => {
  const { name, email, body } = props;

  return (
    <>
      Name: {name}
      Email: {email}
      Body: {body}
    </>
  );
};

const App = () => {
  return (
    <>
      <CommentsList />
    </>
  );
};

export default App;
