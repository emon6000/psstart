const rawuser = {
    id:999,
    info: {
        firstname:"John",
        // lastname:"Doe",
    },
};

const processuser= (varx)=>{
    const {
        id : userid,
        info:{
            firstname,
            lastname = "doe",
        },
        settings:{ theme = "light" } = {},
    }=varx;
    return 'User ' + userid + ': ' + firstname + ' ' + lastname + ', Theme: ' + theme;  
}

console.log("Id handlers:", processuser(rawuser));