import React from "react"
// import './newTask.css';
import { Redirect } from "react-router-dom";
import { saveData } from "../../Services/api-service"
import { addNewToDo } from "../../Actions/ToDoListActions"
import { connect } from "react-redux"

//Import uuid
import { v4 as uuidv4 } from "uuid"

class newTask extends React.Component {

    state = {
        "Task": "",
        "Deadline": " ",
        "Priority": "",
        "isRedirect": false
    }

    /////
    getTask = (event) => {
        this.setState({
            Task: event.target.value
        })
    }
    getTime = (event) => {
        this.setState({
            Time: event.target.value
        })
    }
    getPriority = (event) => {
        this.setState({
            Priority: event.target.value
        })
    }

    addNewToDos = (event) => {
        event.preventDefault();
        const { Task, Time, Priority } = this.state;
        const Id = uuidv4();
        const newToDo = {Id, Task, Time, Priority };
        const { List } = this.props;
        const NewList = [...List, newToDo]
        addNewToDo(NewList);
        saveData(NewList);
        this.setState({
            isRedirect: true
        })
    }

    render() {
        const { isRedirect } = this.state
        if (isRedirect) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            < form className="form-horizontal" onSubmit={this.addNewToDos}>
                <div className="form-group">
                    <label className="control-label col-sm-2">Task:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="text" onChange={this.getTask} placeholder="Enter New Task" />
                    </div>
                </div>
                <div className="form-group col-sm-5">
                    <label className="control-label col-sm-2" style={{ marginLeft: "-16px" }}>Deadline:</label>
                    <div >
                        <input type="text" name="cal" onChange={this.getTime} className="callist" placeholder="Enter Deadline ( 2 days / 3 days )" />
                    </div>
                </div>
                <div>
                    <div className="col-sm-5 seleclist">
                        <label>Priority:</label>
                        <input type="text" name="cal" className="callist" onChange={this.getPriority} placeholder="Enter Priority ( High, Low, Medium )" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn-block btn-primary sub" style={{ color: "white" }, { marginTop: "20px" }}> Submit </button>
                    </div>
                </div>
            </form>
        )
    }
}
const mapStateToProps = ({ ToDoListReducer }) => {
    const { List } = ToDoListReducer
    return { List }
}
const mapDispatchToProps = {
    addNewToDo,
}
export default connect(mapStateToProps, mapDispatchToProps)(newTask)