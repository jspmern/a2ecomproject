import React, { useContext, useEffect } from 'react'
import { productContext } from '../context/Product'

function Card() {
    let { loading, data,error, fetchData } = useContext(productContext)
    useEffect(() => {
        fetchData()
    }, [])
    console.log(loading, data)
    return (
        <div className="row d-flex justify-content-evenly m-5">
            {loading && <h4>laoding......</h4>}
            {!loading && error && <h1>somthing wrong...</h1>}
            {data.length > 0 && data.map((item) => {
                let { brand, description, thumbnail, title, images, id } = item
                return (
                    <>
                        <div className="col-md-4" key={id}>
                            <div className="card">
                                <div className="card-header">
                                    <h4>{title}</h4>
                                    <hr/>
                                    <p>{brand}</p>
                                </div>
                                <div className="card-body">
                                      <div>
                                        <img src={thumbnail} alt={thumbnail+id} className='img-fluid' />
                                        <hr/>
                                        <p>{description.slice(0,20)}</p>
                                      </div>
                                </div>
                                <div className="card-footer">
                                    kfgjfklgjfdkl
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}



        </div>
    )
}

export default Card