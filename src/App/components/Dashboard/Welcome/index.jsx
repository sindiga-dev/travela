import React, {useState}from 'react'
import { NavLink } from 'react-router-dom'
import "../../css/dashboard.css"


function Welcome() {

const [user, setUser] = useState("");

return (
        <div className="App">

        <div className="trips">
            Travela 
        </div>

        <div className="loader"></div>

        <div className="welcome">
                <h2 className='text-2xl'>Welcome, <span>{user.name}</span></h2>
        </div>


        <div className="dashboard">
        <div className="container"> 
		<div className="card">
			<div className="box-dashboard">
				<div className="percent">
					<svg>
						<circle cx="70" cy="70" r="70"> </circle>
						<circle cx="70" cy="70" r="70">  </circle>
					</svg>
					<div class="number">
						<h2>97<span>%</span></h2> 
					</div>
				</div>
				<h2 class="text">Security</h2> 
            </div>
        </div>

		<div className="card">
			<div className="box-dashboard">
				<div className="percent">
					<svg>
						<circle cx="70" cy="70" r="70"> </circle>
						<circle cx="70" cy="70" r="70">  </circle>
					</svg>
					<div class="number">
						<h2> 97<span>%</span></h2> 
					</div>
				</div>
				<h2 class="text">Comfort</h2> 
            </div>
        </div>

		<div className="card">
			<div className="box-dashboard">
				<div className="percent">
					<svg>
						<circle cx="70" cy="70" r="70"> </circle>
						<circle cx="70" cy="70" r="70">  </circle>
					</svg>
					<div class="number">
						<h2> 90<span>%</span></h2> 
					</div>
				</div>
				<h2 class="text">Bus condition</h2> 
            </div>
        </div>
	</div>
    </div>

    <div className="view_booking">
        Ready to enjoy our trips?
    <NavLink to="/dashboard/bookings">View Booking</NavLink>
    </div>
    </div>
)
}




  



export default Welcome