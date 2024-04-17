import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';

function Playstore() {
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
                Removed apps
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
        <div className='col mt-3 '>
          <div className='border-bottom'>
            <div className='d-flex justify-content-between  align-items-center mb-3'>
              <div className='col'>
                <span className='h2 fw-bold'>Play Store</span>
              </div>
              {/* MODEL START */}
              <div>
                <button className='btn btn-primary mr-5'>
                  <span className='h4 p-3' data-toggle="modal" data-target="#myModal">+ Add Record</span>
                </button>
              </div>
              {/* <!-- Modal --> */}
              <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">

                  {/* <!-- Modal content--> */}
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">New Record Add</h4>
                      <button type="button" class="close ml-auto" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body d-flex justify-content-between">
                      <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                        <label for="exampleInputEmail1" className='mt-3'>Server Number</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Server Number" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Device Owner</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Device Owner" />
                        <label for="exampleInputEmail1" className='mt-3'>Remark</label>
                        <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Remark" />
                      </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-default" data-dismiss="modal">Discard</button>
                      <button type="button" class="btn btn-primary" data-dismiss="modal">Add</button>
                    </div>
                  </div>

                </div>
              </div>

              {/* MODEL END */}
            </div>
          </div>
          {/* record list */}
          <div className='d-flex justify-content-between  align-items-center mt-3'>
            <div className='col'>
              <span className='h3 fw-bold'>2 Record Available</span>
            </div>
            {/* racord button start */}
            <div className='d-flex gap-3'>
              <div className='mr-5 '>
                <select className="form-select fw-bold " value={selectedLanguage} onChange={handleLanguageSelect} style={{ fontSize: '16px' }}>
                  <option value="Select Console Name">Live</option>
                  <option value="Awesome"></option>
                  <option value="Good"></option>
                  <option value="Very Good"></option>
                </select>
              </div>
              <div>
                <input type="text" placeholder='Search' className="p-3 border rounded " />
              </div>
            </div>
          </div>
          {/* racord button end */}
          {/* Table data start */}
          <table class="table mt-5 h4">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">DeviceOwner</th>
                <th scope="col">Server Number</th>
                <th scope="col">Remarks</th>
                <th scope="col">Status</th>
                <th scope="col">Up</th>
                <th scope="col">Live</th>
                <th scope="col">Suspended</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Vue</td>
                <td>Riddhi</td>
                <td>313131</td>
                <td>good</td>
                <td className='text-success'>
                  <button style={{ border: "2px solid #27AE60", borderRadius: "7px", backgroundColor: '#27ae6026', width: "50%" }}>live</button>
                </td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>
                  <div className='d-flex gap-2 h3'>
                    <a href="#"><FaEdit /></a>
                    <a href="#"><MdDelete /></a>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Nest.js</td>
                <td>Urvish</td>
                <td>55555</td>
                <td>good</td>
                <td className='text-success'>
                  <button style={{ border: "2px solid #27AE60", borderRadius: "7px", backgroundColor: '#27ae6026', width: "50%" }}>live</button>
                </td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>
                  <div className='d-flex gap-2 h3'>
                    <a href="#"><FaEdit /></a>
                    <a href="#"><MdDelete /></a>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>React.js</td>
                <td>Prince</td>
                <td>3000</td>
                <td>good</td>
                <td className='text-danger '>
                  <button style={{ border: "2px solid #ff000030", borderRadius: "7px", backgroundColor: '#ff000030', width: "50%" }}>Pandding</button>
                </td>
                <td>0</td>
                <td>1</td>
                <td>0</td>
                <td>
                  <div className='d-flex gap-2 h3'>
                    <a href="#"><FaEdit /></a>
                    <a href="#"><MdDelete /></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </>
  )
}

export default Playstore