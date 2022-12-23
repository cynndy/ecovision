import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Image from 'next/image'
import axios from 'axios'
// import FormData from 'form-data'
import { randomString } from 'helpers/util'

import firebase from '../config/firebase'
import { getStorage, ref, uploadBytes, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
const BUCKET_NAME = process.env.FIREBASE_STORAGE_BUCKET
const firebaseStorage = getStorage(firebase, 'gs://ecovision-f0d90.appspot.com')

// * components
import Layout from '../components/Layouts/Layout'
import Swal from 'sweetalert2'

const categories = [
    { value: "prescription-glasses", text: "Prescription Glasses" },
    { value: "sunglasses", text: "Sunglasses" },
]

const conditions = [
    { value: "brand-new", text: "Brand new" },
    { value: "like-new", text: "Like new" },
    { value: "lightly-used", text: "Lightly used" },
    { value: "well-used", text: "Well used" },
    { value: "heavily-used", text: "Heavily used" }
];

const NewListing = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: {errors} } = useForm();
    const inputElement = useRef(null);

    let [category, setCategory] = useState("");
    let [title, setTitle] = useState("");
    let [condition, setCondition] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let [shipping, setShipping] = useState("");
    let [payment, setPayment] = useState("");
    let [image, setImage] = useState()
    let [renderImage, setRenderImage] = useState();

    const handleClick = () => {
        if(inputElement.current != null){
            inputElement.current.click();
        }
    }

    const handleFileOnChange = (event) => {
        let getFile = event.target.files.item(0);
        const reader = new FileReader();

        reader.onload = (e) => {
            if(e.target != null){
                if(e.target.result != null){
                    setImage(getFile); 
                    setRenderImage(<Image src={e.target.result} width={100} height={100} alt={''} className="mb-4 rounded-lg" />)
                }
            }
        }

        reader.readAsDataURL(getFile);
    }

    const formSubmit = (e) => {
        
        e.preventDefault()
        let fileName = randomString(12) + '.' + image.type.split('/')[1]
        const storageRef = ref(firebaseStorage, `images/${fileName}`);

        const uploadTask = uploadBytesResumable(storageRef, image);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed', (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            }
        }, (error) => console.log('Upload failed: ' + error), () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                let params = { category, title, condition, price, description, photo: downloadURL, shipping, payment }

                axios.post('/api/listings/store', params).then(res => {
                    if(res.data.success){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Success',
                            text: res.data.message,
                            showConfirmButton: false,
                            timer: 3000
                        }).then(() => {
                            router.push('/my-listing')
                        })
                    }
                })
            });
        })
    }

    return (
        <Layout>
            <div className="flex justify-center p-5">
                <form className='w-10/12 flex flex-col gap-4'
                    onSubmit={formSubmit}>
                    <div>
                        <h1 className='text-3xl font-semibold mb-8'>What eyewear are you listing today?</h1>
                        
                        <div className="flex flex-col justify-start gap-2 mb-5">
                            <label htmlFor="category"
                                className="text-gray-700 text-sm font-medium">Category</label>
                            <select name="category" 
                                id="category"
                                defaultValue={""}
                                className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border-gray-300 focus:border-primary border outline-none w-full"
                                onChange={(e) => setCategory(e.target.value)}>
                                <option value="" disabled>Select a category</option>

                                {categories.map((c) => {
                                    return (
                                        <option value={c.value} 
                                        key={c.value}>{c.text}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex flex-col justify-start gap-2 mb-5">
                            <label htmlFor="title"
                                className="text-gray-700 text-sm font-medium">
                                Title<span className="text-red text-sm"> *</span>
                            </label>
                            
                            <div className="flex relative">
                                <input type="type" 
                                    name="title"
                                    placeholder="Listing title"
                                    autoComplete="off"
                                    className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border border-gray-300 focus:border-primary outline-none w-full"
                                    required={true}
                                    onChange={e => setTitle(e.target.value)} />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold mb-4'>About the item</h2>

                        <div className="flex flex-col justify-start gap-2 mb-5">
                            <label htmlFor="condition"
                                className="text-gray-700 text-sm font-medium">Condition</label>
                            <select name="condition" 
                                id="condition"
                                required={true}
                                defaultValue={""}
                                className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border-gray-300 focus:border-primary border outline-none w-full"
                                onChange={(e) => setCondition(e.target.value)}>
                                <option value="" disabled>Condition of the item</option>

                                {conditions.map((c) => {
                                    return (
                                        <option value={c.value} 
                                        key={c.value}>{c.text}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="flex flex-col justify-start gap-2 mb-5">
                            <label htmlFor="price"
                                className="text-gray-700 text-sm font-medium">
                                Price<span className="text-red text-sm"> *</span>
                            </label>
                            
                            <div className="flex relative w-1/3">
                                <input type="number"
                                    name="price"
                                    placeholder="Price of your listing"
                                    autoComplete="off"
                                    className="px-4 py-2.5 pl-8 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border border-gray-300 focus:border-primary outline-none w-full"
                                    required={true}
                                    onChange={e => setPrice(e.target.value)} />
                                <div>
                                    <span className="absolute left-4 top-3 text-gray-500">$</span>
                                    <span className="absolute right-4 bottom-3 text-gray-500">NZD</span>
                                </div>
                            </div>
                            
                        </div>

                    </div>

                    <div className='description'>
                        <h2 className='text-xl font-semibold mb-2'>Description<span className="text-red text-sm"> *</span></h2>
                        {/* <Textarea for="description"
                            noLabel={true}
                            placeholder="Describe what you are selling and include any details a  buyer might be interested in. People love items with stories!"
                            validate={{...register('description', { required: 'This is a required field.' })}} 
                            error={errors.description} /> */}
                        
                        <div className="flex flex-col justify-start gap-2 mb-5">
                            {/* <label htmlFor="description"
                                className="text-gray-700 text-sm font-medium">
                                {capitalizeFirstLetter(props.for)}
                            </label> */}
                            
                            <textarea name="description"
                                id="description"
                                className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border-gray-300 focus:border-primary border outline-none w-full"
                                cols={30} rows={4}
                                onChange={e => setDescription(e.target.value)}
                                placeholder="Describe what you are selling and include any details a  buyer might be interested in. People love items with stories!"></textarea>
                        </div>
                    </div>

                    <div className='file-upload'>
                        <h2 className='text-xl font-semibold mb-2'>Photos<span className="text-red text-sm"> *</span></h2>

                        {renderImage}
                        <div className="border border-dashed border-primary bg-light rounded-xl h-56 mb-5">
                            <button type="button" className="flex flex-col items-center justify-center h-full w-full active:bg-gray-300 transition ease duration-200"
                                onClick={handleClick}>
                                <Image src="/upload-icon.svg" 
                                    alt="Upload photo" 
                                    width={44}
                                    height={44} />
                                <p>Click to upload photo</p>
                            </button>
                            <input type="file" 
                                name="photos"
                                id="photos"
                                className='hidden'
                                accept="image/jpeg,image/jpg,image/png"
                                ref={inputElement}
                                onChange={handleFileOnChange} />
                        </div>
                    </div>

                    <div className='shipping-options'>
                        <h2 className='text-xl font-semibold mb-2'>Shipping & Pickup options<span className="text-red text-sm"> *</span></h2>
                        <div className="flex items-center mb-4">
                            <input id="pickup" 
                                type="radio" 
                                name="shipping"
                                className={`w-4 h-4 rounded-full outline-none text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                                required 
                                onClick={e => setShipping('pickup')} />
                            <label htmlFor="pickup"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pick up</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="delivery" 
                                type="radio" 
                                name="shipping"
                                className={`w-4 h-4 rounded-full outline-none text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                                required 
                                onClick={e => setShipping('delivery')} />
                            <label htmlFor="delivery"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Delivery</label>
                        </div>
                    </div>

                    <div className="payment-options">
                        <h2 className='text-xl font-semibold mb-2'>Payment options<span className="text-red text-sm"> *</span></h2>

                        <div className="flex items-center mb-4">
                            <input id="cash" 
                                type="radio" 
                                name="payment"
                                className={`w-4 h-4 rounded-full outline-none text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                                required 
                                onClick={() => setPayment('cash')} />
                            <label htmlFor="cash"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cash</label>
                        </div>

                        <div className="flex items-center mb-4">
                            <input id="nz-bank-deposit" 
                                type="radio" 
                                name="payment"
                                className={`w-4 h-4 rounded-full outline-none text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                                required 
                                onClick={() => setPayment('nz-bank-deposit')}/>
                            <label htmlFor="nz-bank-deposit"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">NZ bank deposit</label>
                        </div>
                    </div>

                    <div className="action-buttons flex gap-6">
                        <button type="submit" className='px-10 py-4 text-white text-sm bg-primary rounded-lg shadow font-semibold'>Publish</button>
                        <button type="reset" className='px-10 py-4 text-sm bg-white border border-gray-300 rounded-lg shadow font-semibold'>Reset</button>
                    </div>
                </form>
            </div>
        </Layout>
    )
}

export default NewListing