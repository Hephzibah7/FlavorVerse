import React from "react";
import "./ChefForm.scss";

export default function ChefForm() {
  return (
    <div className="form-container">
      <form className="">
        <h1 className="form-header">
          <span className="header">Unlock the Flavorful World of Cooking:</span>{" "}
          CHEF REGISTRATION FORM
        </h1>
        <div className="form">
          <div className="chef-category">1. Personal Information</div>
          <div className="form-item form-item1">
            <label for="firstname">First Name</label>
            <input id="firstname" type="text" name="firstname" />
          </div>

          <div className="form-item form-item1">
            <label for="lastname">Last Name</label>
            <input for="lastname" type="text" name="lastname" />
          </div>

          <div className="form-item form-item2">
            <label for="phonenumber">Phone Number</label>
            <input id="phonenumber" type="tel" name="phonenumber" />
          </div>

          <div className="form-item form-item2">
            <label for="email">Email</label>
            <input id="email" type="email" name="email" />
          </div>

          <div className="form-item form-item3">
            <label for="gender">Gender</label>
            <select name="sex">
              <option value="week-1">Male</option>
              <option value="week-2">Female</option>
              <option value="week-3">Non-binary</option>
              <option value="month-1">Others</option>
              {/* <option value="month-3">3 months</option> */}
            </select>
          </div>

          <div className="form-item form-item3">
            <label for="dob">Date Of Birth</label>
            <input type="date" />
          </div>
          <div className="form-item form-item3">
            <label for="profile-pic">Upload Your Profile Picture</label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
            ></input>
          </div>

          <div className="chef-category">2. Professional Information</div>
          <div className="form-item form-item1">
            <label for="experience">What is your Cooking Experience? (in years)</label>
            <input id="experience" type="number" min={0} max={30} />
          </div>

          <div className="form-item form-item1">
            <label for="training">Have you had any Culinary School or Training?</label>
            <select name="" id="training">
				<option value="">Yes</option>
				<option value="">No</option>
			</select>
          </div>

          <div className="form-item form-item2">
            <label for="specialization">Your Specialization? (e.g., Italian cuisine, baking, vegetarian, etc.)</label>
            <input id="specialization" type="text" />
          </div>

          <div className="form-item form-item2">
            <label for="email">Certifications or Awards (if any)</label>
            <input id="email" type="email" name="email" />
          </div>

          <div className="chef-category">3. Location</div>
          <div className="form-item form-item1">
            <label for="address">What is your Current Address?</label>
            <input id="experience" type="text" />
          </div>

          <div className="form-item form-item1">
            <label for="city">What is your City?</label>
            <input type="text"  />
          </div>

          <div className="form-item form-item2">
            <label for="state">Your State/Province? </label>
            <input id="specialization" type="text" />
          </div>

          <div className="form-item form-item2">
            <label for="pincode">Your Postal Code?</label>
            <input id="" type="number" />
          </div>

          <div className="form-item form-item2">
            <label for="country">Your Country?</label>
            <input id="" type="text" />
          </div>
          <div className="chef-category">4. Social Media Links</div>
          <div className="form-item form-item1">
            <label for="insta">Instagram Profile Link</label>
            <input id="insta" type="text" />
          </div>

          <div className="form-item form-item1">
            <label for="meta">Facebook Profile Link</label>
            <input id="meta" type="text" />
          </div>

          <div className="form-item form-item2">
            <label for="twitter">Twitter Profile Link </label>
            <input id="twitter" type="text" />
          </div>

          

          
          {/* <div className="textarea-div form-item4">
					<label for="message">Job Description</label>
					<textarea id="message" type="text" name="message" placeholder="What would you have me do?"></textarea>
				</div> */}
        </div>
        <div className="btn-container">
          <input
            id="submit"
            className="btn btn-glow form-btn"
            type="submit"
            name="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}
