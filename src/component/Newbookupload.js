import React, { useState } from 'react'
import axios from 'axios'


const Newbookupload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setValues((prev) => ({ ...prev, image: event.target.files[0] }));
    };
    const [values, setValues] = useState({ author: "", price: "", name: "", image: "", class: "" })

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (selectedFile) {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('author', values.author);
            formData.append('price', values.price);
            formData.append('name', values.name);
            formData.append('class', values.class);

            axios
                .post('http://localhost:8000/upload', formData)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <>
            {/* <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form> */}
            <div className='container'>
                <h2>Image Upload Form</h2>
                <form onSubmit={handleFormSubmit} enctype="multipart/form-data" action="http://localhost:8000/upload">
                    <div className='mb-3'>
                        <label className="form-label"> Enter book name</label>
                        <input type='text' className='form-control' value={values.name} onChange={(event) => { setValues((prev) => ({ ...prev, name: event.target.value })) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label"> Select image of the book from your desktop</label>
                        <input type="file" className='form-control' onChange={handleFileChange} />
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Enter author name </label>
                        <input type='text' className='form-control' value={values.author} onChange={(event) => { setValues((prev) => ({ ...prev, author: event.target.value })) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label"> Enter price</label>
                        <input type='number' className='form-control' value={values.price} onChange={(event) => { setValues((prev) => ({ ...prev, price: event.target.value })) }}></input>
                    </div>
                    <div className='mb-3'>
                        <label className="form-label">Enter class details</label>
                        <input type="text" className='form-control' onChange={(e) => { setValues((prev) => ({ ...prev, class: e.target.value })) }}></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Newbookupload
