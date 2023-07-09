import React from 'react'

export default function index() {
  return (
    <div className='h-screen'>
      <form>
        <fieldset className="heading">
          <h1 id="heading"> New Student Enrollment form </h1>

          <div> Welcome to the Enrollment form. Fill the details carefully!</div>
        </fieldset>
        <fieldset className="personalinfo">
          <legend>Personal information</legend>
          <div>
            <label for="firstName" className="form-input">First name:</label>
            <input type="text" name="firstName" id="form" placeholder="Jane" autocomplete="on" required autofocus />
          </div>
          <div>
            <label for="lastName" className="form-input">Last name:</label>
            <input type="text" name="lastName" id="form" placeholder="Austen" autocomplete="on" required />
          </div>

          <div>
            <label for="ParentsName" className="form-input">Parent's Name:</label>
            <input type="text" name="ParentsName" id="form" placeholder="Jade Austen" autocomplete="on" required />
          </div>

          <div>
            <label for="ParentsOccupation" className="form-input">Parent's Occupation:</label>
            <input type="text" name="ParentsOccupation" id="form" placeholder="Fishermen" autocomplete="on" required />
          </div>

          <div>
            <label for="age" className="form-input">Age:</label>
            <input type="number" name="age" id="form" min="0" max="18" step="1" value="12" />
          </div>
          <div>

            <label for="gender" className="form-input">Gender:</label>
            <select name="gender" id="form">
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Prefernotsay">Prefer not say</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label for="Phone" className="form-input">Phone:</label>
            <input type="tel" name="Phone" id="Phone" placeholder="9999999999"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}" autocomplete="on" required />
          </div>

          <div>
            <label for="location" className="form-input">Area:</label>
            <select name="area" id="area" placeholder="Andheri">

              <optgroup label="In Mumbai" className="form-input">
                <option value="Andheri">Andheri</option>
                <option value="Dharavi">Dharavi</option>
                <option value="Kalyan">Kalyan</option>
                <option value="Juhu">Juhu</option>
              </optgroup>

              <optgroup label="Outside Mumbai" className="form-input">
                <option value="Khandala">Khandala</option>
                <option value="Mahabaleshwar">Mahabaleshwar</option>
              </optgroup>

            </select>
          </div>

          <div>
            <label for="Aadhar" className="form-input">Aadhar number:</label>
            <input type="tel" name="Aadhar" id="form-input" placeholder="121212121212" pattern="[0-9]{4}[0-9]{4}[0-9]{4}" autocomplete="on" required />
          </div>

          <div>
            <label for="dob" className="form-input">Date of Birth:</label>
            <input type="date" name="dob" id="form-input" />

          </div>

          <div>
            <label for="doa" className="form-input">Date of Admission:</label>
            <input type="date" name="doa" id="form-input" />

          </div>
          <div>
            <label for="UDIDno" className="form-input">UDID number:</label>
            <input type="tel" name="UDIDno" id="form-input" pattern="[0-9]{2}[0-9]{2}[0-9]{2}" autocomplete="on" required />
          </div>
        </fieldset>
        <fieldset className="urmi credentials">
          <div>
            <legend className="form-input">School credentials</legend>
            <label for="age" className="form-input">Age of the child while refering:</label>
            <input type="number" name="AgeOfTheChildWhileRefering" id="form" min="0" max="18" step="1" value="12" />
          </div>
          <div>
            <label for="Standardthechildwasenrolledatnonspecialschool" className="form-input" >Standard the child was enrolled at non special school:</label>
            <input type="number" name="Standardthechildwasenrolledatnonspecialschool" id="form" min="0" max="12" step="1" value="6" />
          </div>

          <div>
            <div>
              <label for="IQ" className="form-input">IQ:</label>
              <input type="number" name="IQ" id="form" min="0" step="1" value="70" />
            </div>
            <div>
              <label for="Level" className="form-input">Level to be enrolled in: </label>
              <input type="number" min="1" max="10" name="forminput" id="form" />
            </div>
          </div>
        </fieldset>
        <fieldset className="symptoms">
          <legend>What are the symptoms?</legend>
          <div className="form-input">Speech:</div>
          <div>
            <input type="checkbox" name="speech" id="form" value="Nospeech" />
            <label for="Nospeech" className="form-input">No speech</label>
          </div>
          <div>
            <input type="checkbox" name="speech" id="form" value="Onlysounds" />
            <label for="Onlysounds" className="form-input">Onlysounds</label>
          </div>
          <div>
            <input type="checkbox" name="speech" id="form" value="Babbel" />
            <label for="Babbel" className="form-input">Babbel</label>
          </div>
          <div>
            <input type="checkbox" name="speech" id="form" value="Stammering" />
            <label for="Stammering" className="form-input">Stammering</label>
          </div>
          <div>
            <input type="checkbox" name="speech" id="form" value="Clearspeech" />
            <label for="Clearspeech" className="form-input">Clearspeech</label>
          </div>

          <div className="form-input">Behavior:</div>
          <div>
            <input type="checkbox" name="behavior" id="form" value="Reclusive" />
            <label for="Reclusive" className="form-input">Reclusive</label>
          </div>
          <div>
            <input type="checkbox" name="behavior" id="form" value="Calm" />
            <label for="Calm" className="form-input">Calm</label>
          </div>
          <div>
            <input type="checkbox" name="behavior" id="form" value="Active" />
            <label for="Active" className="form-input">Active</label>
          </div>
          <div>
            <input type="checkbox" name="behavior" id="form" value="Hyperactive" />
            <label for="Hyperactive" className="form-input">Hyperactive  </label>
          </div>
        </fieldset>
        <fieldset>
          <legend className="form-item">Condition</legend>
          <div>
            <label for="Disability" className="form-input">Disability:</label>
            <select name="Disability" id="form">
              <option value="Dyslexia">Dyslexia</option>
              <option value="ADHD">ADHD</option>
              <option value="DownSyndrome">Down Syndrome</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </fieldset>

        <div>
          <label for="severity" className="form-input">Severity:</label>
          <input type="number" name="severity" id="form" min="0" max="10" step="1" value="5" />
          <fieldset>
            <legend className="Guidelines">Guideline:</legend>
            <div>The severity value ranges from 0 to 10, where 0 refeers to benign and 10 refers to highly severe.</div>
          </fieldset>
        </div>

        <fieldset>
          <legend>Additional note:</legend>
          <textarea name="message" id="message" cols="40" rows="10" placeholder="Type the extra info here."></textarea>
        </fieldset>

        <button type="submit" className="submit">Submit</button>
        <button type="reset" className="submit">Reset</button>
      </form >
    </div >
  )
};