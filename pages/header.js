import { useCallback, useEffect, useState } from 'react'
import header from '../styles/scss/components/layout/header.module.scss'
import HeaderNav from './headerNav'
import i18n from "@/locales/i18n"
import { t } from 'i18next'
const Header = () => {
    const [buttonActive, setButtonActive] = useState(0)
    useEffect(() => {
        console.log(buttonActive);
    }, [buttonActive]);
    const handleChangeLanguage = ((item) => {
        setButtonActive(item === "ko" ? 0 : 1);
        i18n.changeLanguage(item);
    })

    return (
        <section className={header.header}>
            <div className={header.header_wrap}>
                <HeaderNav buttonActive={buttonActive} changeLanguage2={handleChangeLanguage} />
            </div>
        </section>
    )
}

export default Header