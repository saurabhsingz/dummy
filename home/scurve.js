import './scurve.css'
import scurve from '../svg/d_scurve.svg'

function Scurve() {
    return (
        <div className='scurve' style={{ backgroundImage:`url(${scurve})` }}>
            <div className='scurve-text-container down'><p>keep your <a href="#" className='purple'>profile</a> updated to get the most accurate ressults.</p></div>
            <div className='scurve-text-container up'>
                <div className="artice">
                    <heading>Welcome to <span className='purple'>Iterve.</span></heading>
                    <p>Experience at home contactless diagnostic with just on click</p>
                </div>
            </div>
        </div>
    );
}

export default Scurve;