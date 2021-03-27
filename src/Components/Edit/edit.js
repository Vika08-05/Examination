import React from "react"
import '../newTask/newTask.css';
import { Redirect } from "react-router-dom";
import { editToDo } from "../../Actions/ToDoListActions";
import { saveData } from "../../Services/api-service"
import { connect } from "react-redux"


class Edit extends React.Component {

    state = {
        "Task": this.props.List.Task,
        "Time": this.props.List.Time,
        "Priority": this.props.List.Priority,
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



    addEditNewToDo = (event) => {
        event.preventDefault();
        const { Id, Task, Time, Priority } = this.state;
        const newContact = { Id, Task, Time, Priority };
        const { List } = this.props;
        const NewList = [...List, newContact]
        saveData(NewList).then(() => {
            this.setState({
                isRedirect: true
            })
        })
    }


    render() {
        const { Task, Time, Priority, isRedirect } = this.state;
        if (isRedirect) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            < form className="form-horizontal" onSubmit={this.editNewToDo}>
                <div className="form-group">
                    <label className="control-label col-sm-2">Task:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="text" onChange={this.getTask} placeholder={Task} />
                    </div>
                </div>
                <div className="form-group col-sm-5">
                    <label className="control-label col-sm-2" style={{ marginLeft: "-16px" }}>Date:</label>
                    <div >
                        <input type="text" name="cal" onChange={this.getTime} className="callist" placeholder={Time} />
                    </div>
                </div>
                <div>
                    <div className="col-sm-5 seleclist">
                        <label>Priority:</label>
                        <input type="text" name="cal" className="callist" onChange={this.getPriority} placeholder={Priority} />
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
    editToDo
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)