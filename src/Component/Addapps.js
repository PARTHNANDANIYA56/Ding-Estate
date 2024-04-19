import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Addapps() {
  const [selectedLanguage, setSelectedLanguage] = useState('Select Language');
  const [selectedMenu, setSelectedMenu] = useState('Select Menu');

  const handleLanguageSelect = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleMenuSelect = (event) => {
    setSelectedMenu(event.target.value);
  };

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
              <div className='h3'>
                <NavLink to="/Error"> Removed apps</NavLink>
              </div>
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

          {/* Menu list name */}
          <nav className='h3 d-flex menulist mt-5 mb-5' style={{ marginLeft: '-85px' }}>
            <ul className='d-flex justify-content-around w-100'>
              <li>
                <NavLink to="/DevelopingApps">Developing Apps</NavLink>
              </li>
              <li>
                <NavLink to="/UploadApps">Upload Apps </NavLink>
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
              <li>
                <NavLink to="/Google">Appssettinggoogle </NavLink>
              </li>
            </ul>
          </nav>
          {/* All App icon list and details */}
          <div className='d-flex row'>
            {/* Playstore Dropdown */}
            <div className='col col-mb-4'>
              <div>
                <div className='d-flex justify-content-between w-50'>
                  <div>
                    <span className='h4'>Playstore</span>
                  </div>
                </div>

                <div>
                  <select className="form-select  p-3 w-50 mt-4 fw-bold" value={selectedLanguage} onChange={handleLanguageSelect} style={{ fontSize: '12px' }}>
                    <option value="Select Console Name">Select Console Name</option>
                    <option value="Awesome">Awesome</option>
                    <option value="Good">Good</option>
                    <option value="Very Good">Very Good</option>
                  </select>
                </div>


                {/* Adx Dropdown */}
                <div className='mt-3 w-50'>
                  <label for="formFile" className="form-label h4 mt-3">App Code</label>
                  <input class="form-control mt-3" type="text" id="formFile" style={{ fontSize: '12px' }} placeholder='Add App Code' />
                </div>
              </div>
              {/* appcode and Package Name  START*/}
              <div className='fw-bold'>
                <div class="form-group w-50">
                  <label for="exampleInputEmail1" className='h4 mt-3 '>Package Name</label>
                  <input type="text" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add Package Name" style={{ fontSize: '12px' }} />
                </div>
              </div>
              <div className='w-50'>
                <div >
                  <label for="formFile" className="form-label h4 mt-3">Select Icon</label>
                  <input class="form-control " type="file" id="formFile" style={{ fontSize: '12px' }} />
                </div>
              </div>
              {/* appcode and app name END*/}
            </div>

            {/* Secound app list */}
            <div className='col col-mb-4'>
              <div>
                <div className='mt-3'>
                  <div>
                    <span className='h4'>Adx</span>
                  </div>
                  <div>
                    <select className="form-select  p-3 w-50 mt-4 fw-bold " value={selectedMenu} onChange={handleMenuSelect} style={{ fontSize: '12px' }}>
                      <option value="Open this select menu">Open this select menu</option>
                      <option value="Developer">Developer</option>
                      <option value="Designer">Designer</option>
                    </select>
                  </div>
                </div>


                {/* Adx Dropdown */}
                <div className='mt-3'>
                  <div className='d-flex justify-content-between'>
                    <div className='w-50'>
                      <div class="form-group">
                        <label for="exampleInputEmail1" className='h4 mt-3'>App Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter App Name" style={{ fontSize: '12px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* appcode and Package Name  START*/}
              <div className='fw-bold '>
                <div class="form-group w-50">
                  <label for="exampleInputEmail1" className='h4 mt-3 '>Web URL</label>
                  <input type="text" class="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Add App Code" style={{ fontSize: '12px' }} />
                </div>
              </div>
              <div className='w-50'>
                <div class="form-group">
                  <label for="exampleInputEmail1" className='h4 mt-3'>Add Notes</label>
                  <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Package Name" style={{ fontSize: '12px' }} />
                </div>
              </div>
              {/* appcode and app name END*/}
            </div>
          </div>
          <div>
            <span className='h4 '>Status</span>
            <div className='d-flex h4 justify-content-between w-50 mt-4'>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                <label class="form-check-label" for="exampleRadios1">
                  Develop
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                <label class="form-check-label" for="exampleRadios2">
                  Upload
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                <label class="form-check-label" for="exampleRadios3">
                  Live
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
                <label class="form-check-label" for="exampleRadios4">
                  Suspended
                </label>
              </div>
            </div>
            <div className=' border-bottom pb-5'></div>

            <div className='d-flex gap-5 mt-5 mr-5 justify-content-end rounded'>
              <button className='btn btn-secondary p-3 rounded' style={{ width: "15%", fontSize: "15px" }}>Cancle</button>
              <button className='btn btn-primary p-3 rounded' style={{ width: "15%", fontSize: "15px" }}>Add</button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default Addapps;