import React from 'react'

export default function ShowData({result}) {
  return (
    <div className='show-data mx-4 px-3'>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>DOB</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Image</th>
                    <th>Colour</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item,index) => {
                    return <tr key={index}>
                                <td>{item.fullName}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.dob}</td>
                                <td>{item.contact}</td>
                                <td>{item.fullAddress.address},{item.fullAddress.city},{item.fullAddress.state}</td>
                                <td>{item.profilePic}</td>
                                <td>{item.colour}</td>
                            </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}
