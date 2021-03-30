import React, { Fragment } from "react"
import '../../../index.css';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { deleteToDo, editToDo } from "../../../Actions/ToDoListActions";
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

    onEditClick = () => {
        const newCase = this.props;
        const { editToDo } = this.props;
        editToDo(newCase);
    }

    render() {
        const { Task, Time, Priority } = this.props;
        return (
            <p>
                <input style={{ marginRight: "1%" }} type="checkbox" id="cbox2" name="drone" value="huey"></input>
                <label id="cbox2" className="task">{Task}</label>
                <span className="float-right"><label style={{ marginRight: "20px" }}>{Time}</label>
                    <label style={{ marginRight: "10px" }}>{Priority}</label>
                    <i className="fa fa-trash del ml-4" aria-hidden="true" onClick={this.Delete}></i>
                    <Link to="/editToDo"><i className="fa fa-pencil ml-4" aria-hidden="true" onClick={this.onEditClick}></i></Link>
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
    editToDo,
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);
