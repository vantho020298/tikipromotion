export const Product = ({product, classNameButton, textButton, action}) => {
    return (
        <div className="product-wrapper">
            <div className="product">
                <div>
                    <img src={product.product.thumbnail_url}/>
                </div>
                <div className="title">{product.product.name}</div>
                <p className="price">{getPrice(product)}</p>
                <button className={classNameButton} onClick={() => action()}>{textButton}</button>
            </div>
        </div>
    )
}

const getPrice = (product) => {
    return `${formatter.format(product.product.list_price)}`;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })