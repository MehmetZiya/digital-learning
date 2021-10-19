import { Fragment, useState } from "react";

import { gql, useMutation } from "@apollo/client";

import "../scss/register.scss";

const COURSE_INPUT = gql`
  mutation CreateCourse($input: CourseInput) {
    createCourse(courseInput: $input) {
      title
    }
  }
`;
const CreateCourse = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

 
 

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, desc,price,imgUrl,releaseDate)
    createCourse({
      variables: {
        input: { title, desc, price, imgUrl, releaseDate },
      },
    });
    
  };
  
  
  const [createCourse] = useMutation(COURSE_INPUT);

  return (
    <Fragment>
      <form className="form-control" onSubmit={submitHandler}>
        <h2>Create Course</h2>
        <div className="form-input">
          <input
            type="text"
            id="title"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <textarea
            rows="5"
            type="text"
            id="desc"
            placeholder="description"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <input
            type="number"
            id="price"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <input
            type="text"
            id="img"
            placeholder="img URL"
            onChange={(e) => setImgUrl(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <input
            type="date"
            id="date"
            placeholder="Release Date"
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
        </div>
        <div className="form-action">
          <button className="btn" type="submit">
            Register
          </button>
        </div>
      </form>
      
    </Fragment>
  );
};

export default CreateCourse;
