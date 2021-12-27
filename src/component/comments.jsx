import React, { Component } from "react";
export default class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <>
        <h3 className="mb-4">Comments</h3>
        {comments.length &&
          comments.map((comments, index) => {
            return (
              <React.Fragment key={index}>
                <h6>{comments?.author}</h6>
                <p>{comments?.date}</p>
                <h6>{comments?.comment}</h6>
                <p>{comments?.rating}</p>
              </React.Fragment>
            );
          })}
      </>
    );
  }
}
