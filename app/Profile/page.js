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
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { MdOutlineDelete, MdDescription, MdLocationOn, MdStarRate } from "react-icons/md";
import { GrMoney } from "react-icons/gr";


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


    {/**Post States */ }
    const [image, setImage] = useState(null);
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Date, setDate] = useState('');
    const [Rate, setRate] = useState('');
    const [Location, setLocation] = useState('');
    const [Cost, setCost] = useState('');
    const [images, setImages] = useState(null);
    const [updated, setUpdated] = useState(false);
    // profile States
    const [profileFirstName, setprofileFirstName] = useState('');
    const [profileDescription, setprofileDescription] = useState('');
    const [profileLastName, setprofileLastName] = useState('');
    const [profileEmail, setprofileEmail] = useState('');
    const [profileLocation, setprofileLocation] = useState('');
    const [profileUsername, setprofileUsername] = useState('');

    // Update Post functions
    const onFileChange = e => setImage(e.target.files[0]);
    const onTitleChange = e => setTitle(e.target.value);
    const onDescriptionChange = e => setDescription(e.target.value);
    const onDateChange = e => setDate(e.target.value);
    const onRateChange = e => setRate(e.target.value);
    const onLocationChange = e => setLocation(e.target.value);
    const onCostChange = e => setCost(e.target.value);

    // Update profile functions
    const onprofileFirstName = e => setprofileFirstName(e.target.value);
    const onProfileDescriptionChange = e => setprofileDescription(e.target.value);
    const onprofileLastName = e => setprofileLastName(e.target.value);
    const onprofileEmail = e => setprofileEmail(e.target.value);
    const onprofileLocation = e => setprofileLocation(e.target.value);
    const onprofileUsername = e => setprofileUsername(e.target.value);


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
        formData.append('alt_text', altText);
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
                , {
                    headers: {
                        'Authorization': `Bearer ${tokens.access}`
                    }
                });
            setPostData(result.data);
        };
        const intervalId = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    //Update post

    const handleUpdatePost = (event) => {
        event.preventDefault();
        console.log(tokens.access)
        const body = JSON.stringify({
            title: Title,
            description: Description,
            date: Date,
            rate: Rate,
            location: Location,
            price: Cost,
        });
        const id = currentPost.id
        console.log(id, body)
        axios
            .put(`http://127.0.0.1:8000/api/posts/update/${id}/`, body, {
                headers: {
                    "Authorization": `Bearer ${tokens.access}`,
                    'Content-Type': 'application/json',
                }
            })
            .then(res => {
                //update the post data in the state to reflect the changes
                console.log(res.data)
                alert("Updated successfully!")
                setSelectedPost(false)

            })
            .catch(error => {
                console.log(error);
            });

    }
    // console.log(handleUpdatePost);

    const [currentPost, setCurrentPost] = useState(null);
    const [selectedPost, setSelectedPost] = useState(false);

    const handleUpdate = async (post) => {
        setSelectedPost(true);
        setCurrentPost(post)
    }
    //update profile
    const handleUpdateProfile = async (e) => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${tokens.access}`
            }
        };
        console.log(tokens.access)

        const body = JSON.stringify({
            firstName: profileFirstName,
            lastName: profileLastName,
            email: profileEmail,
            description: profileDescription,
            location: profileLocation,
            username: profileUsername,
        });
        const id = userPro.id
        console.log(id, body)

        axios
            .put(`http://127.0.0.1:8000/api/users/update/${id}/`, body, config)
            .then(res => {
                //update the post data in the state to reflect the changes
                console.log(res.data)
                alert("Updated successfully!")
                setShowModal3(false)

            })
            .catch(error => {
                //console.log(error);
            });
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
                , {
                    headers: {
                        'Authorization': `Bearer ${tokens.access}`
                    }
                });
            setUserPro(result.data);

        };
        const intervalId = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>

            {/** Profile */}
            <div>
                <section className="py-10">
                    <div className="relative max-w-md mx-auto md:max-w-2xl mt-6 ml- min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full flex justify-center">
                                    <div className="relative">
                                        <div className="absolute top-0 right-0 h-16 w-16 flex flex-wrap justify-between max-w-md mx-auto md:max-w-2xl">
                                            <button className="ml-80" onClick={() => setShowModal3(true)}>
                                                <AiFillEdit className="text-lg" />
                                            </button>
                                        </div>

                                        <img src="https://github.com/creativetimofficial/soft-ui-dashboard-tailwind/blob/main/build/assets/img/team-2.jpg?raw=true" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>
                            </div>


                            <div className="text-center mt-28">
                                <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1">{userPro.firstName} {userPro.lastName}</h3>
                                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>{userPro.location}
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
                    <form onSubmit={handleUpdateProfile}>
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
                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-700">
                                                    First Name
                                                </label>
                                                <div className="mt-1">
                                                    <input onInput={onprofileFirstName} defaultValue={userPro.firstName} required type="text" name="Title" id="Title" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-16" placeholder="First Name"></input>
                                                </div>

                                            </div>


                                            {/**Last Name */}
                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-700">
                                                    Last Name
                                                </label>
                                                <div className="mt-1">
                                                    <input onInput={onprofileLastName} defaultValue={userPro.lastName} id="LastName" required name="LastName" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-16" placeholder="Last Name"></input>
                                                </div>

                                            </div>

                                            {/**Description label & input */}
                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-700">
                                                    User Bio
                                                </label>
                                                <div className="mt-1">
                                                    <input onInput={onProfileDescriptionChange} defaultValue={userPro.description} id="Description" required name="Description" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-16" placeholder="User Bio"></input>
                                                </div>

                                            </div>



                                            {/**Location*/}
                                            <div>
                                                <label for="about" className="block text-sm font-medium text-gray-700">
                                                    Country
                                                </label>
                                                <div className="mt-1">
                                                    <input onInput={onprofileLocation} defaultValue={userPro.location} id="Location" required name="Location" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-16" placeholder="Country"></input>
                                                </div>

                                            </div>



                                        </div>

                                        <div className="flex justify-end pt-2 space-x-14">
                                            <button
                                                className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-400 font-semibold" onClick={() => setShowModal3(false)}>Cancel</button>
                                            <button
                                                className="px-4 bg-[#FF8B13] hover:bg-orange-700 p-3 ml-3 rounded-lg text-white" >Confirm</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
                                                    <input name='Date' id='Date' required onChange={onDateChange} type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                                </div>
                                                {/**Rate */}
                                                <div>
                                                    <Typography component="legend">Rate</Typography>
                                                    <Rating
                                                        name="simple-controlled"
                                                        value={Rate}
                                                        onRateChange={onRateChange}
                                                        onChange={(event, newValue) => {
                                                            setRate(newValue);
                                                        }}
                                                    />
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
                                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> </p>
                                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px) </p>
                                                            <div className="ml-32">
                                                                <input onChange={onFileChange} id="dropzone-file" type="file" className='form-control' />

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
                                                    <label>Cost/day</label>
                                                    <input onChange={onCostChange} id='Cost' required name='Cost' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="0.0"></input>
                                                </div>
                                            </div>
                                            {/**Button */}
                                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-wrap justify-between">
                                                <button onClick={() => setShowModal(false)} type="submit" className="font-semibold inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close
                                                </button>

                                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#FF8B13] hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                    <button onClick={() => setShowModal(true)} type="button" data-dial-toggle="speed-dial-menu-dropdown-alternative" aria-controls="speed-dial-menu-dropdown-alternative" aria-expanded="false" className="flex items-center justify-center ml-auto text-white  rounded-full w-14 h-14 bg-[#FF8B13] hover:bg-orange-700 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
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
                                    <button className="ml-auto mr-2 justify-between flex flex-wrap py-2" onClick={() => handleUpdate(post)}>
                                        <AiFillEdit className="text-xl text-blue-500" />
                                    </button>

                                    {/** Photos */}
                                    <div className="py-4">
                                        <div className='flex justify-between ml-auto mx-3'>

                                            <h4 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white ml-2">{post.title}</h4>
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


                                    <div className="px-6 justify-between flex flex-wrap p-1">
                                        <MdDescription className="text-2xl" />
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 mr-auto ml-3">{post.description}</p>
                                    </div>

                                    {/**Rate */}
                                    <div className="px-6 p-1 justify-between flex">
                                        {/* <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">{post.rate}</p> */}
                                        {/* <Typography component="legend">Read only</Typography> */}
                                        <MdStarRate className="text-2xl" />
                                        <Rating className="mr-auto ml-3" name="read-only" value={post.rate} readOnly />
                                    </div>

                                    <div className="px-6 justify-between flex p-1">
                                        <GrMoney className="text-2xl" />
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 my-auto mr-auto ml-3">{post.price}</p>
                                    </div>

                                    <div className="px-6 justify-between flex p-1">
                                        <MdLocationOn className="text-2xl" />
                                        <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 my-auto mr-auto ml-3">{post.location}</p>
                                    </div>

                                    {/**Delete and update Button */}
                                    <div className='relative py-12 mx-6 justify-between flex flex-1 p-1'>

                                        <button onClick={() => handleDelete(post.id)}
                                            className="ml-auto">
                                            <MdOutlineDelete className="text-3xl text-red-700" />
                                        </button>
                                        {/* <button onClick={() => handleUpdate(post)}
                                            className="absolute bottom-0 right-20 h-12 w-16 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                            Update
                                        </button> */}

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
                {selectedPost && <section>
                    <form onSubmit={handleUpdatePost}>
                        <div>
                            <div className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
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
                                                            <input onInput={onTitleChange} defaultValue={currentPost.title} required type="text" name="Title" id="Title" className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="Title" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/**Description label & input */}
                                                <div>
                                                    <label for="about" className="block text-sm font-medium text-gray-700">
                                                        Description
                                                    </label>

                                                    <div className="mt-1">
                                                        <textarea onInput={onDescriptionChange} defaultValue={currentPost.description} required name="Description" id="textarea" type="textarea" className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
                                                    </div>

                                                </div>

                                                {/**Date */}
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700">
                                                        Date
                                                    </label>
                                                    <input onInput={onDateChange} defaultValue={currentPost.date} name='Date' id='Date' required type="date" className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></input>
                                                </div>

                                                {/**Rate */}
                                                <div>
                                                    <label></label>
                                                    {/* <input onChange={onRateChange} defaultValue={currentPost.rate} type="number" name='Rate' id='Rate' required className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" ></input> */}
                                                    <Typography component="legend">Rate</Typography>
                                                    <Rating
                                                        name="simple-controlled"
                                                        value={Rate}
                                                        onRateChange={onRateChange}
                                                        onChange={(event, newValue) => {
                                                            setRate(newValue);
                                                        }}
                                                    />
                                                </div>

                                                {/**Location */}
                                                <div>
                                                    <label className="my-10 py-10">City</label>
                                                    <input onInput={onLocationChange} defaultValue={currentPost.location} name='Location' id='Location' required type="text" className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" >
                                                    </input>
                                                </div>

                                                {/**Price */}
                                                <div>
                                                    <label>Cost/day</label>
                                                    <input onInput={onCostChange} defaultValue={currentPost.price} id='Cost' required name='Cost' type="text" className="block w-full px-2 py-1 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder="0.0" ></input>
                                                </div>
                                            </div>

                                            <div className="flex justify-end pt-2 space-x-14">
                                                <button
                                                    className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-400 font-semibold"
                                                    onClick={() => setSelectedPost(false)}>Cancel</button>
                                                <button
                                                    type="submit"
                                                    className="px-4 bg-[#FF8B13] hover:bg-orange-700 p-3 ml-3 rounded-lg text-white" >Confirm
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
        </>

    )
}
