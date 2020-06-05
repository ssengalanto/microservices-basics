import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content = comment.content;

    if (comment.status === 'pending') {
      content = 'This comment is awaiting moderation';
    }

    if (comment.status === 'rejected') {
      content = 'This comment has been rejected';
    }

    if (comment) return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
