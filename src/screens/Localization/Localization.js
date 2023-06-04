import React from 'react';
import {useTranslation} from 'react-i18next';
import i18next from "i18next";

const Localization = () => {
    const {t} = useTranslation();
    const languageChangeHandler = e => {
        e.preventDefault();
        i18next.changeLanguage(e.target.value);
    }
    return (
        <div>
            <h2>{t('welcome')} {t('about')}</h2>
            <select onChange={languageChangeHandler}>
                <option>Select Language</option>
                <option value={'ar'}>Arabic</option>
                <option value={'en'}>English</option>
            </select>
        </div>
    );
};

export default Localization;