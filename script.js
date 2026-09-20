// ==============================
// STACK
// ==============================

let stack = [];
let stackCapacity = 5;


// ==============================
// QUEUE
// ==============================

let queue = [];
let queueCapacity = 5;


// ==============================
// STACK FUNCTIONS
// ==============================

function pushStack() {
  const input = document.getElementById("stackInput");
  const value = input.value.trim();

  // Empty input
  if (value === "") {
    showStackStatus("Please enter an element first.", "warning");
    input.focus();
    return;
  }

  // STACK OVERFLOW
  if (stack.length >= stackCapacity) {
    showStackStatus(
      "⚠ Stack Overflow! The stack is full.",
      "error"
    );

    input.classList.add("shake");

    setTimeout(() => {
      input.classList.remove("shake");
    }, 400);

    return;
  }

  // PUSH
  stack.push(value);

  input.value = "";

  showStackStatus(
    `✓ ${value} pushed onto the stack.`,
    "success"
  );

  renderStack();

  input.focus();
}


function popStack() {

  // STACK UNDERFLOW
  if (stack.length === 0) {
    showStackStatus(
      "⚠ Stack Underflow! The stack is empty.",
      "error"
    );

    return;
  }

  const removed = stack.pop();

  showStackStatus(
    `✓ ${removed} popped from the stack.`,
    "success"
  );

  renderStack();
}


function renderStack() {

  const container =
    document.getElementById("stackContainer");

  container.innerHTML = "";

  // Empty slots first
  for (let i = 0; i < stackCapacity - stack.length; i++) {

    const slot = document.createElement("div");

    slot.className = "stack-slot";

    container.appendChild(slot);
  }

  // Stack elements
  for (let i = 0; i < stack.length; i++) {

    const element = document.createElement("div");

    element.className = "stack-element";

    element.textContent = stack[i];

    container.appendChild(element);
  }

  document.getElementById("stackSize").textContent =
    `${stack.length} / ${stackCapacity}`;

  document.getElementById("stackTop").textContent =
    stack.length > 0
      ? stack[stack.length - 1]
      : "-";

  document.getElementById("stackNext").textContent =
    stack.length === stackCapacity
      ? "Pop"
      : "Push";
}


function showStackStatus(message, type) {

  const status =
    document.getElementById("stackStatus");

  status.textContent = message;

  status.className = "status";

  if (type === "error") {
    status.classList.add("error");
  }

  if (type === "warning") {
    status.classList.add("warning");
  }
}


function changeStackCapacity() {

  const input =
    document.getElementById("stackCapacity");

  let newCapacity = parseInt(input.value);

  if (isNaN(newCapacity) || newCapacity < 1) {
    newCapacity = 1;
    input.value = 1;
  }

  if (newCapacity > 20) {
    newCapacity = 20;
    input.value = 20;
  }

  // If reducing capacity below current size,
  // remove elements from the top.
  if (newCapacity < stack.length) {

    stack = stack.slice(0, newCapacity);

    showStackStatus(
      `Capacity changed. Extra elements were removed.`,
      "warning"
    );
  }

  stackCapacity = newCapacity;

  renderStack();
}


// ==============================
// QUEUE FUNCTIONS
// ==============================

function enqueue() {

  const input =
    document.getElementById("queueInput");

  const value = input.value.trim();

  // Empty input
  if (value === "") {

    showQueueStatus(
      "Please enter an element first.",
      "warning"
    );

    input.focus();

    return;
  }

  // QUEUE OVERFLOW
  if (queue.length >= queueCapacity) {

    showQueueStatus(
      "⚠ Queue Overflow! The queue is full.",
      "error"
    );

    input.classList.add("shake");

    setTimeout(() => {
      input.classList.remove("shake");
    }, 400);

    return;
  }

  // ENQUEUE
  queue.push(value);

  input.value = "";

  showQueueStatus(
    `✓ ${value} added to the rear of the queue.`,
    "success"
  );

  renderQueue();

  input.focus();
}


function dequeue() {

  // QUEUE UNDERFLOW
  if (queue.length === 0) {

    showQueueStatus(
      "⚠ Queue Underflow! The queue is empty.",
      "error"
    );

    return;
  }

  const removed = queue.shift();

  showQueueStatus(
    `✓ ${removed} removed from the front of the queue.`,
    "success"
  );

  renderQueue();
}


function renderQueue() {

  const container =
    document.getElementById("queueContainer");

  container.innerHTML = "";

  // Queue elements
  for (let i = 0; i < queue.length; i++) {

    const element =
      document.createElement("div");

    element.className = "queue-element";

    element.textContent = queue[i];

    container.appendChild(element);
  }

  // Empty slots
  for (
    let i = 0;
    i < queueCapacity - queue.length;
    i++
  ) {

    const slot =
      document.createElement("div");

    slot.className = "queue-slot";

    container.appendChild(slot);
  }

  document.getElementById("queueSize").textContent =
    `${queue.length} / ${queueCapacity}`;

  document.getElementById("queueNext").textContent =
    queue.length === queueCapacity
      ? "Dequeue"
      : "Enqueue";
}


function showQueueStatus(message, type) {

  const status =
    document.getElementById("queueStatus");

  status.textContent = message;

  status.className = "status";

  if (type === "error") {
    status.classList.add("error");
  }

  if (type === "warning") {
    status.classList.add("warning");
  }
}


function changeQueueCapacity() {

  const input =
    document.getElementById("queueCapacity");

  let newCapacity = parseInt(input.value);

  if (isNaN(newCapacity) || newCapacity < 1) {
    newCapacity = 1;
    input.value = 1;
  }

  if (newCapacity > 20) {
    newCapacity = 20;
    input.value = 20;
  }

  // Reduce queue if necessary
  if (newCapacity < queue.length) {

    queue = queue.slice(0, newCapacity);

    showQueueStatus(
      "Capacity changed. Extra elements were removed.",
      "warning"
    );
  }

  queueCapacity = newCapacity;

  renderQueue();
}


// ==============================
// RESET
// ==============================

function resetStack() {
  stack = [];

  renderStack();

  showStackStatus(
    "Stack has been reset.",
    "success"
  );
}


function resetQueue() {
  queue = [];

  renderQueue();

  showQueueStatus(
    "Queue has been reset.",
    "success"
  );
}


function resetAll() {

  stack = [];
  queue = [];

  stackCapacity = 5;
  queueCapacity = 5;

  document.getElementById("stackCapacity").value = 5;
  document.getElementById("queueCapacity").value = 5;

  document.getElementById("stackInput").value = "";
  document.getElementById("queueInput").value = "";

  renderStack();
  renderQueue();

  showStackStatus(
    "Stack is ready.",
    "success"
  );

  showQueueStatus(
    "Queue is ready.",
    "success"
  );
}


// ==============================
// KEYBOARD SUPPORT
// ==============================

document
  .getElementById("stackInput")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      pushStack();
    }
  });


document
  .getElementById("queueInput")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      enqueue();
    }
  });


// ==============================
// INITIAL RENDER
// ==============================

renderStack();
renderQueue();