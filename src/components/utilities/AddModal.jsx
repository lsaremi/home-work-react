import { useState } from "react";

const AddModal = ({ showModal, onSaveMovieData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    rate: "",
    status: false,
    // pic: null,
  });

  const handlechangeTitle = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
  };

  const handleChangeRate = (event) => {
    setUserInput({
      ...userInput,
      rate: Number(event.target.value),
    });
  };

  const handleChangeStatus = (event) => {
    setUserInput({
      ...userInput,
      status: event.target.checked,
    });
  };

  //   const handleImageUpload = (event) => {
  //     setUserInput({
  //       ...userInput,
  //       pic: event.target.files[0],
  //     });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieData = { ...userInput };
    onSaveMovieData(movieData);
    setUserInput({
      title: "",
      rate: "",
      status: false,
      //   pic: null,
    });
  };

  return (
    showModal && (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75" />
          </div>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div
            onSubmit={handleSubmit}
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-4"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-center justify-between">
                <div className="mb-4">
                  <label
                    htmlFor="movieName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Movie Name
                  </label>
                  <input
                    placeholder="enter movie name"
                    type="text"
                    id="movieName"
                    name="movieName"
                    value={userInput.title}
                    onChange={handlechangeTitle}
                    className="mt-1 p-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mb-4 sm:ml-4">
                  <label
                    htmlFor="rate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Rate
                  </label>
                  <input
                    placeholder="Enter movie rate"
                    type="number"
                    id="rate"
                    name="rate"
                    value={userInput.rate}
                    onChange={handleChangeRate}
                    className="mt-1 p-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="mt-4 sm:ml-4">
                  <label className="flex items-center">
                    <input
                      onChange={handleChangeStatus}
                      checked={userInput.status}
                      type="checkbox"
                      className="form-checkbox h-5 w-5 accent-green-500"
                    />
                    <span className="ml-2 text-gray-700">Watched</span>
                  </label>
                </div>
                {/* <div className="mt-4">
                  <label
                    for="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageUpload}
                    className="mt-1 p-1 block w-full border rounded-md shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div> */}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                onClick={onCancel}
                className="mb-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mb-0 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mr-3 sm:w-auto sm:text-sm"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default AddModal;
