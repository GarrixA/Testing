import React, { useState } from 'react';
import { MdOutlineAddCircleOutline } from "react-icons/md"

const CardPageVisits = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  const [modal1, setModal1] = useState(false);

  const detailmodal = () => {
    setModal1(!modal1);
  };
  const [modal2, setModal2] = useState(false);

  const detailmodal1 = () => {
    setModal2(!modal2);
  };
  const [modal3, setModal3] = useState(false);

  const detailmodal3 = () => {
    setModal3(!modal3);
  };
  const [modal4, setModal4] = useState(false);

  const detailmodal4 = () => {
    setModal4(!modal4);
  };
  const [modal5, setModal5] = useState(false);

  const detailmodal5 = () => {
    setModal5(!modal5);
  };
  const handleCancel = () => {
    console.log('Cancel button clicked!');
  };
  

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="flex items-cemter flex-row justify-between w-full">
              <h3 className="font-semibold text-base text-blueGray-700">
                Total Buildings
              </h3>
              <div className='flex flex-row items-center text-white bg-[#0C7489] rounded px-4 py-1'>
              <MdOutlineAddCircleOutline className='text-4xl'/>
              <button
                onClick={toggleModal}
                className="text-lg font-bold py-2 px-1"
                type="button"
              >
                Add Building
              </button>
               <h1>gggggggggggggggggggggggggggggggggg</h1>
               <h1>gggggggggggggggggggggggggggggggggg</h1>
               <h1>gggggggggggggggggggggggggggggggggg</h1>
              </div>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              { modal &&(
              
              
  <div className="fixed inset-20 z-120 overflow-auto bg-black bg-opacity-20 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Add Building Form</h2>
      <button className="bg-[#0C7489]gap-0 text-sm text-gray-500" onClick={toggleModal}>
        Close
      </button>
        <form className="mt-4">
    <div className="mb-4">
      <label htmlFor="buildingId" className="block text-sm font-medium text-gray-600">
        BuildingID
      </label>
      <input
        type="text"
        id="buildingId"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="BuildingID"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="buildingName" className="block text-sm font-medium text-gray-600">
        BuildingName
      </label>
      <input
        type="text"
        id="buildingName"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="BuildingName"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="location" className="block text-sm font-medium text-gray-600">
        Location
      </label>
      <input
        type="text"
        id="location"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="Location"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="buildingManager" className="block text-sm font-medium text-gray-600">
        BuildingManager
      </label>
      <input
        type="text"
        id="buildingManager"
        className="mt-1 p-2 border rounded-md w-full"
        placeholder="BuildingManager"
      />
    </div>
    <button
      type="submit"
      className="bg-[#0C7489] mr-8 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
    >
      ADD
    </button>
  </form>
    </div>
  </div>
              )}
</div>
              

          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingID
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingName
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Location
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  BuildingManager
                </th>
              </tr>
            </thead>
            <tbody className='cursor-pointer shadow-lg'>
              <tr>
              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                   <button onClick={detailmodal}>buildNo.1</button>
                     {modal1 && (
                    <div className="p-6 bg-white rounded-md shadow-md">
                      <p className="mb-4 text-lg font-bold">Makuza Building</p>
                      <p className="mb-2">Total Slots: 400</p>
                      <p className="mb-2">Total Booked: 100</p>
                      <p className="mb-4">Total Remaining: 300</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                    View More Details
                </button>
                <button className="bg-red-500 ml-10 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={toggleModal}
                >
                    cancer
                </button>
                    </div>

                    )}
          </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Makuza
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                <button onClick={detailmodal3}>buildNo.1</button>
                     {modal3 && (
                    <div className="p-6 bg-white rounded-md shadow-md">
                      <p className="mb-4 text-lg font-bold">Chic Buildings</p>
                      <p className="mb-2">Total Slots: 400</p>
                      <p className="mb-2">Total Booked: 100</p>
                      <p className="mb-4">Total Remaining: 300</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                    View More Details
                </button>
                <button className="bg-red-500 ml-10 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleCancel}
                >
                    cancer
                </button>
                    </div>

                    )}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                chic
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                <button onClick={detailmodal1}>buildNo.1</button>
                     {modal2 && (
                    <div className="p-6 bg-white rounded-md shadow-md">
                      <p className="mb-4 text-lg font-bold">Civicom Buildings </p>
                      <p className="mb-2">Total Slots: 400</p>
                      <p className="mb-2">Total Booked: 100</p>
                      <p className="mb-4">Total Remaining: 300</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                    View More Details
                </button>
                <button className="bg-red-500 ml-10 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleCancel}
                >
                    cancer
                </button>
                    </div>

                    )}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Civicom
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                <button onClick={detailmodal5}>buildNo.1</button>
                     {modal5 && (
                    <div className="p-6 bg-white rounded-md shadow-md">
                      <p className="mb-4 text-lg font-bold">City Tower Building</p>
                      <p className="mb-2">Total Slots: 400</p>
                      <p className="mb-2">Total Booked: 100</p>
                      <p className="mb-4">Total Remaining: 300</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                    View More Details
                </button>
                <button className="bg-red-500 ml-10 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleCancel}
                >
                    cancer
                </button>
                    </div>

                    )}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  City tower
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  manager001
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                <button onClick={detailmodal4}>buildNo.1</button>
                     {modal4 && (
                    <div className="p-6 bg-white rounded-md shadow-md">
                      <p className="mb-4 text-lg font-bold">Radisson Building</p>
                      <p className="mb-2">Total Slots: 400</p>
                      <p className="mb-2">Total Booked: 100</p>
                      <p className="mb-4">Total Remaining: 300</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300">
                    View More Details
                </button>
                <button className="bg-red-500 ml-10 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
                onClick={handleCancel}
                >
                    cancer
                </button>
                    </div>

                    )}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  Raddison
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                kigali-kacyiru
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                  manager001
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default CardPageVisits