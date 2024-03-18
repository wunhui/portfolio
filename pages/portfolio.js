import portfolio from '@/styles/scss/pages/portfolio.module.scss' 
import Context from '@/context/context';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
const Portfolio = () => {
    const { t } = useTranslation();
    const { prefix } = useContext(Context);
    let portfolioList = [
        {
            id: 0,
            img: "/images/content/reblog.png",
            link: 'https://mihye0924.github.io/re-blog/',
            title: t('portfolio.text1')
        },
        {
            id: 1,
            img: "/images/content/wantu.png",
            link: 'https://wantyou.freeive.com/#/',
            title: t('portfolio.text2')
        },
        {
            id: 2,
            img: "/images/content/lina.png",
            link: 'https://www.lina.co.kr/',
            title: t('portfolio.text3')
        },
        {
            id: 3,
           img: "/images/content/freeiveService.png",
            link: 'https://www.freeive.com/service',
            title: t('portfolio.text4')
        },
        {
            id: 4,
           img: "/images/content/elyfi.png",
            link: 'https://wunhui.github.io/elyfi_publising/',
            title: t('portfolio.text5')
        },
        {
            id: 5,
           img: "/images/content/daejongsang.png",
            link: 'https://github.com/wunhui/daejongsang',
            title: t('portfolio.text6')
        },
        {
            id: 6,
           img: "/images/content/art.png",
            link: 'https://github.com/wunhui/art-react',
            title: t('portfolio.text7')
        },
        {
            id: 7,
           img: "/images/content/goldendisc.png",
            link: 'https://github.com/wunhui/GoldenDiscAwardRe',
            title: t('portfolio.text8')
        },
        {
            id: 8,
           img: "/images/content/hyundai.png",
            link: 'https://github.com/wunhui/hyundai',
            title: t('portfolio.text9')
        }
    ]
    return (
        <section className={portfolio.portfolio}>
            <h2 className={portfolio.portfolio_text}>
                Portfolio
            </h2>
            <div className={portfolio.portfolio_container}>
                <div className={portfolio.portfolio_title}>
                    <div className={portfolio.portfolio_title_sm}>
                        <p>PORTFOLIO</p>
                    </div>
                    <div className={portfolio.portfolio_title_lg}>
                        <p>My Project</p>
                    </div>
                </div>
                <div className={portfolio.portfolio_container_rotate}>
                    <h2>Portfolio</h2>
                </div>
            <ul className={portfolio.portfolio_wrap}>     
                {
                    portfolioList.map((item, id) => {
                        return (
                            <li className={portfolio.portfolio_list} key={id}>
                            <div className={portfolio.portfolio_list_img}>
                                <img src={`https://wunhui.github.io/newPortfolio/${item.img}`} alt={item.title} />
                                <div className={portfolio.portfolio_list_hoverbox}>
                                    <div className={portfolio.portfolio_list_hoverbox_link}>
                                        <a href={item.link}>
                                            Git site
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={portfolio.portfolio_list_text}>
                                <p>
                                    {item.title}
                                </p>
                            </div>
                        </li>
                        )
                    })
                }
            </ul>
        </div>
        </section>
    )
}

export default Portfolio