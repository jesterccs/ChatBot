import React, { useState } from 'react';
import '../styles/languageSelector.css';

interface LanguageSelectorProps {
    languageOptions: string[];
    defaultLanguage?: string;
    onLanguageChange?: (selectedLanguage: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = (props) => {
    const { languageOptions, defaultLanguage, onLanguageChange } = props;
    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage || '');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedLanguage = event.target.value;
        setSelectedLanguage(selectedLanguage);
        if (onLanguageChange) {
            onLanguageChange(selectedLanguage);
        }
    };

    return (
        <div className="language-selector-container">
            <label className="language-selector-label">Select a Language</label>
            <div className="language-selector-options">
                {languageOptions.map((language, index) => (
                    <div key={index} className="language-selector-option">
                        <input
                            type="radio"
                            id={`language-option-${index}`}
                            name="language"
                            value={language}
                            checked={selectedLanguage === language}
                            onChange={handleLanguageChange} // Updated here
                        />
                        <label htmlFor={`language-option-${index}`}>{language}</label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelector;
