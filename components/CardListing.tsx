import Image from 'next/image'

const CardListing = (props : any) => {
    return (
        <div className="pl-8 pb-8 card card-side bg-base-100" key={props.id}>
            <figure>
                <Image src={props.photo} alt="image" width={250} height={250} />
            </figure>
            <div className="card-body border">
            <h2 className="card-title">{props.title}</h2>
            <p>{props.description}</p>
            <h3 className="font-bold">$70</h3>

            <div className="card-actions justify-end">
                <div className='flex space-x-4'>
                    <button className='h-14 cursor-pointer rounded-xl bg-[#6A983C] px-8 font-semibold text-black hover:text-white hover:shadow-xl'>Edit</button> 
                    <button className='h-14 cursor-pointer rounded-xl border border-[#6A983C] px-8 font-semibold text-black hover:text-[#6A983C] hover:shadow-xl'>Delete </button>
                </div>
            </div>
            
            </div>
        </div>  
    )
}

export default CardListing;