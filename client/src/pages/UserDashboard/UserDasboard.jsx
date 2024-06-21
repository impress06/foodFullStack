import React, { useContext, useEffect, useState } from "react";
import "./userDashboard.css";
import useAxios from "../../service/useAxios";



const UserDashboard = () => {
   const {axiosWithToken}=useAxios()
  const userdata=localStorage.getItem("user")
  const user=JSON.parse(userdata)
  const id=user._id
  console.log("user stroge",user)
  const [addresses, setAddresses] = useState([]);
  const [lastaddresses, setLastAddresses] = useState({});
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [newAddress, setNewAddress] = useState({
    name: "",
    country: "",
    state: "",
    city: "",
    zipCode: "",
    tel: "",
  });

  

  const addressArray = user ? Object.values(user.address) : [];

  useEffect(() => {
    if (user) {
      console.log("User data updated:", user);
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    
    
    setLastAddresses({...user.address,[newAddress.name]:{...newAddress}})
  };
console.log("sonadres",lastaddresses)
  const handleOptionChange = (e) => {
    const index = e.target.value;
    setSelectedIndex(index);
    if (index >= 0) {
      const selectedAddress = addressArray[index];
      setNewAddress({
        name: Object.keys(user.address)[index],
        country: selectedAddress.country,
        state: selectedAddress.state,
        city: selectedAddress.city,
        zipCode: selectedAddress.zipCode,
        tel: selectedAddress.tel,
      });
    } else {
      setNewAddress({
        name: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
        tel: "",
      });
    }
  };

  const handleAddAddress = async() => {
    try {

      axiosWithToken.put(`http://127.0.0.1:8000/user/${id}`,{address:lastaddresses})
      
    } catch (error) {
      console.log("error",error)
      
    }
    setNewAddress({
      name: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      tel: "",
    })
    
  };

  return (
    <div className="section">
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#account-general"
                >
                  General
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-change-password"
                >
                  Change password
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-info"
                >
                  Info
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-social-links"
                >
                  Social links
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-addresses"
                >
                  Adreslerim
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#account-notifications"
                >
                  Notifications
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="account-general">
                  {/* General account settings */}
                  <div className="card-body media align-items-center">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                      className="d-block ui-w-80"
                    />
                    <div className="media-body ml-4">
                      <label className="btn btn-outline-primary">
                        Upload new photo
                        <input
                          type="file"
                          className="account-settings-fileinput"
                        />
                      </label>{" "}
                      &nbsp;
                      <button
                        type="button"
                        className="btn btn-default md-btn-flat"
                      >
                        Reset
                      </button>
                      <div className="text-light small mt-1">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </div>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        defaultValue="nmaxwell"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Nelle Maxwell"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input
                        type="text"
                        className="form-control mb-1"
                        defaultValue="nmaxwell@mail.com"
                      />
                      <div className="alert alert-warning mt-3">
                        Your email is not confirmed. Please check your inbox.
                        <br />
                        <a href="#">Resend confirmation</a>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Company Ltd."
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={handleAddAddress}
                    >
                      save changes
                    </button>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-change-password">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Repeat new password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={handleAddAddress}
                    >
                      Change Password
                    </button>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-info">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Bio</label>
                      <textarea
                        className="form-control"
                        rows={5}
                        defaultValue={
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus."
                        }
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="May 3, 1995"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select className="custom-select">
                        <option>USA</option>
                        <option selected>Canada</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Contacts</h6>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="+0 (123) 456 7891"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Website</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={handleAddAddress}
                    >
                      Save changes
                    </button>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-social-links">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Twitter</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="https://twitter.com/user"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Facebook</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="https://www.facebook.com/user"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Google+</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">LinkedIn</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Instagram</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="https://www.instagram.com/user"
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={handleAddAddress}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
            
                <div className="tab-pane fade" id="account-notifications">
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Activity</h6>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          defaultChecked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes" />
                          <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                          Email me when someone comments on my article
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          defaultChecked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes" />
                          <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                          Email me when someone answers on my forum thread
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes" />
                          <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                          Email me when someone follows me
                        </span>
                      </label>
                    </div>
                   
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2">
                    <h6 className="mb-4">Application</h6>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          defaultChecked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes" />
                          <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                          News and announcements
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input type="checkbox" className="switcher-input" />
                        <span className="switcher-indicator">
                          <span className="switcher-yes" />
                          <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                          Weekly product updates
                        </span>
                      </label>
                    </div>
                    <div className="form-group">
                      <label className="switcher">
                        <input
                          type="checkbox"
                          className="switcher-input"
                          defaultChecked
                        />
                        <span className="switcher-indicator">
                          <span className="switcher-yes" />
                          <span className="switcher-no" />
                        </span>
                        <span className="switcher-label">
                          Weekly blog digest
                        </span>
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={handleAddAddress}
                    >
                      save changes
                    </button>
                  </div>
                </div>
                <div className="tab-pane fade" id="account-addresses">
                  <div className="card-body">
                    <h5 className="mb-3">Adreslerim</h5>
                    <select onChange={handleOptionChange} name="address" id="address-select">
                      <option value="-1">Not Selected</option>
                      {user?.address &&
                        Object.keys(user.address).map((item, index) => (
                          <option key={index} value={index}>
                            {item}
                          </option>
                        ))}
                    </select>
                    <div className="form-group">
                      <label className="form-label">Address Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={newAddress.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={newAddress.country}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">State</label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={newAddress.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={newAddress.city}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Zip Code</label>
                      <input
                        type="text"
                        className="form-control"
                        name="zipCode"
                        value={newAddress.zipCode}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input
                        type="text"
                        className="form-control"
                        name="tel"
                        value={newAddress.tel}
                        onChange={handleInputChange}
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-outline-info"
                      onClick={handleAddAddress}
                    >
                      Add Address
                    </button>
                    <hr />
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default UserDashboard;
