import React, { useState} from 'react';

export default function Signup({updateResult}) {
  const dataClean = {
      fullName: "",
      email: "",
      password: "",
      gender: "",
      dob: "",
      fullAddress: {
        address: "",
        city: "",
        state: "",
        zip: ""
      },
      contact: "",
      colour: "",
      profilePic: "",
      iagree: false
  }
  const [person, setPerson] = useState(dataClean);
  
  const handleResult = (e)=>{
      e.preventDefault();
      updateResult(person);
      setPerson(dataClean);
  }


  return (
    <div className='signup-page mx-5'>
        <h2 className='text-center my-3'>Signup</h2>

        <form onSubmit={handleResult} className='form mt-5'>
            <div className="fullName-field row mb-3 mx-0">
                <div className='col-3'>
                    <label for="fullName" class="form-label">Full Name:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="text" value={person.fullName} id='fullName'
                    onChange={(e)=> setPerson({...person,fullName: e.target.value})} className='form-control' required/>
                </div>
            </div>

            <div className="email-field row mb-3 mx-0">
                <div className='col-3'>
                    <label for="email" class="form-label">Email:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="email" value={person.email} id='email'
                    onChange={(e)=> setPerson({...person,email: e.target.value})} className='form-control' required/>
                </div>
            </div>

            <div className="password-field row mb-3 mx-0">
                <div className='col-3'>
                    <label for="password" class="form-label">Password:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="password" value={person.password} id='password'
                    onChange={(e)=> setPerson({...person,password: e.target.value})} className='form-control' required/>
                </div>
            </div>

            <div className="gender-field row mx-0 mb-3">
                <div className='col-3'>
                    <lable for="gender-data">Gender:<span className='text-danger'>*</span></lable>
                </div>
                <div className='col-auto row' onChange={(e)=> setPerson({...person,gender: e.target.value})} id='gender-data'>
                    <div class="form-check col-auto">
                        <input class="form-check-input" type="radio" name="gender" id="male" value="male"/>
                        <label class="form-check-label" for="male">
                            Male
                        </label>
                    </div>
                    <div class="form-check col-auto">
                        <input class="form-check-input" type="radio" name="gender" id="female" value="female"/>
                        <label class="form-check-label" for="female">
                            Female
                        </label>
                    </div>
                </div>
            </div>

            <div className="dob-field row mx-0 mb-3">
                <div className='col-3'>
                    <lable for="dob">DOB: </lable>
                </div>
                <div className='col-auto'>
                <input type="date" name="dob" value={person.dob}
                onChange={(e)=> setPerson({...person, dob: e.target.value})}/>
                </div>
            </div>
    
            <div className="address-field row mx-0 mb-3">
                <div className='col-3'>
                    <label for="address" class="form-label">Address:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="text" value={person.fullAddress.address} id='address'
                    onChange={(e)=> setPerson({...person, fullAddress: {...person.fullAddress,address: e.target.value}})} 
                    className='form-control' required/>
                </div>
            </div>

            <div className="city-field row mx-0 mb-3">
                <div className='col-3'>
                    <label for="city" class="form-label">City:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="text" value={person.fullAddress.city} id='city'
                    onChange={(e)=> setPerson({...person,fullAddress: {...person.fullAddress, city: e.target.value}})} 
                    className='form-control' required/>
                </div>
            </div>
            
            <div className="state-field row mx-0 mb-3">
                <div className='col-3'>
                    <lable for="state">State:</lable>
                </div>
                <div className='col-auto'>
                    <select id="state" onChange={(e)=> setPerson({...person,fullAddress:{...person.fullAddress,state: e.target.value}})} 
                    className='form-select mb-3'>
                        <option hidden>--select--</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="New Delhi">New Delhi</option>
                    </select>
                </div>
            </div>

            <div className="zip-field row mx-0 mb-3">
                <div className='col-3'>
                    <label for="zip" class="form-label">Zip:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="text" value={person.zip} id='zip'
                    onChange={(e)=> setPerson({...person,fullAddress:{...person.fullAddress,zip: e.target.value}})} 
                    className='form-control' required/>
                </div>
            </div>

            <div className="contact-field row mx-0 mb-3">
                <div className='col-3'>
                    <label for="contact" class="form-label">Contact:<span className='text-danger'>*</span></label>
                </div>
                <div className='col-auto'>
                    <input type="tel" value={person.contact} id='contact'
                    onChange={(e)=> setPerson({...person,contact: e.target.value})} className='form-control' required/>
                </div>
            </div>

            <div className="colour-field row mx-0 mb-3">
                <div className='col-3'>
                    <lable for="colour" class="form-label">Colour: </lable>
                </div>
                <div className='col-auto'>
                    <input type="color" class="form-control form-control-color" 
                    id="colour" value={person.colour} title="Choose your color"
                    onChange={(e)=> setPerson({...person, colour: e.target.value})}/>
                </div>
            </div>

            <div className="profilePic-field row mx-0 mb-3">
                <div className='col-3'>
                    <lable for="profilePic" className="form-label">Image: </lable>
                </div>
                <div className='col-3'>
                    <input type="file" className="form-control" accept=".jpg, .png"
                    id="profilePic" value={person.profilePic} title="Choose profile pic"
                    onChange={(e)=> setPerson({...person, profilePic: e.target.value})}/>
                </div>
                <div className='col-4'>
                    <img src={person.profilePic} alt='avatar' />
                </div>
            </div>

            <div className="agree-field form-check mb-3">
                <input className="form-check-input" type="checkbox" value={!person.iagree} id="iagree"
                onClick={(e)=> setPerson({...person, iagree: e.target.value})} />
                <label className="form-check-label" for="iagree">
                    I agree to terms & condition. <span className='text-danger'>*</span>
                </label>
            </div>
            
            <div className="d-flex justify-content-center mx-0 mb-3">
                <button type='submit' className='btn btn-success me-3 '>Signup</button>
                <button type="reset" className="btn btn-danger ">Cancel</button>
            </div>
            
            
            <div className='border px-3 py-4'>
            Full Name: {person.fullName}<br/>
            Email: {person.email}<br/>
            Password: {person.password}<br/>
            Gender: {person.gender}<br/>
            DOB: {person.dob}<br/>
            Address: {person.fullAddress.address}<br/>
            City: {person.fullAddress.city}<br/>
            State: {person.fullAddress.state}<br/>
            ZIP: {person.fullAddress.zip}<br/>
            Contact: {person.contact}<br/>
            Colour: {person.colour}<br/>
            Image: {person.profilePic}<br/>
            Agree: {person.iagree}
            </div>            
        </form>
    </div>
  )
}
