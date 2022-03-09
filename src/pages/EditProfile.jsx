import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "./shared/Layout";

// const MainProfile = ({ details, programs, graduationYears, err1, success }) => {
//   let showAlert1 = false;
//   let successAlert = false;
//   err1.length > 0 ? (showAlert1 = true) : (showAlert1 = false);
//   success.length > 0 ? (successAlert = true) : (successAlert = false);

//   const {
//     firstname,
//     lastname,
//     email,
//     matricNumber,
//     program,
//     graduationYear,
//     _id,
//   } = details;

//   return (
//     <Container as="main">
//       <Row as="section">
//         <h1>{`${firstname} ${lastname}`} </h1>{" "}
//         <span style={{ marginLeft: 10 + "px", marginTop: 20 + "px" }}>
//           {email}
//         </span>
//       </Row>
//       <br />

//       <Row className="bg-light" as="section">
//         <Col md="4">
//           <h6>Program</h6>
//           <h6>
//             {program === "Select Option" || program === undefined
//               ? "None selected"
//               : `${program}`}
//           </h6>
//         </Col>
//         <Col md="4">
//           <h6>Matriculation Number</h6>
//           <h6>{`${matricNumber}`}</h6>
//         </Col>
//         <Col md="4">
//           <h6>Graduation Year</h6>
//           <h6>
//             {graduationYear === "Select Option" || graduationYear === undefined
//               ? "None selected"
//               : `${graduationYear}`}
//           </h6>
//         </Col>
//       </Row>
//       <br />
//       <Row className="border-bottom" as="section">
//         <h4>Update Profile</h4>
//       </Row>
//       <br />
//       <div className="mx-auto" style={{ width: 70 + "%" }}>
//         <Form
//           id="updateForm"
//           method="POST"
//           action="/editprofile?_method=PATCH"
//           encType="multipart/form-data"
//         >
//           <br />
//           {
//             <Alert
//               className="alert alert-success"
//               variant="success"
//               show={successAlert}
//             >
//               {success.map((text) => {
//                 return (
//                   <>
//                     {text}
//                     <br />
//                   </>
//                 );
//               })}
//             </Alert>
//           }
//           <Form.Row>
//             <Form.Group as={Col} md="6">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="firstname"
//                 defaultValue={`${firstname}`}
//               />
//             </Form.Group>
//             <Form.Group as={Col} md="6">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="lastname"
//                 defaultValue={`${lastname}`}
//               />
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} controlId="formGridEmail" md="6">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 name="email"
//                 defaultValue={`${email}`}
//               />
//             </Form.Group>

//             <Form.Group as={Col} md="6">
//               <Form.Label>Program</Form.Label>
//               <Form.Control as="select" name="program">
//                 <option>Select Option</option>
//                 {programs.map((prog) => (
//                   <option key={prog} selected={prog === program ? true : false}>
//                     {prog}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col} md="6">
//               <Form.Label>Matric Number</Form.Label>
//               <Form.Control
//                 name="matricNumber"
//                 defaultValue={`${matricNumber}`}
//               />
//             </Form.Group>

//             <Form.Group as={Col} md="6">
//               <Form.Label>Graduation Year</Form.Label>
//               <Form.Control as="select" name="graduationYear">
//                 <option>Select Option</option>
//                 {graduationYears.map((year) => (
//                   <option
//                     key={year}
//                     selected={year === graduationYear ? true : false}
//                   >
//                     {year}
//                   </option>
//                 ))}
//               </Form.Control>
//             </Form.Group>
//           </Form.Row>

//           <Form.Row>
//             <Form.Group as={Col}>
//               <Form.File id="formcheck-api-regular">
//                 <Form.File.Label>Profile Picture</Form.File.Label>
//                 <Form.File.Input name="profilePicture" />
//               </Form.File>
//             </Form.Group>
//           </Form.Row>
//           <Form.Group>
//             <Form.Control
//               type="text"
//               name="id"
//               defaultValue={`${_id}`}
//               style={{ display: "none" }}
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Update Profile
//           </Button>
//         </Form>
//       </div>

//       <br />
//       <Row className="border-bottom" as="section">
//         <h4>Change Password</h4>
//       </Row>
//       <div className="mx-auto" style={{ width: 70 + "%" }}>
//         <Form
//           id="changePasswordForm"
//           method="POST"
//           action="/editprofile?_method=PUT"
//         >
//           <br />
//           {
//             <Alert
//               className="alert alert-danger"
//               variant="danger"
//               show={showAlert1}
//             >
//               {err1.map((text) => {
//                 return (
//                   <>
//                     {text}
//                     <br />
//                   </>
//                 );
//               })}
//             </Alert>
//           }

//           <Form.Row>
//             <Form.Group as={Col} md="4">
//               <Form.Label>Current Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="currentPassword"
//                 placeholder="Current Password"
//               />
//             </Form.Group>
//             <Form.Group as={Col} md="4">
//               <Form.Label>New Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="newPassword"
//                 placeholder="Your new password"
//               />
//             </Form.Group>
//             <Form.Group as={Col} md="4">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm new password"
//               />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail">
//               <Form.Control
//                 type="email"
//                 name="email"
//                 defaultValue={`${email}`}
//                 style={{ display: "none" }}
//               />
//             </Form.Group>
//             <Form.Group>
//               <Form.Control
//                 type="text"
//                 name="id"
//                 defaultValue={`${_id}`}
//                 style={{ display: "none" }}
//               />
//             </Form.Group>
//           </Form.Row>

