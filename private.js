// autofill private customer data STEP 2
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
  triggerInputByClassName(
    "input-shadow form-control form-control-undefined",
    "Michael",
    0
  );
  triggerInputByClassName(
    "input-shadow form-control form-control-undefined",
    "Strohbach",
    1
  );
  triggerInputByClassName(
    "input-shadow form-control form-control-undefined",
    "dev@itctran.de",
    2
  );
  triggerInputByName("nummer", "4");
  triggerInputByName("ort", "Kloten CH");
  triggerInputByName("plz", "8302");
  triggerInputByName("defaultTelephone", "12345689");
})();
void 0;

// autofill private customer data STEP 3
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
  triggerInputByClassName(
    "input-shadow form-control form-control-undefined",
    "LEASETEQ",
    0
  );
  triggerInputByClassName("input-shadow form-control", "Strohbach", 1);
  triggerInputByName("hausnummerArbeitgeber", "4");
  triggerInputByName("PLZArbeitgeber", "30177");
  triggerInputByName("ortArbeitgeber", "8302");
  triggerInputByName("monatlichesNettoEinkommen", "6000");
})();
void 0;

// autofill private customer data STEP 4
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
  triggerInputByName("wohnMietkosten", "4");
  triggerInputByName("andereRegelAuslagen", "30177");
  triggerInputByName("Fahrwegkosten", "8302");
  triggerInputByName("bestLeasingVert", "6000");
})();
void 0;
