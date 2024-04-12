import React from 'react'
import { Link } from 'react-router-dom';

function VPN() {
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

                {/* Use list and details */}
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
                    {/* nav button start */}
                    <div className='mt-5 gap-5 d-flex'>
                        <button className='btn fw-bold' style={{
                            fontSize: "18px"
                        }}>User</button>
                        <button className='btn fw-bold' style={{
                            fontSize: "18px"
                        }}>
                            <Link to="/Retention">Retention</Link>
                        </button>
                        <button className=' btn  fw-bold' style={{
                            fontSize: "18px"
                        }}>
                            <Link to="/Addsetting">Setting (0)</Link>
                        </button>
                        <button className='btn fw-bold' style={{
                            fontSize: "18px"
                        }}>Setting (M)</button>
                    </div>
                    {/* nav button end */}
                    {/* Menu list name */}
                    <nav className='h3 d-flex menulist mt-5 mb-5' >
                        <ul className='d-flex justify-content-around w-100'>
                            <li>
                                <Link to="/Google" className=' '>Google</Link>
                            </li>
                            <li>
                                <Link to="/Addsetting">Add Setting </Link>
                            </li>
                            <li>
                                <Link to="/Bifurcate">Bifurcate </Link>
                            </li>
                            <li>
                                <Link to="/Othersetting">Other Setting </Link>
                            </li>
                            <li>
                                <Link to="/VPN">VPN </Link>
                            </li>
                            <li>
                                <Link to="/Removeappflags">App Remove Flags</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className='border-bottom'></div>
                    {/* Bifurcate start */}
                    <div className='d-flex justify-content-between'>
                        <div className='col'>
                            {/* VPN Setting section start */}
                            <div className='d-flex gap-5 mt-5'>
                                <div className='fw-bold h3'>
                                    <span>VPN Setting</span>
                                </div>
                                <div className='gap-5 d-grid'>
                                    <div className='h4 d-flex  gap-5'>
                                        <span >VPN </span>
                                        <input type="radio" />Show
                                        <input type="radio" />Hide
                                    </div>
                                    <div className='gap-5 d-grid'>
                                        <div className='h4 d-flex  gap-5'>
                                            <span >VPN Dialog </span>
                                            <input type="radio" />Show
                                            <input type="radio" />Hide
                                        </div>
                                    </div>
                                    <div className='gap-5 d-grid'>
                                        <div className='h4 d-flex  gap-5'>
                                            <span > VPN Dialog Open  </span>
                                            <input type="radio" />Show
                                            <input type="radio" />Hide
                                        </div>
                                    </div>
                                    <div className='gap-5 d-grid'>
                                        <div className='h4 d-flex  gap-5'>
                                            <span > VPN List Country  </span>
                                            <td colspan="2"><input type="text" placeholder='-' class='p-3 border rounded' /></td>
                                        </div>
                                    </div>
                                    <div className='gap-5 d-grid'>
                                        <div className='h4 d-flex  gap-5'>
                                            <span > VPN url  </span>
                                            <td colspan="2"><input type="text" placeholder='-' class='p-3 border rounded' /></td>
                                        </div>
                                    </div>
                                    <div className='gap-5 d-grid'>
                                        <div className='h4 d-flex  gap-5'>
                                            <span > VPN Carrir Id  </span>
                                            <td colspan="2"><input type="text" placeholder='-' class='p-3 border rounded' /></td>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom mt-5 mb-5'></div>
                            <div style={{ marginLeft: "93%" }} className='mb-5'>
                                <button className='btn btn-primary'>
                                    <span className='h4 p-3'>Update</span>
                                </button>
                            </div>
                            {/* VPN Setting section end */}
                        </div>
                    </div>

                    {/* Bifurcate end */}
                </div>
            </div>


        </>
    )
}

export default VPN