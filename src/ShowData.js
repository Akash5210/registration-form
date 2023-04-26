import React from 'react'

export default function ShowData({result}) {
  return (
    <div className='show-data'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>State</th>
                    <th>D.O.B</th>
                    <th>Colour</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item,index) => {
                    return <tr key={index}>
                                <td>{item.fullName}</td>
                                <td>{item.gender}</td>
                                <td>{item.state}</td>
                                <td>{item.dob}</td>
                                <td>{item.colour}</td>
                            </tr>
                })}
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
