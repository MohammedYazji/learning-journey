def count_down(num):
    # Base Case
    if num <= 0:
        print("All Done!")
        return
    print(num)
    num -= 1 
    count_down(num)

count_down(10)