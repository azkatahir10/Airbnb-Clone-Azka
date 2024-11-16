useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/listings');
        const data = await response.json();
        setListings(data); // Update state with fetched listings
      } catch (error) {
        console.error('Error fetching listings:', error);
      }
    };
  
    fetchListings();
  }, []);
  