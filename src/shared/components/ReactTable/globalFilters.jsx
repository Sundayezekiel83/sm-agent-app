import React, {useState} from 'react';
import { useAsyncDebounce } from "react-table";
import TextField from '@mui/material/TextField';



export function GlobalFilter({
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter
}){
        const count = preGlobalFilteredRows.length;
        const [value, setValue] = useState(globalFilter);
        const onChange = useAsyncDebounce((value)=>{
            setGlobalFilter(value || undefined);
        }, 300);
        return (
            <div>
                <TextField className='mt-2'
                value={value || ""} onChange={(e)=>{
                    setValue(e.target.value);
                    onChange(e.target.value);
                    
                }}
                placeholder= {`${count} records to search through`}
               label="Search Table"
             />
            
            </div>
        )
}