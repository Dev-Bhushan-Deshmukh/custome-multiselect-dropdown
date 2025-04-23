export const handleCheck=(e,index,itemsList,setItemsList,setSelectAllIndicator)=>{

const tempArray=[...itemsList];
if(e.target.checked){
  tempArray[index].checked=true


!tempArray.some((item)=>item.checked==false) && setSelectAllIndicator(true)
return setItemsList(tempArray);
}
else{
  setSelectAllIndicator(false)
  tempArray[index].checked=false;
  return setItemsList(tempArray);
}




}