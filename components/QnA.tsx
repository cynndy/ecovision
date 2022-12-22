export default function QnA() {
  return (
    <div>
      <div className="grid place-items-center pt-10">
        <h5 className="text-left pb-10">Questions and Answers</h5>
        <p className="mr-96 text-slate-400 font-light">Penny</p>{" "}
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          className="mr-96 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value="Hi there, is this authentic? Thanks!"
          disabled
        ></input>
      </div>
      <div className="grid place-items-center">
        <p className="ml-96 text-slate-400 font-light">Patrick</p>{" "}
        <input
          type="text"
          id="disabled-input"
          aria-label="disabled input"
          className="ml-96 mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value="Yes definitely! I bought it from Gentle monster online."
          disabled
        ></input>
        <div className="mb-3 pt-8">
          <input
            type="text"
            placeholder="Ask a question or write a comment"
            className="px-48 py-8 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-base border border-slate-300 w-full"
          />
          <div className="flex pt-8 items-center justify-center">
            <button className=" h-14 cursor-pointer rounded-full bg-[#6A983C] px-20 font-semibold text-black hover:text-white hover:shadow-xl">
              Ask a question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
