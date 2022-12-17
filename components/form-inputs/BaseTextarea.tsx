import {capitalizeFirstLetter} from "../../helpers/util"

const Textarea = (props : any) => {
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
                className="px-4 py-2.5 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl shadow-sm border border-gray-300 outline-none focus:border-primary w-full"
                cols={30} 
                rows={4}
                placeholder={props.placeholder}></textarea>
        </div>
    )
}

export default Textarea