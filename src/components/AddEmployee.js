import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { empAddAction } from '../redux/actions/employeeActions';

export default function AddEmployee() {
    const dispatch = useDispatch()
    const [empInfo, setEmpInfo] = useState({
        name: "",
        salary: "",
        department: ""
    });

    // console.log(empInfo);

    const handleChange = (e) => {
        let name = e.target.name;
        let val = e.target.value;

        setEmpInfo({ ...empInfo, [name]: val })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(empAddAction(empInfo))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">name:</label><br />
                <input onChange={handleChange} type="text" id="name" name="name" value={empInfo.name} required /><br />
                <label htmlFor="salary">salary:</label><br />
                <input onChange={handleChange} type="text" id="salary" name="salary" value={empInfo.salary} required /><br /><br />
                <label htmlFor="department">department:</label><br />
                <input onChange={handleChange} type="text" id="department" name="department" value={empInfo.department} required /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
