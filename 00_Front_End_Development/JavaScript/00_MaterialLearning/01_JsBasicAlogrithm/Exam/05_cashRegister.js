function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
      { name: "PENNY", value: 0.01 },
      { name: "NICKEL", value: 0.05 },
      { name: "DIME", value: 0.1 },
      { name: "QUARTER", value: 0.25 },
      { name: "ONE", value: 1 },
      { name: "FIVE", value: 5 },
      { name: "TEN", value: 10 },
      { name: "TWENTY", value: 20 },
      { name: "ONE HUNDRED", value: 100 }
    ];
  
    let changeDue = cash - price;
    let change = [];
    let totalCid = 0;
  
    for (const unit of cid) {
      totalCid += unit[1];
    }
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const unit = currencyUnits[i];
      const available = cid[i][1];
      const unitValue = unit.value;
  
      if (changeDue >= unitValue) {
        const neededUnits = Math.floor(changeDue / unitValue);
        const unitsToTake = Math.min(neededUnits, available / unitValue);
  
        if (unitsToTake > 0) {
          const amountToTake = unitsToTake * unitValue;
          change.push([unit.name, amountToTake]);
          changeDue = parseFloat((changeDue - amountToTake).toFixed(2));
        }
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1],
  ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
  ["ONE HUNDRED", 100]]);