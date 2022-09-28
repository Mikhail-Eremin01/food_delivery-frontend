import styles from './NavRestaurants.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Loading } from '../Loading/Loading';
import { fetchRestaurantsMenu } from '../../store/restaurantsMenuSlice';

const NavRestaurants = function(){
    const dispatch = useDispatch();

    const allRestaurants = useSelector(state => state.allRestaurants.allRestaurants);
    
    const changeMenu = (e) => {
        dispatch(fetchRestaurantsMenu(e.target.id));
    }

    return(
        <aside className={styles.navRestaurants}>
            <p>Shop:</p>
            {!allRestaurants ? <Loading /> : 
                allRestaurants.map((item, index)=> {
                    return  <div
                        className={styles.restLogo}
                        style={{backgroundImage: `url(logosCompanies${item.image})`}}
                        key = {item.name}
                    >
                        <div onClick={changeMenu} id = {item._id} className={styles.restLogo__text}>{item.name}</div>
                    </div>
                })
            }
        </aside>
    )
}
export { NavRestaurants }