import headerNav from '@/styles/scss/components/layout/headerNav.module.scss'
const HeaderNav = ({changeLanguage2, buttonActive}) => {
    return (
    <nav className={headerNav.headerNav}>
        <div className={headerNav.headerNav_wrap}>
            <button onClick={()=> {changeLanguage2("ko")}} className={`${buttonActive === 0 ? headerNav.headerNav_button_on : headerNav.headerNav_button}`}>KR</button>
            <button onClick={()=>{changeLanguage2("en")}} className={`${buttonActive === 1 ? headerNav.headerNav_button_on : headerNav.headerNav_button}`}>EN</button>
        </div>
    </nav>
    )
}

export default HeaderNav


