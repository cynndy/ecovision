import Image from 'next/image'
import { useRef } from 'react'

const BaseFileUpload = () => {
    const inputElement = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if(inputElement.current != null){
            inputElement.current.click();
        }
    }
    

    const handleFileOnChange = (event : any) => {
        console.log(event)
    }

    return (
        <div className="border border-dashed border-primary bg-light rounded-xl h-56 mb-5">
            <button className="flex flex-col items-center justify-center h-full w-full active:bg-gray-300 transition ease duration-200"
                onClick={handleClick}>
                <Image src="/upload-icon.svg" 
                    alt="Upload photos" 
                    width={44}
                    height={44} />
                <p>Click to upload photos</p>
            </button>
            <input type="file" 
                name="photos" 
                id="photos" 
                className='hidden'
                accept="image/jpeg,image/jpg,image/png"
                ref={inputElement}
                multiple
                onChange={handleFileOnChange} />
        </div>
    )
}

export default BaseFileUpload