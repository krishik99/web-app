import React, { useRef } from 'react'
import toastrStyle from './toastr.module.css';
const Toastr = ({type,message,toasterClosed}) => {
    const toastr_ref = useRef();
    if( type=== 'login'){
        setTimeout(()=>{
            toasterClosed('close');
        },1000)
    }
const closeToastr = (args)=> {
    toastr_ref.current.style.display='none';
    console.log(toastr_ref+' 1');
    toasterClosed(args);
}
  return (
    <div ref={toastr_ref} style={{display:'flex',zIndex:'999',background: '#0e0c0c70',alignItems:'center',justifyContent:'center',position:'absolute',top:'0',left:'0',width:'100%',height:'100%'}}>
        <div className={toastrStyle.toastr}>
            <div className={toastrStyle.toastr_header}>
            Message
            </div>
            <div className={toastrStyle.toastr_content}>
            {message}
            </div>
            <div className={toastrStyle.toastr_footer}>
            {type !== 'login' && <button onClick={()=>closeToastr(true)}>Okay</button>}
            <button onClick={()=>closeToastr('close')}>Close</button>
            </div>
        </div>
    </div>
  )
}

export default Toastr