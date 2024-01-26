import React from 'react';
import { useState, useCallback } from 'react';

const Question2 = ['교육 기관 방문', '우리집으로 선생님 방문'];
const Question3 = [''];

const Checkbox = () => {
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

      console.log('Question2:', Question2);
    },
    [Question2],
  );
  return (
    <div>
      <div className="checkbox-container">
        {Question2.map((item, idx) => (
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

export default Checkbox;
