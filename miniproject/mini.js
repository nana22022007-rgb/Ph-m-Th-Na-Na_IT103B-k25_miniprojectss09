let orders = ["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues = [1500, 2800, 1200, -500, 3200];


const orderReports = orders.map((order, index) => {
  return `${order} mang về ${revenues[index]} USD`;
});

console.log("=== Báo cáo đơn hàng ===");
console.log(orderReports);

const total = revenues.filter(revenue => revenue > 0)
const total = revenues.reduce(revenue

console.log("=== Tổng doanh thu hợp lệ ===");
console.log(total);
