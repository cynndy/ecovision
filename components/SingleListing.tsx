export default function SingleListing() {
  return (
    <div className="flex flex-row items-center justify-center space-x-20 py-20">
      <img src="../glass1.png" alt="spectacles" width={400} />
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col text-left justify-left">
          <h1 className="my-2 text-5xl font-bold text-black md:text-3xl w-80">
            Gentle Monster Frida sunglasses
          </h1>
          <p className="text-slate-400 font-light">Condition: Like new</p>{" "}
          <br />
        </div>
        <h1 className="font-bold text-3xl text-center">$70</h1>

        <button className="h-14 cursor-pointer rounded-full bg-[#6A983C] px-20 font-semibold text-black hover:text-white hover:shadow-xl">
          Buy now
        </button>
      </div>
    </div>
  );
}
