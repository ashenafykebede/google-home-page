import './styles.css';
import { Link } from "../link/Link";

const section1 =[
                {class:"footer-child-item1",link:"#",name:"Advertising"},
                {class:"footer-child-item1",link:"#",name:"Business"},
                {class:"footer-child-item1",link:"#",name:"How Search Work"}
            ];
const section2 =[{class:"footer-child-item3",link:"#",name:"Carbon neutral since 2007"}];  
const section3 =[
                {class:"footer-child-item3",link:"#",name:"Privacy"},
                {class:"footer-child-item3",link:"#",name:"Teams"},
                {class:"footer-child-item3",link:"#",name:"Settings"}
]; 

export const Footer = ()=>{
    return (
        <footer>
        <div>
          <ul class="footer-section-1">
            <Link links={section1}/>
          </ul>
        </div>
        <div>
          <ul class="footer-section-2">
          <Link links={section2}/>
          </ul>
        </div>
        <div>
          <ul class="footer-section-3">
          <Link links={section3}/>
          </ul>
        </div>
      </footer>
    )
}