import axios from 'axios'
import React, { useCallback } from 'react'
import { API } from '../../config'
import Nav from '../layout/Nav'

const Pricing = () => {
  // const auth_data = JSON.parse(localStorage.getItem('jwt'))
  // const userId = auth_data.user._id

  const handleCheckout = useCallback((product_id) => async (e) => {
    e.preventDefault();
    try {
      const product_data = { product_id }
      const { data } = await axios.post(`${API}/checkout-session`, product_data)
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      throw error
    }
  }, [])

  return (
    <div className=''>
      <Nav />
      <main className='d-flex justify-content-center align-items-center'  >
        <div className="container p-5 mx-auto mt-5">
          <div className="row mt-5">
            <div className="col-lg-6 col-xl-4 col-md-12 mb-4">
              <div className="card  card_package h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">Basic</h5>
                    <small>Single user</small>
                    <br /><br />
                    <span className="h2">NPR500</span>/month
                    <br />
                    <span className="h2">NPR5000</span>/year
                    <br /><br />
                  </div>
                  <p className="card-text">Some quick example text to build on the card  card_package title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Cras justo odio</li>
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Dapibus ac facilisis in</li>
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Vestibulum at eros</li>
                </ul>
                <div className="card-body text-center">
                  <button
                    className="btn btn-outline-primary btn-lg"
                    onClick={handleCheckout(1)}
                  >
                    Buy Basic
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-12 mb-4">
              <div className="card  card_package h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">Standard</h5>
                    <small>Three users</small>
                    <br /><br />
                    <span className="h2">NPR1200</span>/month
                    <br />
                    <span className="h2">NPR10,000</span>/year
                    <br /><br />
                  </div>
                  <p className="card-text">Some quick example text to build on the card  card_package title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Cras justo odio</li>
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Dapibus ac facilisis in</li>
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Vestibulum at eros</li>
                </ul>
                <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg"
                    onClick={handleCheckout(2)}
                  >Buy Standard</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 col-md-12 mb-4">
              <div className="card  card_package h-100 shadow-lg">
                <div className="card-body">
                  <div className="text-center p-3">
                    <h5 className="card-title">Premium</h5>
                    <small>Six users</small>
                    <br /><br />
                    <span className="h2">NPR2500</span>/month
                    <br />
                    <span className="h2">NPR20,000</span>/year
                    <br /><br />

                  </div>
                  <p className="card-text">Some quick example text to build on the card  card_package title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Cras justo odio</li>
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Dapibus ac facilisis in</li>
                  <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                  </svg> Vestibulum at eros</li>
                </ul>
                <div className="card-body text-center">
                  <button className="btn btn-outline-primary btn-lg"
                    onClick={handleCheckout(3)}>
                    
                    Buy Premium</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="contain">

      </div>
    </div>
  )
}

export default Pricing