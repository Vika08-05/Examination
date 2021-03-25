import React, { Fragment } from "react"
import '../../index.css';


const Main = () => {
    return (
        <Fragment>
            <div className="page">
                <div className="card">
                    <div className="card-body">
                        <p className="heading1"> <span className="today">Today</span> <span className="float-right headingright"></span> </p>
                        <p> <input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task mt-4">Take kids to school</span><span className="float-right"><i class="fa fa-trash ml-4" aria-hidden="true"></i><i class="fa fa-pencil ml-4" aria-hidden="true"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>


                        <p><input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Process email</span><span className="float-right"><i class="fa fa-trash ml-4" aria-hidden="true"></i><i class="fa fa-pencil ml-4" aria-hidden="true"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>

                        <p> <input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Daily Stand-Up meeting</span><span className="float-right"><i class="fa fa-trash ml-4" aria-hidden="true"></i><i class="fa fa-pencil ml-4" aria-hidden="true"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>

                        <p><input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Create new templates</span><span className="float-right"><i class="fa fa-trash ml-4" aria-hidden="true"></i><i class="fa fa-pencil ml-4" aria-hidden="true"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>

                        <p><input style={{ marginRight: "1%" }} type="radio" id="huey" name="drone" value="huey"
                            checked></input><span className="task">Lunch with Anna</span> <span className="float-right"><i class="fa fa-trash ml-4" aria-hidden="true"></i><i class="fa fa-pencil ml-4" aria-hidden="true"></i><i class="fa fa-calendar ml-4" aria-hidden="true"></i></span> </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Main
