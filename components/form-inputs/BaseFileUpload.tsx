import Image from 'next/image'
import { useRef, useState } from 'react'

const BaseFileUpload = (props : any) => {
    const inputElement = useRef<HTMLInputElement>(null);
    let [image, setImage] = useState<string | undefined | ArrayBuffer>();

    const handleClick = () => {
        if(inputElement.current != null){
            inputElement.current.click();
        }
    }

    const handleFileOnChange = (event : any) => {
        let getFile = event.target.files.item(0);
        const reader = new FileReader();

        reader.onload = (e) => {
            if(e.target != null){
                if(e.target.result != null){
                    setImage(e.target.result); 
                    // <Image src={e.target.result} width={100} height={100} alt={''} className="mb-4 rounded-lg" />
                }
            }
        }

        reader.readAsDataURL(getFile);
    }
    
    return (
        <>
            {image}
            <div className="border border-dashed border-primary bg-light rounded-xl h-56 mb-5">
                <button type="button" className="flex flex-col items-center justify-center h-full w-full active:bg-gray-300 transition ease duration-200"
                    onClick={handleClick}>
                    <Image src="/upload-icon.svg" 
                        alt="Upload photos" 
                        width={44}
                        height={44} />
                    <p>Click to upload photos</p>
                </button>
                <input type="file" 
                    name={props.for} 
                    id={props.for} 
                    className='hidden'
                    accept={props.accept}
                    ref={inputElement}
                    multiple={props.isMultiple}
                    onChange={handleFileOnChange} />
            </div>
        </>
    )
}

export default BaseFileUpload