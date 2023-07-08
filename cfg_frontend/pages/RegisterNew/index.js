import React from 'react'

export default function index() {
  return (
    <div className='h-screen'>
      <h1 id="heading"> New Student Registertion </h1>
      <p> Welcome to the Urmi Enrollment form. Fill the details carefully.</p>

      <p>
        <label for="firstName">First name</label>
        <input type="text" name="firstName" id="form" placeholder="Jane" autocomplete="on" required autofocus />
      </p>
      <p>
        <label for="lastName">Last name</label>
        <input type="text" name="lastName" id="form" placeholder="Austen" autocomplete="on" required />
      </p>

      <p>
        <label for="Age">Age</label>
        <input type="number" name="Age" id="form"
          min="3" step="1" value="12" />
      </p>

      <p>
        <label for="Disability">Disability</label>
        <input type="text" name="Disability" id="form" placeholder="Disability" autocomplete="on" required />
      </p>
      <p>
        <label for="Phone">Phone</label>
        <input type="tel" name="Phone" id="Phone" placeholder="9999999999"
          pattern="[0-9]{3}[0-9]{3}[0-9]{4}" autocomplete="on" required />
      </p >

      <p>
        <label for="location">Address</label>
        <select name="address" id="address" placeholder="Andheri">

          <optgroup label="In Mumbai">
            <option value="Andheri">Andheri</option>
            <option value="Dharavi">Dharavi</option>
            <option value="Kalyan">Kalyan</option>
            <option value="Juhu">Juhu</option>
          </optgroup>

          <optgroup label="Outside Mumbai">
            <option value="Khandala">Khandala</option>
            <option value="Mahabaleshwar">Mahabaleshwar</option>
          </optgroup>

        </select>


      </p>

      <p > Thank You! </p>
     </div>
  )
}