//           <Button variant="primary" type="submit">
//             Change Password
//           </Button>
//         </Form>
//       </div>
//       <br />
//     </Container>
//   );
// };

const ProfileDetails = () => {
  const [details, setDetails] = useState({});
  const [programs, setPrograms] = useState([]);
  const [graduationYears, setGraduationYears] = useState([]);

  let navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:4000/home/programs")
      .then((res) => res.json())
      .then((res) => setPrograms(res.data))
      .catch((err) => console.log(err));

    fetch("http://localhost:4000/home/graduationyears")
      .then((res) => res.json())
      .then((res) => setGraduationYears(res.data))
      .catch((err) => console.log(err));

    fetch(`http://localhost:4000/user/profiledetails/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setDetails(res.data);
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    firstName,
    lastName,
    email,
    matricNumber,
    program,
    graduationYear,
    _id,
  } = details;

  return (
    <Container>
      <Row as="section" className="mb-4">
        <h1 className="text-primary">
          {`${firstName} ${lastName}`}
          <span className="fs-5 fst-normal ms-3"> {email} </span>
        </h1>
      </Row>
      <Row className="bg-light text-primary mb-4" as="section">
        <Col md="4">
          <h6>Program</h6>
          <h6>
            {program === "Select Option" || program === undefined
              ? "None selected"
              : `${program}`}
          </h6>
        </Col>
        <Col md="4">
          <h6>Matriculation Number</h6>
          <h6>{`${matricNumber}`}</h6>
        </Col>
        <Col md="4">
          <h6>Graduation Year</h6>
          <h6>
            {graduationYear === "Select Option" || graduationYear === undefined
              ? "None selected"
              : `${graduationYear}`}
          </h6>
        </Col>
      </Row>
      <Row className="border-bottom text-primary mb-5" as="section">
        <h4>Update Profile</h4>
      </Row>
      <div className="mx-auto mb-4" style={{ width: 70 + "%" }}>
        <Form>
          {
            // <Alert
            //   className="alert alert-success"
            //   variant="success"
            //   show={successAlert}
            // >
            //   {success.map((text) => {
            //     return (
            //       <>
            //         {text}
            //         <br />
            //       </>
            //     );
            //   })}
            // </Alert>
          }
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                defaultValue={firstName}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                defaultValue={lastName}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" md="6">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" defaultValue={email} />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Program</Form.Label>
              <Form.Select as="select" name="program">
                <option>Select Option</option>
                {programs.map((prog) => (
                  <option key={prog} selected={prog === program ? true : false}>
                    {prog}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label>Matric Number</Form.Label>
              <Form.Control name="matricNumber" defaultValue={matricNumber} />
            </Form.Group>

            <Form.Group as={Col} md="6">
              <Form.Label>Graduation Year</Form.Label>
              <Form.Select as="select" name="graduationYear">
                <option>Select Option</option>
                {graduationYears.map((year) => (
                  <option
                    key={year}
                    selected={year === graduationYear ? true : false}
                  >
                    {year}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          {/* <Row>
            <Form.Group>
              <Form.File id="formcheck-api-regular">
                <Form.File.Label>Profile Picture</Form.File.Label>
                <Form.File.Input name="profilePicture" />
              </Form.File>
            </Form.Group>
          </Row> */}

          <Form.Group>
            <Form.Control
              type="text"
              name="id"
              defaultValue={`${_id}`}
              style={{ display: "none" }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Profile
          </Button>
        </Form>
      </div>

      <Row className="border-bottom text-primary mb-4" as="section">
        <h4>Change Password</h4>
      </Row>

      <div className="mx-auto" style={{ width: 70 + "%" }}>
        <Form>
          {
            //  <Alert
            //    className="alert alert-danger"
            //    variant="danger"
            //    show={showAlert1}
            //  >
            //    {err1.map((text) => {
            //      return (
            //        <>
            //          {text}
            //          <br />
            //        </>
            //      );
            //    })}
            //  </Alert>
          }

          <Row>
            <Form.Group as={Col} md="4">
              <Form.Label>Current Password</Form.Label>
              <Form.Control
                type="password"
                name="currentPassword"
                placeholder="Current Password"
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                name="newPassword"
                placeholder="Your new password"
              />
            </Form.Group>
            <Form.Group as={Col} md="4">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm new password"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                defaultValue={`${email}`}
                style={{ display: "none" }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="text"
                name="id"
                defaultValue={`${_id}`}
                style={{ display: "none" }}
              />
            </Form.Group>
          </Row>

          <Button variant="primary mt-3" type="submit">
            Change Password
          </Button>
        </Form>
      </div>
    </Container>
  );
};
const EditProfile = (props) => {
  return (
    <Layout us={props.us}>
      <ProfileDetails></ProfileDetails>
    </Layout>
  );
};

export default EditProfile;
