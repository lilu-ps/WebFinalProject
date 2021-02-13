using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public class FullBookingRepository : IBookingRepository
    {
        private readonly CurrencyContext _cc;

        public FullBookingRepository(CurrencyContext cc)
        {
            _cc = cc;
        }

        public IEnumerable<BookingModel> getAllBookings()
        {
            throw new NotImplementedException();
        }

        public BookingModel getBooking(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
