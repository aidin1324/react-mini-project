export function ProductCard(props) {
    return (
        <div className="product-card">
            <img src={props.data.img} alt="Product" />
            <h2>{props.data.name}</h2>
            <p>{props.data.price}</p>
        </div>
    );
}
