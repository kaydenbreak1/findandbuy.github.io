document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { title: 'Product 1', description: 'Description for product 1', link: 'https://www.example.com/product1' },
        { title: 'Product 2', description: 'Description for product 2', link: 'https://www.example.com/product2' },
        { title: 'Product 3', description: 'Description for product 3', link: 'https://www.example.com/product3' }
    ];

    const productContainer = document.querySelector('.product-list');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        const productTitle = document.createElement('h3');
        productTitle.textContent = product.title;
        productItem.appendChild(productTitle);
        
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productItem.appendChild(productDescription);
        
        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.textContent = 'Buy Now';
        productLink.target = '_blank';
        productItem.appendChild(productLink);
        
        productContainer.appendChild(productItem);
    });
});
