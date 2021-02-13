using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CurrencyApp.Models
{
    public interface IBookingRepository
    {
        BookingModel getBooking(int Id);

        IEnumerable<BookingModel> getAllBookings();
    }
}
