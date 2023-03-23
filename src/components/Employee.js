import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { empGetAction } from '../redux/actions/employeeActions';

export default function Employee() {
    const dispatch = useDispatch();
    const employeeList = useSelector(state => state.employeeList)
    const { employee } = employeeList;
    // console.log(employee);

    useEffect(() => {
        dispatch(empGetAction())
    }, [dispatch]);
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
                {employee.map((v, i) => {
                    return (
                        <tr key={i}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.salary}</td>
                            <td>{v.department}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}
