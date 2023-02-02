import React from 'react'

const Fields = ({name, email, index}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
    <div className='row justify-content-between data'>
            <h4 className='col-sm-4'>{name}</h4>
            <h4 className='col-sm-4'>{email}</h4>
            <h4 className='col-sm-4'>Remove</h4>
          </div>
          </div>
  )
}

export default Fields