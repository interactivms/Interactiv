import React from 'react'

function Price(props) {
  return (
    <div className='col-3 p-1'>
      <div className="container h-100 br-25 border-teal px-2 py-4 ">
      <h4 className="teal text-center">{props.package}</h4>
      {props.rows.map((row, index) => (
        <div key={index} className="row mx-0">
          <div className='col-1 teal fw-bolder row-number'>
            {row.number}
          </div>
          <div className="col">
            <p className="white">
            {row.text}
            </p>
          </div>
        </div>
      ))}
      <h4 className="white text-center">{props.price}</h4>
      </div>
    </div>
  )
}

export default Price