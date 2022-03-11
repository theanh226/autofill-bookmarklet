// autofill business customer data STEP 2
javascript: (function () {
  function triggerInputByName(enteredName, enteredValue) {
    const input = document.getElementsByName(enteredName)[0];
    const lastValue = input.value;
    input.value = enteredValue;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  }
  function triggerInputByClassName(enteredName, enteredValue, postion) {
    const input = document.getElementsByClassName(enteredName)[postion];
    const lastValue = input.value;
    input.value = enteredValue;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  }
  triggerInputByClassName("input-shadow form-control", "LeaseTeq AG", 0);
  triggerInputByClassName("input-shadow form-control", "Talstrasse", 1);
  triggerInputByName("companyUID", "CHE-167.950.12512");
  triggerInputByName("companyEmployees", "5");
  triggerInputByName("companyNo", "37");
  triggerInputByName("companyPlace", "Pfäffikon SZ");
  triggerInputByName("companyZIP", "8808");
})();
void 0;

// autofill business customer data STEP 3
javascript: (function () {
  function triggerInputByName(enteredName, enteredValue) {
    const input = document.getElementsByName(enteredName)[0];
    const lastValue = input.value;
    input.value = enteredValue;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  }
  function triggerInputByClassName(enteredName, enteredValue, postion) {
    const input = document.getElementsByClassName(enteredName)[postion];
    const lastValue = input.value;
    input.value = enteredValue;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  }
  triggerInputByClassName("input-shadow form-control", "Talstrasse", 0);
  triggerInputByClassName(
    "input-shadow form-control form-control-undefined",
    "dev@itctran.de",
    0
  );
  triggerInputByName("firstName", "test");
  triggerInputByName("lastName", "tester");
  triggerInputByName("number", "4");
  triggerInputByName("zip", "8302");
  triggerInputByName("role", "dev");
  triggerInputByName("place", "Kloten");
  triggerInputByName("business", "0123123123");
})();
void 0;

// autofill business customer data STEP 4
javascript: (function () {
  function triggerInputByName(enteredName, enteredValue) {
    const input = document.getElementsByName(enteredName)[0];
    const lastValue = input.value;
    input.value = enteredValue;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) {
      tracker.setValue(lastValue);
    }
    input.dispatchEvent(event);
  }

  triggerInputByName("pastTurnover1", "1000000");
  triggerInputByName("pastTurnover2", "80000");
  triggerInputByName("pastResult1", "80000");
  triggerInputByName("pastResult2", "60000");
  triggerInputByName("pastEquity1", "50000");
  triggerInputByName("pastEquity2", "40000");
  triggerInputByName("existingContracts", "5000");
})();
void 0;
