import {capitalizeFirstLetter} from "../../helpers/util"

const Select = (props : any) => {
    // * this happens when an input encounters an error during validation
    let borderStyle = (props.error) // * adjust border styling
        ? "border-red"
        : "border-gray-300 focus:border-primary"

    let error = (props.error)
        ? <p className='text-red text-sm font-medium'>{props.error.message}</p> // * display the error message
        : ""

    return (
        <div className="flex flex-col justify-start gap-2 mb-5">
            <label htmlFor={props.for}
                className="text-gray-700 text-sm font-medium">{capitalizeFirstLetter(props.for)}</label>
            <select name={props.for} 
                id={props.for}
                defaultValue={"default"}
                className={`px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border ${borderStyle} outline-none w-full`}
                {...props.validate}>
                <option value="default" disabled>{props.placeholder}</option>

                {props.options.map((c : any) => {
                    return (
                        <option value={c.value} 
                        key={c.value}>{c.text}</option>
                    )
                })}
            </select>

            {error}
        </div>
    )
}

export default Select