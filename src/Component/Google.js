import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Google() {

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
                                    <NavLink to="/DevelopingApps">Apps</NavLink>
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
                            <div className='h3'>
                                <NavLink to="/Userlogin">Log Out</NavLink>
                            </div>
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
                    <div className='mt-5 gap-5 d-flex navbarlinkuser'>
                        <button className='btn fw-bold' style={{ fontSize: "18px" }}>
                            User
                        </button>
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
                        <ul className='d-flex justify-content-around w-100 navbarlinkuser'>
                            <li>
                                <NavLink to="/Google" className=' '>Google</NavLink>

                            </li>
                            <li>
                                <NavLink to="/Addsetting">Add Setting </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Bifurcate">Bifurcate </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Othersetting">Other Setting </NavLink>
                            </li>
                            <li>
                                <NavLink to="/VPN">VPN </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Removeappflags">App Remove Flags</NavLink>
                            </li>
                            {/* <li>
                                <Link to="/Appssettinggoogle">Appssettinggoogle </Link>
                            </li> */}
                        </ul>
                    </nav>
                    <div className='border-bottom'></div>
                    {/* navbar end */}
                    {/* google data form start */}
                    <div>
                        <form className='row gap-4 '>
                            {/* google 1 start */}
                            <div className='col-sm mt-5'>
                                <div className='fw-bold h3'>
                                    <span>Google 1</span>
                                    <div className='border-bottom mt-4'></div>
                                </div>
                                <div class="mt-5 gap-3 row h4">
                                    <div class="d-flex gap-6">
                                        <span>Percentage</span>
                                        <input type="text" class="form-control" placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Account Name</span>
                                        <input type="text" class="form-control" placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Banner</span>
                                        <input type="file" class="form-control " placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Inter</span>
                                        <input type="text" class="form-control " placeholder="Enter Inter" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Native</span>
                                        <input type="text" class="form-control " placeholder="Enter Native" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Native 2</span>
                                        <input type="text" class="form-control " placeholder="Enter Native" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>AppOpen</span>
                                        <input type="text" class="form-control " placeholder="Open App" />
                                    </div>
                                </div>
                            </div>

                            {/* google 1 end */}

                            {/* google 2 start */}
                            <div className='col-sm mt-5'>
                                <div className='fw-bold h3'>
                                    <span>Google 2</span>
                                    <div className='border-bottom mt-4'></div>
                                </div>
                                <div class="mt-5 gap-3 row h4">
                                    <div class="d-flex gap-6">
                                        <span>Percentage</span>
                                        <input type="text" class="form-control " placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Account Name</span>
                                        <input type="text" class="form-control" placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Banner</span>
                                        <input type="file" class="form-control " placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Inter</span>
                                        <input type="text" class="form-control " placeholder="Enter Inter" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Native</span>
                                        <input type="text" class="form-control " placeholder="Enter Native" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Native 2</span>
                                        <input type="text" class="form-control " placeholder="Enter Native" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>AppOpen</span>
                                        <input type="text" class="form-control " placeholder="Open App" />
                                    </div>
                                </div>
                            </div>
                            {/* google 2 end */}

                            {/* google 3 start */}
                            <div className='col-sm mt-5'>
                                <div className='fw-bold h3'>
                                    <span>Google 3</span>
                                    <div className='border-bottom mt-4'></div>
                                </div>
                                <div class="mt-5 gap-3 row h4">
                                    <div class="d-flex gap-6">
                                        <span>Percentage</span>
                                        <input type="text" class="form-control " placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Account Name</span>
                                        <input type="text" class="form-control" placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Banner</span>
                                        <input type="file" class="form-control " placeholder="Add" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Inter</span>
                                        <input type="text" class="form-control " placeholder="Enter Inter" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Native</span>
                                        <input type="text" class="form-control " placeholder="Enter Native" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>Native 2</span>
                                        <input type="text" class="form-control " placeholder="Enter Native" />
                                    </div>
                                    <div class=" d-flex gap-6 mt-5">
                                        <span>AppOpen</span>
                                        <input type="text" class="form-control " placeholder="Open App" />
                                    </div>
                                </div>
                            </div>
                            {/* google 3 end */}

                        </form>
                    </div>
                    {/* google data form end */}
                    <div className='border-bottom mt-5'></div>

                    <div className='d-flex gap-3 mt-5 mb-5' style={{ marginLeft: '80%' }}>
                        <button className='btn btn-primary rounded-3 p-3'>Update</button>
                        <button className='btn btn-primary rounded-3 p-3'>Test Id Add</button>
                        <button className='btn btn-primary rounded-3 p-3'>Test Id Remove</button>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Google;