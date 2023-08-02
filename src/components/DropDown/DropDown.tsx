import styles from "./DropDown.module.css";
import { useState } from "react";


interface DropdownProps {
    options: string[];
    value: string;
    onChange: (selectedValue: string) => void;
  }
  
  function DropDown({ options, value, onChange }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleItemClick = (selectedValue: string) => {
      onChange(selectedValue);
      setIsOpen(false);
    };

    return (
        <div className={styles['dropDown']} onClick={() => setIsOpen(!isOpen)}>
          <div className={styles['dropDownBtn']}>{value || 'Choose One'}<div className={styles["carret"]}></div></div>
          {isOpen && (
            <div className={styles['dropDownContent']}>
              {options.map((option) => (
                <div
                  className={styles['dropdownItem']}
                  key={option}
                  onClick={() => handleItemClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    export default DropDown;