import { logo } from "../../assets/images";
import "./Loans.css";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import GradientSVG from "./gradientSVG";
import GradientSVG1 from "./gradientSVG1";

const Loans = () => {
    const idCSS = "hello";
    const idCSS1 = "hello1";
    
    const percentage = 65;
  return (
    <div className="grid-c7">
        <h3 className="grid-c-title-text">Customers</h3>
        <p>Customers that buy Product</p>
        <div className="progressbars">

            <div className='firstProgressbar'>
                <GradientSVG />
                <CircularProgressbar value={percentage} text={`${percentage}%`} 
                    styles={{
                        path: { stroke: `url(#${idCSS})`, height: "100%" },
                    }}
                    strokeWidth={15}
                />
            </div>
            <div className='secondProgressbar'>
                <GradientSVG1 />
                <CircularProgressbar value={15}
                    styles={{
                        path: { stroke: `url(#${idCSS1})`, height: "100%" },
                    }}
                    strokeWidth={20}
                />
            </div>
        </div>
     
    </div>
  )
}

export default Loans
