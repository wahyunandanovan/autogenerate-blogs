import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { palette } from '../utils/palette';

interface PropsInterface {
  getNext: () => void;
  getPrev: () => void;
  disabledNext?: boolean;
  disabledPrev?: boolean;
}

function Pagination({ getPrev, getNext, disabledNext, disabledPrev }: PropsInterface) {
  const btnPrevStyle = {
    borderWidth: 0,
    color: disabledPrev ? '#ccc' : palette.primary,
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#fff',
    boxShadow: '3px 3px 10px 0px #bebebe38, -20px -20px 60px #ffffff',
  };

  const btnNextStyle = {
    borderWidth: 0,
    color: disabledNext ? '#ccc' : palette.primary,
    padding: 4,
    borderRadius: 5,
    backgroundColor: '#fff',
    boxShadow: '3px 3px 10px 0px #bebebe38, -20px -20px 60px #ffffff',
  };

  return (
    <div style={{ display: 'flex', gap: 16, height: 'fit-content' }}>
      <button onClick={getPrev} disabled={disabledPrev} style={btnPrevStyle}>
        <AiOutlineLeft size={20} />
      </button>
      <button onClick={getNext} disabled={disabledNext} style={btnNextStyle}>
        <AiOutlineRight size={20} />
      </button>
    </div>
  );
}

export default Pagination;
