import React from "react";
import "./App.css";
import { Row, Col, Select } from "react-materialize";

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
            <h5>
              <strong>Medical History</strong>
            </h5>
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
