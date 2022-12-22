import {removeSpaceChar} from "../../helpers/util"

const BaseRadio = (props : any) => {
    // * this happens when an input encounters an error during validation
    let borderStyle = (props.error) // * adjust border styling
        ? "border-red"
        : "border-gray-300 focus:border-primary"

    let error = (props.error)
        ? <p className='text-red text-sm font-medium'>{props.error.message}</p> // * display the error message
        : ""

    let assign = removeSpaceChar(props.text);

    return (
        <>
        <div className="flex items-center mb-4">
            <input id={assign} 
                type="radio" 
                name={props.for} 
                className={`w-4 h-4 rounded-full outline-none text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}
                required 
                value={assign}
                {...props.validate} />
            <label htmlFor={assign} 
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{props.text}</label>
        </div>

        {error}
        </>
    )
}

export default BaseRadio