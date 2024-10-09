import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Container, CurriculumSection, CurriculumContent, LessonPlan, Schedule, IconGroup, IconButton } 
from '../../styles/AllCurriculums.js';

const AllCurriculums = () => {
    const [curriculumEntries, setCurriculumEntries] = useState([]);

    useEffect(() => {
        // Check if data is already in localStorage
        const storedCurriculums = localStorage.getItem('curriculumEntries');
        if (storedCurriculums) {
            setCurriculumEntries(JSON.parse(storedCurriculums));
        } else {
            // Fetch from backend if not in localStorage
            fetchCurriculumEntries();
        }
    }, []);

    const fetchCurriculumEntries = async () => {
        try {
            const response = await axios.get('https://zawadi-project.onrender.com/api/curriculum-entries');
            setCurriculumEntries(response.data);
            localStorage.setItem('curriculumEntries', JSON.stringify(response.data));
            toast.success('Curriculum entries fetched successfully!');
        } catch (error) {
            toast.error('Error fetching curriculum entries.');
            console.error('Error fetching curriculum entries:', error);
        }
    };

    const deleteCurriculumEntry = async (id) => {
        try {
            await axios.delete(`https://zawadi-project.onrender.com/api/curriculum-entries/${id}`);
            const updatedEntries = curriculumEntries.filter(entry => entry.id !== id);
            setCurriculumEntries(updatedEntries);
            localStorage.setItem('curriculumEntries', JSON.stringify(updatedEntries));
            toast.success('Curriculum entry deleted successfully!');
        } catch (error) {
            toast.error('Error deleting curriculum entry.');
            console.error('Error deleting curriculum entry:', error);
        }
    };

    return (
        <Container>
            <ToastContainer />
            <h2>All Curriculums</h2>
            {curriculumEntries.map((entry, index) => (
                <CurriculumSection key={index}>
                    <CurriculumContent>
                        <h3>{entry.grade}</h3>
                        <ul>
                            <li>{entry.subject}</li>
                        </ul>
                        <LessonPlan>
                            <h4>Lesson Plans</h4>
                            <ul>
                                <li>{entry.lesson}</li>
                            </ul>
                        </LessonPlan>
                        <Schedule>
                            <h4>Timetable</h4>
                            <p>{entry.timetable}</p>
                        </Schedule>
                    </CurriculumContent>
                    <IconGroup>
                        <IconButton>
                            <FaEdit />
                        </IconButton>
                        <IconButton onClick={() => deleteCurriculumEntry(entry.id)}>
                            <FaTrash />
                        </IconButton>
                    </IconGroup>
                </CurriculumSection>
            ))}
        </Container>
    );
}

export default AllCurriculums;
