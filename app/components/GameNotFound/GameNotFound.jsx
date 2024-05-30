import { NotFoundImage } from "./NotFoundImage";
import Styles from "./GameNotFound.module.css"

export const GameNotFound = () => {
    return(
        <div className={Styles['pic_and_string']}>
            <NotFoundImage />
            <h2>404! Кажется такой игры нет</h2>
        </div>
    );
}