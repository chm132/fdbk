import React from 'react';
import { useState, useCallback } from 'react';

const checkBoxList3 = ['남자', '여자', '상관없음'];

const Checkbox2 = () => {
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (value: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);

      return;
    }

    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));

      return;
    }

    return;
  };

  const checkHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) => {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);

    console.log(value, e.target.checked);
  };

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('Question2:', checkBoxList3);
    },
    [checkBoxList3],
  );
  return (
    <div>
      <div className="checkbox-container">
        {checkBoxList3.map((item, idx) => (
          <div className="checkbox" key={idx}>
            <input
              type="checkbox"
              id={item}
              checked={checkedList.includes(item)}
              onChange={(e) => checkHandler(e, item)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox2;
