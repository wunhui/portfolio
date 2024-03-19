import skill from '@/styles/scss/pages/skill.module.scss' 
import Context from '@/context/context';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";
const Skill = () => {
    const { t } = useTranslation();
    const { prefix } = useContext(Context);
    return (
        <section className={skill.skill}>
            <h2 className={skill.skill_text}>Skill</h2>
            <div className={skill.skill_inner}>
                <div className={skill.skill_lf}>
                    <div className={skill.skill_lf_title}>
                        <div className={skill.skill_lf_title_sm}>
                            <p>MY SKILL</p>
                        </div>
                        <div className={skill.skill_lf_title_lg}>
                            <p>Here Are Some of My Skills</p>
                        </div>
                    </div>
                    <div className={skill.skill_lf_list}>
                        <div className={skill.skill_lf_list_rotate}>
                            <h2>SKILL</h2>
                        </div>
                        <div className={skill.skill_lf_list_text_box}>
                            <div className={skill.skill_lf_list_text}>
                                <h3>1 - HTML & CSS</h3>
                            <ul>
                                <li>{t('skill1.text1')}</li> 
                                <li>{t('skill1.text2')}</li>
                                <li>{t('skill1.text3')}</li>
                                <li>{t('skill1.text4')}</li>
                            </ul>
                            </div>
                            <div className={skill.skill_lf_list_text}>
                                <h3>2 - Java(type)script & Jquery</h3>
                            <ul>
                                <li>{t('skill2.text1')}</li> 
                                <li>{t('skill2.text2')}</li>
                                <li>{t('skill2.text3')}</li>
                            </ul>
                            </div>
                        </div>
                        <div className={skill.skill_lf_list_text_box}>
                            <div className={skill.skill_lf_list_text}>
                                <h3>3 - React</h3>
                                <ul>
                                    <li>{t('skill3.text1')}</li> 
                                    <li>{t('skill3.text2')}</li>
                                    <li>{t('skill3.text3')}</li>
                                    <li>{t('skill3.text4')}</li>
                                </ul>
                            </div>
                            <div className={skill.skill_lf_list_text}>
                                <h3>4 - Git</h3>
                            <ul>
                                <li>{t('skill4.text1')}</li> 
                            </ul>
                            </div>
                        </div>
                        <div className={skill.skill_lf_list_text_box}>
                        <div className={skill.skill_lf_list_text}>
                            <h3>5 - Vue</h3>    
                            <ul>
                                <li>{t('skill5.text1')}</li> 
                                <li>{t('skill5.text2')}</li>
                                <li>{t('skill5.text3')}</li>
                            </ul>
                            </div>
                            <div className={skill.skill_lf_list_text}>
                                <h3>6 - Jira</h3>
                            <ul>
                                <li>{t('skill6.text1')}</li> 
                                <li>{t('skill6.text2')}</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill