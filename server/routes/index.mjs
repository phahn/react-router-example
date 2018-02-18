import Router from 'koa-router';
const router = new Router();

const data = [{
    "id": 1,
    "deliveryNumber": 100,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-1",
    "quantity": 1,
    "dueDate": "2018-02-28",
    "deliveryDate": "2018-02-25",
    "margin": 3000.00,
    "currency": "€"
}, {
    "id": 89,
    "deliveryNumber": 8900,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-9",
    "quantity": 89,
    "dueDate": "2018-02-24",
    "deliveryDate": "2018-02-17",
    "margin": 5500.00,
    "currency": "€"
}, {
    "id": 85,
    "deliveryNumber": 8500,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-5",
    "quantity": 85,
    "dueDate": "2018-03-02",
    "deliveryDate": "2018-02-19",
    "margin": 700.00,
    "currency": "€"
}, {
    "id": 81,
    "deliveryNumber": 8100,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-1",
    "quantity": 81,
    "dueDate": "2018-02-21",
    "deliveryDate": "2018-02-25",
    "margin": 1600.00,
    "currency": "€"
}, {
    "id": 77,
    "deliveryNumber": 7700,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-7",
    "quantity": 77,
    "dueDate": "2018-03-03",
    "deliveryDate": "2018-02-18",
    "margin": 600.00,
    "currency": "€"
}, {
    "id": 73,
    "deliveryNumber": 7300,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-3",
    "quantity": 73,
    "dueDate": "2018-02-19",
    "deliveryDate": "2018-02-21",
    "margin": 3300.00,
    "currency": "€"
}, {
    "id": 69,
    "deliveryNumber": 6900,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-9",
    "quantity": 69,
    "dueDate": "2018-02-21",
    "deliveryDate": "2018-02-19",
    "margin": 500.00,
    "currency": "€"
}, {
    "id": 65,
    "deliveryNumber": 6500,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-5",
    "quantity": 65,
    "dueDate": "2018-03-03",
    "deliveryDate": "2018-02-24",
    "margin": 3700.00,
    "currency": "€"
}, {
    "id": 61,
    "deliveryNumber": 6100,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-1",
    "quantity": 61,
    "dueDate": "2018-02-28",
    "deliveryDate": "2018-02-26",
    "margin": 7700.00,
    "currency": "€"
}, {
    "id": 57,
    "deliveryNumber": 5700,
    "part": "Processor",
    "depot": "Taiwan",
    "customer": "CUST-7",
    "quantity": 57,
    "dueDate": "2018-03-15",
    "deliveryDate": "2018-02-25",
    "margin": 2000.00,
    "currency": "€"
}]

router.get('/api', async (ctx) => {
    ctx.body = {
        content: data
    };
})

export default router;