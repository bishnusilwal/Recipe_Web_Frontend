import { Component } from "react/cjs/react.development";
class Footer extends Component{
    render(){
        return(
           
    <footer class="footer-area">
        <div class="container h-100">
            <div class="row h-100">
                <div class="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                    <div class="footer-social-info text-right">
                        <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a>
                        <a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                    </div>
                    <div class="footer-logo">
                        <a href="index.html"><img src="img/core-img/logo.png" alt=""></img></a>
                    </div>
                   
                    <p>
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This Footer is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://recipe.com" target="_blank">Food</a>
</p>
                </div>
            </div>
        </div>
    </footer>



    
        )
        
    }
}
export default Footer;