import React, { Fragment } from "react"
import '../../../index.css';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deleteToDo } from "../../../Actions/ToDoListActions";
import { saveData } from "../../../Services/api-service"


class ToDoListItem extends React.Component {

    Delete = () => {
        const { List } = this.props;
        const index = List.findIndex((elem) => elem.Id === this.props.Id);
        const { deleteToDo } = this.props;
        List.splice(index, 1);
        deleteToDo(List);
        saveData(List);
    }

    onEdit = () => {
        const { List } = this.props;
        const index = List.findIndex((elem) => elem.Id === this.props.Id);
        let newToDoList = List.slice();
        this.setState(() => {
            return {
                CurrentToDo: newToDoList[index]
            }
        })
    }


    render() {
        const { Task, Time, Priority } = this.props;
        return (
            <p><input style={{ marginRight: "1%" }} type="checkbox"  id="huey" name="drone" value="huey"></input><span className="task">{Task}</span>
                <span className="float-right"><span>{Time}</span>
                    <span>{Priority}</span>
                    <i className="fa fa-trash del ml-4" aria-hidden="true" onClick={this.Delete}></i>
                    <Link to="/editToDo"><i className="fa fa-pencil ml-4" aria-hidden="true" onClick={this.onEdit}></i></Link>
                    <i className="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>
        )
    }
}
const mapStateToProps = ({ ToDoListReducer }) => {
    const { List } = ToDoListReducer
    return { List }
}
const mapDispatchToProps = {
    deleteToDo,
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);
