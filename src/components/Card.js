import React from 'react'

export const Card = () => {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: '18rem', maxHeight: '360px' }}
        >
          <img
            src="https://media.istockphoto.com/id/629423010/photo/chilli-paneer-tikka-or-paneer-kabab.jpg?s=1024x1024&w=is&k=20&c=0DUhYqlFJYETQk7b0X04NpL9MHXSjwiacfvN8qrJAqI="
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some important text.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  )
                })}
              </select>
              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}