'use client'
import react from "react";
import axios from 'axios';
import Head from "next/head";
import Image from 'next/image';
import { useState, useEffect } from "react";
// reactstrap components


export default function Profile() {

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const [altText, setAltText] = useState('');
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

    const onSubmit = async e => {
        e.preventDefault();

        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data',
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
        }
    } catch(err) {

    }
 };
    return (
        <>

            {/** Profile */}
            <section>

                <div class="p-10 relative max-w-md mx-auto md:max-w-2xl mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full flex justify-center">
                                <div class="relative">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTET6QR3qi8Bi-1O4U2fWIP2EZ53EN9ykHl6_yvLZlxMJwpy6CtY6DxCvOcJtNKK_gI4kI&usqp=CAU" class="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                </div>
                            </div>
                            <div class="w-full text-center mt-20">

                            </div>
                        </div>
                        <div class="text-center mt-2">
                            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">Mike</h3>
                            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Email
                            </div>
                        </div>
                        <div class="mt-6 py-6 border-t border-slate-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4">
                                    <p class="font-light leading-relaxed text-slate-600 mb-4">Description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section> {/** End profile part */}



            {/**Form for create posts */}
            {showModal ? (
            <section>
                <div>
                    <div class="md:grid md:grid-cols-3 md:gap-6 ml-64">
                        <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" onSubmit={onSubmit} method="POST">
                                <div class="shadow sm:rounded-md sm:overflow-hidden">
                                    <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        {/**Title label & input */}
                                        <div class="grid grid-cols-3 gap-6">
                                            <div class="col-span-3 sm:col-span-2">
                                                <label for="company_website" class="block text-sm font-medium text-gray-700">
                                                    Title
                                                </label>
                                                <div class="mt-1 flex rounded-md shadow-sm">
                                                    <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                                        Title
                                                    </span>
                                                    <input onChange={onTitleChange} required type="text" name="Title" id="Title" class="ml-6 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="www.example.com" />
                                                </div>
                                            </div>
                                        </div>
                                        {/**Description label & input */}
                                        <div>
                                            <label for="about" class="block text-sm font-medium text-gray-700">
                                                Description
                                            </label>
                                            <div class="mt-1">
                                                <input id="Description" onChange={onDescriptionChange} required name="Description" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md h-16" placeholder="Description"></input>
                                            </div>

                                        </div>
                                        {/**Date */}
                                        <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                                Date
                                            </label>
                                            <input name='Date' id='Date' required onChange={onDateChange} type="datetime-local"></input>
                                        </div>
                                        {/**Rate */}
                                        <div>
                                            <label>
                                                Rate
                                            </label>
                                            <input type="number" name='Rate' onChange={onRateChange} id='Rate' required className="ml-6 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300"></input>
                                        </div>


                                        {/**Image */}
                                        {/* <div>
                                            <label class="block text-sm font-medium text-gray-700">
                                                Images
                                            </label>
                                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                <div class="space-y-1 text-center">
                                                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    <div class="flex text-sm text-gray-600">
                                                        <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                            <span>Upload a file</span>
                                                            <input id="file-upload" name="image" onChange={onFileChange} required type="file" class="sr-only" />
                                                        </label>
                                                        <p class="pl-1">or drag and drop</p>
                                                    </div>
                                                    <p class="text-xs text-gray-500">
                                                        PNG, JPG, GIF
                                                    </p>
                                                </div>
                                            </div>
                                        </div> */}
                                        <label className='form-label' htmlFor='image'>
                                        Image Upload
                                        </label>
                                        <input
                                        className='form-control'
                                        type='file'
                                        name='image'
                                        onChange={onFileChange}
                                        required
                                        />

                                        {/**Location */}
                                        <div>
                                            <label className="my-10 py-10">Location</label>
                                            <input name='Location' id='Location' onChange={onLocationChange} required type="text" className="ml-6 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 shadow-lg border border-r-slate-300">
                                            </input>
                                        </div>

                                        {/**Price */}
                                        <div>
                                            <label>Price</label>
                                            <input onChange={onCostChange} id='Cost' required name='Cost' type="text" className="ml-6 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block rounded-none rounded-r-md sm:text-sm border-gray-300 shadow-lg border border-r-slate-300" placeholder="0.0"></input>
                                        </div>

                                    </div>

                                    {/**Button */}
                                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6 flex flex-wrap justify-between">
                                        <button onClick={() => setShowModal(true)} type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Close</button>
                                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Post
                                        </button>

                                    
                                    </div>
                                    

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
                    ) : null}

            {/**Modal */}
            <section>
                {/**Modal  */}
                <div data-dial-init className="fixed bottom-6 right-6 group">
                
                    

                                <button onClick={() => setShowModal(true)} type="button" data-dial-toggle="speed-dial-menu-dropdown-alternative" aria-controls="speed-dial-menu-dropdown-alternative" aria-expanded="false" className="flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                                <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
                                </button>
                            </div>



            </section>

            {/** Card post */}
            <section>

                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

                    {/**--------------------------------------- */}
                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Title</h5>
                                <h6 className="ml-auto flex w-wrap">01/01/2023</h6>
                            </div>
                            
                            <div>
                            <img class="rounded-t-lg" src="/assets/logo.png" alt="" />
                            </div>
                            <div class="p-5">
                                {/**Title */}
                                {/**Description  */}
                                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Description</p>

                                {/**This is section of rate and price */}
                                <div className="flex justify-between">
                                    <p>price</p>

                                </div>
                                <button>Delete</button>
                                <button>Update</button>

                            </div>
                        </div>
                    </div>

                    {/** --------------------------------------- */}

                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg" src="/assets/logo.png" alt="" />
                            <div class="p-5">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button>Delete</button>
                                <button>Update</button>
                            </div>
                        </div>
                    </div>


                    {/**------------------------------------------ */}

                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">

                            {/**Header */}

                            {/** Photos */}
                            <div class="py-4">
                                <div class="flex justify-between gap-1 mb-1">
                                    <a class="flex" href="#">
                                        <img class="max-w-full rounded-tl-lg"
                                            src="https://images.pexels.com/photos/92866/pexels-photo-92866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </a>
                                    <a class="flex" href="#">
                                        <img class="max-w-full"
                                            src="https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </a>
                                    <a class="flex" href="#">
                                        <img class="max-w-full rounded-tr-lg"
                                            src="https://images.pexels.com/photos/631522/pexels-photo-631522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </a>
                                </div>
                                <div class="flex justify-between gap-1">
                                    <a class="flex" href="#">
                                        <img class="max-w-full rounded-bl-lg h-auto transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 scale-100"
                                            src="https://images.pexels.com/photos/1429748/pexels-photo-1429748.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </a>
                                    <a class="flex" href="#">
                                        <img class="max-w-full rounded-br-lg"
                                            src="https://images.pexels.com/photos/69020/pexels-photo-69020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                                    </a>
                                </div>
                            </div>
                            <div class="p-5">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button>Delete</button>
                                <button>Update</button>
                            </div>
                        </div>
                    </div>

                    {/**-------------------------------------------- */}

                    <div class="max-w-2xl mx-auto">
                        <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg" src="/assets/logo.png" alt="" />
                            <div class="p-5">
                                <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <button>Delete</button>
                                <button>Update</button>
                            </div>
                        </div>
                    </div>

                    {/* </row> */}
                </div>

            </section>
        </>
    )
}