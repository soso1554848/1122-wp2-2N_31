import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export const useBookings = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['bookings_31'],
    queryFn: getBooking(1),
  });
  return { data, isLoading, error };
};
