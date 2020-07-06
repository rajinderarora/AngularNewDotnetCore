using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using my_app.Models;

namespace my_app.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : Controller
    {
        [HttpGet]
        public ActionResult<List<Customer>> Get()
        {
            var customers = new List<Customer>
            {
                new Customer
                {
                    Id = 1,
                    Name = "Customer 1",
                    Orders = new List<Order>
                    {
                        new Order
                        {
                            Id = 1,
                            OrderNumber = 1000,
                            Description = "Order 1000"
                        },
                        new Order
                        {
                            Id = 2,
                            OrderNumber = 1001,
                            Description = "Order 1001"
                        }
                    }
                },
                new Customer
                {
                    Id = 2,
                    Name = "Customer 2",
                    Orders = new List<Order>
                    {
                        new Order
                        {
                            Id = 1,
                            OrderNumber = 2000,
                            Description = "Order 2000"
                        },
                        new Order
                        {
                            Id = 2,
                            OrderNumber = 2000,
                            Description = "Order 2001"
                        }
                    }
                }
            };

            return Ok(customers);
        }
    }
}