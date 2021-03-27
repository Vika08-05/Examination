import React, { Fragment } from "react"
import '../../index.css';
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import { searchToDo } from "../../Actions/ToDoListActions";

const Header = ({ searchToDo }) => {
    const curTime = new Date().toLocaleString()
    console.log(curTime)

    const onSearch = (event) => {
        searchToDo(event.target.value)
    }

    return (
        <div className="card-header" style={{ marginBottom: "-4%" }}>
            <p> <i name="fa fa-bars"></i><i className="fa fa-calendar ml-4" aria-hidden="true"></i><span style={{ marginLeft:"10px" }}>{curTime}</span>
                <input onChange={onSearch} type="search" className="searchinput"></input><i className="fa fa-search" aria-hidden="true"></i> <span className="float-right"> <Link to="/" className="mr-4 navTask">Task</Link> <Link to="/newTask" className="mr-4">New</Link></span> </p>
        </div>
    )
}

const mapDispatchToProps = {
    searchToDo
}
export default connect(null, mapDispatchToProps)(Header);
