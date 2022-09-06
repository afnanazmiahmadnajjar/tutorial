import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// const axios = requier("axios");
import "../styles/Teacheraddtutorial.css";
export class Teacheraddtutorial extends Component {
  constructor(props) {
    super(props);
    this.stat = {
      files: [],
    };
  }

  onInputChange = (e) => {
    this.setState(e.target.files);
  };

  onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < this.stat.files.length; i++) {
      data.append("file", this.stat.files[i]);
    }

    //   axios
    //     .post("//localhost:8000/upload", data)
    //     .then((response) => {
    //       toast.success("Upload Success");
    //       onSuccess(response.data);
    //     })
    //     .catch((e) => {
    //       toast.error("Upload Error");
    //     });
  };

  render() {
    return (
      <form method="post" action="#" id="#">
        <div className="form-group files">
          <h1>Upload courses tutorial here </h1>
          <input
            type="file"
            onChange={this.onInputChange}
            className="form-control"
            multiple
          />
        </div>
        <button onSubmit={this.onSubmit}>Submit</button>
        <button
          onClick={() => {
            <Redirect to="/quize" />;
          }}
        >
          creat QUIZE
        </button>
      </form>
    );
  }
}

export default Teacheraddtutorial;
