import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



export default function Listing  ()  {
    
    const [listing, setListing] = useState(null)
    const [loading, setLoding] = useState(false)
    const [error, setError] = useState(false)
    const params = useParams()
    useEffect(() => {
      const fetchListing = async () => {
        try {
            setLoding(true)
         const res = await fetch(`/api/listing/get/${params.listingId}`);
         const data = await res.json();
         if (data.success === false){
            setError(true);
            setLoding(false)
            return;
         }
         setListing(data);
         setLoding(false)
        } catch (error) {
          setError(true)
          setLoding(false)
          setError(false)
        }
        
      }
      fetchListing();
    }, [params.listingId])
 console.log('woking')
  return (
  <main>
        {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      
     </main>
  )
}

