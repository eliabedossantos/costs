import './modules/ProjectForm.module.css';
import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from  '../form/SubmitButton'
import Swal from 'sweetalert2'
function ProjectForm({handleSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});
    
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then((data) => {
            setCategories(data);
        })
        .catch(err => console.log(err))
    }, []);

    
    const submitForm = (e) => {
        e.preventDefault(); // prevent page from refreshing
        // console.log(project);
         handleSubmit(project); // pass project to parent component
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value});
    }

    function handleSelect(e){
        setProject({ ...project, category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        }
        });
    }

    return(
        <form onSubmit={submitForm}>
            <Input 
            type="text" 
            text="Project name" 
            name="projectName" 
            placeholder="Enter the project name" 
            handleOnChange={handleChange}
            value={project.projectName ? project.projectName : ''}/>
            <Input 
            type="number" 
            text="Total budget" 
            name="totalValue" 
            placeholder="Enter the total budget" 
            handleOnChange={handleChange}
            value={project.totalValue ? project.totalValue : '' }/>
            <Select 
            text="Select category" 
            name="category" 
            options={categories} 
            handleOnChange={handleSelect}
            value={project.category ? project.category.id : ''} />
            <SubmitButton text={btnText} />
        </form>
    );
}

export default ProjectForm;