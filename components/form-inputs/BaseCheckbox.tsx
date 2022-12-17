const BaseCheckbox = (props : any) => {
    // let isRequired = (props.isRequired) ? "required" : ""

    return (
        <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
                <input id={props.for} 
                    type="checkbox" 
                    value="" 
                    className="w-4 h-4 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" 
                    required={props.isRequired ? props.isRequired : false} />
            </div>
            <label htmlFor={props.for} 
                className="ml-2 text-sm font-semibold text-gray-700 dark:text-gray-300">{props.label}</label>
        </div>
    )
}

export default BaseCheckbox