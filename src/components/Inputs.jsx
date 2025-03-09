import React from 'react'

const Inputs = (props) => {
  console.log(props)
  return (
    <div className="w-full p-3">
      <div className="d-flex flex-column mb-2">
          <label className="d-flex justify-content-start fw-bolder fs-3">
            {props.label}
          </label>
          <input name={props.name} onChange={props.changeHandler} type={props.type} className="p-2 rounded" />
        </div>
    </div>
  )
}

export default Inputs