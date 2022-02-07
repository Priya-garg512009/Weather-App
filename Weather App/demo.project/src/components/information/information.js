import React from 'react'

const Information = (props)=>{
   const {name,main,weather} = props.info
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12">

                    <div className="card bg-dark">
                        <div className="card-header"></div>
                        <div className="card-body">
                            <table className="table text-white">
                                <thead>
                                    <tr>
                                        <th>CITY</th>
                                        <th>TEMPATURE</th>
                                        <th>WEATHER CAST</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{name}</td>
                                        <td>{Math.round(main.temp-273.15)} &deg;C</td>
                                        <td>{weather[0].main}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Information
