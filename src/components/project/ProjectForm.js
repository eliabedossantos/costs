import './modules/ProjectForm.module.css';
import React, { useEffect, useState } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from  '../form/SubmitButton'

function ProjectForm({btnText}){
    const [categories, setCategories] = useState([]);
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

    return(
        <form>
            <Input type="text" text="Project name" name="projectName" placeholder="Enter the project name" />
            <Input type="number" text="Total budget" name="totalValue" placeholder="Enter the total budget" />
            <Select text="Select category" name="category" options={categories} />
            <SubmitButton text={btnText}/>
        </form>
    );
}

export default ProjectForm;