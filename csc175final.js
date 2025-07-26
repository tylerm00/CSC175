let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if (crewStatus) {
    console.log("Crew Ready");
} else {
    console.log("Crew Not Ready");
}

if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
    console.log("Success! Computer online.");
} else {
    console.log("ALERT: Computer offline!");
}

if (shuttleSpeed > 17500) {
    console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("ALERT: Cannot maintain orbit!");
} else {
    console.log("Stable speed.");
}

// Do these code blocks produce the same result? Answer Yes or No.
// Yes they produce the same results
if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    console.log("all systems go");
} else {
    console.log("WARNING. Not ready");
}
if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
    console.log("WARNING. Not ready");
} else {
    console.log("all systems go");
}

function engineCheck(fuel, temp, light, override) {
    let fuelLevel;
    let engineTemp;
    let commandOverride = override;
    if (commandOverride == null) {
        if (fuel < 1000 || temp > 3500 || light == "red blinking") {
            console.log("ENGINE FAILURE IMMINENT!");
            return;
        }
        if (fuel > 20000) {
            fuelLevel = "Full tank.";
        } else if (fuel > 10000 && fuel < 20000) {
            fuelLevel = "Fuel level above 50%.";
        } else if (fuel > 5000 && fuel < 10000) {
            fuelLevel = "Fuel level above 25%.";
        } else {
            fuelLevel = "Check fuel level.";
        }

        if (temp <= 2500) {
            engineTemp = "Engines good."
        } else if (temp > 2500 && temp < 3500) {
            engineTemp = "Engines running hot.";
        }
        console.log(fuelLevel + " " + engineTemp);
    } else {
        if (fuel > 20000 && light != "red blinking" || commandOverride) {
            console.log("Cleared to launch!");
            return;
        } else {
            console.log("Launch scrubbed!");
            return
        }
    }
};
// this technically does not return exactly what the exercise requested for each case because it doesn't
// make sense to me to return "Check fuel level" when it's above 50% just because the engine is running hot (test 5)
// or to say that the engine is running hot when it isn't just because the fuel is low. (test 4)

engineCheck(19999, 1, "red blinking");
engineCheck(21000, 1200, 0);
engineCheck(900, 4, 0);
engineCheck(5000, 1200, 0); //test 4
engineCheck(12000, 2600, 0);//test 5
engineCheck(18000, 2500, 0);

engineCheck(19999, 1, "red blinking", true); //launches because override
engineCheck(21000, 1200, 0, false); //launches normally
engineCheck(900, 4, 0, false); // wont launch
engineCheck(5000, 1200, 0, false); // wont launch
engineCheck(12000, 2600, 0, true); // launches because override
engineCheck(18000, 2500, 0, true); // launches because override
