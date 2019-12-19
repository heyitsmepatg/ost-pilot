import React from "react";
import "./App.css";
import { Row, Col, Select, RadioGroup } from "react-materialize";

const App: React.FC = () => {
  var privacyStyles = { color: "red" };
  return (
    <div className="App">
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

      <form>
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
          <Col s={6} m={6} l={6} xl={6} className={"bordered"}>
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

          <Col s={6} m={6} l={6} xl={6} className="bordered">
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
            <h5>
              <strong>Criminal & Foreign Activity</strong>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Additional Questions</strong>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Attachments</strong>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <h5>
              <strong>Create Account</strong>
            </h5>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default App;
