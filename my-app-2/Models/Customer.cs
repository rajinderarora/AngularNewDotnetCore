using System.Collections.Generic;

namespace my_app.Models
{
    public class Customer
    {
        public Customer()
        {
            Orders = new List<Order>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public List<Order> Orders { get; set; }
    }
}