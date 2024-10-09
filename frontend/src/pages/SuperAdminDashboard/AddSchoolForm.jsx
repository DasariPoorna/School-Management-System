import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Styled components
const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto 40px;
  @media (max-width: 768px) {
    padding: 15px;
    margin: 0 10px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px;
  }
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  width: 100%;
  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }

  &:hover {
    background-color: #45a049;
  }
`;

const REACT_APP_API_URL="https://api.zawadii.tech";
const STORAGE_KEY = 'schoolData';
const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

const AddSchoolForm = () => {
  const [form, setForm] = useState({
    name: '',
    address: '',
    director: '',
    location: '',
    numberOfStudents: '',
    plan: 'free'
  });

  // Load data from local storage if available and not expired
  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const now = new Date().getTime();
      if (now - parsedData.timestamp < EXPIRATION_TIME) {
        setForm(parsedData.data);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API_URL; // Use the environment variable
      await axios.post(`https://zawadi-project.onrender.com/api/schools`, {
        name: form.name,
        address: form.address,
        director: form.director,
        location: form.location,
        number_of_students: form.numberOfStudents,
        plan: form.plan
      });

      // Store data in local storage
      const now = new Date().getTime();
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        data: form,
        timestamp: now
      }));

      toast.success('School added successfully!');
      setForm({
        name: '',
        address: '',
        director: '',
        location: '',
        numberOfStudents: '',
        plan: 'free'
      });
    } catch (error) {
      toast.error('Failed to add school. Please try again.');
    }
  };

  return (
    <>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>School Name</Label>
          <Input type="text" name="name" value={form.name} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Address</Label>
          <Input type="text" name="address" value={form.address} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Director/Headmaster</Label>
          <Input type="text" name="director" value={form.director} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Location</Label>
          <Input type="text" name="location" value={form.location} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Number of Students</Label>
          <Input type="number" name="numberOfStudents" value={form.numberOfStudents} onChange={handleChange} required />
        </FormGroup>
        <FormGroup>
          <Label>Plan</Label>
          <Select name="plan" value={form.plan} onChange={handleChange} required>
            <option value="free">Free Plan</option>
            <option value="silver">Silver Plan</option>
            <option value="gold">Gold Plan</option>
          </Select>
        </FormGroup>
        <Button type="submit">Add School</Button>
      </Form>
    </>
  );
};

export default AddSchoolForm;



// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // Styled components
// const Form = styled.form`
//   background: #fff;
//   padding: 20px;
//   border-radius: 12px;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
//   margin: 0 auto 40px;
//   @media (max-width: 768px) {
//     padding: 15px;
//     margin: 0 10px;
//   }
// `;

// const FormGroup = styled.div`
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-weight: 600;
//   font-size: 16px;
//   color: #333;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 12px;
//   border-radius: 8px;
//   border: 1px solid #ddd;
//   font-size: 16px;
//   box-sizing: border-box;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 10px;
//   }
// `;

// const TextArea = styled.textarea`
//   width: 100%;
//   padding: 12px;
//   border-radius: 8px;
//   border: 1px solid #ddd;
//   font-size: 16px;
//   box-sizing: border-box;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 10px;
//   }
// `;

// const Select = styled.select`
//   width: 100%;
//   padding: 12px;
//   border-radius: 8px;
//   border: 1px solid #ddd;
//   font-size: 16px;
//   box-sizing: border-box;
//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 10px;
//   }
// `;

// const Button = styled.button`
//   background-color: #4CAF50;
//   color: white;
//   border: none;
//   padding: 12px 20px;
//   border-radius: 8px;
//   cursor: pointer;
//   font-size: 16px;
//   transition: background-color 0.3s;
//   width: 100%;
//   @media (max-width: 768px) {
//     padding: 10px 15px;
//     font-size: 14px;
//   }

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const STORAGE_KEY = 'schoolData';
// const EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

// const AddSchoolForm = () => {
//   const [form, setForm] = useState({
//     name: '',
//     address: '',
//     director: '',
//     location: '',
//     numberOfStudents: '',
//     plan: 'free'
//   });

//   // Load data from local storage if available and not expired
//   useEffect(() => {
//     const storedData = localStorage.getItem(STORAGE_KEY);
//     if (storedData) {
//       const parsedData = JSON.parse(storedData);
//       const now = new Date().getTime();
//       if (now - parsedData.timestamp < EXPIRATION_TIME) {
//         setForm(parsedData.data);
//       } else {
//         localStorage.removeItem(STORAGE_KEY);
//       }
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/schools', {
//         name: form.name,
//         address: form.address,
//         director: form.director,
//         location: form.location,
//         number_of_students: form.numberOfStudents,
//         plan: form.plan
//       });

//       // Store data in local storage
//       const now = new Date().getTime();
//       localStorage.setItem(STORAGE_KEY, JSON.stringify({
//         data: form,
//         timestamp: now
//       }));

//       toast.success('School added successfully!');
//       setForm({
//         name: '',
//         address: '',
//         director: '',
//         location: '',
//         numberOfStudents: '',
//         plan: 'free'
//       });
//     } catch (error) {
//       toast.error('Failed to add school. Please try again.');
//     }
//   };

//   return (
//     <>
//       <ToastContainer />
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>School Name</Label>
//           <Input type="text" name="name" value={form.name} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label>Address</Label>
//           <Input type="text" name="address" value={form.address} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label>Director/Headmaster</Label>
//           <Input type="text" name="director" value={form.director} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label>Location</Label>
//           <Input type="text" name="location" value={form.location} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label>Number of Students</Label>
//           <Input type="number" name="numberOfStudents" value={form.numberOfStudents} onChange={handleChange} required />
//         </FormGroup>
//         <FormGroup>
//           <Label>Plan</Label>
//           <Select name="plan" value={form.plan} onChange={handleChange} required>
//             <option value="free">Free Plan</option>
//             <option value="silver">Silver Plan</option>
//             <option value="gold">Gold Plan</option>
//           </Select>
//         </FormGroup>
//         <Button type="submit">Add School</Button>
//       </Form>
//     </>
//   );
// };

// export default AddSchoolForm;
