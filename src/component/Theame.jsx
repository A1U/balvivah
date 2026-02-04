import { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaPalette, FaCircle, FaMoon } from 'react-icons/fa';

function ThemeDropdown() {
  const themes = {
    default: {
      name: 'Blue',
      primary: '#1565C0',
      bg: '#E3F2FD',
      text: '#1565C0',
      cardBg: '#ffffff'
    },
    green: {
      name: 'Green',
      primary: '#2E7D32',
      bg: '#E8F5E9',
      text: '#2E7D32',
      cardBg: '#fffffof'
    },
    purple: {
      name: 'Purple',
      primary: '#6A1B9A',
      bg: '#F3E5F5',
      text: '#6A1B9A',
      cardBg: '#ffffff'
    },
    red: {
      name: 'Red',
      primary: '#D32F2F',
      bg: '#FFEBEE',
      text: '#D32F2F',
      cardBg: '#ffffff'
    },
    orange: {
      name: 'Orange',
      primary: '#F57C00',
      bg: '#FFF3E0',
      text: '#F57C00',
      cardBg: '#ffffff'
    },
    dark: {
      name: 'Dark',
      primary: '#212529',
      bg: '#212529',
      text: '#ffffff',
      cardBg: '#2c3034'
    }
  };

  const [currentTheme, setCurrentTheme] = useState('red');

  const applyTheme = (themeName) => {
    // Check if theme exists, otherwise use red
    const theme = themes[themeName] || themes.red;
    
    // Apply to root element for CSS variables
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--bg-color', theme.bg);
    document.documentElement.style.setProperty('--text-color', theme.text);
    document.documentElement.style.setProperty('--card-bg', theme.cardBg);
    
    // Apply directly to body
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.text;
    
    // Apply to all headings
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      heading.style.color = theme.primary;
    });

    // Apply to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.backgroundColor = theme.cardBg;
      card.style.color = theme.text;
    });

    setCurrentTheme(themeName);
    localStorage.setItem('theme', themeName);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    // Only apply saved theme if it exists in our themes object
    const themeToApply = savedTheme && themes[savedTheme] ? savedTheme : 'red';
    applyTheme(themeToApply);
  }, []); // Empty dependency array is fine here

  return (
    <Dropdown>
      <Dropdown.Toggle 
        size="sm" 
        variant="outline-light" 
        style={{ 
          padding: '0.2rem 0.6rem', 
          fontSize: '0.75rem' 
        }}
      >
        <FaPalette />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Object.entries(themes).map(([key, theme]) => (
          <Dropdown.Item 
            key={key}
            onClick={() => applyTheme(key)}
            active={currentTheme === key}
          >
            {key === 'dark' ? (
              <FaMoon className="me-2" />
            ) : (
              <FaCircle color={theme.primary} className="me-2" />
            )}
            {theme.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ThemeDropdown;