import scpr1 from "./screen_preview1.png"
import scpr2 from "./screen_preview2.png"
import scpr3 from "./screen_preview3.png"
import classes from './home.module.css'

function Row3() {
    return (
        <div className={classes.row}>
            <div className={classes.card}>
                <div className={classes.image} style={{ backgroundImage: `url(${scpr1})` }}></div>
                <p>Easy and fast diagnosis with zero contact and zero pain</p>
            </div>
            <div className={classes.card}>
                <div className={classes.image} style={{ backgroundImage: `url(${scpr2})` }}></div>
                <p>Trend tracking and monitoring health through mapping</p>
            </div>
            <div className={classes.card}>
                <div className={classes.image} style={{ backgroundImage: `url(${scpr3})` }}></div>
                <p>Meal suggestions, personalized nutrients check and calorie tracking</p>
            </div>
        </div>
    );
}

export default Row3;