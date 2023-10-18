// import { iconsImgs } from "../../utils/images";
import "./Report.css";
import { reportData } from "../../data/data";
import { logo } from "../../assets/images";
import { DownOutlined } from "@ant-design/icons";

const Report = () => {
  return (
    <div className="grid-common">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Overview</h3>
            
            <div className="grid-c-title-icon" style={{backgroundColor: ' rgba(223, 223, 243, 0.2)', padding:'5px 10px'}}>
                <span style={{color:'#000'}}>Quartely</span>
                <DownOutlined style={{color:'#000' , padding:'5px'}}/>
            </div>
        </div>
        <h5 className="grid-c-title-text">Monthly Earning</h5>
        <div className="grid-c3-content">
            <div className="grid-chart">
                <div className="chart-vert-value">
                    <span>100</span>
                    <span>90</span>
                    <span>80</span>
                    <span>70</span>
                    <span>60</span>
                    <span>50</span>
                    <span>40</span>
                    <span>30</span>
                    <span>20</span>
                    <span>10</span>
                    <span>0</span>
                </div>
                {
                    reportData.map((report) => (
                        <div className="grid-chart-bar" key={report.id}>
                            <div className="bar-wrapper">
                                <div className="bar-item1" style={{ height: `${report.value1 !== null ? report.value1 : 0}%` }}></div>
                                <div className="bar-item2" style={{ height: `${report.value2 !== null ? report.value2 : 0}%` }}></div>
                            </div>
                            <span className="grid-hortz-value">{report.month}</span>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Report
