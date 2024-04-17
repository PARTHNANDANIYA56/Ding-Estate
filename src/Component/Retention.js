import React, { useState } from 'react'
import { FaFileExcel } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Retention() {

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
          {/* nav button start */}
          <div className='mt-5 gap-5 d-flex navbarlinkuser'>
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
          {/* live App Chart */}
          <div className='row gap-3 mt-5'>
            <div className='  rounded-5 col-sm-2 p-5'>
              <div>
                <span className='fw-bold h1'>584 </span>
                <span className='h4'>Total Count</span>
              </div>
            </div>
            <div className='  rounded-5 col-sm-2 p-5'>
              <div>
                <span className='fw-bold h1'>112 </span>
                <span className='h4'>Orgni Count</span>
              </div>
            </div>
            <div className='  rounded-5 col-sm-2 p-5'>
              <div>
                <span className='fw-bold h1'>52 </span>
                <span className='h4'>Marketing Count</span>
              </div>
            </div>
          </div>
          {/* record list */}
          <div className='d-flex justify-content-between  align-items-center mt-3'>
            <div className='col'>
              <span className='h3 fw-bold'>2 Record Available</span>
            </div>
            {/* racord button start */}
            <div className='d-flex gap-5'>
              <div>
                <input type="text" placeholder='Search' className="p-3 border rounded " />
              </div>
              <div>
                <select className="form-select  p-3 fw-bold" value={selectedLanguage} onChange={handleLanguageSelect} style={{ fontSize: '12px' }}>
                  <option value="Select Console Name">All</option>
                  <option value="Awesome"></option>
                  <option value="Good"></option>
                  <option value="Very Good"></option>
                </select>
              </div>
              <div className='border rounded  '>
                <button type='button' className=' d-flex gap-3 '><FaFileExcel className='text-success' />Export List</button>
              </div>
            </div>
            {/* racord button end */}
          </div>
          {/* table data start */}
          <div className='mt-5 h4'>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Package</th>
                  <th scope="col">As</th>
                  <th scope="col">As Name</th>
                  <th scope="col">City</th>
                  <th scope="col">Continent</th>
                  <th scope="col">Country</th>
                  <th scope="col">Country Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>com.photokeyboard.keyborad</td>
                  <td>VueAS24560 Bharti Airtel Ltd., Telemedia Services</td>
                  <td>AIRTELBROADBAND-AS-AP</td>
                  <td>Ahmedabad</td>
                  <td>Asia</td>
                  <td>India</td>
                  <td>Country Code</td>

                </tr>
                <tr>
                  <td>com.photokeyboard.keyborad</td>
                  <td>VueAS24560 Bharti Airtel Ltd., Telemedia Services</td>
                  <td>AIRTELBROADBAND-AS-AP</td>
                  <td>Ahmedabad</td>
                  <td>Asia</td>
                  <td>India</td>
                  <td>Country Code</td>
                </tr>
                <tr>
                  <td>com.photokeyboard.keyborad</td>
                  <td>VueAS24560 Bharti Airtel Ltd., Telemedia Services</td>
                  <td>AIRTELBROADBAND-AS-AP</td>
                  <td>Ahmedabad</td>
                  <td>Asia</td>
                  <td>India</td>
                  <td>Country Code</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* table data end */}

        </div>
      </div>
    </>
  )
}

export default Retention
