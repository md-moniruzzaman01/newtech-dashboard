import { toast } from "react-toastify"

 const DeleteProduct = (id) => {
    fetch(`http://localhost:5000/api/product/${id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${localStorage.getItem('tmtoken')}`
        },
    })
        .then(res => res.json())
        .then(data => {
            const confarm = window.confirm('Delete this item')
            if (confarm) {
                if (data?.success) {
                    toast('product has been deleted')
                }else{
                    toast('error try again')
                }
            }

        })
}
export default DeleteProduct