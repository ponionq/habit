import React, {  useEffect, useRef, useState, useCallback } from 'react';
// 리엑트 훅으로 컴포넌트 변경
// 함수로 사용 할 경우 심플헤빗에 있는 함수들이 반복이 된다
// 1.의문 : 반복이돼는거면 카운트는 다시 0이 돼어야 하지만 왜 
// 0이 안될까?
// 해설: 리엑트 훅 api useState가 카운트의 결과값을 기억 하기 때문이다.
// 동일하 값을 메모리에 저장한다.

const SimpleHabit = (props) => {
    const [count,setCount] = useState(0);
    const spanRef = useRef();
    // 한번만 만들고 메모리에 저장해서 사용하는 리엑트 훅api
    const handleIncrement = useCallback => {
        setCount(count +1);
     };
     useEffect(()=>{
         console.log(`mounted & updated! : ${count}`);
     },[])// []사용하면 처음에만 호출 한다.
        return (
            <li className="habit">
                <span ref={spanRef} className="habit-name">Reding</span>
                <span className="habit-count">{count}</span>

                <button
                 className="habit-button habit-increase"
                 onClick={handleIncrement}
                >
                <i className="fas fa-plus-square"></i>
                </button>
            </li>
            );
        }   
    

export default SimpleHabit;
