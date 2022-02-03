import { Component } from "react/cjs/react.development";
class Footer extends Component{
    render(){
        return(
            <div>Footer Part{localStorage.getItem('token')}</div>
        )
    }
}
export default Footer;