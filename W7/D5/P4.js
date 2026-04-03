// Basics of RBAC

const routePermissions = {
    "/admin" : ["admin"],
    "/reports" : ["admin","manager"],
    "/profile" : ["admin","manager","user"]
};

function canAccess(route, role) {
    const allowedRoles = routePermissions[route] || [];
    return allowedRoles.includes(role);
}
console.log("User acces to /admin: ", canAccess("/admin","user"));
console.log("Admin acces to /admin: ", canAccess("/admin","admin"));
console.log("Manager acces to /reports: ", canAccess("/reports","manager"));
console.log("User acces to /profile: ", canAccess("/profile","user"));