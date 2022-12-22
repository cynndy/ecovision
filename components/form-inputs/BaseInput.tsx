import { capitalizeFirstLetter } from "../../helpers/util"

const BaseInput = (props : any) => {   
    // * this shows when adding a description label at bottom of the input
    let rule = props.ruleLabel 
        ? <p className="text-sm text-gray-500">{props.ruleLabel}</p> 
        : "";
    
    // * this shows if the input is a required field
    let isRequired = props.required ? <span className="text-red text-sm"> *</span> : false;
    let showLabel = (props.noLabel)
        ? ""
        : <label htmlFor={props.for}
            className="text-gray-700 text-sm font-medium">
            {capitalizeFirstLetter(props.for)} 
            {isRequired}
        </label>;

    // * this only shows for the custom input with extra placeholder
    let hasCurrencyAndUnit = false;
    let extras = null;
    if(props.currency && props.unit){
        hasCurrencyAndUnit = true;
        extras = <div>
            <span className="absolute left-4 top-3 text-gray-500">{props.currency}</span>
            <span className="absolute right-4 bottom-3 text-gray-500">{props.unit}</span>
        </div>
    }

    // * this happens when an input encounters an error during validation
    let borderStyle = (props.error) // * adjust border styling
        ? "border-red"
        : "border-gray-300 focus:border-primary"

    let error = (props.error)
        ? <p className='text-red text-sm font-medium'>{props.error.message}</p> // * display the error message
        : ""

    return (
        <div className="flex flex-col justify-start gap-2 mb-5">
            {showLabel}
            
            <div className={`flex relative ${(hasCurrencyAndUnit) ? "w-1/3" : ""}`}>
                <input type={props.type} 
                    name={props.for}
                    placeholder={props.placeholder} 
                    autoComplete="off"
                    className={`px-4 py-2.5 ${(hasCurrencyAndUnit) ? "pl-8" : ""} placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border ${borderStyle} outline-none w-full`}
                    required={props.required} 
                    {...props.validate} />
                {extras} {/* for currency and unit */}
            </div>

            {error}
            {rule}
            
        </div>
    )
}

export default BaseInput;