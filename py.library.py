from collections import Counter

n = int(input("Enter the number of library members: "))

borrow = []


for i in range(n):
    count = int(input(f"Enter books borrowed by member {i + 1}: "))
    borrow.append(count)


average = sum(borrow) / n
print(average)

maximum = max(borrow)
minimum = min(borrow)
print(maximum)
print(minimum)

zero_borrow = borrow.count(0)
print(zero_borrow)

mode=borrow[0]
max_count=0
for i in range(n):
    count=0
    for j in range(n):
        if borrow[i]==borrow[j]:
            count+=1

            if count > max_count:
                max_count = count
                mode=borrow[i]

                print(mode)




    