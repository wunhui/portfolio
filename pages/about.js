import about from '@/styles/scss/pages/about.module.scss' 
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
const About = () => {
    // 언어 변경
    const { t } = useTranslation();

    const content = "I'm\nWeb Publisher";
    const [typingText, setTypingText] = useState('')
    const [count, setCount] = useState(0)
    useEffect(() => {
        const typingInterval = setInterval(() => {
          setTypingText((prevTitleValue) => {
            let result = prevTitleValue ? prevTitleValue + content[count] : content[0];
              setCount(count + 1)
              if(count >= content.length) {
                setCount(0)
                setTypingText('')
              }
              return result
    
          });
        }, 500);
        return () => {
          clearInterval(typingInterval);
        };
    });
    return (
        <section className={about.about}>
            <h2 className={about.about_text}>About</h2>
            <div className={about.about_inner}>
                <div className={about.about_lf}>
                    <img className={about.about_lf_image} src="https://wunhui.github.io/newPortfolio/images/content/my.jpg" />
                </div>
                <div className={about.about_rt}>
                    <div className={about.about_rt_typingbox}>
                        <pre className={about.about_rt_typingbox_typeing}>{typingText}<span className="blink">|</span></pre>
                    </div>
                    <img className={about.about_rt_image} src="https://wunhui.github.io/newPortfolio/images/content/my.jpg" />
                    <div className={about.about_rt_textbox}>
                        <div className={about.about_rt_textbox_rotate}>
                            <h2>ABOUT</h2>
                        </div>
                        <div className={about.about_rt_textbox_text}>
                            <p dangerouslySetInnerHTML={{ __html: t(`about.text`) }} />
                            <div className={about.about_rt_textbox_btn}>
                                <a>Git site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About