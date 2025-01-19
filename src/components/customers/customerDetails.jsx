import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getCustomerByUserId } from "../../services/customerService"


export const CustomerDetails = () => {
    const [customer, setCustomer] = useState({})
    // /customers/3
    //path="/customers/:customerId"
    const { id } = useParams() // {customerId: 3}
    useEffect(() => {
        
        getCustomerByUserId(id).then(data => {
            setCustomer(data[0])
        })
    },[id])

    return <div className="customer">
        <header className="customer-header">{customer.user?.fullName}</header>
        <div>
            <span className="customer-info">Email : </span>
            {customer.user?.email}
        </div>
        <div>
            <span className="customer-info">Address :</span>
            {customer.address}
        </div>
        <div>
            <span className="customer-info">Phone # : </span>
            {customer.phoneNumber}
        </div>
        </div>
}