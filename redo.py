undo_stack = []
redo_stack = []

# Initial document
document = ""


# Make a new change
def make_change(new_text):
    global document

    # Save current state in Undo Stack
    undo_stack.append(document)

    # Apply the new change
    document = new_text

    # New change invalidates Redo history
    redo_stack.clear()

    print("\nChange applied successfully.")


# Undo the most recent change
def undo():
    global document

    if not undo_stack:
        print("\nNothing to Undo.")
        return

    # Save current state in Redo Stack
    redo_stack.append(document)

    # Restore previous state
    document = undo_stack.pop()

    print("\nUndo successful.")


# Redo the most recently undone change
def redo():
    global document

    if not redo_stack:
        print("\nNothing to Redo.")
        return

    # Save current state in Undo Stack
    undo_stack.append(document)

    # Restore undone state
    document = redo_stack.pop()

    print("\nRedo successful.")


# Display current document state
def display_document():
    print("\nCurrent Document State:")
    print(document)


# Main program
while True:

    print("\n========== TEXT EDITOR ==========")
    print("1. Make a Change")
    print("2. Undo")
    print("3. Redo")
    print("4. Display Document State")
    print("5. Exit")

    choice = input("Enter your choice: ")

    if choice == "1":
        new_text = input("Enter new document text: ")
        make_change(new_text)

    elif choice == "2":
        undo()

    elif choice == "3":
        redo()

    elif choice == "4":
        display_document()

    elif choice == "5":
        print("\nExiting the application...")
        break

    else:
        print("\nInvalid choice. Please try again.")
