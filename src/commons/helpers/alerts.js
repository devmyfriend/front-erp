
import Swal from "sweetalert2";

export const alert = ( response )=>{

    const  { status, error, data, errors } = response
    
    if(errors){
        Swal.fire({
            title: status === 200 ? 'Ok' : 'Error',
            text: status === 200 ? data.message : error ? errors[0]: 'Error' ,
            icon: status === 200 ? 'success': 'error'
        })    
    }else{
        Swal.fire({
            title: status === 200 ? 'Ok' : 'Error',
            text: status === 200 ? data.message : error ,
            icon: status === 200 ? 'success': 'error'
        })

    }


}