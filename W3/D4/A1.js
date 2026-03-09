let ticketQueue=[
    {id:"T101",priority:"HIGH",resolved:true},
    {id:"T102",priority:"LOW",resolved:true},
    {id:"T103",priority:"MEDIUM",resolved:false},
    {id:"T104",priority:"LOW",resolved:false},
    {id:"T105",priority:"HIGH",resolved:false}
];
console.log("ticketQueue:",ticketQueue);

ticketQueue.unshift({id:"T100",priority:"MEDIUM",resolved:true});

ticketQueue.push({id:"T106",priority:"MEDIUM",resolved:true},
                {id:"T107",priority:"HIGH",resolved:true});

const currentTicket = ticketQueue.shift();

const droppedTicket = ticketQueue.pop();

let  pending = ticketQueue.filter(ticket => !ticket.resolved);

let pendingIds = pending.map(tickets => tickets.id);

console.log("Current Tickets:",currentTicket);
console.log("Dropped Tickets:",droppedTicket);
console.log("Pending Tickets:",pending);
console.log("Pending Ids:",pendingIds);
