import styles from './NavRestaurants.module.scss';

const NavRestaurants = function({ restaurants, passMenu }){

    const changeMenu = (e) => {
        passMenu(e);
    }

    return(
        <aside className={styles.navRestaurants}>
            <p>Shop:</p>
            {
                restaurants.map((item, index)=> {
                    return  <div
                        className={styles.restLogo}
                        onClick={changeMenu}
                        style={{backgroundImage: `url(logosCompanies${item.image})`}}
                        key = {item.name}
                        id = {item._id}
                    >
                        {item.name}
                    </div>
                })
            }
        </aside>
    )
}
export { NavRestaurants }