import React from 'react'

const Textarea = (props) => {
  return (
    <div className="d-flex flex-column p-3">
      <label className="d-flex justify-content-start fs-3 fw-bold">
        {props.label}
      </label>
      <textarea onChange={props.changeHandler} cols="30" rows="10" className="rounded"></textarea>
    </div>
  )
}

export default Textarea