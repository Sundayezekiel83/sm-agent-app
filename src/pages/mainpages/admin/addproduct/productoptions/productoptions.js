import { useState } from 'react';
import { X } from 'react-bootstrap-icons';
import './productoptions.scss';

const ProductOptions = ({ setOptionArray, optionarray }) => {
  const [valuearray, setValueArray] = useState([]);
  const [optionname, setOptionName] = useState('');
  const [valuename, setValueName] = useState('');
  const [optionwarning, setoptionwarning] = useState(false);

  const [valarr, setvalarr] = useState([]);
  const addOption = () => {
    if (optionname === '') {
      setoptionwarning(true);
    } else {
      setoptionwarning(false);
      let opt = {
        optionname: optionname,
        values: valarr,
      };
      setOptionArray([...optionarray, opt]);
      setOptionName('');
    }
    setvalarr([]);
  };

  const valfunction = () => {
    setvalarr([...valarr, valuename]);
    setValueName('');
  };

  const onDown = e => {
    if (e.key === 'Enter') {
      valfunction();
    }
  };
  const deleteOption = item => {
    let arr = [...optionarray];
    arr.splice(
      arr.findIndex(i => i === item),
      1,
    );
    setOptionArray([...arr]);
  };

  const deleteValue = item => {
    let arr = [...valarr];
    arr.splice(
      arr.findIndex(i => i === item),
      1,
    );
    setvalarr([...arr]);
  };

  return (
    <>
      <div className="d-flex options px-3">
        <div className={`option-wrapper col-12`}>
          <div className="option-top my-2">
            <div className="d-flex">
              <span>Option name:</span>
              <div className="mx-3 optionname">{optionname}</div>
              {optionwarning && optionname === '' && (
                <span className=" text-danger">please insert option name</span>
              )}
            </div>

            <div className="option-title-input-wrapper">
              <input
                type={'text'}
                placeholder="eg: size"
                value={optionname}
                onChange={e => setOptionName(e.target.value)}
              />
            </div>
          </div>

          <div className="value-wrapper my-3">
            <span className="val-text">Value</span>
            <div className="d-flex w100 jjh">
              {valarr.map((i, k) => (
                <div key={k} className="values mx-2 my-1">
                  <X size={16} className="x-icon" onClick={() => deleteValue(i)} />
                  <span>{i}</span>
                </div>
              ))}
            </div>

            <div className="d-flex my-2 value-input-wrapper">
              <input
                type={'text'}
                placeholder="large"
                value={valuename}
                onChange={e => setValueName(e.target.value)}
                onKeyDown={onDown}
              />

              <button onClick={valfunction} className="mx-2 ">
                Add
              </button>
            </div>
          </div>
          <button className="btn new-value-btn" onClick={() => addOption()}>
            Add variation
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductOptions;
