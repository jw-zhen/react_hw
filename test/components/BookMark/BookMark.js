import Router from 'react'
import {Route,Link} from 'react-router-dom'

class BookMark extends React.Component{
    render(){
        return (
            <Route exact path={this.props.to}
                children={props=>{
                    let className='BookMark'
                    {props.match?className+='select_BookMark':className="BookMark"}
                    return(
                        <Link to={this.props.to}>
                            <button class={className}>{this.props.name}</button>
                        </Link>)
                }}/>
        )
    }
}
export{BookMark}
