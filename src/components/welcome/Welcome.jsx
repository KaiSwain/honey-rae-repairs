
import "./Welcome.css"
export const Welcome = () => {
    return (
        <div className="welcome-container">
            <h1>
                {/* span is like a div but better for small components */}
                <span>Welcome to </span> 
                <span>Honey Rae Repair Shop</span>
            </h1>
            <div>Your one-stop-shop to get all your electronics fixed</div>
        </div>
    )
}