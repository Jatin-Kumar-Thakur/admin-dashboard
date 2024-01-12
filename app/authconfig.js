export const authConfig={
    providers:[],
    pages:{
        signIn:'/login',
    },
    callbacks:{
        authorized({auth,request}){
            const isLoggedIn=auth?.user;
            const isDashboard=request.nextUrl.pathname.startsWith('/dashboard');
            if(isDashboard){
                if(isLoggedIn) return true;
                return false;
            }
            else if(isLoggedIn){
                return Response.redirect(new URL("/dashboard",request.nextUrl));
            }
            else{
                return true;
            }
        }
    }
}