import React from "react"
import '../newTask/newTask.css';
import { Redirect } from "react-router-dom";
import { editToDo } from "../../Actions/ToDoListActions";
import { saveData } from "../../Services/api-service"
import { connect } from "react-redux"


class Edit extends React.Component {

    state = {
        "Task": this.props.CurrentToDo.Task,
        "Time": this.props.CurrentToDo.Time,
        "Priority": this.props.CurrentToDo.Priority,
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


    onEditToDo = (Id) => {
        const { List, editToDo, CurrentToDo } = this.props;
        if (CurrentToDo !== null) {
            const newList = List.map((item) => item.Id === CurrentToDo.Id ? {
                "Task": this.state.Task,
                "Time": this.state.Time,
                "Priority": this.state.Priority,
            } : item);
            editToDo(newList);
            saveData(newList).then(() =>
                this.setState({
                    isRedirect: true
                })
            )
        }
    }

    editToDoList = (event) =>{
        event.preventDefault();
        const {Id, Task, Time, Priority} =  this.props;
        const item = { Id, Task, Time, Priority};
        this.onEditToDo(item);
    }

    render() {
        const { Task, Time, Priority, isRedirect } = this.state;
        if (isRedirect) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            < form className="form-horizontal" onSubmit={this.onEditToDo}>
                <div className="form-group">
                    <label className="control-label col-sm-2">Task:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="text" onChange={this.getTask} value={Task} />
                    </div>
                </div>
                <div className="form-group col-sm-5">
                    <label className="control-label col-sm-2" style={{ marginLeft: "-16px" }}>Date:</label>
                    <div >
                        <input type="text" name="cal" onChange={this.getTime} className="callist" value={Time} />
                    </div>
                </div>
                <div>
                    <div className="col-sm-5 seleclist">
                        <label>Priority:</label>
                        <input type="text" name="cal" className="callist" onChange={this.getPriority} value={Priority} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button className="btn-block btn-primary sub" style={{ color: "white" }, { marginTop: "20px" }} onClick = {this.editToDoList}> Submit </button>
                    </div>
                </div>
            </form>
        )
    }
}
const mapStateToProps = ({ ToDoListReducer }) => {
    const { List,CurrentToDo } = ToDoListReducer
    return { List,CurrentToDo }
}
const mapDispatchToProps = {
    editToDo,
    saveData
}
export default connect(mapStateToProps, mapDispatchToProps)(Edit)