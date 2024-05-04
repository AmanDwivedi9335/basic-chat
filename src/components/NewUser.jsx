import React from 'react'

const NewUser = ({newUser , handleChange , logNewUser}) => {
    return ( 
        <div className="card w-100 text-center border-white">
          <div className="row">
            <div className="col-12">
              <h5>Enter Username</h5>
            </div>
            <div className="d-flex justify-content-center py-1">
              <div className="col-4">
                <input type="text" 
                  name="username" 
                  value={newUser} 
                  className="form-control mb-3" 
                  placeholder="Username" 
                  autoComplete="off" 
                  onChange={(e)=>handleChange(e)}
                  onKeyDown={(e)=> (e.code === "Enter" ? logNewUser() : null) }
                />
              <div className="btn btn-success w-100" onClick={()=>logNewUser()}>Join!</div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default NewUser;