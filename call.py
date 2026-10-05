call_queue = []


# Add a call to the queue
def add_call(customer_id, call_time):

    call = (customer_id, call_time)

    # Add call at the rear
    call_queue.append(call)

    print("\nCall added successfully.")
    print("Customer ID:", customer_id)
    print("Call Time:", call_time, "minutes")


# Answer the first call in the queue
def answer_call():

    if len(call_queue) == 0:
        print("\nNo calls waiting.")
        return

    # Remove call from the front
    customer_id, call_time = call_queue.pop(0)

    print("\nCall answered successfully.")
    print("Customer ID:", customer_id)
    print("Call Time:", call_time, "minutes")


# View all calls in the queue
def view_queue():

    if len(call_queue) == 0:
        print("\nQueue is empty.")
        return

    print("\nCurrent Call Queue:")

    for customer_id, call_time in call_queue:
        print(
            "Customer ID:", customer_id,
            "| Call Time:", call_time, "minutes"
        )


# Check whether queue is empty
def is_queue_empty():

    if len(call_queue) == 0:
        print("\nQueue is empty.")
    else:
        print("\nQueue is not empty.")


# Main Program
while True:

    print("\n========== CALL CENTER ==========")
    print("1. Add Call")
    print("2. Answer Call")
    print("3. View Queue")
    print("4. Check Queue Empty")
    print("5. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":

        customer_id = int(input("Enter Customer ID: "))
        call_time = float(input("Enter Call Time (in minutes): "))

        add_call(customer_id, call_time)

    elif choice == "2":

        answer_call()

    elif choice == "3":

        view_queue()

    elif choice == "4":

        is_queue_empty()

    elif choice == "5":

        print("\nExiting Call Center Simulation...")
        break

    else:

        print("\nInvalid choice. Please try again.")