import React from "react";

import "./Form.css";
import { Row, Col, Select } from "react-materialize";

const Form: React.FC = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = document.getElementById('form')
    console.log(data);
  }
  var privacyStyles = { color: "red" };
  return (
    <div className="Form">
      <Row>
        <Col>
          <a href="/home">{"<"}Back</a>
          <div id="privacy-notice" style={privacyStyles}>
            PRIVACY ACT STATEMENT AUTHORITIES: Collection of this information is
            authorized by 22 U.S.C. 211a et seq.; 8 U.S.C. 1104; 26 U.S.C.
            6039E, 22 U.S.C. 2714a(f), Section 236 of the Admiral James W. Nance
            and Meg Donovan Foreign Relations Authorization Act, Fiscal Years
            2000 and 2001; Executive Order 11295 (August 5, 1966); and 22 C.F.R.
            parts 50 and 51. PURPOSE: This information is being collected in
            order to determine your eligibility to go into space. Your Social
            Security number is used to verify your identity. ROUTINE USES: This
            information may be disclosed to another domestic government agency,
            a private contractor, a foreign government agency, or to a private
            person or private employer in accordance with certain approved
            routine uses. These routine uses include, but are not limited to,
            law enforcement activities, employment verification, fraud
            prevention, border security, counterterrorism, litigation
            activities, and activities that meet the Secretary of State's
            responsibility to protect U.S. citizens and non-citizen nationals
            abroad. Your Social Security number will be provided to the
            Department of the Treasury and may be used in connection with debt
            collection, among other purposes authorized and generally described
            in this section. More information on the Routine Uses for the system
            can be found in System of Records Notices State-05, Overseas
            Citizens Services Records and Other Overseas Records and State-26,
            Passport Records. DISCLOSURE: Providing information on this form is
            voluntary. Be advised, however, that failure to provide the
            information requested on this form may cause delays in processing
            your application to space and/or could result in the refusal or
            denial of your application. Failure to provide your Social Security
            number may result in the denial of your application (consistent with
            22 U.S.C. 2714a(f)) and may subject you to a penalty enforced by the
            Internal Revenue Service, as described in the Federal Tax Law
            section of the instructions to this form.
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p id="bigText">Application SME-3281-2-md</p>
          <h5>
            <strong>Applicant Information</strong>
          </h5>
        </Col>
      </Row>

      <form id="form" onSubmit={handleSubmit}>
        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Middle Name</label>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Last Name</label>
            <input type="text" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Suffix</label>
            <input type="text" defaultValue="Optional" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>DOB</label>
            <input type="date" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>City of Birth</label>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Country of Birth</label>
            <input type="text" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>State or Territory of Birth</label>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>SSN</label>
            <input type="text" />
          </Col>

          <Col s={6} m={6} l={6} xl={6}>
            <Select
              s={12}
              m={12}
              l={12}
              xl={12}
              name="sex"
              id="sex-select"
              label={"Sex"}
            >
              <option value="">Please choose an option</option>
              <option value="dog">male</option>
              <option value="cat">female</option>
            </Select>
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <fieldset>
              <legend>Height:</legend>
              <Row>
                <Col s={6} m={6} l={6} xl={6}>
                  Feet: <input type="number" />
                </Col>

                <Col s={6} m={6} l={6} xl={6}>
                  Inches: <input type="number" />
                </Col>
              </Row>
            </fieldset>
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <Select
              s={12}
              m={12}
              l={12}
              xl={12}
              name="eye-color"
              id="eye-color"
              label={"Eye Color"}
            >
              <option value="">Select One</option>
              <option value="green">green</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="black">black</option>
              <option value="brown">brown</option>
            </Select>
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <Select
              s={12}
              m={12}
              l={12}
              xl={12}
              name="hair-color"
              id="hair-color"
              label={"Hair Color"}
            >
              <option value="">Please Select One</option>
              <option value="green">green</option>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="black">black</option>
              <option value="brown">brown</option>
            </Select>
          </Col>

          <Col s={6} m={6} l={6} xl={6}>
            <label>Age</label>
            <input type="number" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Employer or School</label>
            <input type="text" defaultValue="Optional" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Occupation</label>
            <input type="text" defaultValue="Optional" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Phone Number</label>
            <input type="tel" defaultValue="xxx-xxx-xxxx" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Email Address</label>
            <input type="email" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Mailing Address Line 1</label>
            <input type="text" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Mailing Address Line 2</label>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>City</label>
            <input type="text" />
          </Col>
          <Col s={6} m={6} l={6} xl={6}>
            <label>State</label>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>Country</label>
            <input type="text" />
          </Col>
        </Row>
        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <label>List Other Names</label>
            <input type="text" defaultValue="optional" />
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Citizenship Information</strong>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>
                <label>
                  Select the option that best reflects your current citizenship
                  status.
                </label>
              </Col>
            </Row>

            <p>TODO: conditional naturalization information</p>
            <Row>
              <Col>
                <p>
                  <label>
                    <input
                      type="radio"
                      name="citizenship"
                      value="citizen-born"
                    />
                    <span>
                      A. I am a U.S. citizen or national by birth in the U.S. or
                      U.S. territory/possession
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input
                      type="radio"
                      name="citizenship"
                      value="citizen-naturalized"
                    />
                    <span>
                      B. I am a U.S. citizen, but I was not born in the U.S.
                    </span>
                  </label>
                </p>
                <p>
                  <label>
                    <input type="radio" name="citizenship" value="alien" />
                    <span>C. I am not a U.S. citizen</span>
                  </label>
                </p>
              </Col>
            </Row>

            <Row>
              <Col s={6} m={6} l={6} xl={6}>
                <label>Mother's Maiden Name</label>
                <input type="text" />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Medical History</strong>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col s={6} m={6} l={6} xl={6}>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>General Health</b></h6>

              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b>Yes</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b>No</b></h6>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Good general health</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>

                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Recent weight change</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>

                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Loss of appetite</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Fatigue</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Fever/chills</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>

                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Allergy</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Drug Allergies</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Food allergies</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>

                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Hay fever</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>

                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Ears, Nose, Mouth, Throat</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Difficulty swallowing</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Earaches</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Loss of hearing/deafness</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Loss of smell</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Loss of taste</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Painful chewing</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Ringing in ears</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Sinus infection</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Sores in mouth</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>

                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Eyes</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Blind Spots</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Blurred vision</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Double vision</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Loss of vision</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Glaucoma</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Injury</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Pain</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Gastrointestinal</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Blood in stools</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Increasing constipation</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Nausea</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Painful bowel movements</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Persistent diarrhea</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Stomach or abdominal pain</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Ulcer</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Vomiting</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Genitourinary</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Blood in urine</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Irregular periods</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span># of pregnancies</span>
              </Col>
              <Col s={2} m={2} l={2} xl={2}>
                <input type="number" />
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span># of miscarriages</span>
              </Col>
              <Col s={2} m={2} l={2} xl={2}>
                <input type="number" />
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Vaginal discharge</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Kidney stones</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Prostate disease</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Testicle pain</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Painful or burning urination</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>


            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Sexual difficulty</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Sexually transmitted disease</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Urgency with urination</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Urine retention / incontinence</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Hearts and Lungs</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Pain in chest</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>High blood pressure</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>High cholesterol</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Irreglar heart beat</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Muscles/Joints/Bones</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Back pain</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Difficulty walking</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Joint pain</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Joint stiffness or swelling</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Muscle pain or tenderness</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Neck pain</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
          </Col>

          <Col s={6} m={6} l={6} xl={6} >
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Neurological</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b>Yes</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b>No</b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Balance trouble</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Blackouts/loss of consciousness</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Difficulty speaking</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Difficulty walking</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Facial drooping</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Headaches</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Injury to the brain or spine</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Might-headed or dizziness</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Memory loss</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Mental Confusion</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Migraines</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Mini stroke</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Neuropathy</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Numbness or tingling</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Paralysis</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Stroke</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Tremors</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Weakness</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>



            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Psychiatric</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Depression</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Anxiety</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Eating disorder</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Pulmonary</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Asthma</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Blood in cough</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Cancer</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Chronic or frequent cough</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Emphysema</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Pneumonia</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Shortness of breath</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Skin</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Rash or itching</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Sun sensitivity</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Hair loss</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Color changes</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <Row>
                  <Col>
                    <span>Other:</span>
                  </Col>
                  <Col>
                    <input type="text" />
                  </Col>
                </Row>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <h6><b>Sleep</b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <h6><b></b></h6>
              </Col>
            </Row>

            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Snoring</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Sleepwalking</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Nightmares</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Do you sleep well?</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Do you feel rested when you wake?</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s={10} m={10} l={10} xl={10}>
                <span>Do you fall asleep during the day?</span>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
              <Col s={1} m={1} l={1} xl={1}>
                <div>
                  <label>
                    <input type="checkbox" className="filled-in" />
                    <span></span>
                  </label>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col>

                <p className={"bold"}>Do you suffer from Chronic Obstructive Pulmonary Disease (COPD), Strokes, Deep Vein Thrombosis (DVT)?</p>
                <label>
                  <input
                    type="radio"
                    name="copd-question"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="copd-question"
                    value="No"
                  />
                  <span>No </span>
                </label>

                <p className={"bold"}>Do you have a fear of flying or experience significant anxiety or depression while flying?</p>
                <label>
                  <input
                    type="radio"
                    name="anxiety-question"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="anxiety-question"
                    value="No"
                  />
                  <span>No </span>
                </label>
                <p className={"bold"}>Do you have a chronic depression or anxiety</p>
                <label>
                  <input
                    type="radio"
                    name="depression-question"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="depression-question"
                    value="No"
                  />
                  <span>No </span>
                </label>
                <p className={"bold"}>Are you planning on becoming pregnant in the next 5 years?</p>
                <label>
                  <input
                    type="radio"
                    name="pregnant-question"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="pregnant-question"
                    value="No"
                  />
                  <span>No </span>
                </label>
                <p className={"bold"}>Suffer from a physical disability that prevents you from walking?</p>
                <label>
                  <input
                    type="radio"
                    name="walking-question"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="walking-question"
                    value="No"
                  />
                  <span>No </span>
                </label>
                <p className={"bold"}>How often do you drink (number of times per week)?</p>
                <input
                  type="number"
                  name="drinking-question"
                />
                <p className={"bold"}>How often do you smoke (number of times per week)?</p>
                <input
                  type="number"
                  name="drinking-question"
                />
                <p className={"bold"}>Do you use controlled substrances?</p>
                <label>
                  <input
                    type="radio"
                    name="walking-question"
                    value="Yes"
                  />
                  <span>Yes</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="walking-question"
                    value="No"
                  />
                  <span>No </span>
                </label>
              </Col>
            </Row>

            <Row>
              <Col s={6} m={6} l={6} xl={6}>
                <label>Please list your previous surgeries with approximate dates</label>
                <textarea name="previous-surgeries" className="materialize-textarea" />
              </Col>
              <Col s={6} m={6} l={6} xl={6}>
                <label>Please list any previous injuries you've had</label>
                <textarea name="previous-injuries" className="materialize-textarea" />
              </Col>
            </Row>
            <Row>
              <Col >
                <label>Please list your family medical history for your father, mother, siblings, and children.</label>
                <textarea name="previous-surgeries" className="materialize-textarea" />
              </Col>
            </Row>
          </Col>
        </Row>


        <Row>
          <Col>
            <h5>
              <strong>Criminal & Foreign Activity</strong>
            </h5>
            <p className={"bold"}>Have you EVER been issued a passport (or identity card for travel) by a country other than the U.S.?</p>
            <label>
              <input
                type="radio"
                name="passport-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="passport-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you received a written warning, been officially reprimanded, suspended, or disciplined for misconduct in the workplace, such as a violation of a security policy?</p>
            <label>
              <input
                type="radio"
                name="reprimand-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="reprimand-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you been subject to court martial or other disciplinary procedure under the Uniform Code of Military Justice (UCMJ), such as Article 15, Captain's Mast, Article 135 Court of Inquiry, etc.? (If no prior military service, answer "No".)</p>
            <label>
              <input
                type="radio"
                name="court-martial-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="court-martial-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER served as a civilian or military member in a foreign country's military, intelligence, diplomatic, security forces, militia, other defense force, or government agency?</p>
            <label>
              <input
                type="radio"
                name="foreign-service-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="foreign-service-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER been convicted of an offense involving domestic violence or crime of violence (such as battery or assult) against your child, dependent, cohabitant, spouse, or legally recognized civil union/domestic partner, former spouse or former legally recognized union/domestic partner, or someone with whome you share a child in common?</p>
            <label>
              <input
                type="radio"
                name="violence-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="violence-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Is there currently a domestic violence protective order or restraining order issued against you?</p>
            <label>
              <input
                type="radio"
                name="restraining-order-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="restraining-order-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you illegally used any drugs or controlled substances? Use of a drug or controlled substance includes injecting, snorting, inhaling, swallowing, experimenting with or otherwise consuming any drug or controlled substrances.</p>
            <label>
              <input
                type="radio"
                name="drugs-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="drugs-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you been involed in the illegal purchase, manufacture, cultivation, trafficking, production, transfer, shipping, receiving, handling, or sale of any drug or controlled substance?</p>
            <label>
              <input
                type="radio"
                name="selling-drugs-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="selling-drugs-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you intentionally engaged in the misuse of prescription drugs, regardless of whether or not the drugs were prescribed for you or someone else?</p>
            <label>
              <input
                type="radio"
                name="prescription-drugs-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="prescription-drugs-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you been ordered, advised, or asked to seek counseling or treatment as a result of your illegal use of drugs or controlled substances?</p>
            <label>
              <input
                type="radio"
                name="counseling-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="counseling-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you voluntarily sought counseling or treatment as a result of your use of a drug or controlled substance?</p>
            <label>
              <input
                type="radio"
                name="counseling-drugs-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="counseling-drugs-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you filed a petition under any chapter of the bankruptcy code?</p>
            <label>
              <input
                type="radio"
                name="bankrupt-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="bankrupt-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you failed to meet financial obligations due to gambling?</p>
            <label>
              <input
                type="radio"
                name="bankrupt-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="bankrupt-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you failed to file or pay Federal, state, or other taxes when required by law or ordinance?</p>
            <label>
              <input
                type="radio"
                name="bankrupt-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="bankrupt-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you been over 120 days delingquent on any debt? (Include financial obligations for which you were the sole debtor, as well as those for which you were a cosigner or guarantor.)</p>
            <label>
              <input
                type="radio"
                name="delinquent-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="deliquent-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, has your use of alcohol had a negative impact on your work performance, your professional relationships, or resulting in intervention by law enforcement/public safety personnel?</p>
            <label>
              <input
                type="radio"
                name="alcohol-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="alcohol-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>In the last seven (7) years, have you illegally or without proper authorization accessed or attempted to access any information technology system?</p>
            <label>
              <input
                type="radio"
                name="hacker-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="hacker-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Are you now or have you EVER been a member of an organization dedicated to terrorism, either with an awareness of the organization's dedication to that end, or with the specific intent to further such activities?</p>
            <label>
              <input
                type="radio"
                name="terrorism-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="terrorism-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER knowlingly engaged in any acts of terrorism?</p>
            <label>
              <input
                type="radio"
                name="act-of-terrorism-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="act-of-terrorism-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER advocated any acts of terrorism or activities design to overthrow the U.S. Government by force?</p>
            <label>
              <input
                type="radio"
                name="advocated-terrorism-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="advocated-terrorism-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER been a member of an organization dedicated to the use of violence to overthrow the U.S. Government, and which engaged in activities to that end with an awareness of the organization's dedication to that end or with the specific intent to further such activities?</p>
            <label>
              <input
                type="radio"
                name="organization-terrorism-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="organization-terrorism-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER been a member of an organization that advocates or practices commission of acts of force or violence to discourage others from exercising their rights under the U.S. Constitution or any state of the United States with the specific intent to further such action?</p>
            <label>
              <input
                type="radio"
                name="domestic-terrorism-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="domestic-terrorism-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER knowingly engaged in activites design to overthrow the U.S. Government by force?</p>
            <label>
              <input
                type="radio"
                name="overthrow-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="overthrow-question"
                value="No"
              />
              <span>No </span>
            </label>
            <p className={"bold"}>Have you EVER associated with anyone involved in activities to further terrorism??</p>
            <label>
              <input
                type="radio"
                name="associated-terrorism-question"
                value="Yes"
              />
              <span>Yes</span>
            </label>
            <label>
              <input
                type="radio"
                name="associated-terrorism-question"
                value="No"
              />
              <span>No </span>
            </label>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Additional Questions</strong>
            </h5>
            <label>Tell us why you want to travel to space!</label>
            <textarea name="why-space" className="materialize-textarea" />
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Attachments</strong>
            </h5>
            <p>Pleas upload the following documents: a copy of your passport, a copy of your driver's licence, a copy of a recent physical from your doctor (must be within last 6 months), a copy of a recent full blood panel from your doctor (must be within last 6 months).</p>
            <Row>
              <Col>
                <label>Add Attachments</label>
                <div className="file-field input-field">
                  <div className="btn">
                    <span>Browse</span>
                    <input type="file" multiple />
                  </div>

                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"
                      placeholder="Upload" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Create Account</strong>
            </h5>
            <label>Password</label>
            <input type="text" />
            <label>Re-enter Password</label>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col>
            <div>
              <label>
                <input type="checkbox" className="filled-in" value="yes" />
                <span>I certify under penalty of law that statements on this form, and any attachments to it, are true, complete, and correct to the best of my knowledge and belief and are made in good faith. I understand that a knowing and willful false statement on this form can be punished by fine or imprisonment or both (See section 1001 of title 18, United States Code).</span>
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" className="filled-in" value="yes" />
                <span>Yes, I'd like to sign up for news and announcements.</span>
              </label>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <button className="btn" type="submit" name="action">Submit
            </button>
          </Col>
          <Col>
            <a href="/home">Cancel
            </a>
          </Col>
        </Row>

      </form>
    </div>
  );
};

export default Form;
