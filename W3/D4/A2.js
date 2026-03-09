const employee=[
    {name:"Asha",basePay:-1000,bonus:2000,taxRate:0.1},
    {name:"shakshi",basePay:12000,bonus:-300,taxRate:0.1},
    {name:"Raghu",basePay:40000,bonus:3000,taxRate:0.2},
    {name:"Pavani",basePay:10000,bonus:1000,taxRate:0.25},
    {name:"pinki",basePay:8000,bonus:-300,taxRate:4}
];
const validRecords = employee.filter(emp =>emp.basePay > 0 && emp.bonus >= 0 && emp.taxRate >= 0 && emp.taxRate<= 1);

const netPayReport = validRecords.map(emp => {
  const gross = emp.basePay + emp.bonus;
  const netPay = gross - (gross * emp.taxRate);
  return { name: emp.name, netPay: netPay };
});

const totalNetPayout = netPayReport.reduce((sum,emp) => sum + emp.netPay, 0);

console.log("ValidRecords:",validRecords);
console.log("NetPayReport:",netPayReport);
console.log("TotalNetPayout:",totalNetPayout);
