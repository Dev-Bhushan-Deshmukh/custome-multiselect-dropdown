export const selectAll=(e,ArrayList,setItemsList,setSelectAllIndicator)=>{
    const tempArray=[...ArrayList];
   
if(e.target.checked){
      tempArray.forEach((item)=>item.checked=true)
      setSelectAllIndicator(true)
}
else{
     tempArray.forEach((item)=>item.checked=false)
     setSelectAllIndicator(false)
}
return setItemsList(tempArray) ;
}