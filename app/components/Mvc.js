import React, {Component} from 'react';

export default class Mvc extends Component {
     state = {
        text : ''
    };

    valueInput = (e) => {
        this.setState({text: e.target.value})
    };

    render() {
        let array = ['text1','text2','text3','text4'];
        let mvcTemplate;
        mvcTemplate = array.filter((item)=> {
                if(item.indexOf(this.state.text) >= 0) {
                return true
            }
        });
        // mvcTemplate = mvcTemplate.map(function(item,index){
        //     return (
        //         <li key={index}>
        //             {item}
        //         </li>
        //     )
        // })

        console.log(mvcTemplate);
        return(
        <div>
            <input
                type="text"
                placeholder= "Enter text for filter"
                value={this.state.text}
                onChange={this.valueInput}
            />
            <ul>
            {mvcTemplate.map(function(item,index){
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
            </ul>
        </div>
        )
    }
}