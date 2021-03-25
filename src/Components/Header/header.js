import React, { Fragment } from "react"
import '../../index.css';


class Header extends React.Component {
    state = {
        curTime: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="card-header" style={{ marginBottom: "-4%" }}>
                <p> <i Name="fa fa-bars"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i><input class="fa fa-calendar ml-4" aria-hidden="true" disabled value={this.state.curTime}></input> <span className="float-right"> <span className="mr-4 navTask">Task</span> <span className="mr-4">Archive</span> <i className="fa fa-search" aria-hidden="true"></i> </span> </p>
            </div>
        )
    }


}


export default Header
