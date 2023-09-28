import doc_pic from './diagnostic_pic.png'
import classes from './home.module.css'

function Row2() {
    return (
        <div className={classes.row}>
            <img src={doc_pic} alt="Mymage" className={classes.img}></img>
            <div className={classes.img} style={{ 
                border:"1px solid #1cb9a8", 
                color:"#1cb9a8",
                fontSize:"15px",
                width: "35%",
                aspectRatio: "16/11", }}>
                About Iterve  explaining tech - text here
            </div>
        </div>
    );
}

export default Row2;