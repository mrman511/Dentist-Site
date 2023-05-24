import { useState, useEffect } from "react";
import Image from "next/image";

import createService from '../../../utils/admin/createService';

export default function ServiceForm({ styles, submitForm, cookie, setServices }){
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const addFile = (e) => {
    if (e.target.files[0]){
      e.preventDefault();
      setImage(e.target.files[0])
      // setCreateObjectURL(URL.createObjectURL(image))
      // console.log(image.filepath)
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formData = {
      image: image,
      title: e.target.title.value,
      description: e.target.description.value
    }

    createService(formData, cookie, setServices)
  }

  return (
    <article className={ styles.formContainer } >
      <form onSubmit={ (e) => { handleSubmit(e) } }>
        <div className={ styles.inputContainer }>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title"/>
        </div>
        <div className={ styles.inputContainer }>
          <label htmlFor="description">Description:</label>
          <textarea className={ styles.descriptionInput } type="text" name="description"/>
        </div>
        <input type="file" name="image" onChange={ (e) => { addFile(e) } }/>
        <input type="submit" className={ [styles.btn, styles.btnMd].join(' ') } value="Add Service"/>
      </form>
    </article>
  );
}