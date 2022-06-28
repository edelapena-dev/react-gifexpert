import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    /* esto se agrego en un custom hooks useFetchGifs
    const [images, setImages] = useState([]);

    const getImages= async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
       getImages();
    }, []);
    */
    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className='card-grid'>
                {
                    images.map((img)=>{
                        return <GifGridItem 
                                    key={img.id} 
                                    {...img}
                                />
                    })
                }
            </div>
        </>
    );
}
