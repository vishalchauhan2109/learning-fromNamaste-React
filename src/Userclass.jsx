import React from "react";

    class Userclass extends React.Component{

        constructor(props){
            super(props);

            this.state={
                count :0,
                count2:1
            };

        }

        render(){
            return(
                <div>
                    <h1>i am class based Component</h1>
                    <h1>{this.state.count}</h1>
                     <h1>{this.state.count2}</h1>
                    
                    <h1>{this.props.name}</h1>

                </div>
            )
        }
    }

export default Userclass