import React, { useState, useEffect } from 'react';
export function NewsForm(props) {
    const [q, setQ] = useState();
    const [l, setL] = useState(10);
    useEffect( ()=> {
        setQ(props.queries);
    },[props.queries]);
    const changeLimit = (e) => {
        let lValue = parseInt(e.target.value);
        setL(lValue);
    }
    const changeQuery = (e) => {
        let qValue = e.target.value;
        qValue.toLowerCase();
        setQ(qValue);
    }
    const clickHandler = () => {
        // e.defaultPrevent();
        let values={que:q,lim:l};
        if(!q && !l)
            alert('Enter Search Item and Limit')
        else if(!q)
            alert('Enter Search Item')
        else if(!l)
            alert('Enter Item Limit')
        else if(q && l)
            props.searchhandler(values);
    }
    return (
        <div className="row mb3">
            <div className="col-7">
                <input 
                    className="form-control" 
                    type="text" 
                    onChange={changeQuery} 
                    placeholder="Search..." 
                    value={q} 
                    required
                />
            </div>
            <div className="col-3">
                <input 
                    className="form-control" 
                    type="number" 
                    onChange={changeLimit} 
                    value={l} 
                    min="10" 
                    max="100" 
                    required
                />
            </div>
            <div className="col-2">
                <button 
                    className="btn btn-primary btn-md" 
                    onClick={clickHandler}
                >
                    Search
                </button>
            </div>
        </div>
    );
}