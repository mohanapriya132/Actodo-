function TodoItem(props)
{
    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleDelete(deletedid){
        var temparr= activityArr.filter(function(item){
            if(item.id === deletedid)
            {
                return false
            }
            else{
                return true
            }
        })
        setactivityArr(temparr)
    }
    return(
        <div className="flex justify-between">
        <p>{props.index+1}.{props.activity}</p>
        <button className="text-red-400" onClick={()=>handleDelete(props.id)} >Delete</button>
        </div>
    )
}
export default TodoItem