import { useQuery } from 'react-query';
import axios from 'axios';

const ClientReviews = () => {
  const { data, isLoading } = useQuery('reviews', () =>
    axios.get('/api/review').then(res => res.data)
  );

  return (
    <div className="py-10 px-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Client Reviews</h2>

      {isLoading && <p>Loading...</p>}

      {!isLoading && data?.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">No reviews yet.</p>
          <a
            href="/contact"
            className="button mt-4 inline-block"
          >
            Be My First Client!
          </a>
        </div>
      )}

      {!isLoading && data?.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {data.map((review) => (
            <div key={review.id} className="card_stylings p-4">
              <p className="text-sm mb-2">"{review.review}"</p>
              <p className="text-sm font-semibold">{review.name}</p>
              <p className="text-xs text-gray-400">{review.company}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ClientReviews;
