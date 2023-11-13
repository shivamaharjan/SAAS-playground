import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import CustomInput from "../../components/customInput/CustomInput";
import DefaultLayout from "../../components/layouts/DefaultLayout";

const inputs = [
  {
    label: "First Name *",
    name: "fName",
    type: "text",
    placeholder: "Sam",
    required: true,
  },
  {
    label: "Last Name *",
    name: "lName",
    type: "text",
    placeholder: "Smith",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "number",
    placeholder: "04xxxxx",
  },
  {
    label: "Email *",
    name: "email",
    type: "email",
    placeholder: "sam@sam.com",
    required: true,
  },
  {
    label: "Password *",
    name: "password",
    type: "password",
    placeholder: "*****",
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    type: "password",
    placeholder: "*****",
    required: true,
  },
];

function AdminSignUP() {
  const [formData, setFormData] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("first", formData);
    toast("Password doesnot match");
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Password doesnot match");
    }
  };

  return (
    <div>
      <DefaultLayout>
        <div className="p-3 border shadow rounded admin-form">
          <Form onSubmit={handleOnSubmit}>
            {inputs.map((input, i) => {
              return (
                <CustomInput key={i} {...input} onChange={handleOnChange} />
              );
            })}

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default AdminSignUP;
