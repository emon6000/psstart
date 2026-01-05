const defaultsettings ={
    theme: "light",
    volume: 50,
    brightness: 70,
    notifications: true,
};
const userconfigoverride = {
    volume: 80,
    notifications: false,
};
const mergeconfigs = (defaults,overrides)=>({
    ...defaults,
    ...overrides,
});
console.log("Merged Config:", mergeconfigs(defaultsettings, userconfigoverride));