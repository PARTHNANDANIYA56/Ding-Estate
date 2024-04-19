import React from "react";
import { FaFileExcel } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import '../App.css'

function UploadApps() {
    return (
        <>
            <div className="ml-3 d-flex row mt-4">
                <div className="col col-lg-2">
                    <div className="flex gap-2 ml-4 max-md:ml-2.5">
                        <div className="flex flex-col text-lg font-bold text-black">
                            <div className="flex gap-3 border-bottom border-right">
                                <img src="logo.png" />
                            </div>
                        </div>
                    </div>
                    {/* app icon list */}
                    <div>
                        <div
                            className="flex flex-col justify-center items-start self-stretch px-4 py-3 mt-7 w-12 text-lg font-medium leading-6 text-white whitespace-nowrap bg-blue-600 rounded-xl max-md:pr-5"
                            style={{ width: "72%", height: "60px" }}
                        >
                            <div className="flex gap-3 h3 text-center">
                                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/88954333ba15b4c15af0ca3ed0aa43ce57bc49a6fb879d564633ecb8c66392b4?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&" />
                                <div className='h3'>
                                    <NavLink to="/DevelopingApps">Apps</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-3 mt-7 ml-4 text-lg font-medium leading-6 text-cyan-900 max-md:ml-2.5 ">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd7df5c03e72c2e6d6840252a8d3d713c3ca71dfe0525c1c785dfbc2992e2e51?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&" />
                            <div className='h3'>
                                <NavLink to="/Error"> Removed apps</NavLink>
                            </div>
                        </div>
                        <div className="d-flex gap-3 mt-10 ml-4 text-lg font-medium leading-6 text-cyan-900 max-md:ml-2.5">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5581689c4caaa306eec10f0a0dd343c5116a9e01d6bf529b1037979a403579c8?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&" />
                            <div className="h3">
                                <NavLink to="/Playstore">Play Store</NavLink>
                            </div>
                        </div>
                        <div className="d-flex gap-3 mt-10 ml-4 text-lg font-medium leading-6 text-cyan-900 whitespace-nowrap max-md:ml-2.5">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7cb72af7f2e047421f6b70b2b20ba080e0bcdf446ec6cb70736801ed9598ec8?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&" />
                            <div className="h3">
                                <NavLink to="/Adx">ADX</NavLink>
                            </div>
                        </div>
                        <div className="shrink-0 self-stretch mx-5 mt-10 w-full h-px bg-zinc-100 max-md:mx-2.5" />
                        <div className="d-flex gap-3 mt-10 ml-4 text-lg font-medium leading-6 text-cyan-900 max-md:ml-2.5">
                            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/14b9fedad5d28b7acdb2f1fbafb9332f862f3298f7077a1e1abd3ce0e5699cf0?apiKey=e0607cfe1ec44e0dae9b218bfe902d2e&" />
                            <div className='h3'>
                                <NavLink to="/Userlogin">Log Out</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* use list and dettils */}
                <div className="col">
                    <div className="border-bottom">
                        <div className="d-flex justify-content-between  align-items-center mb-3">
                            <div className="col">
                                <span className="h2 fw-bold">Apps</span>
                            </div>
                            <div className="d-flex gap-3 h4 col-md-2">
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="p-3 border rounded"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* menu list name */}
                    {/* menu list name */}
                    <nav
                        className="h3 d-flex  mt-5 mb-5"
                        style={{ marginLeft: "-85px" }}
                    >
                        <ul className="d-flex justify-content-around w-100 navbarlinkuser">
                            <li>
                                <NavLink to="/DevelopingApps">Developing Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to="/UploadApps">Upload Apps</NavLink>
                            </li>
                            <li>
                                <NavLink to="/Liveapp">Live Apps </NavLink>
                            </li>
                            <li>
                                <NavLink to="/SuspendedApp">Suspended App </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Ctro">CTR-0 </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Addapps">Add Apps </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {/* record list */}
                    <div className="d-flex justify-content-between  align-items-center mt-3">
                        <div className="col">
                            <span className="h3 fw-bold">2 Record Available</span>
                        </div>
                        <div className="d-flex gap-3 h4 col-md-3">
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="p-3 border rounded"
                                />
                            </div>

                            <div className='border rounded  '>
                                <button type='button' className=' d-flex gap-3 '><FaFileExcel className='text-success' />
                                    <NavLink to='https://docs.google.com/spreadsheets/u/0/'>
                                        Export List
                                    </NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Table */}
                    <div className="h4 mt-5">
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
                                    <td>
                                        <img src="appicon 1.png" alt="" />
                                    </td>
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
                                            <a href="#"><FaEdit /></a>
                                            <a href="#"><MdDelete /></a>
                                            <a href="#"><IoIosSettings /></a>
                                            <a href="#"><FaTrashRestoreAlt /></a>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">2</th>
                                    <td>415</td>
                                    <td>
                                        <img src="downloadison.png" alt="" />
                                    </td>
                                    <td>
                                        <p>Bus Simulator</p>
                                        <p>com.drivinglicence.applyonline.livedieselprice</p>
                                        <p>Phone pay</p>
                                    </td>
                                    <td>2</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>0</td>
                                    <td>Very fine</td>
                                    <td>30 Days</td>
                                    <td>
                                        <div className='d-flex gap-2'>
                                            <a href="#"><FaEdit /></a>
                                            <a href="#"><MdDelete /></a>
                                            <a href="#"><IoIosSettings /></a>
                                            <a href="#"><FaTrashRestoreAlt /></a>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UploadApps;
