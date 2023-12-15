import React from 'react'

function Filter() {
    return (
        <div className="row" style={{width:"100%",height:"35px"}}>
            <div className="col-md-5 d-flex justify-content-between">
                <input type='text' placeholder='Search' />
                <select>
                    <option>A_Z</option>
                    <option disabled></option>
                    <option>Z_A</option>
                    <option disabled></option>
                    <option>1_10</option>
                    <option disabled></option>
                    <option>10_1</option>
                </select>
            </div>

        </div>
    )
}

export default Filter