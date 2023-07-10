import React, { useEffect, useState, useRef } from 'react';
import axiosInstance from '../../common/axios.instance';
import '../../App.css';
interface Product {
    id: number;
    u_id: any,
    offer_price: number,
    name: string;
    price: number;
    description: string;
    imageId?: string
}


interface ProductImageProps {
    productId: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ productId }) => {
    const [imageData, setImageData] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const { data } = await axiosInstance.get(`/products/product-image/${productId}`);
                const buffer = Uint8Array.from(data.data.data);
                const blob = new Blob([buffer], { type: 'image/jpeg' });
                const imageUrl = URL.createObjectURL(blob);
                setImageData(imageUrl);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, [productId]);

    return (
        <div>
            {imageData ? (
                <img src={imageData} alt="Product" />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const loaderRef = useRef<HTMLDivElement | null>(null);
    const LIMIT = 20;
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance(`/products/product?pageNo=${page}&limit=${LIMIT}`);
                // if (!response.) {
                //     throw new Error('Failed to fetch products');
                // }
                const data = response.data;
                setProducts((prevProducts) => [...prevProducts, ...data]);
                setLoading(false);
            } catch (error) {
                setError('An error occurred while fetching products');
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 1.0,
        };

        const observer = new IntersectionObserver((entries) => {
            console.log('calledn');
            if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        }, options);

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, []);

    if (loading && page === 1) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className='flex-wrap'>
            {products.map((product) => (
                <div className='flex-item' key={`${product.u_id}${Math.random()}`}>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.offer_price}</p>
                    <p>{product.description}</p>
                    <div>
                        <ProductImage productId={product.imageId} />
                    </div>
                </div>
            ))}
            {loading && <div>Loading more...</div>}
            <div ref={loaderRef}></div>
        </div>
    );
};

export default ProductList;
