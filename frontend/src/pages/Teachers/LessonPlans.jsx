import React, { useState, useEffect } from 'react';
import {
  LessonPlansContainer, LessonPlan, LessonTitle, LessonContent,
  LessonForm, LessonInput, LessonTextarea, AddLessonButton,
  LessonPlansContent, LessonPlansHeader,
  LessonPlansList, ClassSelect, Actions, DeleteButton, UpdateButton,
  ViewLessonPlansButton, DownloadLessonPlansButton, GradeSection, GradeItem, SubjectList, SubjectItem
} from '../../styles/lessonplansstyles.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LessonPlans = () => {
  const [lessonPlans, setLessonPlans] = useState([]);
  const [myLessonPlans, setMyLessonPlans] = useState([]);
  const [classes, setClasses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    class_id: ''
  });
  const [showMyPlans, setShowMyPlans] = useState(false);
  const [showDownloadSection, setShowDownloadSection] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchLessonPlans = async () => {
      try {
        const response = await fetch('https://zawadi-project.onrender.com/api/lesson-plans', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setLessonPlans(data);
      } catch (error) {
        console.error('Error fetching lesson plans:', error);
      }
    };

    const fetchClasses = async () => {
      try {
        const response = await fetch('https://zawadi-project.onrender.com/api/classes', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchLessonPlans();
    fetchClasses();
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://zawadi-project.onrender.com/api/lesson-plans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      const newLessonPlan = await response.json();
      setLessonPlans([...lessonPlans, newLessonPlan]);
      setFormData({ title: '', content: '', class_id: '' });
      toast.success('Lesson plan added successfully!');
    } catch (error) {
      console.error('Error adding lesson plan:', error);
      toast.error('Error adding lesson plan!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://zawadi-project.onrender.com/api/lesson-plans/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLessonPlans(lessonPlans.filter(plan => plan.id !== id));
      toast.success('Lesson plan deleted successfully!');
    } catch (error) {
      console.error('Error deleting lesson plan:', error);
      toast.error('Error deleting lesson plan!');
    }
  };

  const handleViewMyLessonPlans = async () => {
    try {
      const response = await fetch('https://zawadi-project.onrender.com/api/lesson-plans?creator=true', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setMyLessonPlans(data);
      setShowMyPlans(!showMyPlans);
    } catch (error) {
      console.error('Error fetching my lesson plans:', error);
    }
  };

  const handleDownloadSectionToggle = () => {
    if (showDownloadSection) {
      setShowDownloadSection(false);
      setSubjects([]); // Collapse subjects when downloading section collapses
    } else {
      setShowDownloadSection(true);
    }
  };

  const handleGradeSelection = (grade) => {
    setSelectedGrade(grade);
    setSubjects({
        'PP 1': [
          { subject: 'Psycomotor - term 3', link: 'https://drive.google.com/uc?export=download&id=10iUs3ugnLyHAjZ3Ij89KC7wHPaJ87rX1' }
        ],
        'PP 2': [
          { subject: 'Mathematics Activities - term 3', link: 'https://drive.google.com/uc?export=download&id=1wzvtYGdTNjD30b35t3azzL14_z3Gb6hG' }
        ],

      'Grade 1': [
        { subject: 'Mathematics Activities - term 1', link: 'https://drive.google.com/uc?export=download&id=1R9vjr8Tbr4yvJdAsFd5fTP_Og9pa5WrD' },
        { subject: 'Mathematics Activities - term 2', link: 'https://drive.google.com/uc?export=download&id=17_KiNl0PAMv_TFLqPhh9M-cN1KAMeTo4' },
        { subject: 'Mathematics Activities - term 3', link: 'https://drive.google.com/uc?export=download&id=135URtvNJ2dfUidEWWjmLsX7Rxi-yt44P' },
        { subject: 'Kiswahili Vyakula Vya Kiasili - 1', link: 'https://drive.google.com/uc?export=download&id=1dv8r6y9jxN-XL5LQRjuxh2827aaKDEPG' },
        { subject: 'Kiswahili Mwili Wangu - 2', link: 'https://drive.google.com/uc?export=download&id=1PAnFkDh9UUxqjd4OGKRv0kMdi8MB2WnJ' },
        { subject: 'Kiswahili - Karibu Darasani', link: 'https://drive.google.com/uc?export=download&id=1HUUvi7EWOxboWWesmZvqDvvY4p0GDSRY' },
        { subject: 'Environment Activities - Social Environment ', link: 'https://drive.google.com/uc?export=download&id=1AJbDF5JhghmkJfLSCFnqpbKw18RnJtYj' },
        { subject: 'Environment Activities - Env and its resources', link: 'https://drive.google.com/uc?export=download&id=10VN2Sl4GrApzr5VxVa7LS5SDHlg0MOKU' },
        { subject: 'Environment Activities - Care of the Env ', link: 'https://drive.google.com/uc?export=download&id=1BXAI-7UNc2MqwgyqQ5Vyy48WujeKFueU' },
        { subject: 'Environmental All ', link: 'https://drive.google.com/uc?export=download&id=1vBO57f0QmjV7niG0YMipYtZHaHx8J4Ie' }        
      ],
      'Grade 2': [
        { subject: 'Mathematics Activities - Term 1', link: 'https://drive.google.com/uc?export=download&id=1w3XygN2MY0vTYekR8QA3HVCTVJPBemJ7' },
        { subject: 'Mathematics Activities - Term 2', link: 'https://drive.google.com/uc?export=download&id=11LQkgdLF4n6JSHHPwvz6Ditw61gwFexN' },
        { subject: 'Mathematics Activities - Term 3', link: 'https://drive.google.com/uc?export=download&id=11LQkgdLF4n6JSHHPwvz6Ditw61gwFexN' },
        
        { subject: 'Art & Craft - Weaving Lesson', link: 'https://drive.google.com/uc?export=download&id=1RzPP4d_Utzuv70RZOIsEVMvxtptjY_ji' },
        { subject: 'Art & Craft - Sculputer Lesson', link: 'https://drive.google.com/uc?export=download&id=1bnjOKAF2OeGQD9Q7t6bZAIVJKnlaO09l' },
        { subject: 'Art & Craft - Paper Craft', link: 'https://drive.google.com/uc?export=download&id=1khXPdretqBIQoIP0iFYHFoBRb_lTu_WJ' },
        
        { subject: 'C.R.E - The Bible Lesson', link: 'https://drive.google.com/uc?export=download&id=1Ala4Lml0xHVKuMfVaUEKta3PG__Sa4Yw' },
        { subject: 'C.R.E - Early life of Jesus Christ', link: 'https://drive.google.com/uc?export=download&id=1P93ufiepQZbo6d92CAgcABBocLHXKiQy' },
        { subject: 'C.R.E - The Church', link: 'https://drive.google.com/uc?export=download&id=1bN-wz5D4qZLS8kFPp4aUawsd8HVP1LvU' },
        { subject: 'C.R.E - Creation', link: 'https://drive.google.com/uc?export=download&id=1Zsi0uwBqbklcVxdRx18RBJyogaZtIxB1' },
        { subject: 'C.R.E - Christian Values', link: 'https://drive.google.com/uc?export=download&id=1f6p62r1AsLd-sjWJjT0KhrJ2wH5HAmxe' },
        
        { subject: 'Movement Activities- Swimming Lesson', link: 'https://drive.google.com/uc?export=download&id=1bN-wz5D4qZLS8kFPp4aUawsd8HVP1LvU' },
        { subject: 'Movement Activities - Gymnastics Lesson', link: 'https://drive.google.com/uc?export=download&id=1w2KCNeJ611McIXucmZkGqv4wvy1hdZxa' },
        { subject: 'Movement Activities - Basic Motor', link: 'https://drive.google.com/uc?export=download&id=1lRFWnCl4lB-d7ShOSTcV5jMD0-19q2QI' },
        
 { subject: 'Hygiene & Nutrition - Safety Education', link: 'https://drive.google.com/uc?export=download&id=1g6rYqHZk2JbSV50_1i1m35VuiO5m38ZC' },
{ subject: 'Hygiene & Nutrition - Personal Hygiene', link: 'https://drive.google.com/uc?export=download&id=1Hd2uQ9O0jdNCfeK4OunDOcocjMkFOgi-' },
{ subject: 'Hygiene & Nutrition - Health Practises', link: 'https://drive.google.com/uc?export=download&id=1p5sp9msSO0yrRcJA8GqdDy9n2ah_f2I_' },
{ subject: 'Hygiene & Nutrition - Foods Lesson', link: 'https://drive.google.com/uc?export=download&id=1OeyRUJyb8DUP-gg25NyMchhQhMGvkend' },

{ subject: 'Environmental Activities - Safety Education', link: 'https://drive.google.com/uc?export=download&id=1XI9DJiCh2-AV_kouqOOxyJKuXglj7kR1' },
{ subject: 'Environmental Activities - Env. & Its Activities', link: 'https://drive.google.com/uc?export=download&id=1gbIGUXLgo3mkhh4XbRUQm3KJmtRx3iAf' },       
{ subject: 'Environmental Activities- Care for the Environment', link: 'https://drive.google.com/uc?export=download&id=1jegH-Vi1MM5YlkTUoYnXwjEIeV_n3beB' },

{ subject: 'Music - Performing Lesson', link: 'https://drive.google.com/uc?export=download&id=1Ktqa-3ZSqstKSx1VZL5sJ2Z3sA4uqBpE' },    
{ subject: 'Music - Listening & Responding', link: 'https://drive.google.com/uc?export=download&id=1c8i6LxS7WDAwP-QjbqqWgK4pSS_dgHw6' },
{ subject: 'Music - Creating & Composing  Music', link: 'https://drive.google.com/uc?export=download&id=15lFh0w7e8fnG4mwv45VtK7OKTduNG1il' }

      ], 
      'Grade 3': [
        { subject: 'C.R.E - Holy Bible', link: 'https://drive.google.com/uc?export=download&id=1dMElhXzAaD8XW9Frkv2cmx4rpigxT_e9' },
        { subject: 'C.R.E - Early Life Of Jesus Christ', link: 'https://drive.google.com/uc?export=download&id=1yE_AwCg-q9NItfF9FZWxGqtzXyQZ3prG' },
        { subject: 'C.R.E - The Church', link: 'https://drive.google.com/uc?export=download&id=1xUGMG2gmAhOSsuyNh8J0D-CsH0H5Rfh9' },
        { subject: 'C.R.E - Creation Lesson', link: 'https://drive.google.com/uc?export=download&id=1L7WdU3m0PtQ-ccRcr38kwHYGF_f5cFfO' },
        { subject: 'C.R.E - Christian Values', link: 'https://drive.google.com/uc?export=download&id=1hKShDUYqT1h7rOgGE7ch0xPjbRj8HcxB' },
        
        { subject: 'Kiswahili Activities - Sokoni ', link: 'https://drive.google.com/uc?export=download&id=15-IJ5ciAvo2g6oSh9DW3twB0vE5QJmVl' },
        { subject: 'Kiswahili Activities - Shambani', link: 'https://drive.google.com/uc?export=download&id=1AHs0Xwzs5dmwOsMH1tY3pZ1N_d-7ToqO' },
        { subject: 'Kiswahili Activities - Marejeleo', link: 'https://drive.google.com/uc?export=download&id=1dxs67BY83ISN7E0POVeZOcJW4UCdfzrj' },
      
        { subject: 'Mathematics Activities - Term 1', link: 'https://drive.google.com/uc?export=download&id=1oC4v_bh7k8GLA7a1OfxoyFL_vx8TuxcR' },
        { subject: 'Mathematics Activities - Term 2', link: 'https://drive.google.com/uc?export=download&id=1H8KeQmdYyOqKUKsh1w8zD30xXaxUw3ib' },
        { subject: 'Mathematics Activities - Term 3', link: 'https://drive.google.com/uc?export=download&id=19UO-2lmoJRtiTeE6VsyHEiDEuJ8nNFaL' },
      
        { subject: 'Music Activities - Basic Motor Skills ', link: 'https://drive.google.com/uc?export=download&id=17WN5S5B7l2fo4AbpOB7zei0rVCxJYqgu' },
        
        { subject: 'Movement Activities - Gymnastics Lesson', link: 'https://drive.google.com/uc?export=download&id=136AFVWmXOIlca0zggsZIo9rCgeQiJr9M' }
      ],
      'Grade 4': [
        { subject: 'Lesson Plan Booklet', link: 'https://drive.google.com/uc?export=download&id=14O3h4981QcmbqTN5lBRWdW8GtoDEmjIZ' }
      ],
      'Grade 5': [
        { subject: 'Lesson Plan Booklet', link: 'https://drive.google.com/uc?export=download&id=14O3h4981QcmbqTN5lBRWdW8GtoDEmjIZ' }
      ],

    }[grade] || []);
  };

  return (
    <LessonPlansContainer>
      <LessonPlansHeader>Lesson Plans</LessonPlansHeader>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <ViewLessonPlansButton onClick={handleViewMyLessonPlans}>
          {showMyPlans ? 'Hide My Lesson Plans' : 'View My Lesson Plans'}
        </ViewLessonPlansButton>
        <DownloadLessonPlansButton onClick={handleDownloadSectionToggle}>
          {showDownloadSection ? 'Collapse Download Section' : 'Download Lesson Plans'}
        </DownloadLessonPlansButton>
      </div>
      {showDownloadSection && (
        <GradeSection>
          {[
            { grade: 'PP 1', link: '#' }, // Placeholder link
            { grade: 'PP 2', link: '#' }, // Placeholder link
            { grade: 'Grade 1', link: '#' }, // Placeholder link
            { grade: 'Grade 2', link: '#' }, // Placeholder link
            { grade: 'Grade 3', link: '#' }, // Placeholder link
            { grade: 'Grade 4', link: '#' }, // Placeholder link
            { grade: 'Grade 5', link: '#' }, // Placeholder link
            { grade: 'Grade 6', link: '#' }, // Placeholder link
            // Add other grades similarly
          ].map((gradeInfo, index) => (
            <GradeItem
              key={index}
              onClick={() => handleGradeSelection(gradeInfo.grade)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{gradeInfo.grade}</h3>
              <a href={gradeInfo.link} download>
                Click here
              </a>
            </GradeItem>
          ))}
        </GradeSection>
      )}
      {selectedGrade && (
        <SubjectList>
          <h3>Subjects for {selectedGrade}</h3>
          {subjects.map((subject, index) => (
            <SubjectItem key={index}>
              <h4>{subject.subject}</h4>
              <a href={subject.link} download>
                Download {subject.subject} Lesson Plan
              </a>
            </SubjectItem>
          ))}
        </SubjectList>
      )}
      <LessonPlansContent>
        {showMyPlans && (
          <LessonPlansList>
            {myLessonPlans.map(plan => (
              <LessonPlan key={plan.id}>
                <LessonTitle>{plan.title}</LessonTitle>
                <LessonContent>{plan.content}</LessonContent>
                <p><strong>Class:</strong> {classes.find(c => c.id === plan.class_id)?.name}</p>
                <Actions>
                  <UpdateButton>Update</UpdateButton>
                  <DeleteButton onClick={() => handleDelete(plan.id)}>Delete</DeleteButton>
                </Actions>
              </LessonPlan>
            ))}
          </LessonPlansList>
        )}
      </LessonPlansContent>
      <LessonForm onSubmit={handleSubmit}>
        <LessonInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Title"
          required
        />
        <LessonTextarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="Content"
          required
        />
          <ClassSelect
            name="class_id"
            value={formData.class_id}
            onChange={handleInputChange}
          >
            <option value="">Select Class</option>
            {classes.map((classItem) => (
              <option key={classItem.id} value={classItem.id}>
                {classItem.grade}
              </option>
            ))}
          </ClassSelect>
        <AddLessonButton type="submit">Add Lesson Plan</AddLessonButton>
      </LessonForm>
      <ToastContainer />
    </LessonPlansContainer>
  );
};

export default LessonPlans;
