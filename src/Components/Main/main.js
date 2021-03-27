import React, { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import { updateDatabase } from "../../Services/api-service"
import { getAllToDo } from "../../Actions/ToDoListActions"
import ToDoListItems from "./ToDoList/ToDoListItems"

 

const Main = ({ List,CurrentToDo, getAllToDo }) => {

    useEffect(() => {
        updateDatabase().then(data => {
            getAllToDo(data);
        })
    })

    const item = List.map(contact => {
        return (
            <ToDoListItems Id={contact.Id} key={contact.Id} Task={contact.Task} Time={contact.Time} Priority={contact.Priority} />
        )
    })

    return (
        <Fragment>
            <div className="page">
                <div className="card">
                    <div className="card-body">
                        <p className="heading1"> <span className="today">Today</span><span className="float-right headingright"></span></p>
                        {/* {item.length > 0 ? item : <h2>ToDo list is empty</h2>} */}
                        {CurrentToDo.length === 0 ? List.map(contact => {
                                            return (
                                                <ToDoListItems key={contact.Id} {...contact} />
                                            )
                                        }) : CurrentToDo.map(contact => {
                                            return (
                                                <ToDoListItems key={contact.Id} {...contact} />
                                            )
                                        })}
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
const mapStateToProps = ({ ToDoListReducer }) => {
    const { List, CurrentToDo } = ToDoListReducer;
    return { List, CurrentToDo }
}
const mapDispatchToProps = {
    getAllToDo
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);