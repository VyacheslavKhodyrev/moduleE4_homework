function Appliance(applianceOfType, connectionTrue) {
    this.groupName = "Electrical appliance";
    this.connectionType = "Power supply, electric wire";
    this.name = name;
    this.applianceOfType = applianceOfType; // "stationary type", "portable type"
    this.connectionTrue = connectionTrue; // "on", "off"  
  }
  
Appliance.prototype.getCapacity = function(capacity) {
    console.log(`Capacity is ${capacity} watt`)
  }  
  
function HeatingAppliance(name, heatingElement) {
    this.name = name;
    this.heatingElement = heatingElement; // "opened heating element", "closed heating element"
  }
HeatingAppliance.prototype = new Appliance()
  
const iron = new Appliance("portable type", "on", HeatingAppliance("iron", "opened heating element"))
const waterHeater = new Appliance("stationary type", "off", HeatingAppliance("water heater", "closed heating element"))
  
function MicroclimateAppliance(name, actionType) {
    this.name = name,
    this.actionType = actionType // "air cooling", "air humidification"
  }
MicroclimateAppliance.prototype = new Appliance()
  
const humidifier = new Appliance("portable type", "on", MicroclimateAppliance("humidifier", "air humidification"))
const conditioner = new Appliance("stationary type", "off", MicroclimateAppliance("air conditioner", "air cooling"))
  
  // console.log(iron)
  // iron.getCapacity(1000)
  // console.log(waterHeater)
  // waterHeater.getCapacity(2000)
  // console.log(humidifier)
  // humidifier.getCapacity(500)
  // console.log(conditioner)
  // conditioner.getCapacity(2000)
  