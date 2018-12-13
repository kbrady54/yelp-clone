const apiKey =
  "DTL16P5vtDMm1ODoFAwhlaNTAhBI4zMvUdcLn9BQnYFFPo3A2YFst73CuDSKZ25AOvfRBpcgz7_N_J5zwz1Jy1_vKkPeJhvcyg6KuXJYmZ3wELMJrFhIcQ336toPXHYx";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            };
          });
        }
      });
  }
};

export default Yelp;
