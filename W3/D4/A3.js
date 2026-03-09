const user=[
        {role:"admin",action:"READ",allowed:true},
        {role:"admin",action:"WRITE",allowed:true},
        {role:"student",action:"WRITE",allowed:true},
        {role:"guest",action:"READ",allowed:false},
        {role:"student",action:"READ",allowed:false}
];

const allowedRules = user.filter(person => person.allowed===true);

const allowedPairs = allowedRules.map(users => users.role+":"+users.action);

const summary = user.reduce((per,us) => {let role=us.role;per[role] = (per[role]||0) +1;
        return per;},{});

console.log("Allowed Rules:",allowedRules);
console.log("Allowed Pairs:",allowedPairs);
console.log("Summary:",summary);