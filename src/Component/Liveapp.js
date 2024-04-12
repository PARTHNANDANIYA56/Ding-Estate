import React from 'react'
import { FaFileExcel } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom';

function Liveapp() {
    return (
        <>
            <div className='ml-3 d-flex row mt-4'>
                <div className='col col-lg-2 '>
                    <div className="flex gap-2 ml-4 max-md:ml-2.5">
                        <div className="flex flex-col text-lg font-bold text-black">
                            <div className="flex gap-3 border-bottom border-right">
                                <img
                                    src="logo.png"
                                />
                            </div>
                        </div>
                    </div>
                    {/* app icon list */}
                    <div>
                        <div className="flex flex-col justify-center items-start self-stretch px-4 py-3 mt-7 w-12 text-lg font-medium leading-6 text-white whitespace-nowrap bg-blue-600 rounded-xl max-md:pr-5" style={{ width: '72%', height: '60px' }}>
                            <div className="flex gap-3 h3 text-center">
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/88954333ba15b4c15af0ca3ed0aa43ce57bc49a6fb879d564633ecb8c66392b4?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&"
                                />
                                <div className='h3'>
                                    <Link to="/">Apps</Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-3 mt-7 ml-4 text-lg font-medium leading-6 text-cyan-900 max-md:ml-2.5 ">
                            <img

                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd7df5c03e72c2e6d6840252a8d3d713c3ca71dfe0525c1c785dfbc2992e2e51?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&"

                            />
                            <div className='h3'>Removed apps</div>
                        </div>
                        <div className="d-flex gap-3 mt-10 ml-4 text-lg font-medium leading-6 text-cyan-900 max-md:ml-2.5">
                            <img

                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5581689c4caaa306eec10f0a0dd343c5116a9e01d6bf529b1037979a403579c8?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&"

                            />
                            <div className='h3'>
                                <Link to="/Playstore">Play Store</Link>
                            </div>
                        </div>
                        <div className="d-flex gap-3 mt-10 ml-4 text-lg font-medium leading-6 text-cyan-900 whitespace-nowrap max-md:ml-2.5">
                            <img

                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7cb72af7f2e047421f6b70b2b20ba080e0bcdf446ec6cb70736801ed9598ec8?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&"

                            />
                            <div className='h3'>
                                <Link to="/Adx">ADX</Link>
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch mx-5 mt-10 w-full h-px bg-zinc-100 max-md:mx-2.5" />
                        <div className="d-flex gap-3 mt-10 ml-4 text-lg font-medium leading-6 text-cyan-900 max-md:ml-2.5">
                            <img

                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/14b9fedad5d28b7acdb2f1fbafb9332f862f3298f7077a1e1abd3ce0e5699cf0?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&"

                            />
                            <div className='h3'>Log Out</div>
                        </div>
                    </div>
                </div>
                {/* use list and dettils */}
                <div className='col'>
                    <div className='border-bottom'>
                        <div className='d-flex justify-content-between  align-items-center mb-3'>
                            <div className='col'>
                                <span className='h2 fw-bold'>Apps</span>
                            </div>
                            <div className='d-flex gap-3 h4 col-md-2'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <input type="text" placeholder='Search' className="p-3 border rounded" />
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* menu list name */}
                    <nav className='h3 d-flex menulist mt-5 mb-5' style={{ marginLeft: '-85px' }}>
                        <ul className='d-flex justify-content-around w-100'>
                            <li>
                                <Link to="/" className=' '>Developing Apps </Link>

                            </li>
                            <li>
                                <Link to="/UploadApps">Upload Apps </Link>
                            </li>
                            <li>
                                <Link to="/Liveapp">Live Apps </Link>
                            </li>
                            <li>

                                <Link to="/SuspendedApp">Suspended App </Link>
                            </li>
                            <li>
                                <Link to="/Ctro">CTR-0 </Link>
                            </li>
                            <li>
                                <Link to="/Addapps">Add Apps </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* live App Chart */}
                    <div className='row gap-3'>
                        <div className=' border rounded-5 col-sm-2 p-5'>
                            <div className='d-flex'>
                                <span className='fw-bold h1'>261 </span>
                                <sub className='d-flex mt-2 text-success h4'>  76.4% <TiArrowSortedUp /></sub>
                            </div>
                            <div className='h5 mt-3'>
                                <span>Today</span>
                            </div>
                        </div>
                        <div className=' border rounded-5 col-sm-2 p-5'>
                            <div className='d-flex'>
                                <span className='fw-bold h1'>1,104 </span>
                                <sub className='d-flex mt-2 text-success h4'> 12.1% <TiArrowSortedUp /></sub>
                            </div>
                            <div className='h5 mt-3'>
                                <span>Yesterday</span>
                            </div>
                        </div>
                        <div className='border rounded-5 col-sm-2 p-5'>
                            <div className='d-flex'>
                                <span className='fw-bold h1'>7,259 </span>
                                <sub className='d-flex text-danger h4 mt-2'> 46.2%   <IoMdArrowDropdown /> </sub>
                            </div>
                            <div className='h5 mt-3'>
                                <span>Last 7 Day</span>
                            </div>
                        </div>
                        <div className='border rounded-5 col-sm-2 p-5'>
                            <div className='d-flex'>
                                <span className='fw-bold h1'>71,403 </span>
                                <sub className='d-flex text-success h4 mt-2'> 83.9% <TiArrowSortedUp /></sub>
                            </div>
                            <div className='h5 mt-3'>
                                <span>Last 30 Day</span>
                            </div>
                        </div>
                    </div>
                    {/* record list */}
                    <div className='d-flex justify-content-between  align-items-center mt-3'>
                        <div className='col'>
                            <span className='h3 fw-bold'>2 Record Available</span>
                        </div>
                        <div className='d-flex gap-3 h4 col-md-3'>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type="text" placeholder='Search' className="p-3 border rounded" />
                            </div>

                            <div className='border rounded  '>
                                <button type='button' className=' d-flex gap-3 '><FaFileExcel className='text-success' />Export List</button>
                            </div>
                        </div>

                    </div>
                    {/* Table */}
                    <div className='h4 mt-5'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Appcode</th>
                                    <th scope="col">Icon</th>
                                    <th scope="col">App Name</th>
                                    <th scope="col">Adx</th>
                                    <th scope="col">Today</th>
                                    <th scope="col">Yesterday</th>
                                    <th scope="col">All</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>425</td>
                                    <td><img src="appicon 1.png" alt="" /></td>
                                    <td>
                                        <p>Bus Simulator</p>
                                        <p>com.drivinglicence.applyonline.livedieselprice</p>
                                        <p>Phone pay</p>
                                    </td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>Wonderfull</td>
                                    <td>10 Days</td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <FaEdit />
                                            <MdDelete />
                                            <IoIosSettings />
                                            <FaTrashRestoreAlt />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Liveapp