import {capitalizeFirstLetter} from "../../helpers/util"

const Textarea = (props : any) => {
    // * this happens when an input encounters an error during validation
    let borderStyle = (props.error) // * adjust border styling
        ? "border-red"
        : "border-gray-300 focus:border-primary"

    let error = (props.error)
        ? <p className='text-red text-sm font-medium'>{props.error.message}</p> // * display the error message
        : ""

    let showLabel = (props.noLabel)
        ? ""
        : <label htmlFor={props.for}
            className="text-gray-700 text-sm font-medium">
            {capitalizeFirstLetter(props.for)}
        </label>;

    return (
        <div className="flex flex-col justify-start gap-2 mb-5">
            {showLabel}
            
            <textarea name={props.for} 
                id={props.for} 
                className={`px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border ${borderStyle} outline-none w-full`}
                cols={30} 
                rows={4}
                placeholder={props.placeholder}
                {...props.validate}></textarea>
                
            {error}
        </div>
    )
}

export default Textarea