export const searchItems=(e,setItemsList,itemsList,itemsListCopy,setSearchResults)=>{
    console.log(e.target.value)
    if(e.target.value.length==0){
        setSearchResults([]);
     return setItemsList(itemsListCopy)
    
    }
    let match=itemsList.filter((item)=>item.itemName.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchResults(match);
    const nonMatch=itemsList.filter((item)=>!item.itemName.toLowerCase().includes(e.target.value.toLowerCase()))
    match=[...match,...nonMatch];
    
    return setItemsList(match);
    }