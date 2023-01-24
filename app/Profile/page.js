'use client'
import react from "react";
import axios from 'axios';
import Head from "next/head";
import Image from 'next/image';
import { useState, useEffect, useContext } from "react";
import { IoIosCreate } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import { AuthContext } from "../contexts/auth";
// import UpdateModal from "./UpdateModal";


// reactstrap components


export default function Profile() {

    {/**This for Show modal */ }
    {/**Post */ }
    const [showModal, setShowModal] = useState(false);
    {/**update */ }
    // const [showModal2, setShowModal2] = useState(false);
    {/**profile */ }
    const [showModal3, setShowModal3] = useState(false);

    const [showModal4, setShowModal4] = useState(false);

    const [postData, setPostData] = useState([]);
    const [userPro, setUserPro] = useState([]);

    {/**This for a database */ }
    const [image, setImage] = useState(null);
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Date, setDate] = useState('');
    const [Rate, setRate] = useState('');
    const [Location, setLocation] = useState('');
    const [Cost, setCost] = useState('');
    const [images, setImages] = useState(null);
    const [updated, setUpdated] = useState(false);

   

    const onFileChange = e => setImage(e.target.files[0]);
    const onAltChange = e => setAltText(e.target.value);
    const onTitleChange = e => setTitle(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const onDateChange = e => setDate(e.target.value);
    const onRateChange = e => setRate(e.target.value);
    const onLocationChange = e => setLocation(e.target.value);
    const onCostChange = e => setCost(e.target.value);


    const { tokens } = useContext(AuthContext)

    {/**onSubmit */ }
    const onSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${tokens.access}`


            }
        };

        const formData = new FormData();
        formData.append('image', image);
        formData.append('Title', Title);
        formData.append('Description', Description);
        formData.append('Date', Date);
        formData.append('Rate', Rate);
        formData.append('Location', Location);
        formData.append('Cost', Cost);



        const body = formData;
        try {
            const res = await axios.post('http://localhost:8000/api/posts/upload', body, config);

            if (res.status === 201) {
                setUpdated(!updated);
                alert("Your post has been published")
                setShowModal(false)
            }
        } catch (err) {

        }
    }; {/**End of onSubmit */ }

    {/**For card posts */ }
   
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            `http://127.0.0.1:8000/api/posts/user-posts/`
          ,{
            headers: {
                'Authorization': `Bearer ${tokens.access}`
            }});
          setPostData(result.data);
        };
        const intervalId = setInterval(() => {
          fetchData();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);







    const handleUpdatePost = async ( e ) => {
        //e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${tokens.access}`
            }
        };
        console.log(tokens.access)

        const body = JSON.stringify ({
            title: Title,
            description: Description,
            date: Date,
            rate: Rate,
            location: Location,
            price: Cost
        });
        const id=currentPost.id
        console.log(id,body)

        axios
        .put(`http://127.0.0.1:8000/api/posts/update/${id}/`, body, config)    
        .then(res => {
            //update the post data in the state to reflect the changes
                console.log(res.data)
                setSelectedPost(null);
            })
            .catch(error => {
                //console.log(error);
            });
        }
        // console.log(handleUpdatePost);
        
    const [currentPost, setCurrentPost] = useState(null);
    const [selectedPost, setSelectedPost] = useState(false);

    const handleUpdate = async (post) => {
        setSelectedPost(true);
        setCurrentPost(post)
    }

    {/**Delete the posts */ }
    const handleDelete = async (id) => {
        const headers = new Headers();
        headers.append("Authorization", `Bearer ${tokens.access}`);
        const requestOptions = {
            method: "DELETE",
            headers: headers,
        };
        await fetch(`http://127.0.0.1:8000/api/posts/${id}`, requestOptions);
    };




     {/**User */ }

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            `http://127.0.0.1:8000/api/current_user`
          ,{
            headers: {
                'Authorization': `Bearer ${tokens.access}`
            }});
            setUserPro(result.data);
        };
        const intervalId = setInterval(() => {
          fetchData();
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, []);




 
    
    // useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/api/current_user', {
    //         headers: {
    //             'Authorization': `Bearer ${tokens.access}`
    //         }
    //     })
    //         .then(response => {

    //             setUserPro(response.data)
    //             // console.log(userPro)


    //         })
    //         .catch(error => {
    //             // handle the error
    //             // console.log(error)
    //         });
    // });

    return (
        <>

            {/** Profile */}
            <div>

                <section className="py-10">
                    <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full flex justify-center">
                                    <div className="relative">

                                        <div className="absolute top-0 right-0 h-16 w-16 flex flex-wrap justify-between">
                                            <button className="ml-80" onClick={() => setShowModal3(true)}>
                                                <AiFillEdit className="text-lg" />
                                            </button>
                                        </div>

                                        <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>
                            </div>


                            <div className="text-center mt-28">
                                <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{userPro.username}</h3>
                                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{userPro.email}
                                </div>
                            </div>
                            <div className="mt-6 py-6 border-t border-slate-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full px-4">
                                        <p className="font-light leading-relaxed text-slate-600 mb-4">{userPro.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>

            </div>

            {/**Edit profile */}
            {showModal3 ? (

                <section>
                    <div>
                        <div className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                            <div className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl z-50 overflow-y-auto">
                                <div className="modal-content py-4 text-left px-6">
                                    <div className="flex justify-between items-center pb-1">
                                        <p className="text-2xl font-bold text-gray-500">Profile</p>

                                        <div className="modal-close cursor-pointer z-50" onClick={() => setShowModal3(false)}>
                                            <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18">
                                                <path
                                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                                </path>
                                            </svg>
                                        </div>

                                    </div>
                                    <div>
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            {/**Title label & input */}
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label for="company_website" className="block text-sm font-medium text-gray-700">
                                                        Title
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">
                                                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">

                                                        </span>
                                                        <input defaultValue={userPro.username} required type="text" name="Title" id="Title" className="ml-6 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Description label & input */}
                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-700">
                                                    Description
                                                </label>
                                                <div className="mt-1">
                                                    <input id="Description" required name="Description" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-16" placeholder="Description"></input>
                                                </div>

                                            </div>

                                            <div>
                                                <input type="file" />
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-2 space-x-14">
                                            <button
                                                className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold" onClick={() => setShowModal3(false)}>Cancel</button>
                                            <button
                                                className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" >Confirm</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}


            {/**Form to create a posts */}
            {
                showModal ? (
                    <section className=''>
                        <div className='p-10 relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16'>
                            <div className="rounded-lg">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form action="#" onSubmit={onSubmit} method="POST">
                                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                                            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                                {/**Title label & input */}
                                                <div className="grid grid-cols-3 gap-6">
                                                    <div className="col-span-3 sm:col-span-2">
                                                        <label for="company_website" className="block text-sm font-medium text-gray-700">
                                                            Title
                                                        </label>
                                                        <div className="mt-1 flex rounded-md shadow-sm">

                                                            <input onChange={onTitleChange} required type="text" name="Title" id="Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Title" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/**Description label & input */}
                                                <div>
                                                    <label for="about" className="block text-sm font-medium text-gray-700">
                                                        Description
                                                    </label>
                                                    <div className="mt-1">
                                                        {/* <input id="Description" onChange={onDescriptionChange} required name="Description" rows="3" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Description"></input> */}
                                                        <textarea onChange={onDescriptionChange} required name="Description" id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                                    </div>

                                                </div>
                                                {/**Date */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Date
                                                    </label>
                                                    <input name='Date' id='Date' required onChange={onDateChange} type="datetime-local" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                                </div>
                                                {/**Rate */}
                                                <div>
                                                    <label>
                                                        Rate
                                                    </label>
                                                    <input type="number" name='Rate' onChange={onRateChange} id='Rate' required className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                                </div>

                                                {/* *Image */}
                                                {/* <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
                                                <input onChange={onFileChange} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF.</p>
                                            </div> */}

                                                <div className="flex items-center justify-center w-full">
                                                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 ">
                                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px) </p>
                                                            <div className="ml-32">
                                                                <input onChange={onFileChange} id="dropzone-file" type="file" className="hidden" />

                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>

                                                {/* <label className='form-label' htmlFor='image'>
                                                Image Upload
                                            </label>
                                            <input
                                                className='form-control'
                                                type='file'
                                                name='image'
                                                onChange={onFileChange}
                                                required
                                            /> */}

                                                {/**Location */}
                                                <div>
                                                    <label for="passwordConfirmation">Location</label>
                                                    <input name='Location' id='Location' onChange={onLocationChange} required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                                                </div>

                                                {/**Price */}
                                                <div>
                                                    <label>Price</label>
                                                    <input onChange={onCostChange} id='Cost' required name='Cost' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="0.0"></input>
                                                </div>
                                            </div>
                                            {/**Button */}
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-wrap justify-between">
                                                <button onClick={() => setShowModal(false)} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close
                                                </button>

                                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                    Post
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null
            }

            {/**Modal */}
            <section>
                {/**Modal  */}
                <div data-dial-init className="fixed bottom-6 right-6 group">
                    <button onClick={() => setShowModal(true)} type="button" data-dial-toggle="speed-dial-menu-dropdown-alternative" aria-controls="speed-dial-menu-dropdown-alternative" aria-expanded="false" className="flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                        <IoIosCreate className='h-8 w-8' />
                    </button>
                </div>
            </section>


            {/** Card post */}
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
                {postData.map((post) => (

                    <section>
                        <div className="">
                            {/**--------------------------------------- */}
                            <div className="max-w-2xl mx-auto">
                                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">

                                    {/**Header */}

                                    {/** Photos */}
                                    <div className="py-4">
                                        <div className='flex justify-between'>

                                            <h4 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{post.title}</h4>
                                            <h6>{post.date}</h6>
                                        </div>
                                        <div className="flex justify-between gap-1 mb-1">
                                            <a className="flex" href="#">
                                                <img className="max-w-full rounded-tl-lg"
                                                    src={post.image}
                                                    onError={({ currentTarget }) => {
                                                        currentTarget.onerror = null;
                                                        currentTarget.src = "   assets/logo.png"
                                                    }}
                                                />

                                            </a>

                                        </div>
                                    </div>
                                    <div className="px-6">
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post.description}</p>
                                    </div>
                                    <div className="px-6">
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post.rate}</p>
                                    </div>

                                    <div className="px-6">
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post.price}</p>
                                    </div>

                                    <div className="px-6">
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post.location}</p>
                                    </div>

                                    {/**Delete and update Button */}
                                    <div className='relative py-8 mx-6'>
                                        <button onClick={() => handleDelete(post.id)}
                                            className="absolute bottom-0 right-0 h-12 w-16 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                            Delete
                                        </button>
                                        <button onClick={() => handleUpdate(post)}
                                            className="absolute bottom-0 right-20 h-12 w-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                            Update
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                ))
                }
            </div>









            {/**Update form */}
            <section>
                {selectedPost &&<section>
                    <form onSubmit={handleUpdatePost}>
                    <div>
                        <div className="main-modal w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                            <div className="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl z-50 overflow-y-auto">
                                <div className="modal-content py-4 text-left px-6">
                                    <div className="flex justify-between items-center pb-1">
                                        <p className="text-2xl font-bold text-gray-500">Update post</p>

                                        <div className="modal-close cursor-pointer z-50" onClick={() => setSelectedPost(false)}>
                                            <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                                viewBox="0 0 18 18">
                                                <path
                                                    d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                                                </path>
                                            </svg>
                                        </div>

                                    </div>

                                    <div>
                                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                            {/**Title label & input */}
                                            <div className="grid grid-cols-3 gap-6">
                                                <div className="col-span-3 sm:col-span-2">
                                                    <label for="company_website" className="block text-sm font-medium text-gray-700">
                                                        Title
                                                    </label>
                                                    <div className="mt-1 flex rounded-md shadow-sm">

                                                        <input onChange={onTitleChange} defaultValue={currentPost.title} required type="text" name="Title" id="Title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="www.example.com" />
                                                    </div>
                                                </div>
                                            </div>
                                            {/**Description label & input */}
                                            <div>
                                                <label for="about"  className="block text-sm font-medium text-gray-700">
                                                    Description
                                                </label>

                                                <div className="mt-1">
                                                    <textarea onChange={onDescriptionChange} defaultValue={currentPost.description} required name="Description" id="textarea" type="textarea" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                                </div>

                                            </div>
                                            {/**Date */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Date
                                                </label>
                                                <input onChange={onDateChange} defaultValue={currentPost.date} name='Date' id='Date' required type="datetime-local" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                            </div>
                                            {/**Rate */}
                                            <div>
                                                <label>
                                                    Rate
                                                </label>
                                                <input onChange={onRateChange} defaultValue={currentPost.rate} type="number" name='Rate' id='Rate' required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" ></input>
                                            </div>
                                            {/**Location */}
                                            <div>
                                                <label className="my-10 py-10">Location</label>
                                                <input onChange={onLocationChange} defaultValue={currentPost.location} name='Location' id='Location' required type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                                                </input>
                                            </div>

                                            {/* <div>
                                            <label className='form-label' htmlFor='image'>
                                                Image Upload
                                            </label>
                                            <input
                                                className='form-control'
                                                type='file'
                                                name='image'
                                                onChange={onFileChange}
                                                
                                            />
                                            </div> */}

                                            {/**Price */}
                                            <div>
                                                <label>Price</label>
                                                <input onChange={onCostChange} defaultValue={currentPost.price} id='Cost' required name='Cost' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="0.0" ></input>
                                            </div>
                                        </div>

                                        <div className="flex justify-end pt-2 space-x-14">
                                            <button
                                                className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold" 
                                                onClick={() => setSelectedPost(false)}>Cancel</button>
                                            <button
                                                Type="submit"
                                                className="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400" >Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </section>
        }
            </section>




















            {/* <section>

                <div className="bg-gray-500 h-screen w-screen sm:px-8 md:px-16 sm:py-8">
                    <main className="container mx-auto max-w-screen-lg h-full">
                        <article aria-label="File Upload Modal" className="relative h-full flex flex-col bg-white shadow-xl rounded-md" ondrop="dropHandler(event);" ondragover="dragOverHandler(event);" ondragleave="dragLeaveHandler(event);" ondragenter="dragEnterHandler(event);">
                            <div id="overlay" className="w-full h-full absolute top-0 left-0 pointer-events-none z-50 flex flex-col items-center justify-center rounded-md">
                                <i>
                                    <svg className="fill-current w-12 h-12 mb-3 text-blue-700" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M19.479 10.092c-.212-3.951-3.473-7.092-7.479-7.092-4.005 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408zm-7.479-1.092l4 4h-3v4h-2v-4h-3l4-4z" />
                                    </svg>
                                </i>
                                <p className="text-lg text-blue-700">Drop files to upload</p>
                            </div>

                            <section className="h-full overflow-auto p-8 w-full h-full flex flex-col">
                                <header className="border-dashed border-2 border-gray-400 py-12 flex flex-col justify-center items-center">
                                    <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                                        <span>Drag and drop your</span>&nbsp;<span>files anywhere or</span>
                                    </p>
                                    <input id="hidden-input" type="file" multiple className="hidden" />
                                    <button id="button" className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                                        Upload a file
                                    </button>
                                </header>

                                <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                                    To Upload
                                </h1>

                                <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                                    <li id="empty" className="h-full w-full text-center flex flex-col items-center justify-center items-center">
                                    <img className="mx-auto w-32" src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png" alt="no data" />
                                        <span className="text-small text-gray-500">No files selected</span>
                                    </li>
                                </ul>
                            </section>

                            <footer className="flex justify-end px-8 pb-8 pt-4">
                                <button id="submit" className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none">
                                    Upload now
                                </button>
                                <button id="cancel" className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none">
                                    Cancel
                                </button>
                            </footer>
                        </article>
                    </main>
                </div>

                <template id="file-template">
                    <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                        <article tabindex="0" className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline elative bg-gray-100 cursor-pointer relative shadow-sm">
                            <img alt="upload preview" className="img-preview hidden w-full h-full sticky object-cover rounded-md bg-fixed" />

                            <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                <h1 className="flex-1 group-hover:text-blue-800"></h1>
                                <div className="flex">
                                    <span className="p-1 text-blue-800">
                                        <i>
                                            <svg className="fill-current w-4 h-4 ml-auto pt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z" />
                                            </svg>
                                        </i>
                                    </span>
                                    <p className="p-1 size text-xs text-gray-700"></p>
                                    <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md text-gray-800">
                                        <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                        </svg>
                                    </button>
                                </div>
                            </section>
                        </article>
                    </li>
                </template>

                <template id="image-template">
                    <li className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24">
                        <article tabindex="0" className="group hasImage w-full h-full rounded-md focus:outline-none focus:shadow-outline bg-gray-100 cursor-pointer relative text-transparent hover:text-white shadow-sm">
                            <img alt="upload preview" className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />

                            <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                                <h1 className="flex-1"></h1>
                                <div className="flex">
                                    <span className="p-1">
                                        <i>
                                            <svg className="fill-current w-4 h-4 ml-auto pt-" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                                            </svg>
                                        </i>
                                    </span>

                                    <p className="p-1 size text-xs"></p>
                                    <button className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md">
                                        <svg className="pointer-events-none fill-current w-4 h-4 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path className="pointer-events-none" d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
                                        </svg>
                                    </button>
                                </div>
                            </section>
                        </article>
                    </li>
                </template>




            </section> */}



            {/* <section>

                <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section> */}
        </>

    )
}