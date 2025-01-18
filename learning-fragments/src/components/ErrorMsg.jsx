
const ErrorMsg=({items})=>{
    const foodItem=['roti','banana','whey','preWork','postWork','bcaa','eggs','paneer','sahipaneer'];

    return(
        <>{items.length===0 && <h3>i'm still hungry</h3>}</>
    )
}
export default ErrorMsg;