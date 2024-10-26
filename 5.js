class Appliance {
    constructor(applianceOfType, connectionTrue, capacity) {
      this.groupName = "Electrical appliance";
      this.connectionType = "Power supply, electric wire";
      this.applianceOfType = applianceOfType; // "stationary type", "portable type"
      this.connectionTrue = connectionTrue; // "on", "off"
    }
    getCapacity = function(capacity) {
      console.log(`Capacity is ${capacity} watt`)
    }
  }
  
class HeatingAppliance extends Appliance {
    constructor(name, heatingElement, applianceOfType, connectionTrue) {
      super(applianceOfType, connectionTrue);
      this.name = name;
      this.heatingElement = heatingElement; // "opened heating element", "closed heating element"
    }  
  }
    
const iron = new HeatingAppliance("iron", "opened heating element", "stationary type","on")
  // console.log(iron)
  // iron.getCapacity(1000)
  
const waterHeater = new HeatingAppliance("water heater", "closed heating element", "stationary type", "off")
  // console.log(waterHeater)
  // waterHeater.getCapacity(2000)
  
class MicroclimateAppliance extends Appliance {
    constructor(name, actionType, applianceOfType, connectionTrue) {
      super(applianceOfType, connectionTrue);
      this.name = name;
      this.actionType = actionType; // "air cooling", "air humidification"  
    }  
  }
    
const humidifier = new MicroclimateAppliance("humidifier", "air humidification", "portable type", "on")
console.log(humidifier)
humidifier.getCapacity(500)
  
const conditioner = new MicroclimateAppliance("air conditioner", "air cooling", "stationary type", "off")
console.log(conditioner)
conditioner.getCapacity(2000)
  