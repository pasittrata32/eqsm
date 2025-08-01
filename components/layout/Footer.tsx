import React from 'react';
import { useLocalization } from '../../context/LocalizationProvider';

export const Footer = () => {
    const { t } = useLocalization();
    return (
        <footer className="bg-[#001429] text-white text-center p-3 text-xs md:text-sm">
            <p>{t('copyright')}</p>
        </footer>
    );
};
