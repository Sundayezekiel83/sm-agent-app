import React, {useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import {useTable, useSortBy, useGlobalFilter} from 'react-table'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import './reactable.css';
import { GlobalFilter } from './globalFilters';



const Reacttable = () => {

    const [products, setProducts] = useState([]);
         const url ="https://fakestoreapi.com/products"
    const getData = async () =>{
        const result = await axios.get(url).catch(err=>console.log(err));
        if(result){

            const products = result.data
            console.log({"products" : products});
            setProducts(products);
        }
    }
    
    //sample data
    const data = useMemo(()=>[
    
    { id: 1, item: "Origin License", description: "Extended License", price: "999,00", quantity: 1 },
    { id: 2, item: "Custom Services", description: "Instalation and Customization (cost per hour)", price: "150,00", quantity: 20 },
    { id: 3, item: "Hosting", description: "1 year subcription", price: "499,00", quantity: 1 },
    { id: 4, item: "Platinum Support", description: "1 year subcription 24/7", price: "3999,00", quantity: 1 },
], []
  
    );

    const columns = useMemo(()=>[
        {
            Headers: 'Id',
            accessor: 'id'
        },

            {
            Headers: 'Item',
            accessor: 'item'
        },
        {
            Headers: 'Description',
            accessor: 'description'
        },
         {
            Headers: 'Price',
            accessor: 'price'
        },
        {
            Headers: 'Quantity',
            accessor: 'quantity'
        },
        
   ],[]);
                    /*sample data */

                //products and Column, data function
             const productsData = useMemo(()=> [...products], [products])

            const productsColumn = useMemo(()=> products[0] ? 
  
                Object.keys(products[0]).filter((key)=> key !== "rating").map((key)=> {
                    // to display image from the backendd
                                      
                    if(key ==="image") return{
                        Headers: key,
                        accessor:key,
                        Cell: ({value})=><img src={value} alt="store" className='img-fluid'/>,
                        maxWidth:50,
                    } /*to display image from the backend */

                    return {Headers: key, accessor:key} 
                }) :[],
                    [products]
                    );
                    /* column and data function*/


            // adding extra values to the table  function
    const tableHooks = (hooks) =>{
        hooks.visibleColumns.push((columns)=>[
                ...columns, {
                    id: "Status",
                    Headers: "Status",
                    Cell: ({row})=>(
                        <button className='buton'>delivered</button>
                    )
                },
              
        ]
        
        )
    }
    /*  adding extra values to the table function*/

   const tableInstance = useTable({columns, data}, useGlobalFilter, tableHooks, useSortBy);

   const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,  preGlobalFilteredRows, setGlobalFilter, state } = tableInstance;
     
   //fetch data 
   useEffect(()=>{
        getData()
    }, []);
        /*  end of fetch data*/

    const isEven = (idx) => idx % 2 === 0;

  return (
    <>
    <GlobalFilter preGlobalFilteredRows={preGlobalFilteredRows} setGlobalFilter={setGlobalFilter} globalFilter={state.globalFilters} />
    <table  {...getTableProps()} className='table mt-3 container'>
        <thead className='bg-dark text-light'>
            {headerGroups.map((headerGroup)=>(
                <tr  {...headerGroup.getHeaderGroupProps()}>
                   {headerGroup.headers.map((column)=>
                       <th scope='col' {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render("Headers")}
                       {column.isSorted ? (column.isSortedDesc ? <ArrowDropDownIcon /> :< ArrowDropUpIcon /> ): "" }
                       </th>
                    )}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, idx)=>{

                prepareRow(row);
                return(
                    <tr {...row.getRowProps()} >
                          {row.cells.map(cell=>{
                          return <td  {...cell.getCellProps()} className={isEven(idx) ? 'bg-light' : "bg-table"}>{cell.render("Cell")}</td>
                        })}
                    </tr>
                )
            })}
         <tr>
         </tr>
         
            </tbody>


    </table>
    </>
  )
}

export default Reacttable