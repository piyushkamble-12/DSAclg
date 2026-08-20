n =int( input("enter the number of customers: "))
customer=[]

for i in range(n):
    cust_id = int(input("enter customer ID: "))
    customer.append(cust_id)
print("Customer IDs:", customer)

search_id = int(input("enter the customer ID to search: "))
if search_id in customer:
    print("Customer ID found:", search_id)
    
    position = customer.index(search_id)
    print("Position:", position)
else:
    print("Customer ID not found:", search_id)

    