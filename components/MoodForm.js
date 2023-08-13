
import zero from '../assets/images/0.svg';
import one from '../assets/images/1.svg';
import two from '../assets/images/2.svg';
import three from '../assets/images/3.svg';
import four from '../assets/images/4.svg';

export default function MoodForm () {
    function handleSelect() {
        console.log('clicked');
    }
    const date = new Date();
    let month
    switch (date.getMonth()) {
        case 0:
            month = "January"
            break;
        case 1:
            month = "February"
            break;
        case 2:
            month = "March"
            break;
        case 3:
            month = "April"
            break;
        case 4:
            month = "May"
            break;
        case 5:
            month = "June"
            break;
        case 6:
            month = "July"
            break;
        case 7:
            month = "August"
            break;
        case 8:
            month = "September"
            break;
        case 9:
            month = "October"
            break;
        case 10:
            month = "November"
            break;
        case 11:
            month = "December"
            break;
    }

    return (
        <>
            <h3>{`${month} ${date.getDate()}, ${date.getFullYear()}`}</h3>
            <form>
                <textarea placeholder="Notes:"></textarea>
                <div className="mood-select">
                    <div>
                        <label for="mood"><img src={zero.src} alt="Mood Zero" /></label>
                        <input type="radio" name="mood" id="0" value="0" />
                    </div>
                    <div>
                        <label for="mood"><img src={one.src} alt="Mood One" /></label>
                        <input type="radio" name="mood" id="1" value="1" />
                    </div>
                    <div>
                        <label for="mood"><img src={two.src} alt="Mood Two" /></label>
                        <input type="radio" name="mood" id="2" value="2" />
                    </div>
                    <div>
                        <label for="mood"><img src={three.src} alt="Mood Three" /></label>
                        <input type="radio" name="mood" id="3" value="3" />
                    </div>
                    <div>
                        <label for="mood"><img src={four.src} alt="Mood Four" /></label>
                        <input type="radio" name="mood" id="4" value="4" />
                    </div>
                </div>
                <button type="submit">Record Mood</button>
            </form>
        </>
    )
}