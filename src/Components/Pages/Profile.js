import axios from 'axios'
import React, { useState } from 'react'
import Nav from '../layout/Nav'
import { API } from '../../config'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  const auth_data = JSON.parse(localStorage.getItem('jwt'))
  const token = auth_data.token

  const fetchData = async () => {
    const { data } = await axios.get(`${API}/authuser`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`
      }
    })
    return data
  }

  const { data: user } = useQuery('auth_user', fetchData)
  const handleBuy = () => {
    setIsClicked(true)
    setTimeout(() => {
      setIsClicked(false)
      navigate('/subscription')
    }, 3000);
  }

  return (
    <div>
      <Nav />
      <section className="" >
        <div className="container mx-auto py-5" >
          <div className="row g-0 w-100" style={{ height: '800px' }}>
            <div className="col-lg-4 gradient-custom text-center text-white border rounded-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="Avatar" className="img-fluid my-5" style={{ width: "200px" }} />
              <h5>Marie Horwitz</h5>
              <div className="card-body p-4">
                <h6 className='pb-1 fw-bold'>Information</h6>
                <hr className="mt-0 mb-2" />
                <div className=" pt-1">
                  <div className=" mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">
                      {user ?
                        <span>{user.email}</span> :
                        <span>info@gmail.com</span>
                      }
                    </p>
                  </div>
                  <div className=" mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">
                      {user &&
                        user.number ?
                        <span>{user.number}</span> :
                        <span>123 456 789</span>
                      }
                    </p>
                  </div>
                  <div className=" mb-3">
                    <h6>Address</h6>
                    <p className="text-muted">
                      {
                        user &&
                          user?.address ?
                          <span>{user.address}</span> :
                          <span>california</span>
                      }</p>
                  </div>
                </div>
                <hr className="mt-0 mb-2" />
                <h6 className='pb-1 fw-bold '><u>Subscription</u></h6>
                <div className=" my-3">
                  {/* <h6>Email</h6> */}
                  <p className="text-muted">
                    You have no subscription
                  </p>
                  <button className='btn btn-outline-warning mt-2 btn-sm ' onClick={handleBuy}>
                    {
                      isClicked ?
                        <span class="">Loading...</span> :
                        <span>
                          Buy now
                        </span>
                    }
                  </button>
                </div>

              </div>
            </div>
            <div className='col-lg-1'>

            </div>
            <div className="col-lg-7 border rounded-4 mt-3 mt-lg-0 d-flex align-items-cente">
              <div className='mt-3'>
                <h3 className='text-white text-center border-bottom pb-2 fw-bold'>Setting</h3>

                <form className="row g-3 px-lg-5 text-white py-3 border-bottom">
                  <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" defaultValue={user && user.email} disabled />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPassword" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="inputPassword4" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" defaultValue={user && user.address} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="phone" className="form-label">Phone number</label>
                    <input type="number" className="form-control" id="phone" placeholder="Apartment, studio, or floor" defaultValue={user && user.number} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputState" className="form-label text-white">Country</label>
                    <input type="text" className="form-control" id="inputState" />
                  </div>

                  <div className="col-12 mt-2 text-end">
                    <button type="submit" className="btn btn-primary">Change</button>
                  </div>
                </form>

                <div>
                  <form action="text-white px-5">
                    <p className="fw-bold mb-4 pb-2 text-white text-center mt-2 fs-3 border-bottom">Saved cards:</p>

                    <div className="d-flex flex-row align-items-center mb-2 pb-1 px-5">
                      <img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt='...' />
                      <div className="flex-fill mx-3">
                        <div className="form-outline">
                          <input type="text" id="formControlLgXc" className="form-control form-control-lg"
                            value="**** **** **** 3193" readOnly />
                          <label className="form-label" htmlFor="formControlLgXc">Card Number</label>
                        </div>
                      </div>
                      <a href="#!">Remove card</a>
                    </div>

                    <div className="d-flex flex-row align-items-center mb-2 pb-1 px-5 border-bottom">
                      <img className="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" alt='...' />
                      <div className="flex-fill mx-3">
                        <div className="form-outline">
                          <input type="text" id="formControlLgXs" className="form-control form-control-lg"
                            value="**** **** **** 4296" readOnly />
                          <label className="form-label" htmlFor="formControlLgXs">Card Number</label>
                        </div>
                      </div>
                      <a href="#!">Remove card</a>
                    </div>
                    <p className="fw-bold mb-4 text-white text-center fs-3 border-bottom py-1">Add new card:</p>
                    <div className="row mb-4 px-5">
                      <div className="col-7">
                        <div className="form-outline">
                          <input type="text" id="formControlLgXM" className="form-control form-control-lg"
                            value="1234 5678 1234 5678" readOnly />
                          <label className="form-label" htmlFor="formControlLgXM">Card Number</label>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="form-outline">
                          <input type="password" id="formControlLgExpk" className="form-control form-control-lg"
                            placeholder="MM/YYYY" />
                          <label className="form-label" htmlFor="formControlLgExpk">Expire</label>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="form-outline">
                          <input type="password" id="formControlLgcvv" className="form-control form-control-lg"
                            placeholder="Cvv" />
                          <label className="form-label" htmlFor="formControlLgcvv">Cvv</label>
                        </div>
                      </div>
                    </div>
                    <div className='text-end px-5 pb-2'>
                      <button className="btn btn-success btn-lg btn-block ">Add card</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section >
    </div >
  )
}

export default Profile